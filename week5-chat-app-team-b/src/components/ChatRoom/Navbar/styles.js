import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 45vh;
  overflow: hidden;
  padding: 2rem;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 45vh;
  width: 100%;
`;

export const RoomButton = styled(Link)`
  text-decoration: none;
`;

export const NavbarTitle = styled.h3`
  font-size: 2rem;
  color: var(--white-color);
`;

export const Card = styled.div`
  padding: 0.5rem 1rem;
  background-color: var(--card-color);
  margin: 0.5rem;
  border-radius: 0.8rem;

  &:hover {
    background-color: var(--hover-color);
  }
`;

export const Names = styled.h6`
  color: var(--title-color);
  margin: 0;
`;

export const RoomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 45vh;
  overflow: hidden;
  padding: 2rem;
`;

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled.button`
  background-color: inherit;
  border: none;
  font-size: 2rem;
  color: var(--white-color);
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
    color: var(--title-color);
  }
`;