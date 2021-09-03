import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import img from "./2.jpg"
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { app } from '../base';
import moment from "moment"
import ChatterBox from './ChatterBox';
import { Link } from 'react-router-dom';
import { AuthContext } from './Auth/AuthProvider';


const SiderBar = () => {
  const {currentUser} = useContext(AuthContext)

  const [data, setData] = useState([])
  const [user, setUser] = useState([])

  // console.log("currentUser: ", currentUser.uid)

  const getUserData = async() => {
    await app.firestore().collection("user").doc(currentUser.uid).get().then(data => {
      setUser(data.data())
    })
  }

  const getData = async() => {
    await app.firestore().collection("user")
    .orderBy("time", "desc")
    .onSnapshot(snapshot => {
      const items = []
      snapshot.forEach(doc => {
        items.push({...doc.data(), id: doc.id})
      })
      setData(items)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getUserData()
  }, [user])

  return (
    <Container>
      <HeaderBar>
        <Avatar src={user && user.avatar} />
        <Icons>
          <DataUsageIcon />
          <ChatIcon />
          <MoreVertIcon />
        </Icons>
      </HeaderBar>
      <Notification>
        <Mute>
         <VolumeOffIcon/>
        </Mute>
        <Info>
          <span>Get Notified of new messages</span>
          <p>Turn on desktop Notifications</p>
        </Info>
      </Notification>
      <Search>
        <SearchBar>
        <SearchIcon/>
        <Input placeholder="Search or Start a Chat" />
        </SearchBar>
      </Search>

    {
      data.map(item => (
        <MyLink to={`/${item.id}`} key={item.id}>
          <ChatterBox 
          
          items={item}
          />
        </MyLink>
      ))
    }

    </Container>
  )
}

export default SiderBar


const MyLink = styled(Link)`
  text-decoration: none;
  color: black
`

const IconBox = styled.div`
display: none
`

const BoxHolder = styled.div`
width: 60px;
display: flex;
justify-content: space-around;

.MuiSvgIcon-root{
  display: none
}

:hover{
  .MuiSvgIcon-root{
  display: block
 }
} 
`
const Box = styled.div`
background-color: #06D755;
width: 20px;
height: 20px;
border-radius:10px;
justify-content: center;
align-items: center;
display: flex;
color: white;
font-size: 10px;
font-weight: bold;
margin-right: 0px;
`
const Message = styled.div`
font-size: 12px;
`

const ChatBox = styled.div`
display: flex;
background-color: white;
width: 100%;
height: 60px;
align-items: center;
margin: 0px 0;
border-bottom: 1px solid #c5c5c5  ;

:hover{
  background-color: #EDEDED;
  cursor: pointer;
}
`

const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 20px;
background-color: red;
margin: 0 10px;
object-fit: cover;
`
const Head = styled.div`
display:flex;
justify-content: space-between;
flex: 1;
`
const Time = styled.div`
font-size: 12px;
margin-right: 10px;
`
const Content = styled.div`
width: 100%
`
const HeaderContent = styled.div`
margin: 0;
font-weight: bold;
font-size: 14px;
`
const MessageContent = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const Input = styled.input`
flex: 1;
border-radius: 30px;
height: 80%;
border: 0;
outline: none;
font-size: 12px;

::placeholder{
  font-family: Poppins;
  font-weight: bold;
  letter-spacing: 1.03px;
}
`
const SearchBar = styled.div`
background-color: white;
width: 96%;
height: 80%;
border-radius: 30px;
display: flex;
align-items: center;
margin-bottom: 15px;

.MuiSvgIcon-root{
  padding:0 10px;
  font-size: 19px;
}

`
const Search = styled.div`
width: 100%;
height: 50px;
justify-content: center;
align-items: center;
display: flex;


`
const Mute = styled.div`
width: 40px;
height: 40px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
color:#9DE1FE;
margin-left: 10px;
margin-right: 20px;

`

const Info = styled.div`

span{
  font-size: medium;
  font-size: 14px;
  margin:0;
}
p{
   margin:0;
   font-size: 11px;
}

:hover{
   p{
    text-decoration: underline;
    cursor: pointer;
   }
  }
`

const Avatar = styled.img`
width: 40px;
height: 40px;
border-radius: 20px;
object-fit:cover;
background-color: aqua;
`
const Icons = styled.div`
color: #373737;
width: 100px;
display: flex;
justify-content: space-between;
margin-right:10px;
`


const Container = styled.div`
flex: 0.4;
display: flex;
flex-direction: column;
padding-top: 10px;
border-right: 1px solid rgba(0, 0, 0, 0.05);
box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.2);

`
const HeaderBar = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left:10px;
`
const Notification = styled.div`
background-color: #9DE1FE;
display: flex;
align-items: center;
height: 70px;
margin: 15px 0;
`
