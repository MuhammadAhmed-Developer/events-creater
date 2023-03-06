import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialstate ={
  description:'',
  title:'',
  location:'',
  time:'',
  date:'',
}

export default function Contact() {

const [state, setState] = useState(initialstate)
const [isProcessing, setIsProcesssing] = useState(false)

const handleChange = (e) => {
   setState(s=>({...s,[e.target.name]: e.target.value}))
}

const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(state)
}

  return (
    <>
    <div>
      <div className="container-fluid hero-background bg-warning text-white p-5">
        
        <div className="container p-lg-5 p-sm-2 p-md-4">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
              <h1 className='digital-event text-center text-lg-start'>Your Events<br />
              </h1>
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
                    <div className="col-lg-6 col-md-6 col-sm-12">
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
    <div className="container">
      <div className="row">
        <div className="col">
           <h1 className='text-center fw-bold text-warning'>Your Events</h1>
        </div>
      </div>
    </div>
  </>
  )
}
