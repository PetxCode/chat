import React from 'react'
import styled from 'styled-components'
import bg from "./bgc.jpg"
import bg1 from "./bg.png"
import img from "./2.jpg"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';

const ChatBar = () => {
  return (
    <Container>
      <Header>
        <Avatar src={img} />
        <Title>Peter</Title>
        <Icons>
          <SearchIcon />
          <MoreVertIcon />
        </Icons>
      </Header>

      <Chat>Chatter</Chat>

      <ChatInput>
        <ChatIcons>
          <MoodIcon />
          <Attached>
          <AttachFileIcon />
          </Attached>
        </ChatIcons>
        <TypeInput placeholder="Type a message" />
        <MicIcon />
      </ChatInput>
    </Container>
  )
}

export default ChatBar

const Attached  =  styled.div`

`
const TypeInput  =  styled.input`
flex: 1;
height: 35px;
border-radius: 30px;
border: 0;
outline: none;
padding-left: 10px;
margin-left: 10px;

::placeholder{
  font-family: Poppins;
}
`

const ChatIcons  =  styled.div`
width: 80px;
display: flex;
justify-content: space-evenly;
`

const Icons  =  styled.div`
display: flex;
width: 100px;
justify-content: space-around;
color: #232323
` 
const Title  =  styled.div`
font-size: large;
font-weight: bold;
flex: 1;
` 
const Avatar  =  styled.img`
width: 50px;
height: 50px;
border-radius: 25px;
margin: 0 20px;
object-fit: cover;
` 

const Container = styled.div`
flex: 0.6;
background-color: aliceblue;
background-image: url(${bg});
background-position: center;
background-repeat: no-repeat; 
background-size: cover;
z-index: -10000;
font-family: Poppins;
height: 100%;
display: flex;
flex-direction: column;
`
const Header = styled.div`
background-color: #EDEDED;
width: 100%;
height: 75px;
border-bottom: 2px solid #d8d8d8;
display: flex;
align-items: center;

`;
const Chat = styled.div`
flex: 1;
display: flex;
align-items: flex-end;
flex-direction: column-reverse;
padding: 0 20px;
`
const ChatInput = styled.div`
width: 100%;
height: 60px;
background-color: #EDEDED;
display: flex;
align-items: center;
color: #333333;

.MuiSvgIcon-root{
  margin: 0 10px;
  cursor: pointer;
}
`