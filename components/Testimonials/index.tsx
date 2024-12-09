"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube, Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    quote: "EasySteps Technologies transformed our business with their expert cloud solutions.",
    author: "John Doe, CEO of TechCorp",
  },
  {
    quote: "Their 24/7 support is amazing. They always go the extra mile.",
    author: "Jane Smith, CTO of FinTech Solutions",
  },
  {
    quote: "Custom software development exceeded our expectations. Highly recommended!",
    author: "Mike Brown, Founder of StartUp Inc.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          speed={10000}
          modules={[EffectCube, Autoplay]}
          className="w-full h-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center h-full px-6 pb-10 pt-6">
                <Image src={`https://easystepstechnologies.com/logo-with-bg.ico`} alt="EST User Img" height={70} width={80} className="rounded-full mb-6" />
                <p className="text-lg text-gray-600 italic mb-4">
                &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-bold text-gray-800">{testimonial.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
