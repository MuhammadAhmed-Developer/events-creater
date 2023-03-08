import { onAuthStateChanged } from 'firebase/auth';
import React, {createContext, useEffect, useReducer} from 'react';
import { auth } from '../Config/firebase';

export const AuthContext = createContext()

const initialState = {isAuthentication: false}
const reducer = ((state, action)=>{
switch (action.type){
 case "LOGIN":
 return {isAuthentication: true, user: action.payload.user}
 case "LOGOUT":
return {isAuthentication: false}
default:
   return state
}
})
export default function AuthContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log('User is signed In')
          // ...
          dispatch({type:"LOGIN", payload:{user}})
        } else {
          console.log('User is signed out')
          // ...
        }
      })
    }, [])

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
     {props.children}
    </AuthContext.Provider>
  )
}
