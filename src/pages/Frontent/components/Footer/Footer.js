import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

  const year = new Date(). getFullYear()

  return (
    <div className='footer bg-dark text-white p-5'>
     <div className="container">
        <div className="row mt-4">
            <div className="col-lg-4 col-md-4 col-sm-6 ">
                <ul className=''>
                  <h3 className='fw-bold mb-5'>Follow Us</h3>
                    <li className='mb-4'><a href="https://www.facebook.com/MuhammadAhmedjee" target='_blank' className='text-decoration-none text-white'>Facebook</a></li>
                    <li className='mb-4'><a href="https://twitter.com/Muhammad__1122" target='_blank' className='text-decoration-none text-white'>Twitter</a></li>
                    <li className='mb-4'><a href="https://www.instagram.com/muhammad_ahmed0011/" target='_blank' className='text-decoration-none text-white'>Instagram</a></li>
                    <li className='mb-4'><a href="https://www.youtube.com/channel/UCaLHw5befr8haWH_XQQVOvA" target='_blank' className='text-decoration-none text-white'>Youtube</a></li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
                <ul className=''>
                  <h3 className='fw-bold mb-5'>Links</h3>
                    <li className='mb-4'><Link to='/events'  className='text-decoration-none text-white'>Schedule</Link></li>
                    <li className='mb-4'><Link to='/contact' className='text-decoration-none text-white'>Contact</Link></li>
                  
                    
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
                <ul className=''>
                  <h3 className='fw-bold mb-5'>Venue</h3>
                    <li className='mb-4'>200, D-block, Green lane USA</li>
                    <li className='mb-4'><a href="mailto:muhammadahmedite@gmail.com" className='text-decoration-none text-white'>muhammadahmedite@gmail.com</a></li>
                    <li className='mb-4'><a href="tel:03190230242"  className='text-decoration-none text-white'>+92 3190230242</a></li>
                    
                </ul>
            </div>
        </div>
     </div>
     <div className="container">
       <div className="row mt-5">
         <hr />
         <p className='mb-0 text-center fw-bold'>&copy; {year} All Right Reserved By 💛 Muhammad Ahmed </p>
       </div>
     </div>
    </div>
  )
}
