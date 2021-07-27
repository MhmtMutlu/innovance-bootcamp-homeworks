import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WrapperSection = styled.section`
  min-height: 100vh;
  @media (max-width: 750px) {
      font-size: 14px;
  }
`;

export const Wrapper = styled(motion.div)`
  margin: auto;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled(motion.h3)`
  font-size: 3rem;
  padding: 2rem;
  text-align: center;
  @media (max-width: 750px) {
    font-size: 2rem;
  }
`;

export const LanguageList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;