import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountryList from './components/CountryList/CountryList';
import Layout from './layouts/Layout/Layout';
import Main from './layouts/Main/Main';
import SpokenLanguages from './components/SpokenLanguages/SpokenLanguages';

function App() {
  return (
    <Router>
      <Layout>
        <Main>
          <Route exact path="/">
            <CountryList />
          </Route>
          <Route exact path="/statistics">
            <SpokenLanguages />
            </Route>
        </Main>
      </Layout>
    </Router>
  );
}

export default App;
