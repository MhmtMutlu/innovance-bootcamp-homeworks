import React from 'react'

function Character({ image, data, position }) {
  const { positionY, positionX, height, width } = data;
  
  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        height: `${height}px`,
        width: `${width}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${positionX}px -${positionY}px`
      }}
    >
    </div>
  )
}

export default Character;
