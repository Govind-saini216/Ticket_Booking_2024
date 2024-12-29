import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../../assets/img/tgr.webp'
import image2 from '../../../assets/img/6.webp'
import image3 from '../../../assets/img/fish-974680.webp'
import image4 from '../../../assets/img/4.webp'
import image5 from '../../../assets/img/5.webp'
import image6 from '../../../assets/img/7.webp'
import image8 from '../../../assets/img/9.webp'
import CardAllDataLoded from '../../Main.jsx/CardAllDataLoded';
import RegisterForm from '../../Main.jsx/RegisterForm';
import Start_journy from '../../Main.jsx/Start_jorney';
import WaveAnimation from '../../Main.jsx/WaveAnimation';
import Famous_Tiger from '../../Main.jsx/Famous_Tiger';

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
    <div className='sliderhome w-screen sm:h-[300px] md:h-[505px]' >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt='slider.webp' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={image2} alt='slider.webp' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={image3} alt='slider.webp' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={image4} alt='slider.webp' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={image5} alt='slider.webp' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={image6} alt='slider.webp' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={image8} alt='slider.webp' />
        </SwiperSlide>
  
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
    <CardAllDataLoded/>
    <RegisterForm/>
    <Start_journy/>
    <Famous_Tiger/>
    <WaveAnimation />

    </>
  )
}
