import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Home from './Home'
import Events from './Events/Events'
import Contact from './Contact/Contact'
import MyEvents from './MyEvents/MyEvents'

export default function index() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/myevents' element={<MyEvents/>}/>

        </Route>
    </Routes>
    </main>
    <Footer/>
    </>
  )
}
