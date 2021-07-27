import CountriesApi from '../api/CountriesApi';

function FindPopularLang() {
  const { countries } = CountriesApi();
  const languagesArray = [];
  const popularLanguagesObj = {};
  const popularLanguagesArray = [];
  const popularLanguages = [];

  countries.forEach((country) => {
    country.languages.forEach((language) => {
      languagesArray.push(language.name)
    })
  })

  languagesArray.forEach((language) => { 
    popularLanguagesObj[language] = (popularLanguagesObj[language] || 0) + 1; 
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const language in popularLanguagesObj) {
    if (language) {
      popularLanguagesArray.push([language, popularLanguagesObj[language]]);
    }
  }

  popularLanguagesArray.sort((a, b) => (b[1] - a[1]));
  
  popularLanguagesArray.forEach((language, index) => {
    if (index < 10) {
      popularLanguages.push(language)
    }
  })

  return { popularLanguages }
}

export default FindPopularLang;
