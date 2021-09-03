import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { app } from '../base'
import { AuthContext } from './Auth/AuthProvider'
import moment from 'moment'

const Chatter = ({passData}) => {
  const {currentUser} = useContext(AuthContext)
  const [data, setData] = useState([])
// console.log("passing: ", passData.id)
  const readData = async() => {
    await app.firestore()
    .collection("user")
    .doc(passData.createdBy)
    .collection("chat")
    .onSnapshot((snapshot) =>{
      const item = []
      snapshot.forEach(doc => {
        item.push({...doc.data(), id: doc.id})
      })
      setData(item)
    })
  }

  useEffect(() => {
    readData()
    console.log("Data Passing: ", data.userName)
  }, [data])
  return (
    <>
      {
        data.map(({id, message, createdAt, createdBy}) => (
          <Container key={id} >
     
       {
         currentUser.uid === createdBy ? 
         <MessageContainer>
           <Posted>Posted by YOU</Posted>
           <Time>{moment(createdAt.toDate()).fromNow()}</Time>
           <Message>{message}</Message> 
         </MessageContainer>
         :
         
           <Holder>
             <Time>{moment(createdAt.toDate()).fromNow()}</Time>
            <Message2 bg>{message}</Message2>
           </Holder> 
        
       }
    </Container>
   ))
  }
    </>
  )
}

export default Chatter

const Posted = styled.div`
margin: 0 10px;
font-weight: bold;

`
const Time = styled.div`
margin: 0 10px;
font-weight: bold;
font-size: 12px;
`
const MessageContainer = styled.div`
display: flex;
flex-direction: column;
`

const Container = styled.div`
display: flex;
align-items: flex-end;
flex-direction: column-reverse;
width: 100%
`
const Message = styled.div`
background-color: ${({bg}) => bg ? "#c1e897" : "#C7C0B9"}; 
color: black;
padding: 10px;
margin: 10px;

`
const Message2 = styled.div`
background-color: ${({bg}) => bg ? "#c1e897" : "#C7C0B9"}; 
color: black;
padding: 10px;
margin: 10px;
display: flex;
align-items: center;
/* width: 100% */
`

const Holder = styled.div`
flex-direction: column;
display: flex;
align-items: center;
width: 100%;
/* justify-content: center; */
align-items: flex-start;

`