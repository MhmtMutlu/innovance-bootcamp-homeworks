import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  width: 18rem;
  height: 13rem;
  margin: 2rem 1rem;
  position: relative;
  border-bottom: 1px solid inherit;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid inherit;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  object-fit: cover;
`;
