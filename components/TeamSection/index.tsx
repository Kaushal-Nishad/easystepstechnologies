'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { A11y, Autoplay, EffectCoverflow } from "swiper/modules";

const OurTeamSection = () => {
    const teamMembers = [
        { name: 'John Doe', role: 'CEO & Founder', img: '/team-member-1.jpeg' },
        { name: 'Jane Smith', role: 'CTO', img: '/team-member-2.jpeg' },
        { name: 'Alex Johnson', role: 'Lead Developer', img: '/team-member-3.jpeg' },
        { name: 'John Doe', role: 'CEO & Founder', img: '/team-member-1.jpeg' },
        { name: 'Jane Smith', role: 'CTO', img: '/team-member-2.jpeg' },
        { name: 'Alex Johnson', role: 'Lead Developer', img: '/team-member-3.jpeg' }
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
                autoplay={{ delay: 2000 }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                speed={6000}
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
