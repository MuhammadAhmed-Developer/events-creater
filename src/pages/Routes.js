import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from './Frontent'
import Footer from './Frontent/components/Footer/Footer'

export default function index() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/*' element={<Frontend/>}/>
     </Routes>
    </BrowserRouter>
    
    </>
  )
}
