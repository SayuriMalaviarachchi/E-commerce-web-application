import React from "react";
import RegisterImg from "../assets/register/download (7).jpeg"; // Adjust the path as necessary

const Register = () => {
  return (
    <div className="bg-[#CAC7BF] min-h-screen grid grid-cols-12 items-center">
      <div className="col-span-10 md:col-span-10  lg:col-span-8  col-start-2 lg:col-start-3 md:col-start-2 h-max bg-white rounded-2xl p-8 md:p-8 grid grid-cols-2 md:grid-cols-10 lg:grid-cols-6 gap-7 mt-4 ">
        <div className="col-span-2 md:col-span-5 lg:col-span-3">
          <div className="text-[33px] font-bold pb-1 text-[#223531] text-center">Sign Up</div>
          <div className="pb-3 text-[#78746D] text-center">Welcome, Let's start with some facts about you</div>
          <div className="flex gap-3 pb-3 ">

            <div className="w-full">
              <p className="text-[13px] text-[#78746D]">Firstname</p>
              <input
                className="bg-[#E6E3DB] h-9 rounded-lg p-2 shadow-lg w-full"
                type="text"            
              />
            </div>

            <div className="w-full">
                <p className="text-[13px] text-[#78746D]">Lastname</p>
              <input
                className="bg-[#E6E3DB] h-9 rounded-lg p-2 shadow-lg w-full"
                type="text"        
              />
            </div>
          </div>

          <div className="pb-3">
            <p className="text-[13px] text-[#78746D]">E-mail</p>
            <input
              className="bg-[#E6E3DB] h-9 rounded-lg p-2 shadow-lg w-full"
              type="email"
            />
          </div>

          <div className="pb-3">
             <p className="text-[13px] text-[#78746D]">Password</p>
            <input
              className="bg-[#E6E3DB] h-9 rounded-lg p-2 shadow-lg w-full"
              type="password"        
            />

          </div>
          <div className="pb-3">
            <p className="text-[13px] text-[#78746D]">Re-enter password</p>
            <input
              className="bg-[#E6E3DB] h-9 rounded-lg p-2 shadow-lg w-full"
              type="password"              
            />

          </div>
          <div className="pb-3">
            <p className="text-[13px] text-[#78746D]">Phone</p>
            <input
              className="bg-[#E6E3DB] h-9 rounded-lg p-2 shadow-lg w-full"
              type="number"
            />
          </div>

          {/* <div className="flex justify-end text-[14px]">Forget password ?</div> */}
          <button className="w-full h-9 rounded-lg bg-[#223531] text-white mt-3 active:translate-y-0.5 cursor-pointer hover:bg-[#2c423c] shadow-xl font-bold ">Sign up</button>
          <div className="pt-4 text-sm text-center text-[#78746D]">Already have an account? <a href=""><u>Login</u></a></div>
        </div >
        
        <div className="col-span-2 md:col-span-5 lg:col-span-3 hidden md:block">< img className="w-full h-130 rounded-xl" src={RegisterImg} /></div>
      </div>
    </div>
  );
};

export default Register;
