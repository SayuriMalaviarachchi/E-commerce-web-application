import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import img1 from '../../assets/home/limitedEditionSlider/1.png';
import img2 from '../../assets/home/limitedEditionSlider/2.png'; 
import img3 from '../../assets/home/limitedEditionSlider/3.png'; 
import img4 from '../../assets/home/limitedEditionSlider/4.png'; 
import img5 from '../../assets/home/limitedEditionSlider/5.png'; 
import img6 from '../../assets/home/limitedEditionSlider/6.png'; 



// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const LimitedEdition = () => {
  return (
   <div className="bg-[#CAC7BF] pt-10 pb-10">
      <div className=" bg-[#CAC7BF] px-6">
        <div className="grid grid-cols-12 ">
          <div className="col-span-0 md:col-span-5 col-start-1 flex flex-col justify-center">
            <div className="text-center text-[#223531] font-bold hidden md:block md:text-4xl">
              Tried and True
            </div>
            <div className="text-center pl-5 text-[#223531] hidden md:block md:text-[20px] ">
              Always classic, never basic — these timeless favorites are elevated with the NestStyle touch for effortless, everyday sophistication.

            </div>
          </div>
          <div className=" col-span-10 md:col-span-7 col-start-2 md:col-start-6">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={7}
              initialSlide={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,

                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} alt="if image is purely decorative"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="if image is purely decorative"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="if image is purely decorative"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="if image is purely decorative"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="if image is purely decorative"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="if image is purely decorative"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="if image is purely decorative"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="if image is purely decorative"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="if image is purely decorative"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LimitedEdition