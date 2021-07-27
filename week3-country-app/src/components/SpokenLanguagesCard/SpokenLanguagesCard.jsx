import React from 'react'
import * as Style from './styles';
import { languageCard } from '../../motion/variants';

function SpokenLanguagesCard({ language, index }) {
  return (
    <Style.Card
      layout
      variants={languageCard}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >

      <Style.LanguageRank>
        {index + 1}
      </Style.LanguageRank>

      <Style.LanguageCardBody>
        <Style.LanguageName>
          {language[0]}
        </Style.LanguageName>

        <Style.CountryAmount>
          is spoken by <Style.Amount>{language[1]}</Style.Amount> countries.
        </Style.CountryAmount>
      </Style.LanguageCardBody>
    </Style.Card>
  )
}

export default SpokenLanguagesCard
