import React from 'react'

const ContactUs = () => {
  return (
    <div className='bg-[#bbb8b0]  pt-9 pb-10'>
      <div className='container mx-auto grid '>
        <div className='text-[#223531] text-center sm:text-4xl font-bold col-span-10 mt-3'>Contact Us</div>

        <div className='mb-4 col-span-6 col-start-3'>
            <div className='text-[10px] sm:text-[10px] md:text-[15px] font-bold text-[#223531] mb-1.5'>E-mail</div>
            <div>< input  className='bg-[#bbb8b0] border-1 shadow-2xl rounded-lg h-10 w-full' type = 'email'/></div>
        </div>

        <div className='mb-3 col-span-6 col-start-3'>
            <div className='text-[10px] sm:text-[15px] md:text-[15px]  font-bold text-[#223531] mb-1.5'>Message</div>
            <div><textarea className='bg-[#bbb8b0] w-full rounded-lg shadow-2xl border-1' name="" id="" rows="8"></textarea></div>
        </div>

        <div className='col-span-6 col-start-3'>
            <button className=' w-full h-10 rounded-lg bg-[#223531] text-white mt-3 active:translate-y-0.5 cursor-pointer  hover:bg-[#2c423c] font-bold shadow-xl mb-4'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs