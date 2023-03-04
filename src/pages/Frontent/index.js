import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Home from './Home'

export default function index() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>

        </Route>
    </Routes>
    </main>
    <Footer/>
    </>
  )
}
