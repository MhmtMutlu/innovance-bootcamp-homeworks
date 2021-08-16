import React, { useEffect, useState } from "react";
import { ChannelContainer, NavbarContainer, Container } from "./styles";
import firebase from "../../firebase/firebase";
import { useParams } from "react-router-dom";
import Chat from "./Chat/Chat";
import Navbar from "./Navbar/Navbar";

function ChatRoom() {
  const [chats, setChats] = useState([]);
  const [users, setUsers] = useState([]);
  const [nickname, setNickname] = useState("");
  const [roomname, setRoomname] = useState("");
  const [newchat, setNewchat] = useState({
    roomname: "",
    nickname: "",
    message: "",
    date: "",
    type: "",
  });
  const [rooms, setRooms] = useState([]);
  const roomRef = firebase.database().ref("rooms/");
  const roomUsersRef = firebase.database().ref("roomusers/");
  let roomUser = localStorage.getItem("userName");
  const newRoomUser = { roomname: "", nickname: "", status: "" };
  let { room } = useParams();
  room = room.replace(/-/g, " ");

  useEffect(() => {
    const fetchData = async () => {
      setNickname(localStorage.getItem("userName"));
      setRoomname(room);
      firebase
        .database()
        .ref("chats/")
        .orderByChild("roomname")
        .equalTo(roomname)
        .on("value", (resp) => {
          setChats([]);
          setChats(snapshotToArray(resp));
        });
    };

    fetchData();
  }, [room, roomname]);

  useEffect(() => {
    roomRef.on("value", (snap) => {
      setRooms([snap.val()]);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setNickname(localStorage.getItem("userName"));
      setRoomname(room);
      firebase
        .database()
        .ref("roomusers/")
        .orderByChild("roomname")
        .equalTo(roomname)
        .on("value", (resp2) => {
          setUsers([]);
          const roomusers = snapshotToArray(resp2);
          setUsers(roomusers.filter((x) => x.status === "online"));
        });
    };

    fetchData();
  }, [room, roomname]);

  const snapshotToArray = (snapshot) => {
    const returnArr = [];

    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });

    return returnArr;
  };

  return (
    <Container>
      <NavbarContainer>
        <Navbar
          roomUsersRef={roomUsersRef}
          roomUser={roomUser}
          newRoomUser={newRoomUser}
          snapshotToArray={snapshotToArray}
          roomname={roomname}
          nickname={nickname}
          users={users}
          rooms={rooms}
        />
      </NavbarContainer>
      <ChannelContainer>
        <Chat
          room={room}
          nickname={nickname}
          chats={chats}
          newchat={newchat}
          setNewchat={setNewchat}
          roomname={roomname}
        />
      </ChannelContainer>
    </Container>
  );
}

export default ChatRoom;
