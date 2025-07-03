import React from 'react'
import HeroImg from '../../assets/home/heroSection/h10.png' ; // Adjust the path as necessary
const Hero = () => {
  return (
    <div
      className="h-[500px] bg-cover bg-center flex flex-col justify-center items-center p-3"
      style={{ backgroundImage: `url(${HeroImg}) `}}
    >
      <div className='font-bold text-[30px] sm:text-[50px] md:text-[70px]  text-white  '>StyleNest</div>
      <div className='text-[10px] sm:text-[15px] md:text-[20px] text-center text-white '>Discover fashion that fits your vibe.From every day essentials to statement peices,<br></br>StyleNest brings you trendy,affordable clothing.</div>
        
    </div>
  )
}

export default Hero