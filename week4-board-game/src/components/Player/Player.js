import React from 'react'
import { CharacterContext } from '../../contexts/CharacterContext'
import useKeyPress from '../../hooks/useKeyPress'
import useWalk from '../../hooks/useWalk'
import CharacterData from '../CharacterData/CharacterData'

function Player() {
  const { characterLocalStr } = React.useContext(CharacterContext);
  const { direction, step, walk, position } = useWalk(3);
  
  const data = {
    height: 32,
    width: 32
  }

  useKeyPress((e) => {
    e.preventDefault();
    if (e.key.includes("Arrow")) {
      const direction = e.key.replace("Arrow", "").toLowerCase();
      walk(direction);
    }
  })

  return (
    <CharacterData 
      charImage={`/assets/characters/${characterLocalStr}.png`}
      data={data}
      step={step}
      direction={direction}
      position={position}
    />
  )
}

export default Player
