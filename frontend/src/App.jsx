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
import WomenSection from './pages/WomenSection'
import ProductCard from './components/ProductCard'
import ProductsAll from './pages/ProductsAll'
import SingleProduct from './pages/SingleProduct'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path = '/register' element = {<Register/>}   />
        <Route path = '/login' element = {<Login/>}   />        
        <Route path = '/' element = {<Home/>} />
        <Route path = '/menS' element = {<MenSection/>} />
        <Route path = '/womenS' element = {<WomenSection/>} />
        <Route path = '/productCard' element = {<ProductCard/>} />
        <Route path = '/productsAll' element = {<ProductsAll/>} />
        <Route path = '/singleProduct' element = {<SingleProduct/>} />
        
      </Routes>
      
    </Router>
  )
}

export default App
