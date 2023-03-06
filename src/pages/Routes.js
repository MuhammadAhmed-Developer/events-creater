import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Frontend from './Frontent';
import Authentication from './Authentication';
import PrivateRoute from '../Config/PrivateRoute';
import MyEvents from './Frontent/MyEvents'
import { AuthContext } from '../context/AuthContext';
import Header from "./Frontent/components/Header";
import Footer from './Frontent/components/Footer/Footer';

export default function Index() {

  const {isAuthentication,user} = useContext(AuthContext)
  return (
    <>
    <BrowserRouter>
        <Header/>
     <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='/authentication/*' element={!isAuthentication ? <Authentication/> : <Navigate to='/'/>} />
        <Route path='/myevents/*' element={<PrivateRoute Component={MyEvents}/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    
    </>
  )
}
