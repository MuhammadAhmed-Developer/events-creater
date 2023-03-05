import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
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

              <Link className='btn btn-outline-light py-2 px-3 rounded-0'>Go To Events</Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 mt-5">
              <div class="card bg-secondary">
                <div class="card-body">
                  <h1 className='text-center mb-3'>Add Events</h1>
                  <div className="row mb-3">
                    <div className="col">
                      <textarea name=""  className='form-control'  placeholder='Description'></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <input type="text" name="" className='form-control' placeholder='Enter Title' />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="" className='form-control' placeholder='Location' />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <input type="time" className='form-control ' placeholder='00' />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <input type="date" className='form-control ' placeholder='' />
                    </div>
                  </div>
                  <div className='text-center'>

                  <a href="#" class="btn btn-primary w-50 ">Add Event</a>
                  </div>
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
