"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const HeroSection = () => {
    const slides = [
        "Empowering Your Business with IT Solutions",
        "Innovative Technology for Growth",
        "24/7 IT Support & Cloud Services",
    ];

    return (
        <section className="h-fit mt-14 pt-4 flex justify-center items-center bg-blue-900 text-white text-center relative">
            {/* Navigation Buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="flex p-20 flex-col justify-center items-center h-full bg-cover bg-center text-white"
                            style={{ backgroundImage: `url(https://easystepstechnologies.com/slider-${index + 1}.jpg)` }} // dynamically sets background image
                        >
                            <h1 className="text-5xl font-bold">
                                {slide}
                            </h1>
                            <p className="text-lg text-gray-200 max-w-xl mt-4">
                                Delivering world-class IT services to elevate your business.
                            </p>
                            <a
                                href="/services"
                                className="mt-8 px-8 py-3 bg-white text-blue-900 rounded-md shadow hover:bg-gray-100 transition duration-300"
                            >
                                Explore Our Services
                            </a>
                            {/* <img src="/slider-1.jpg" className="absolute" alt="Hero Slider" height={'auto'} width={'100%'}/> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSection;
