import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  width: 30rem;
  height: 5rem;
  margin: 1rem;
  position: relative;
  border: 2px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--card-color);
  border: none;
  border-bottom: 10px solid var(--border-color);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  @media (max-width: 550px) {
    font-size: 0.8rem;
    width: 20rem;
  }
`;

export const LanguageRank = styled.p`
  width: 25%;
  font-size: 2rem;
  font-weight: bold;
  padding-right: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;@media (max-width: 550px) {
    width: 15%;
    padding-right: 0.8rem;
    font-size: 1rem;
  }
`;

export const LanguageCardBody = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-items: center;@media (max-width: 550px) {
    width: 85%;
  }
`;

export const LanguageName = styled.h3`
  padding-left: 2rem;
  align-items: center;@media (max-width: 550px) {
    padding-left: 0.8rem;
  }
`;

export const CountryAmount = styled.p`
  padding-left: 0.5rem;
`;

export const Amount = styled.span`
  font-weight: bold;
`;