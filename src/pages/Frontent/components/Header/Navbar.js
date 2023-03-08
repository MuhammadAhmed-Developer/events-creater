import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import logo from '../../../../assects/images/logo192.png';
import { Link } from 'react-router-dom';
import { auth } from '../../../../Config/firebase';
import { signOut } from 'firebase/auth';

export default function Navbar() {


  const [bgColor, setBgColor] = useState('')
  const [transition, setTransition] = useState('')


  const handleScroll = () =>{
    const position = window.pageYOffset;
    if(position > 100){
     setBgColor ('black')
     setTransition('1s')
    }else{
      setBgColor('transparent')
      
    }
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll, {position: true})

    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])



   const {isAuthentication, dispatch} = useContext(AuthContext)

    

   const handleLogout = () =>{
    
    signOut(auth)
    .then(()=>{
      dispatch({type: 'LOGOUT'})
    })
      .catch((err)=>{
      console.log(err)
    })
    


   }

  return (
    <div>
      <nav style={{backgroundColor: bgColor, transition: transition }} className="navbar  navbar-expand-lg  navbar-dark fixed-top">
  <div className="container">
    <Link to='/' className="navbar-brand"><img src={logo} alt="logo" className='img-fluid logo-img mb-3' /><span className='fw-bolder fs-2 ms-2'>Wemeet</span></Link>
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
        <li className="nav-item">
          <Link to='/seeevents' className="nav-link me-4" href="#">See Events</Link>
        </li>
        <li className="nav-item ">
          {!isAuthentication ?  <></>
          : 
          <Link to='/myevents' className="nav-link me-4 ">My Events</Link>
         
        }

        </li>
      </ul>
      <div className="d-flex" role="search">
        {!isAuthentication ? 
         <Link to='/authentication/signup' className="btn btn-outline-light py-3 px-4 rounded-0"> Sign Up Now</Link>
         :
         <button className='btn btn-outline-light px-5 py-3 rounded-0' onClick={handleLogout}>Log Out</button> 
      }
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
