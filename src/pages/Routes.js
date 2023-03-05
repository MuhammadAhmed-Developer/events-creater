import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frontend from './Frontent';
import Authentication from './Authentication';

export default function index() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='/authentication/*' element={<Authentication/>} />
     </Routes>
    </BrowserRouter>
    
    </>
  )
}
