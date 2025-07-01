import React from 'react'
import LoginImg from "../assets/login/download (8).jpeg"; 

const Login = () => {
  return (
    <div className="bg-[#CAC7BF] min-h-screen grid grid-cols-12 items-center">
      <div className="col-span-10 md:col-span-10  lg:col-span-8  col-start-2 lg:col-start-3 md:col-start-2 h-max bg-white rounded-2xl p-8 md:p-8 grid grid-cols-2 md:grid-cols-10 lg:grid-cols-6 gap-7 mt-4 items-center shadow-xl">
        <div className="col-span-2 md:col-span-5 lg:col-span-3">
          <div className="text-[36px] font-bold pb-1 text-[#223531] text-center">Sign In</div>
         <div className="pb-2 text-[#78746D] text-center text-xl">Welcome back to our site !!!</div>
          
          <div className="pb-3">
            <p className="text-[13px] text-[#78746D]">E-mail</p>
            <input
              className="bg-[#E6E3DB] h-9 rounded-lg p-2 shadow-lg w-full"
              type="email"
            />
          </div>

          <div className="pb-3">
             <p className="text-[13px] text-[#78746D] ">Password</p>
            <input
              className="bg-[#E6E3DB] h-9 rounded-lg p-2 shadow-lg w-full"
              type="password"        
            />          
          <div className="flex justify-end text-[14px] pt-2 text-[#78746D]">Forget password ?</div>
          <button className="w-full h-9 rounded-lg bg-[#223531] text-white mt-3 active:translate-y-0.5 cursor-pointer  hover:bg-[#2c423c] font-bold shadow-xl">Sign In</button>
          <div className="pt-5 text-sm text-center text-[#78746D]">Don't you have an account? <a href=""><u>Sign Up</u></a></div>
        </div > 
      </div>



      <div className="col-span-2 md:col-span-5 lg:col-span-3 hidden md:block">< img className="w-full h-130 rounded-xl" src={LoginImg} /></div>
    </div>
 </div>
  )
}

export default Login