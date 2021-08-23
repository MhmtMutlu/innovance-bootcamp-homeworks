import React from 'react';

import './HangMan.css';

const HangMan = ({ stateOfMan }) => {
  const stage = {
    0: {
      height: 0,
      width: 0,
    },
    1: {
      height: 0,
      width: 128,
    },
    2: {
      height: 0,
      width: 256,
    },
    3: {
      height: 0,
      width: 384,
    },
    4: {
      height: 128,
      width: 0,
    },
    5: {
      height: 128,
      width: 128,
    },
    6: {
      height: 128,
      width: 256,
    },
    7: {
      height: 128,
      width: 384,
    },
    finish: {
      height: 256,
      width: 0,
    },
  };

  return (
    <>
      <div
        className="hangman"
        style={{
          backgroundPosition: `-${stage[stateOfMan].width}px -${stage[stateOfMan].height}px`,
        }}
      />
      {stateOfMan === '7' && <span className="hangman__lose">Game OVER!</span>}
      {stateOfMan === 'finish' && (
        <span className="hangman__win">You WIN!</span>
      )}
    </>
  );
};

export default HangMan;
