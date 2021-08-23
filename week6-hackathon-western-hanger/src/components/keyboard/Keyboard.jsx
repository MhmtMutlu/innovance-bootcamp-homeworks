import React from "react";
import { emitLetter } from "../../service/firebase";
import "./Keyboard.css";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export default function Keyboard() {
  const handleButtonClick = (letter) => {
    console.log("Pressed : ", letter);

    // Write to database
    emitLetter(letter);
  };

  return (
    <div className="keyboard">
      {[...alphabet].map((letter) => (
        <button
          key={letter}
          className="letter"
          onClick={() => {
            handleButtonClick(letter);
          }}
        />
      ))}
    </div>
  );
}
