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
import MenSection from './pages/MenSection'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path = '/register' element = {<Register/>}   />
        <Route path = '/login' element = {<Login/>}   />        
        <Route path = '/' element = {<Home/>} />
        <Route path = '/menS' element = {<MenSection/>} />
        
        
      </Routes>
      
    </Router>
  )
}

export default App
