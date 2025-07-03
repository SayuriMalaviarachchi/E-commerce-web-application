import React from 'react'
import Women from '../../assets/home/productSection/p2.png'
import Men from '../../assets/home/productSection/p11.png'
const Products = () => {
  return (
    <div className="bg-[#CAC7BF]">
      <div className="lg:container mx-auto pt-6 pb-6">
        <div className="grid grid-cols-12 gap-10 lg:gap-22">
          <div
            className="col-span-10 md:col-span-5 md:col-start-2 col-start-2 h-150 bg-cover bg-center font-extrabold text-2xl sm:text-4xl text-[#223531] rounded-2xl p-4 cursor-pointer transform transition hover:scale-101"
            style={{ backgroundImage: `url(${Women}) `}}
          >
            Women
          </div>
          <div
            className="col-span-10 md:col-span-5 md:col-start-7 col-start-2 h-150 bg-cover bg-center font-extrabold text-2xl sm:text-4xl text-[#223531] rounded-2xl p-4 cursor-pointer transform transition hover:scale-101"
            style={{ backgroundImage: `url(${Men})` }}
          >
            Men
          </div>
        </div>
      </div>
</div>
  )
}

export default Products