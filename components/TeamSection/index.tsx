'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { A11y, Autoplay, EffectCoverflow } from "swiper/modules";

const OurTeamSection = () => {
    const teamMembers = [
        { name: 'Kaushal Nishad', role: 'CTO & Founder', img: '/Kaushal-nishad.jpeg' },
        { name: 'Deepak Yadav', role: 'Junior Developer', img: '/dipak-yadav.webp' },
        { name: 'Baliram Singh', role: 'Marketing Expert & Co-Founder', img: '/baliram-singh.webp' },
        { name: 'Sagar Negi', role: 'Digital Marketing Expert', img: '/sagar-negi.webp' },
        { name: 'Alok Pandey', role: 'Tally Prime Expert', img: '/alok-pandey.webp' },
        { name: 'Ajay Vishwakarma', role: 'DCA/ADCA Teacher', img: '/ajay-sir.webp' },

    ];

    return (
        <div className="mx-auto bg-transparent">
            <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">Meet Our Team</h2>
            <Swiper
                modules={[EffectCoverflow, Autoplay, A11y]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 1000 }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                speed={5000}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                }}
                className="w-full  mx-auto"
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index} className="text-center">
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <Image
                                src={member.img}
                                alt={`Team Member ${index + 1}`}
                                width={200}
                                height={200}
                                className="rounded-full mx-auto"
                            />
                            <h3 className="text-xl font-semibold text-blue-900 mt-4">{member.name}</h3>
                            <p className="text-gray-700">{member.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurTeamSection;
