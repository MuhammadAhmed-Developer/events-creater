import React, { useContext, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../../Config/firebase'
import { firestore } from '../../../Config/firebase'
import { doc, setDoc } from 'firebase/firestore/lite'
import { AuthContext } from '../../../context/AuthContext'


const initialstate = {
  displayName:'',
  email:'',
  password:'',
}

export default function SignUp() {

const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  const[state, setState] = useState(initialstate)
  const [isProcessing, setIsProcesssing] = useState(false)

  const handleChange  =(e) =>{
    setState(s=>({...s,[e.target.name]:e.target.value}))
  } 

  const handleSubmit= (e) =>{
    e.preventDefault()
    console.log(state)

    const {email, password} = state

    setIsProcesssing(true)

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    addProfile(user)
    console.log(user)
    console.log("User Created")
    // ...
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.notify("Something went wrong", 'error')
    setIsProcesssing(false)
    // ..
  });

  const addProfile= async (user)=>{
    try{
      await setDoc(doc(firestore, "users", user.uid), {
        name: state.displayName,
        email:user.email,
        uid: user.uid
      });
      console.log('user Document created at firestore' )
      dispatch({type:"LOGIN", payload:{user}})
    }catch(err){
       console.log(err)
       window.notify("Something went wrong", 'error')
    
  }
  setIsProcesssing(false)
  }
    

  }
  
  return (
    <div className='auth'>
       <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
             <div className="card border-0 bg-light shadow p-2 p-md-3 p-lg-4">
               <div className="row">
                <div className="col">
                   <h3 className='mb-4 fw-bold'>Sign Up Now</h3>
                </div>
               </div>
              <form onSubmit={handleSubmit} >
              <div className="row mb-3">
                <div className="col">
                   <label htmlFor="text">User Name</label>
                  <input type="text" className='form-control' placeholder='Enter Username'  name='displayName' onChange={handleChange} />
                </div>
               </div>
              <div className="row mb-3">
                <div className="col">
                   <label htmlFor="email">Email</label>
                  <input type="email" className='form-control' placeholder='Enter Your Email'  name='email' onChange={handleChange} />
                </div>
               </div>
               <div className="row mb-4">
                <div className="col">
                   <label htmlFor="password">password</label>
                  <input type="password" className='form-control' placeholder='Enter Your password'  name='password' onChange={handleChange}/>
                </div>
               </div>
               <div className="row mb-4">
                <div className="col">
                  <button className='btn btn-primary w-100' disabled={isProcessing}> 
                  {!isProcessing ? 'Sign Up' : 
                  <div className='spinner-border spinner-border-sm'></div>
                  }
                   </button>
                </div>
               </div>
              </form>
               <div className="row">
                <div className="col">
                  <p className="mb-0 text-center">Already have  an Account? <Link to='/authentication/signin' className=''>SignIn</Link></p>
                </div>
               </div>
             </div>
          </div>
        </div>
       </div>
    </div>
  )

}
