import React from 'react'
import tops from '../assets/productCard/top1.jpeg'
const ProductCard = ({product}) => {
  return (
    <div className='w-[300px] h-[380px] rounded-lg'>
        <div  className='w-[300px] h-[320px] '> <img src={tops} alt=""  className='w-[300px] h-[320px] bg-cover bg-center rounded-t-lg' /></div>
         <div className='h-[30px] flex justify-between items-center px-2 font-bold text-[#223531] text-sm'>
            <div className=''>{product.name}</div>
            <div className=''>LKR.{product.price}</div>
         </div>
        
        

    </div>
  )
}

export default ProductCard