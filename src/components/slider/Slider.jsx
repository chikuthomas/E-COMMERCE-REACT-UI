import React from 'react'
import  "./Slider.css";
import {Swiper,SwiperSlide} from "swiper/react";

//import styles

import 'swiper/css'
import 'swiper/css/pagination';
import  'swiper/css/navigation';

import {SliderProducts} from "../../data/products";
import { Navigation, Pagination } from 'swiper';
 

function Slider() {
  return (
    
    <div className="s-container">

<Swiper 
modules={[Pagination,Navigation]}

className="mySwiper"
navigation={true}
loopFillGroupWithBlank={true}

slidesPerView={3}
spaceBetween={40}
slidesPerGroup={1}
loop={true}
breakpoints={{
    856:{
      slidesPerView:3
    },  640:{
      slidesPerView:2
    },
    0:{
      slidesPerView:1
    }}
  }
>
    {SliderProducts.map((slide,i)=>(
        <SwiperSlide>

<div className="left-s">
    <div className="name">
        <span >{slide.name}</span>
        <span >{slide.detail}</span>
    </div>
    <span >{slide.price}</span>
    <div>Shop now</div>
</div>

<img src={slide.img} alt="product" className='img-product'/>
    </SwiperSlide>
    ))}
    
    
</Swiper>

    </div>


  )
}

export default Slider