import React, { useContext, useState } from 'react'
import { async } from '@firebase/util'
import {setDoc, doc, serverTimestamp } from 'firebase/firestore/lite'
import { Link } from 'react-router-dom'
import { firestore } from '../../../Config/firebase'
import { AuthContext } from '../../../context/AuthContext'

const initialstate ={
  description:'',
  title:'',
  location:'',
  price:'',
  time:'',
  date:'',
}

export default function Contact() {
const {user,isAuthentication} = useContext(AuthContext)
const [state, setState] = useState(initialstate)
const [isProcessing, setIsProcesssing] = useState(false)

const handleChange = (e) => {
   setState(s=>({...s,[e.target.name]: e.target.value}))
}

const handleSubmit = (e) =>{
  e.preventDefault()
  

  let {description,title,location,price,time,date} = state
  
  description = description.trim()
  title= title.trim()
  location = location.trim()
  
  if(description.length < 10){
    return window.notify('Please Enter Description Correctly!', 'error')
  }
  if(title.length < 3){
    return window.notify('Please Enter Title Correctly!', 'error')
  }
  if(!price){
    return window.notify('Please Enter Price!', 'error')
  }
  if(location.length < 3){
    return window.notify('Please Enter Location Correctly!', 'error')
  }
  if(!time){
    return window.notify('Please Enter Time!', 'error')
  }
  if(!date){
    return window.notify('Please Enter Date!', 'error')
  }
if(!isAuthentication){
  return window.notify('Please Sign Up!', 'error')
}
  let eventData = {description,title,price,location,time,date:[]}

  eventData.dateCreated = serverTimestamp()
  eventData.id= Math.random().toString(36).slice(2);
  eventData.createdBy={
    
    email: user.email,
    uid:user.uid,
    displayName: user.displayName
  }

  createEvent(eventData)

}

const createEvent = async (eventData) => {
  setIsProcesssing(true)
try{
  await setDoc(doc(firestore, "events", eventData.id), eventData);
  window.notify('Event has been sucessfully added', 'success')
}catch(err){
  window.notify("Something went went wrong, Event isn't added.", "error")
  console.log(err)
}

 setIsProcesssing(false)
 
 console.log(createEvent())
 
}

  return (
    <>
    <div>
      <div className="container-fluid hero-background bg-warning text-white p-5">
        
        <div className="container p-lg-5 p-sm-2 p-md-4">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-12 col-sm-12 mt-5 d-flex flex-column align-items-center justify-content-center">
              <h6 className='digital-event text-center fs-1 text-lg-start'>Your Events <a href="#yourEvents " className='fs-1 text-decoration-none'>🔰</a> <br />
              </h6>
              <br />
              <br />
              <div className=' text-center text-md-center text-lg-start'>

              <Link to='/events' className='btn btn-outline-light py-2 px-3 rounded-0'>Go To Events</Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 mt-5">
              <div className="card bg-secondary">
                <div className="card-body">
                  <h1 className='text-center mb-3'>Add Events</h1>
                 <form onSubmit={handleSubmit}>
                 <div className="row mb-3">
                    <div className="col">
                      <textarea name="description"  className='form-control'  placeholder='Description' onChange={handleChange}></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <input type="text" name="title" className='form-control' placeholder='Enter Title'  onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <input type="number" name="price" className='form-control' placeholder='Ticket Price in $'  onChange={handleChange} />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <input type="text" name="location" className='form-control' placeholder='Location'  onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <input type="time" name='time' className='form-control ' placeholder='00'  onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <input type="date" name='date' className='form-control ' placeholder=''  onChange={handleChange}/>
                    </div>
                  </div>
                  <div className='text-center'>

                  <button className="btn btn-warning w-50 " disabled={isProcessing}>
                  {!isProcessing ?
                  'Add Event'  : <div className='text-white spinner-grow spinner-grow-sm'></div>}
                  
                  </button>
                  </div>
                 </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container" >
      <div className="row">
        <div className="col">
           <h1 className='text-center fw-bold text-warning' id='yourEvents'>Your Events</h1>
        </div>
      </div>
    </div>
  </>
  )
}
