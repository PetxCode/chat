import React from "react";
import styled from "styled-components";
import ChatBar from "../components/ChatBar";
import SiderBar from "../components/SiderBar";

const HomeScreen = () => {
  return (
    <AppBody>
      <SiderBar />
      <ChatBar />
    </AppBody>
  );
};

export default HomeScreen;

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
