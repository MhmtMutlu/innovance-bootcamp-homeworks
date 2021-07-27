import React from 'react';
import Header from '../../components/Header/Header';
import LayoutWrapper from './styles';

function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  )
};

export default Layout;
