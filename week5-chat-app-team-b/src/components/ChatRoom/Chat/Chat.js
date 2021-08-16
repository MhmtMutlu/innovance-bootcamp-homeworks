import React, { useCallback } from "react";
import { InputGroupAddon } from "reactstrap";
import {
  ChatBox,
  ChatContentCenter,
  ChatDate,
  ChatMessage,
  ChatStatus,
  Header,
  InputBox,
  LeftBubble,
  MessageArea,
  MessageBox,
  MessageGroup,
  MsgDate,
  MsgName,
  RightBubble,
  SendMessage,
  Title,
  UserIcon
} from "./styles";
import Moment from "moment";
import firebase from "../../../firebase/firebase";

function Chat({ room, nickname, chats, newchat, setNewchat, roomname }) {
  const messageRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const submitMessage = (e) => {
    e.preventDefault();
    const chat = newchat;
    chat.roomname = roomname;
    chat.nickname = nickname;
    chat.date = Moment(new Date()).format("DD/MM/YYYY HH:mm:ss");
    chat.type = "message";
    const newMessage = firebase.database().ref("chats/").push();
    newMessage.set(chat);
    setNewchat({ roomname: "", nickname: "", message: "", date: "", type: "" });
  };

  const onChange = (e) => {
    setNewchat({ ...newchat, [e.target.name]: e.target.value });
  };

  const takeFirstLetterFromName = (name) => {
    return name[0]?.toUpperCase();
  }

  return (
    <>
      <Header>
        <Title>{room}</Title>
        <UserIcon>{takeFirstLetterFromName(nickname)}</UserIcon>
      </Header>
      <ChatBox>
        {chats.map((item, idx) => (
          <MessageBox ref={messageRef} key={idx}>
            {item.type === "join" || item.type === "exit" ? (
              <ChatStatus>
                <ChatDate>{item.date}</ChatDate>
                <ChatContentCenter>{item.message}</ChatContentCenter>
              </ChatStatus>
            ) : (
              <ChatMessage>
                {item.nickname === nickname ? (
                  <RightBubble>
                    <MsgName>Me</MsgName>
                    <MsgDate> at {item.date}</MsgDate>
                    <p>{item.message}</p>
                  </RightBubble>
                ) : (
                  <LeftBubble>
                    <MsgName>{item.nickname}</MsgName>
                    <MsgDate> at {item.date}</MsgDate>
                    <p>{item.message}</p>
                  </LeftBubble>
                )}
              </ChatMessage>
            )}
          </MessageBox>
        ))}
      </ChatBox>
      <InputBox>
        <MessageGroup>
          <MessageArea
            type="text"
            name="message"
            id="message"
            placeholder="Enter message here"
            value={newchat.message}
            onChange={onChange}
          />
          <InputGroupAddon addonType="append">
            <SendMessage onClick={submitMessage}>Send</SendMessage>
          </InputGroupAddon>
        </MessageGroup>
      </InputBox>
    </>
  );
}

export default Chat;
