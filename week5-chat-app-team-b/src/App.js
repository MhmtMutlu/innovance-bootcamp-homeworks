import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import AddRoom from "./components/AddRoom/AddRoom";
import RoomList from "./components/RoomList/RoomList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/addroom">
          <AddRoom />
        </Route>
        <Route path="/chatroom/:room">
          <ChatRoom />
        </Route>
        <Route path="/roomlist">
          <RoomList />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
