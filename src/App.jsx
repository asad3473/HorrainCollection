import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import './App.css'
import ContactUs from './Pages/Contact'
import ScrollToTop from './Pages/ScrollToTop'

export default function App() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}
