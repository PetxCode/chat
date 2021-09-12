import React from "react";
import moment from "moment";
import styled from "styled-components";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ChatterBox = ({ items }) => {
  return (
    <ChatBox>
      <Image src={items.avatar} />
      <Content>
        <Head>
          <HeaderContent>{items.userName}</HeaderContent>
          <Time>{moment(items?.time.toDate()).fromNow()}</Time>
        </Head>
        <MessageContent>
          <Message>Message</Message>
          <BoxHolder>
            <Box>10</Box>
            <ExpandMoreIcon />
          </BoxHolder>
        </MessageContent>
      </Content>
    </ChatBox>
  );
};

//
export default ChatterBox;

const IconBox = styled.div`,
display: none
`;

const BoxHolder = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-around;

  .MuiSvgIcon-root {
    display: none;
  }

  :hover {
    .MuiSvgIcon-root {
      display: block;
    }
  }
`;
const Box = styled.div`
  background-color: #06d755;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  font-size: 10px;
  font-weight: bold;
  margin-right: 0px;
`;
const Message = styled.div`
  font-size: 12px;
`;

const ChatBox = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 60px;
  align-items: center;
  margin: 0px 0;
  border-bottom: 1px solid #c5c5c5;

  :hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: red;
  margin: 0 10px;
  object-fit: cover;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;
const Time = styled.div`
  font-size: 12px;
  margin-right: 10px;
`;
const Content = styled.div`
  width: 100%;
`;
const HeaderContent = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 14px;
`;
const MessageContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 30px;
  height: 80%;
  border: 0;
  outline: none;
  font-size: 12px;

  ::placeholder {
    font-family: Poppins;
    font-weight: bold;
    letter-spacing: 1.03px;
  }
`;
const SearchBar = styled.div`
  background-color: white;
  width: 96%;
  height: 80%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  .MuiSvgIcon-root {
    padding: 0 10px;
    font-size: 19px;
  }
`;
const Search = styled.div`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Mute = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #9de1fe;
  margin-left: 10px;
  margin-right: 20px;
`;

const Info = styled.div`
  span {
    font-size: medium;
    font-size: 14px;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 11px;
  }

  :hover {
    p {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
  background-color: aqua;
`;
const Icons = styled.div`
  color: #373737;
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

const Container = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.2);
`;
const HeaderBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;
const Notification = styled.div`
  background-color: #9de1fe;
  display: flex;
  align-items: center;
  height: 70px;
  margin: 15px 0;
`;
