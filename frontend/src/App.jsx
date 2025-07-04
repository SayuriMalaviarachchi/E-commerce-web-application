//import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Hero from './components/home/Hero'
import ContactUs from './components/home/ContactUs'
import Products from './components/home/Products'
import Home from './pages/Home'
import LimitedEdition from './components/home/LimitedEdition'
import AboutUs from './components/home/AboutUs'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path = '/register' element = {<Register/>}   />
        <Route path = '/login' element = {<Login/>}   />
        <Route path = '/hero' element = {<Hero/>} />
        <Route path = '/contactUs' element = {<ContactUs/>} />
        <Route path = '/products' element = {<Products/>} />
        <Route path = '/home' element = {<Home/>} />
        <Route path ='/limited' element = {<LimitedEdition/>} />
        <Route path ='/aboutUs' element = {<AboutUs/>} />
        
      </Routes>
      
    </Router>
  )
}

export default App
