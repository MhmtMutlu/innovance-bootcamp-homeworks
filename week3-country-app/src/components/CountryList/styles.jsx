import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WrapperSection = styled.section`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  @media (max-width: 750px) {
      font-size: 14px;
  }
`;

export const SearchWrapper = styled(motion.div)`
  padding: 1rem 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchTitle = styled(motion.h3)`
  font-size: 2rem;
  color: var(--primary-color);
  @media (max-width: 750px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 520px) {
    text-align: center;
  }
`;

export const SearchInput = styled(motion.input)`
  padding: 1rem 0.5rem;
  width: 40%;
  min-width: 20rem;
  font-size: 1.5rem;
  background-color: var(--card-color);
  color: var(--primary-color);
  outline: none;
  border: none;
  border-bottom: 5px solid var(--border-color);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  &:focus {
    box-shadow: 0px 0px 3px var(--border-color);
  }
  &::placeholder {
    color: var(--primary-color);
  }
  @media (max-width: 380px) {
    min-width: 15rem;
  }
`;

export const CartListWrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CountryList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
