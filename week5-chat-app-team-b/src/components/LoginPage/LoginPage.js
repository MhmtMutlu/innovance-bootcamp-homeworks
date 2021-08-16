import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Container, Title, InputBox, LoginButton } from "./styles";
import { FormGroup, Form } from "reactstrap";
import firebase from "../../firebase/firebase";

function LoginPage() {
  let history = useHistory();

  const [user, setUser] = useState({ userName: "" });
  const userRef = firebase.database().ref("users/");

  const changeHandler = (event) => {
    setUser({ ...user, userName: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (user.userName !== "") {
      userRef
        .orderByChild("userName")
        .equalTo(user.userName)
        .once("value", (snap) => {
          if (snap.exists()) {
            localStorage.setItem("userName",user.userName)
            history.push("/roomlist");
          }else{
            userRef.push().set(user);
            localStorage.setItem("userName",user.userName)
            history.push("/roomlist");
          } 
        });
    }
  };

  return (
    <Container>
      <Card>
        <Title>HEY DUDE !</Title>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <InputBox
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter Your Nickname"
              value={user.userName}
              onChange={changeHandler}
            />
          </FormGroup>
          <LoginButton type="submit">Login</LoginButton>
        </Form>
      </Card>
    </Container>
  );
}

export default LoginPage;
