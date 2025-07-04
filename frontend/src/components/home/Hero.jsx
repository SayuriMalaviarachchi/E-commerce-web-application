import React from 'react'
import HeroImg from '../../assets/home/heroSection/herolast.png' ; // Adjust the path as necessary
const Hero = () => {
  return (
    <div
      className="h-[500px] bg-cover bg-center flex flex-col justify-center items-center p-3 "
      style={{ backgroundImage: `url(${HeroImg}) `}}
    >
      <div className=' text-[20px] md:text-[30px] lg:text-[50px]  text-[#223531] font-extrabold '>StyleNest</div>
      <div className='text-[10px] md:text-[15px] lg:text-[20px] text-center text-[#223531] font-extrabold '>Explore the collection</div>
        
    </div>
  )
}

export default Hero