import React, { useEffect, useState } from 'react';
import * as Style from './styles';
import CountriesApi from '../../api/CountriesApi';
import CountryCard from '../CountryCard/CountryCard';
import { countryCards, countryCard } from '../../motion/variants';

function CountryList() {
  const { countries } = CountriesApi();
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (countries.length) {
      setIsLoaded(true)
    }
  }, [countries])

  const searchCountry = (e) => {
    setSearch(e.target.value)
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Style.WrapperSection>
      <Style.SearchWrapper variants={countryCards} initial="hidden" animate={isLoaded ? "show" : "hidden"}>
        <Style.SearchTitle
          layout
          variants={countryCard}
        >
          Country List
        </Style.SearchTitle>
        <Style.SearchInput 
          layout
          variants={countryCard}
          type="search" 
          onChange={searchCountry}
          placeholder="Search by country name..."
        />
      </Style.SearchWrapper>
      <Style.CartListWrapper>
        <Style.CountryList variants={countryCards} initial="hidden" animate={isLoaded ? "show" : "hidden"}>
          {
            filteredCountries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))
          }
        </Style.CountryList>
      </Style.CartListWrapper>
    </Style.WrapperSection>
  );
}

export default CountryList;
