import { ToggleOff } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {app} from "../base"
import firebase from 'firebase'
import dm from "./dm.jpg"
import { useHistory } from 'react-router-dom'

const Registration = () => {

  const history = useHistory()

  const [toggle, setToggle] = useState(false)

  const [img, setImg] = useState(dm)
  const [avatar, setAvatar] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [percentage, setPercentage] = useState(0)

  const onToggle = ( ) => {
    setToggle(!toggle)
  }

  const uploadImage = async({target}) => {
    const file = target.files[0]
    setImg(URL.createObjectURL(file))

    const fileRef = await app.storage().ref()
    const storageRef = fileRef.child("avatar/"+file.name).put(file)


    storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      const counted = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      setPercentage(Math.floor(counted))
      console.log(counted)
    },
    (err)=> console.log(err.message),
    () => {
      storageRef.snapshot.ref.getDownloadURL().then((URL) => {
        setAvatar(URL)
        console.log(URL)
      })
     }
    )
  }

  const onSignUp = async() => {
   const signedUser = await app.auth().createUserWithEmailAndPassword(email, password)
  console.log(signedUser)

   await app.firestore().collection("user").doc(signedUser.user.uid).set({
     avatar,
     email,
     userName,
     password,
     createdBy: signedUser.user.uid,
     time: firebase.firestore.FieldValue.serverTimestamp(),
   })
    console.log("You've signed Up")
    history.push("/")
  }

  const onSignIn = async() => {
    await app.auth().signInWithEmailAndPassword(email, password)
    console.log("You've signed Up")
    history.push("/")
   }

  return (
    <Container>
      {
        toggle ? (<Wrapper>
          <Image src={img} />
          <UserInput>
            <Input placeholder="User Name"  type="file" onChange={uploadImage} />
            <Input placeholder="User Name" value={userName} onChange={(e) => {
              setUserName(e.target.value)
            }} />
            <Input placeholder="Email" value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} />
            <Input placeholder="Password" value={password} onChange={(e) => {
              setPassword(e.target.value)
            }}/>
            <Button
            onClick={onSignUp}
            >Sign Up</Button>
            <Detail>
            <span>Already have an Account, <p
            onClick={onToggle}
            >Sign In</p>Here</span>
            </Detail>
            <Detail>
            <span>Or sign in with, <p>Google</p>Here</span>
            </Detail>
          </UserInput>
        </Wrapper>) : (<Wrapper>
        
        <UserInput>
        
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button
          onClick={onSignIn}
          >Sign In</Button>
          <Detail>
          <span>Don't have an Account, <p
          onClick={onToggle}
          >Sign Up</p>Here</span>
          </Detail>
          <Detail>
          <span>Or sign in with, <p>Google</p>Here</span>
          </Detail>
        </UserInput>
      </Wrapper>)
      }
    </Container>
  )
}

export default Registration

const Button = styled.button`
margin: 10px;
width: 100%;
height: 40px;
background-color: lightblue;
outline: none;
border: 0;
transform: scale(1);
transition: all 350ms;
border-radius: 5px;

:hover{
  transform: scale(1.05);
  cursor: pointer;
}

`
const Detail = styled.div`
margin-top: 20px;
display:flex;
justify-content: center;
span{
    display: flex
  }
  p{
    margin: 0 5px;
    font-weight: bold;
    color: red;
    cursor: pointer;
  }
`
const Container = styled.div`
color: black;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 80%;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
`
const Image = styled.img`
width: 400px;
height: 300px;
background-color: white;
border-radius: 20px;
object-fit: cover;
`
const UserInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  
  `
const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid lightblue;
  outline: none;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  ::placeholder{
  font-family: Poppins;
}
`