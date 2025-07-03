//import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Hero from './components/home/Hero'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path = '/register' element = {<Register/>}   />
        <Route path = '/login' element = {<Login/>}   />
        <Route path = '/hero' element = {<Hero/>} />
      </Routes>
      
    </Router>
  )
}

export default App
