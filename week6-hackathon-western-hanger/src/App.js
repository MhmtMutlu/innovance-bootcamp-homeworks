import React from 'react';
import './styles.css';
import Board from './components/Board/Board';
import {
  startGame,
  resetGame,
  subscribeEmittedLetters,
  subscribeSelectedWord,
} from './service/firebase';
import HiddenWord from './components/hidden-word/HiddenWord';
import Keyboard from './components/keyboard/Keyboard';
import HangMan from './components/HangMan/HangMan';

export default function App() {
  const [gameWord, setGameWord] = React.useState(null);
  const [emittedLetters, setEmittedLetters] = React.useState([]);
  const [stateOfMan, setStateOfMan] = React.useState('0');

  React.useEffect(() => {
    // Game starter
    startGame();

    subscribeEmittedLetters(setEmittedLetters);
    subscribeSelectedWord(setGameWord);
  }, []);

  React.useEffect(() => {
    let wrongAnswers = 0;

    emittedLetters.forEach((letter) => {
      if (gameWord && ![...gameWord].includes(letter)) wrongAnswers++;
    });
    const foundEveryLetter =
      gameWord &&
      [...gameWord].every((letter) => emittedLetters.includes(letter));
    if (wrongAnswers === 7) {
      setStateOfMan('7');

      setTimeout(() => {
        resetGame(setGameWord);
        setStateOfMan('0');
      }, 5000);
    } else if (wrongAnswers < 7) {
      setStateOfMan(wrongAnswers);
    }

    if (foundEveryLetter) {
      setStateOfMan('finish');

      setTimeout(() => {
        resetGame(setGameWord);
        setStateOfMan('0');
      }, 5000);
    }
  }, [emittedLetters, gameWord]);

  return (
    <div className="App">
      <h1>Western Hanger</h1>
      <Board>
        <HangMan {...{ stateOfMan }} />
        <HiddenWord {...{ gameWord, emittedLetters }} />
        <Keyboard />
      </Board>
      <span>
        <a
          target="_blank"
          href="https://github.com/kodin21/kodin-hackathon-power-rangers-western-hanger"
        >
          Github-2021
        </a>
      </span>
    </div>
  );
}
