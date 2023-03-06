import React from 'react'
import { Link } from 'react-router-dom';
import eventsection from '../../../assects/images/company-event.png';
export default function Events() {
  return (
    <>
      <div>
        <div className="container-fluid hero-background bg-warning text-white p-5">

          <div className="container p-5">
            <div className="row mt-5">
              <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                <h1 className='digital-event text-sm-center text-lg-start'>Events Schedule<br />
                  2023</h1>
                <br />
                <br />
                <div className=' text-center text-lg-start'>

                  <Link to='/myevents' className='btn btn-outline-light py-3 px-4 rounded-0'>Add Your Event</Link>
                </div>


              </div>
              <div className="col-lg-12 col-md-12 col-sm-12  text-sm-center text-lg-end">
                <img src={eventsection} alt="event" className='img-fluid mt-3 w-75 ms-lg-4' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nearby Events */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="fw-bold text-warning">
              Nearby Events

            </h1>
          </div>
        </div>
      </div>

    </>
  )
}
