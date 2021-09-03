import React from 'react'
import { createContext, useState, useEffect } from 'react'
import firebase from 'firebase'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  
  const [currentUser, setCurrentUser] = useState([])

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])
  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
