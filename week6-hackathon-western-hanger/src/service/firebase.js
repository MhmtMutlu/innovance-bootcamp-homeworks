import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgejT8BjJb0tO_Xbkw8Cou6nEsb-N2vPk",
  authDomain: "western-hanger.firebaseapp.com",
  projectId: "western-hanger",
  storageBucket: "western-hanger.appspot.com",
  messagingSenderId: "44018215135",
  appId: "1:44018215135:web:c2af1447d9db2c6d12a16a",
  measurementId: "G-Y6WLDLMLGD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

const database = firebase.firestore();

const wordRef = database.collection("wordBank").doc("words");
export const selectedWordRef = database
  .collection("wordBank")
  .doc("selectedWord");
const emittedLettersRef = database.collection("wordBank").doc("emittedLetters");

export const startGame = (setSelectedWord) => {
  wordRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        // Initial run - game starter logic
        getSelectedWord().then((data) => {
          if (!data) {
            const { wordBank } = doc.data();
            const randomSelectedWord =
              wordBank[Math.floor(Math.random() * wordBank.length)];

            // Write to db
            selectedWordRef.set({ word: randomSelectedWord });
          }
        });
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

export function getSelectedWord() {
  return selectedWordRef.get().then((doc) => {
    if (doc.exists) return doc.data();
    else return null;
  });
}

export function subscribeSelectedWord(setter) {
  selectedWordRef.onSnapshot((doc) => {
    setter(doc.data().word);
  });
}

export function emitLetter(letter) {
  emittedLettersRef.update({
    letters: firebase.firestore.FieldValue.arrayUnion(letter)
  });
}

export function cleanEmittedLetters() {
  emittedLettersRef.set({ letters: [] });
}

export function subscribeEmittedLetters(setter) {
  emittedLettersRef.onSnapshot((doc) => {
    const letters = doc.data().letters;

    setter(letters || []);
  });
}

export function setDisplayedLetters() {
  // firestore -> wordBank -> words -> displayedLetters
  // set edecek

  emittedLettersRef.get().then((doc) => {
    return doc.data();
  });
}

export function getRandomWord() {
  return wordRef.get().then((doc) => {
    if (doc.exists) {
      const { wordBank } = doc.data();
      const randomSelectedWord =
        wordBank[Math.floor(Math.random() * wordBank.length)];

      return randomSelectedWord;
    }
  });
}

export function resetGame(setGameWord) {
  getRandomWord().then((word) => {
    // Clean Emitted letters DB
    cleanEmittedLetters();

    // Write new word to DB
    selectedWordRef.set({ word });

    // Set game word for client
    setGameWord(word);
  });
}
