import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const initialstate = {
  query:'',
  name:'',
  email:'',
  subject:'',
}

export default function Contact() {
 

  const [state, setState] = useState(initialstate)

  const handleChange = (e) =>{
    setState(s=>({...s,[e.target.name]:e.target.value}))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    let {query, name, email,subject}= state
    query = query.trim()
    name= name.trim()
    email= email.trim()
    subject= subject.trim()

    if(query.length < 10){
       return window.notify('Please Enter Query Correctly', 'error')
    }
    if(name.length<3){
    return window.notify('Please Enter Name', 'error')
    }
    if(email.length<7){
    return window.notify('Please Enter Email', 'error')
    }
    if(subject.length<3){
    return window.notify('Please Enter Subject', 'error')
    }
        console.log(state)
  window.notify('Thanks For Contact', 'success') 

  }

  return (
    <div>
      <div className="container-fluid hero-background bg-warning text-white p-5">

        <div className="container p-lg-5 p-sm-2 p-md-4">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
              <h1 className='digital-event text-center text-lg-start'>Get In Touct<br />
              </h1>
              <br />
              <br />
              <div className=' text-center text-lg-start'>

              <Link to='/events' className='btn btn-outline-light py-2 px-3 rounded-0'>Go To Events</Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 mt-5">
              <div className="card bg-dark">
                <div className="card-body">
                  <h1>In Touch</h1>
                  <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col">
                      <textarea name="query"  className='form-control'  placeholder='Your Query' onChange={handleChange}></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                      <input type="text" name="name" className='form-control' placeholder='Enter Your Name' onChange={handleChange}  />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-sm-3 mt-lg-0 mt-md-0">
                      <input type="email" name="email" className='form-control' placeholder='Enter Your Email' onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input type="text" name='subject' className='form-control ' placeholder='Subject' onChange={handleChange} />
                    </div>
                  </div>
                  <div className='text-center'>

                  <button className="btn btn-info w-50 ">Send</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
