import React from 'react';
import MainWrapper from './styles';

function Main({ children }) {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  )
};

export default Main;
