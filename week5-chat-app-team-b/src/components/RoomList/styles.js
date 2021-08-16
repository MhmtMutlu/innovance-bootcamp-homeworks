import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
`;

export const Card = styled.div`
  width: 35%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 17px;
  background-color: var(--white-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h2`
  color: var(--title-color);
  margin-bottom: 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RoomButton = styled(Link)`
  background-color: var(--btn-color);
  width: 20rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  font-size: 1.5rem;
  color: var(--white-color);
  text-decoration: none;
  text-align: center;

  &:hover {
    color: var(--white-color);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    background-color: var(--bg-color);
  }
`;

export const RoomContainer = styled.div`
  max-height: 25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1rem;
`;

export const LogoutButton = styled(Link)`
  text-decoration: none;
  background-color: red;
  color: var(--white-color);
  width: 3rem;
  height: 3rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-align: center;
  margin-bottom: 1.5rem;
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: scale(1.2);
    background-color: var(--bg-color);
    color: var(--white-color);
  }
`;
