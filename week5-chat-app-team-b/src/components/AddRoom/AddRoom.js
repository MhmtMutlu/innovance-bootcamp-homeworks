import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import { AddRoomButton, InputBox, DesignedModalHeader, DesignedModalBody, DesignedModalFooter } from "./styles";
import firebase from '../../firebase/firebase';

function AddRoom() {
  const [roomName, setRoomName] = useState({ room: "" });
  const [isOpen, setIsOpen] = useState(false);

  const roomRef = firebase.database().ref("rooms/");

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const changeHandler = (event) => {
    setRoomName({ ...roomName, room: event.target.value });
  };

  const addRoomHandler = () => {
    if (roomName.room !== "") {
      roomRef
        .orderByChild("room")
        .equalTo(roomName.room)
        .once("value", (snap) => {
          if (snap.exists()) {
            setIsOpen(!isOpen);
            setRoomName({ room: "" });
          }else{
            roomRef.push().set(roomName);
            setRoomName({ room: "" });
            setIsOpen(!isOpen);
          } 
        });
    }
  };

  return (
    <>
      <AddRoomButton onClick={openModalHandler}>
        <i className="fas fa-plus"></i>
      </AddRoomButton>
      <Modal isOpen={isOpen} toggle={openModalHandler}>
        <DesignedModalHeader>Add Room</DesignedModalHeader>
        <DesignedModalBody>
          <InputBox type="text" placeholder="Room Name..." value={roomName.room} onChange={changeHandler} />
        </DesignedModalBody>
        <DesignedModalFooter>
          <Button color="primary" onClick={addRoomHandler}>
            Add
          </Button>
          <Button color="secondary" onClick={openModalHandler}>
            Cancel
          </Button>
        </DesignedModalFooter>
      </Modal>
    </>
  );
}

export default AddRoom;
