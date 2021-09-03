import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const PrivateRoute = ({component: ComponentRoute, ...rest}) => {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <Route 
    {...rest}
    render={(PropsRoute) => {
      return(
        currentUser ? (
          <ComponentRoute {...PropsRoute} />
        ) : (
          <Redirect to="/register" />
        )
      )
    }}

    
    />
  )
}

export default PrivateRoute
