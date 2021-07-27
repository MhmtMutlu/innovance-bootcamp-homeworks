import React from 'react';
import { cardOverlayContainer } from '../../../motion/variants';
import * as Style from './styles';

function CardOverlay({ country }) {
  return (
    <Style.Backdrop>
      <Style.WrapperContainer variants={cardOverlayContainer}>
        <Style.CountryName>
          {country.name}
        </Style.CountryName>

        <Style.CountryDetails>
          Capital: 
          <Style.CountryData>{country.capital}</Style.CountryData>
        </Style.CountryDetails>

        <Style.CountryDetails>
          Region: 
          <Style.CountryData>{country.region}</Style.CountryData>
        </Style.CountryDetails>

        <Style.CountryDetails>
          Nationality: 
          <Style.CountryData>{country.demonym}</Style.CountryData>
        </Style.CountryDetails>

        <Style.CountryDetails>
          Language: 
          <Style.CountryData>{country.languages[0].name}</Style.CountryData>
        </Style.CountryDetails>

        <Style.CountryDetails>
          Population: 
          <Style.CountryData>{country.population}</Style.CountryData>
        </Style.CountryDetails>

      </Style.WrapperContainer>
    </Style.Backdrop>
  );
}

export default CardOverlay;
