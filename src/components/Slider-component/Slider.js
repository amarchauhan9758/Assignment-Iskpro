import React from 'react'
import "./Slider-style.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image from "../../images/lighthouse.png"
// import required modules
import { Pagination, Navigation, Autoplay,  } from "swiper";

const styled = {
 container:{
  display:"flex",
  gap:"23px"
 }
}

function Slider() {

  return (
    <>
<Swiper
        pagination={{
          clickable: true
        }}

        autoplay={true}
        modules={[Pagination, Navigation, Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide style={styled.container} className='swiper-parent'>
            <img src={image} alt="1" />
            <img src={image} alt="1" />
            <img src={image} alt="1" />
            <img src={image} alt="1" />

        </SwiperSlide>
        <SwiperSlide style={styled.container}  className='swiper-parent'>
            <img src={image} alt="1" />
            <img src={image} alt="1" />
            <img src={image} alt="1" />
            <img src={image} alt="1" />

        </SwiperSlide>
        <SwiperSlide style={styled.container}  className='swiper-parent'>
            <img src={image} alt="1" />
            <img src={image} alt="1" />
            <img src={image} alt="1" />
            <img src={image} alt="1" />
        </SwiperSlide>
</Swiper>

    </>
  )
}

export default Slider