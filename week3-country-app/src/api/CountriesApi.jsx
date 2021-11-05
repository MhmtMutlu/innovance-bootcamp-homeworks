import { useEffect, useState } from 'react';
import axios from 'axios';

function CountriesApi() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then((response) => setCountries(response.data));
  }, []);

  return { countries };
}

export default CountriesApi;
