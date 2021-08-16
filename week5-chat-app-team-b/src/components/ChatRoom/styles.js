import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "NavbarContainer Channel";
`;

export const NavbarContainer = styled.div`
  grid-area: NavbarContainer;
  background-color: var(--bg-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 45vh 45vh 10vh;
  gap: 0px 0px;
  grid-template-areas:
    "UserListContainer"
    "RoomListContainer"
    "Logout";
`;



export const ChannelContainer = styled.div`
  grid-area: Channel;
  background-color: var(--white-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh 75vh 10vh;
  gap: 0px 0px;
  grid-template-areas:
    "Header"
    "ChatBox"
    "InputBox";
  overflow: hidden;
`;
