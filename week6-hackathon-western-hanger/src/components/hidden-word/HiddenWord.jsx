import React from "react";

import "./HiddenWord.css";

export default function HiddenWord({ gameWord, emittedLetters = [] }) {
  return (
    <div className="hidden-word">
      {gameWord &&
        [...gameWord].map((letter, index) => {
          if (letter === " ")
            return <span key={index} className="hidden-space" />;
          else
            return (
              <span key={index} className="hidden-letter">
                {emittedLetters.includes(letter) && letter}
              </span>
            );
        })}
    </div>
  );
}
