import React from 'react';
import './Map.style.scss';

function Map({ children }) {

  return (
    <div className="map">
      <div className="gameboard">
        {children}
      </div>
      <div className="info">
        <h3 className="main-title">Info</h3>
        <h6 className="info-title">- Movements</h6>
        <p className="description">Use arrow buttons</p>
        <h6 className="info-title">- Speed Boost</h6>
        <p className="description">Use space button</p>
      </div>
    </div>
  )
}

export default Map;
