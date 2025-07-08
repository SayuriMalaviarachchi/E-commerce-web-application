import React from 'react'
import tops from '../assets/productCard/top1.jpeg'
const ProductCard = () => {
  return (
    <div className='w-[300px] h-[380px] rounded-lg'>
        <div  className='w-[300px] h-[320px] '> <img src={tops} alt=""  className='w-[300px] h-[320px] bg-cover bg-center rounded-t-lg' /></div>
         <div className='h-[30px] flex justify-between items-center px-2 font-bold text-[#223531] text-sm'>
            <div className=''>Fitted Long Sleeve Tee</div>
            <div className=''>6847</div>
         </div>
        
        

    </div>
  )
}

export default ProductCard