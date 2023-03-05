import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
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

              <Link className='btn btn-outline-light py-2 px-3 rounded-0'>Go To Events</Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 mt-5">
              <div class="card bg-dark">
                <div class="card-body">
                  <h1>In Touch</h1>
                  <div className="row mb-3">
                    <div className="col">
                      <textarea name=""  className='form-control'  placeholder='Your Query'></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                      <input type="text" name="" className='form-control' placeholder='Enter Your Name' />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-sm-3 mt-lg-0 mt-md-0">
                      <input type="email" name="" className='form-control' placeholder='Enter Your Email' />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input type="text" className='form-control ' placeholder='Subject' />
                    </div>
                  </div>
                  <div className='text-center'>

                  <a href="#" class="btn btn-info w-50 ">Send</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
