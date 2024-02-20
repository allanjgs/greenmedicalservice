import React from 'react';

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'
//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.css';
//import required modules
import { Pagination, Navigation, Autoplay } from 'swiper'
//import data
import { serviceSlider } from '../data';
import { HiCheck } from 'react-icons/hi'


const ServicesSlider = () => {
    return (
        <Swiper modules={[Pagination, Navigation, Autoplay]}
            autoplay={true}
            loop={true}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            navigation={true}
            className='serviceSlider'
        >
            {serviceSlider.map((slide, index) => {
                //destructure slide

                const { title, subtitle, image, btnIcon, btnLink, link } = slide;
                return <SwiperSlide
                    className='py-8 lg:py-16'
                    key={index}>
                    <div className='container mx-auto text-center lg:text-left'>
                        <div className='flex flex-col justify-between items-center lg:flex-row'>
                            {/* Texto */}
                            <div className='flex-1'>
                                <h1 className='text-main text-3xl lg:text-7xl  leading-tight lg:leading-[98px] font-extrabold mb-4'>
                                    {title}
                                </h1>

                                <ul className='  text-base lg:text-[18px] lg:leading-8 max-w-[540px] mb-8'>
                                    {subtitle.map((item) => {
                                        //destruturando links
                                        const { name } = item
                                        return <li className='flex items-center gap-x-3'>
                                            <HiCheck className='text-light' />
                                            {name}
                                        </li>
                                    })}
                                </ul>

                                <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all mb-5'>
                                    <a href={link} target="_blank">{btnLink}</a>
                                    <img src={btnIcon} className='animate-pulse'  alt='' />
                                </button>
                            </div>
                            {/* Imagem */}
                            <div className='flex-1 flex justify-center'>
                                <img
                                    className='h-86 lg:h-auto'
                                    src={image.type}
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>;
            })}
        </Swiper>
    );
};

export default ServicesSlider;