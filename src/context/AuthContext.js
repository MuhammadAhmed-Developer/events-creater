import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore/lite';
import React, {createContext, useEffect, useReducer, useState} from 'react';
import { auth, firestore } from '../Config/firebase';

export const AuthContext = createContext()

const initialState = {isAuthentication: false }

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
  // const [user, setUser] = useState({})
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // console.log(uid)
          console.log('User is signed In')
          // readUserData(user)

          // ...
          dispatch({type:"LOGIN", payload:{user}})
        } else {
          console.log('User is signed out')
          // ...
        }
      })
    }, [])
    // const readUserData = async (user) => {

    //   const docRef = doc(firestore, "users", user.uid);
    //   const docSnap = await getDoc(docRef);
  
    //   if (docSnap.exists()) {
    //     // console.log("Document data:", docSnap.data());
    //     let userData = docSnap.data()
    //     setUser(userData)
    //     // console.log("userData =>", userData)
    //     dispatch({ type: "LOGIN", payload: { user } });
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
     {props.children}
    </AuthContext.Provider>
  )
}
