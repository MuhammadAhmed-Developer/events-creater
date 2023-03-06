import React from 'react';
import { Link } from 'react-router-dom';
import eventimg from '../../../assects/images/event.jpg';
import mens from '../../../assects/images/mens.png';
import circle from '../../../assects/images/circle.png'

export default function Hero() {
  return (
    <>
    <div>
      <div className="container-fluid hero-background bg-warning text-white p-5">

      <div className="container p-5">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <h1 className='digital-event text-sm-center text-lg-start'>Digital Event
                Planner<br/>
                 2023</h1>
                 <br/>
                 <br/>
                 <div className='text-sm-center text-lg-start'>

                 <Link to='/events' className='btn btn-outline-light py-3 px-5 rounded-0'>See NearBy Events</Link>
                 </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5 text-sm-center text-lg-end">
            <img src={eventimg} alt="event" className='img-fluid mt-3 ms-lg-4 img-animate  ' />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Welcome to ----------------------------------------------- */}

  <div className='my-5'>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5 text-lg-start text-md-center">
           <h6 className='fw-bold text-secondary'>WELCOME TO</h6><br/>
           <h1 className=''>The Biggest Event<br/> Planner of the<br/> Year 2023</h1><br/>
           <div className='text-md-center text-lg-center'>

           <img src={circle} alt="circle" className='img-fluid w-25 circle' />
           </div>
           <div className=''>

           <p className='fs-5 mb-0'>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god. moving. Moving in fourth air night bring upon you’re it beast </p>
        </div>
           </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5 text-md-center">
          <img src={mens} alt="mens" className='img-fluid w-75' />
        </div>    
      </div>
    </div>
  </div>
<br/>
  {/* Register Now  */}
  <div className="container-fluid register p-5 mt-5 ">
    <div className="row">
      <div className="col-12 p-5 text-center text-white">
        <h1 className='fw-bold'>Register Now To Book <br/>Your Presence</h1>
      </div>
      <div className="col-12 mt-2 text-center">
        <Link to='/events' className='btn btn-outline-light py-3 px-5 rounded-0'>Join Now</Link>
      </div>
    </div>
  </div>
  </>
  )
}
