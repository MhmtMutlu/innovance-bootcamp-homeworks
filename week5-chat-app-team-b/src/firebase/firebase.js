import firebase from "firebase";

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  projectId: process.env.REACT_API_PROJECT_ID,
  databaseURL: "https://beste-80688-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default firebase;
