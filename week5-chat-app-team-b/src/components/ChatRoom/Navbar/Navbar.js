import React from "react";
import {
  Card,
  List,
  Logout,
  LogoutButton,
  Names,
  NavbarTitle,
  RoomButton,
  RoomListContainer,
  UserListContainer,
} from "./styles";
import Moment from "moment";
import firebase from "../../../firebase/firebase";
import { useHistory } from "react-router-dom";

function Navbar({
  roomUsersRef,
  roomUser,
  newRoomUser,
  snapshotToArray,
  roomname,
  nickname,
  users,
  rooms
}) {
  const history = useHistory();

  const click = (roomname) => {
    roomUsersRef
      .orderByChild("nickname")
      .equalTo(roomUser)
      .on("value", (resp) => {
        let participants = [];
        participants = snapshotToArray(resp);
        const user = participants.find(
          (participant) => participant.nickname === roomUser
        );
        if (user === undefined) {
          newRoomUser.roomname = roomname;
          newRoomUser.nickname = roomUser;
          newRoomUser.status = "online";

          const newUser = roomUsersRef.push();
          newUser.set(newRoomUser);
        }
      });
  };

  const roomTitleUrl = (roomName) => {
    return roomName.replace(/ /g, "-");
  };

  const exitChat = () => {
    const chat = {
      roomname: "",
      nickname: "",
      message: "",
      date: "",
      type: "",
    };
    chat.roomname = roomname;
    chat.nickname = nickname;
    chat.date = Moment(new Date()).format("DD/MM/YYYY HH:mm:ss");
    chat.message = `${nickname} leave the room`;
    chat.type = "exit";
    const newMessage = firebase.database().ref("chats/").push();
    newMessage.set(chat);

    firebase
      .database()
      .ref("roomusers/")
      .orderByChild("roomname")
      .equalTo(roomname)
      .once("value", (resp) => {
        let roomuser = [];
        roomuser = snapshotToArray(resp);
        const user = roomuser.find((x) => x.nickname === nickname);
        if (user !== undefined) {
          const userRef = firebase.database().ref("roomusers/" + user.key);
          userRef.update({ status: "offline" });
        }
      });

    history.push("/roomlist");
  };

  return (
    <>
      <UserListContainer>
        <NavbarTitle>Users in Room</NavbarTitle>
        <List>
          {users.map((item, index) => (
            <Card key={index}>
              <Names>{item.nickname}</Names>
            </Card>
          ))}
        </List>
      </UserListContainer>
      <RoomListContainer>
        <NavbarTitle>Room List</NavbarTitle>
        <List>
          {rooms[0] &&
            Object.values(rooms[0]).map((room, index) => (
              <RoomButton
                to={{ pathname: `/chatroom/${roomTitleUrl(room.room)}` }}
                key={index}
                onClick={() => click(room.room)}
              >
                <Card key={index}>
                  <Names>{room.room}</Names>
                </Card>
              </RoomButton>
            ))}
        </List>
      </RoomListContainer>
      <Logout>
        <LogoutButton onClick={exitChat}>Logout</LogoutButton>
      </Logout>
    </>
  );
}

export default Navbar;
