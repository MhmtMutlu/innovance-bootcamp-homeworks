import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Style from './styles';

function Header() {
  const location = useLocation();

  return (
    <Style.HeaderSection>
      <Style.HeaderWrapper>
        <Style.HeaderTitle>
          Country App
        </Style.HeaderTitle>
        <Style.ButtonWrapper>
          <Style.HeaderButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            to="/"
            style={location.pathname === "/" ? {backgroundColor: "#adb5bd"} : {backgroundColor: "#dee2e6"}}
          >
            Country List
          </Style.HeaderButton>
          <Style.HeaderButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            to="/statistics"
            style={location.pathname === "/statistics" ? {backgroundColor: "#adb5bd"} : {backgroundColor: "#dee2e6"}}
          >
            Statistics
          </Style.HeaderButton>
        </Style.ButtonWrapper>
      </Style.HeaderWrapper>
    </Style.HeaderSection>
  )
}

export default Header;
