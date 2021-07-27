import React, { useState } from 'react';
import { countryCard } from '../../motion/variants';
import CardOverlay from './CardOverlay/CardOverlay';
import * as Style from './styles';

function CountryCard({ country }) {
  const [isHovered, setIsHovered] = useState(false);
  const viewOverlay = isHovered && <CardOverlay country={country} />;
  const onMouseOverHandler = () => {
    setIsHovered(true);
  };
  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  };

  return (
    <Style.Card
      layout
      variants={countryCard}
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {viewOverlay}
      <Style.CardImage src={country.flag} />
    </Style.Card>
  );
}

export default CountryCard;
