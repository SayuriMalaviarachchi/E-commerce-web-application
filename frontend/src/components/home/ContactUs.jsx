import React from 'react'

const ContactUs = () => {
  return (
    <div className='container mx-auto grid bg-[#CAC7BF] '>
        <div className='text-[#223531] text-center text-2xl font-bold col-span-10 mt-3'>ContactUs</div>

        <div className='mb-4 col-span-6 col-start-3'>
            <div className='text-sm font-bold text-[#223531] mb-1.5'>E-mail</div>
            <div>< input  className='bg-white border-0 shadow-2xl rounded-lg h-8 w-full' type = 'email'/></div>
        </div>

        <div className='mb-3 col-span-6 col-start-3'>
            <div className='text-sm font-bold text-[#223531] mb-1.5'>Message</div>
            <div><textarea className='bg-white w-full rounded-lg shadow-2xl ' name="" id="" rows="8"></textarea></div>
        </div>

        <div className='col-span-6 col-start-3'>
            <button className=' w-full h-9 rounded-lg bg-[#223531] text-white mt-3 active:translate-y-0.5 cursor-pointer  hover:bg-[#2c423c] font-bold shadow-xl mb-4'>Submit</button>
        </div>

    </div>
  )
}

export default ContactUs