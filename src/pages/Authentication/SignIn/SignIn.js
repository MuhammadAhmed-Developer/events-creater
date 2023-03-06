import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const initialstate = {
  email:'',
  passward:'',
}

export default function SignIn() {

  const [state, setState] = useState(initialstate)
const [isProcessing, setIsProcesssing] = useState(false)
  const handleChange = (e) =>{
    setState(s=>({...s,[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) =>{
   e.preventDefault()
   console.log(state)
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
                  {!isProcessing ? 'Sign In' : <div className='spinner-border spinner-border-sm'></div>}
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
