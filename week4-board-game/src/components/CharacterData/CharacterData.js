import React from 'react'
import Character from '../Character/Character';

function CharacterData({ charImage, data, position = { x: 0, y: 0 }, step = 0, direction = 0 }) {
  const { height, width } = data;

  return (
    <Character 
        image={charImage}
        position={position}
        data={{
          positionX: step * width,
          positionY: direction * height,
          height,
          width
        }}
      />
  )
}

export default CharacterData;
