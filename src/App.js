import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./components/Auth/PrivateRoute";
import ChatBar from "./components/ChatBar";
import Registration from "./components/Registration";
import SiderBar from "./components/SiderBar";
import HomeScreen from "./Home/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <HeaderPart />
          <Route path="/register" exact component={Registration} />

          <PrivateRoute path="/" exact component={HomeScreen} />

          <Route path="/:id" exact>
            <AppBody>
              <SiderBar />
              <ChatBar />
            </AppBody>
          </Route>
        </Container>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

const AppBody = styled.div`
  width: 90%;
  height: 90vh;
  background-color: #ededed;
  margin-top: -50px;
  margin: auto;
  z-index: 1000;
  display: flex;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
`;
const HeaderPart = styled.div`
  height: 140px;
  width: 100%;
  background-color: #009688;
  position: fixed;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dadcd5;
  /* display: flex; */
`;
