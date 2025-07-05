import React, { useRef } from "react";
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import ContactUs from '../components/home/ContactUs'
import LimitedEdition from '../components/home/LimitedEdition'
import AboutUs from '../components/home/AboutUs'
import MarqueeBanner from '../components/home/MarqueeBanner'
import Footer from '../components/Footer'

function Home() { 
  const contactRef = useRef(null); // <-- Step 1: create ref

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Hero/>
      <MarqueeBanner/>
      <Products/>
      
      <AboutUs/>
      <LimitedEdition/>      
      <ContactUs ref={contactRef}/>
      <Footer onContactClick={scrollToContact}/>
    </div>
    
  )
}

export default Home