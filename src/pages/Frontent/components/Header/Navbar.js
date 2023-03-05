import React, { useContext } from 'react';
import logo from '../../../../assects/images/logo192.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';

export default function Navbar() {

  //  const {state} = useContext(AuthContext)

  //  const {IsAuthenticated} = state
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link to='/' className="navbar-brand"><img src={logo} alt="logo" className='img-fluid logo-img mb-1' /><span className='fw-bolder fs-3 ms-2'>Wemeet</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active me-4" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/events' className="nav-link me-4">Events</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link me-4" href="#">Contact</Link>
        </li>
        <li className="nav-item ">
          {!IsAuthenticated ? 
          <Link to='/my-events' className="nav-link me-4 " href="#">My Events</Link>
          :
          <></>
        }

        </li>
      </ul>
      <div className="d-flex" role="search">
        {!IsAuthenticated ? 
         <Link to='/signup' className="btn btn-outline-light p-3 rounded-0"> Sign Up Now</Link>
         :
         <button className='btn btn-outline-light p-3 rounded-0'>Log Out</button> 
      }
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
