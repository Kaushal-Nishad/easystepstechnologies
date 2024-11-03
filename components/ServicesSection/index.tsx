import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptopCode, faChartLine, faPaintBrush, faCloud, faLightbulb } from '@fortawesome/free-solid-svg-icons';


const ServicesSection = () => {
    return (
        <>
            {/* Services Overview */}
            <section className="py-20 bg-gray-100">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="relative text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800">Our IT Services</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            We provide a full range of IT services designed to help your business succeed in the digital age.
                        </p>
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <div className="particle particle-1"></div>
                            <div className="particle particle-2"></div>
                            <div className="particle particle-3"></div>
                            <div className="particle particle-4"></div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1: App Development */}
                        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500 group">
                            {/* Border Hover Effect */}
                            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-colors duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="text-4xl text-blue-500 mb-4">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">App Development</h3>
                                <p className="text-gray-600">
                                    Build cutting-edge mobile apps tailored to your business and customer needs.
                                </p>
                            </div>
                        </div>

                        {/* Service 2: Website Development */}
                        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500 group">
                            {/* Border Hover Effect */}
                            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-colors duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="text-4xl text-green-500 mb-4">
                                    <FontAwesomeIcon icon={faLaptopCode} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Website Development</h3>
                                <p className="text-gray-600">
                                    Create stunning, responsive websites that engage users and drive results.
                                </p>
                            </div>
                        </div>

                        {/* Service 3: SEO/Digital Marketing */}
                        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500 group">
                            {/* Border Hover Effect */}
                            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-colors duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="text-4xl text-yellow-500 mb-4">
                                    <FontAwesomeIcon icon={faChartLine} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">SEO & Digital Marketing</h3>
                                <p className="text-gray-600">
                                    Boost your online presence with effective SEO and digital marketing strategies.
                                </p>
                            </div>
                        </div>

                        {/* Service 4: Graphic Design */}
                        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500 group">
                            {/* Border Hover Effect */}
                            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-colors duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="text-4xl text-red-500 mb-4">
                                    <FontAwesomeIcon icon={faPaintBrush} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Graphic Design</h3>
                                <p className="text-gray-600">
                                    Create visually stunning graphics and branding materials for your business.
                                </p>
                            </div>
                        </div>

                        {/* Service 5: Cloud Solutions */}
                        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500 group">
                            {/* Animated Background Elements */}

                            {/* Border Hover Effect */}
                            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-colors duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="text-4xl text-purple-500 mb-4">
                                    <FontAwesomeIcon icon={faCloud} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Cloud Solutions</h3>
                                <p className="text-gray-600">
                                    Scalable cloud infrastructure to ensure your business can grow without limits.
                                </p>
                            </div>
                        </div>

                        {/* Service 6: IT Consulting */}
                        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500 group">
                            {/* Border Hover Effect */}
                            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-colors duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="text-4xl text-teal-500 mb-4">
                                    <FontAwesomeIcon icon={faLightbulb} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">IT Consulting</h3>
                                <p className="text-gray-600">
                                    Strategic IT consulting services to help you plan and implement your digital transformation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesSection;