'use client';
import Link from 'next/link';
import React from 'react';
import services from './services';



const ServicesPage: React.FC = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="text-5xl text-blue-500 mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <Link href={`/services/${service.slug}`} legacyBehavior>
                            <a className="text-blue-600 hover:underline">View More</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;