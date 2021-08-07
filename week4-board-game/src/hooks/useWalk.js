import { useState } from 'react'
import useKeyPress from './useKeyPress';
import useLocalStorage from './useLocalStorage';

function useWalk(maxSteps) {
  const [positionLocalStr, setPositionLocalStr] = useLocalStorage("position", { x: 0, y: 0 })
  const [position, setPosition] = useState(positionLocalStr);
  const [direction, setDirection] = useState(0);
  const [step, setStep] = useState(0);
  const [fast, setFast] = useState(true);
  const [stepSize, setStepSize] = useState(16);
  
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3
  };

  useKeyPress((e) => {
    if(e.code === "Space") {
      e.preventDefault();
      setFast(!fast);
      if (fast === true) {
        setStepSize(64);
      } else {
        setStepSize(16);
      }
    }
  });

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

  const walk = (dir) => {
    setDirection((previousDir) => {
      if (directions[dir] === previousDir) {
        move(dir);
      }
      return directions[dir];
    });
    setStep((previousStep) => previousStep < maxSteps - 1 ? previousStep + 1 : 0)
  };

  const move = (dir) => {
    setPosition((previousPos) => ({
      x: (previousPos.x + modifier[dir].x) <= 464 && (previousPos.x + modifier[dir].x) >= 0 
        ? previousPos.x + modifier[dir].x 
        : previousPos.x,
      y: (previousPos.y + modifier[dir].y) <= 464 && (previousPos.y + modifier[dir].y) >= 0 
        ? previousPos.y + modifier[dir].y 
        : previousPos.y,
    }));
    setPositionLocalStr(position);
  };


  return {
    walk, direction, step, position
  };
}

export default useWalk
