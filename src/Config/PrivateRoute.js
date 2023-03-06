import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import SignUp from '../pages/Authentication/SignUp/SignUp'

export default function PrivateRoute(props) {

    const {isAuthentication} = useContext(AuthContext)

    const {Component} = props

    if(!isAuthentication){
      <SignUp/>
    }
  return (
    
    <Component/>
    
  )
}
