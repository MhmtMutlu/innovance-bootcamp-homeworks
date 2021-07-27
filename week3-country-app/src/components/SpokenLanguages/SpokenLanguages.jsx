import React, { useEffect, useState } from 'react';
import * as Style from './styles';
import FindPopularLang from '../../utils/FindPopularLang';
import SpokenLanguagesCard from '../SpokenLanguagesCard/SpokenLanguagesCard';
import { languageCard, languageCards } from '../../motion/variants';

function CountryList() {
  const { popularLanguages } = FindPopularLang();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (popularLanguages.length) {
      setIsLoaded(true)
    }
  }, [popularLanguages])

  return (
    <Style.WrapperSection>
      <Style.Wrapper variants={languageCards} initial="hidden" animate={isLoaded ? "show" : "hidden"}>
        <Style.CardTitle 
         layout 
         variants={languageCard}
        >
          Most Spoken Languages
        </Style.CardTitle>
        <Style.LanguageList variants={languageCards} initial="hidden" animate={isLoaded ? "show" : "hidden"}>
          {
            popularLanguages.map((language, index) => (
              <SpokenLanguagesCard
               key={language[0]} 
               index={index} 
               language={language} 
              />
            ))
          }
      </Style.LanguageList>
      </Style.Wrapper>
    </Style.WrapperSection>
  );
}

export default CountryList;
