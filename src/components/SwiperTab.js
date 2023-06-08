    import React from 'react';
// Import Swiper React components
    import { Swiper, SwiperSlide } from 'swiper/react';
    import Dashboard from './dashboard';
    import ProfileForm from './Profileform';

   
    // Import Swiper styles
    import 'swiper/css';

    export default function  SwiperTab(){
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><Dashboard /></SwiperSlide>
        <SwiperSlide><ProfileForm/></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    );
    };