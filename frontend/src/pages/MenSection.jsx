import React from "react";
import HeroImg from '../assets/menSection/hero11.png'
import Trouser from '../assets/menSection/1111.png'
import Tshirt from '../assets/menSection/11111.png'
import Footer from '../components/Footer'
const MenSection = () => {
  return (
    
    <div>
      <div
        className="h-[500px] bg-cover bg-center flex flex-col justify-center items-center p-3 "
        style={{ backgroundImage: `url(${HeroImg}) ` }}
      >
        <div className=" text-[20px] md:text-[30px] lg:text-[50px]  text-[#223531] font-extrabold ">
          Welcome to Men's Collection
        </div>
        <div className="text-[10px] md:text-[15px] lg:text-[20px] text-center text-[#223531] font-extrabold ">
          Explore the collection
        </div>
      </div>
      <div className="bg-[#CAC7BF]">
        <div className="lg:container mx-auto pt-10 pb-12">
          <div className="grid md:grid-cols-12 grid-cols-8 lg:gap-22 gap-10 md:p-0 p-3">
            <div
              className="col-span-8 md:col-span-5 md:col-start-2 col-start-1 bg-cover bg-center font-extrabold text-xl sm:text-3xl text-[#223531] rounded-2xl md:p-4 p-2 cursor-pointer transform transition hover:scale-101"
             
            ><div><img src={Tshirt}  className="h-140 w-[100%] rounded-t-2xl" alt="" /></div>
            
            <div className="h-20 bg-[#9e9b95]  flex justify-center items-center rounded-b-2xl">Shirts</div>
              
            </div>
            <div
              className="col-span-8 md:col-span-5 md:col-start-7 col-start-1 h-150 bg-cover bg-center font-extrabold text-xl sm:text-3xl text-[#223531] rounded-2xl md:p-4 p-2 cursor-pointer transform transition hover:scale-101"
              ><div><img src={Trouser}  className="h-140 w-[100%] rounded-t-2xl" alt="" /></div>
            <div className="h-20 bg-[#9e9b95] flex justify-center items-center rounded-b-2xl">Trouser</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MenSection;
