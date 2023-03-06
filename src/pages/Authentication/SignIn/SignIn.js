import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { auth } from '../../../Config/firebase';
import { AuthContext } from '../../../context/AuthContext';


const initialstate = {
  email:'',
  passward:'',
}

export default function SignIn() {

  const {dispatch} =  useContext(AuthContext)
  const navigate = useNavigate()
  const [state, setState] = useState(initialstate)
const [isProcessing, setIsProcesssing] = useState(false)
  const handleChange = (e) =>{
    setState(s=>({...s,[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) =>{
   e.preventDefault()
   const {email, passward} = state
   setIsProcesssing(true)
   signInWithEmailAndPassword(auth, email, passward)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    dispatch({type:"LOGIN", payload:{user}})
navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.notify('You are not currently Sing Up Please Sign Up!', 'error')
  }).finally(()=>{
    setIsProcesssing(false)

  })
  setIsProcesssing(true)
  }

  return (
    <div className='auth'>
       <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
             <div className="card border-0 shadow p-2 p-md-3 p-lg-4">
               <div className="row">
                <div className="col">
                   <h3 className='mb-4 fw-bold'>Sign In Now</h3>
                </div>
               </div>
              <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                   <label htmlFor="email">Email</label>
                  <input type="email" className='form-control' placeholder='Enter Your Email'  name='email'  onChange={handleChange} />
                </div>
               </div>
               <div className="row mb-4">
                <div className="col">
                   <label htmlFor="passward">Passward</label>
                  <input type="password" className='form-control' placeholder='Enter Your Passward'  name='passward' onChange={handleChange}/>
                </div>
               </div>
               <div className="row mb-4">
                <div className="col">
                  <button className='btn btn-warning w-100' disabled={isProcessing} > 
                  {!isProcessing ? 'Sign In' : 
                  <div className='spinner-border spinner-border-sm'></div>}
                   </button>
                </div>
               </div>
              </form>
               <div className="row">
                <div className="col">
                  <p className="mb-0 text-center">Need an Account? <Link to='/authentication/signup' className=''>SignUp</Link></p>
                </div>
               </div>
             </div>
          </div>
        </div>
       </div>
    </div>
  )
}
