'use client';
import Breadcum from '@/components/Breadcum';
import services from '@/components/ServicePage/services';
import React, { use, useState } from 'react';
import Head from 'next/head';

const ServiceDetails: React.FC<{ params: Promise<{ service: string }> }> = ({ params }) => {
    const { service } = use(params);
    const serviceData = services.find(s => s.slug === service);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (!serviceData) {
        return <div>Service not found</div>;
    }

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: serviceData.title },
    ];

    return (
        <>
            {/* Meta tags for SEO */}
            <Head>
                <title>{serviceData.metaTitle}</title>
                <meta name="description" content={serviceData.metaDescription} />
                <meta name="keywords" content={serviceData.metaKeywords} />
                <meta property="og:title" content={serviceData.ogTitle} />
                <meta property="og:description" content={serviceData.ogDescription} />
                <meta property="og:image" content={serviceData.ogImage} />
                <meta property="og:url" content={serviceData.ogUrl} />
                <meta name="twitter:title" content={serviceData.twitterTitle} />
                <meta name="twitter:description" content={serviceData.twitterDescription} />
                <meta name="twitter:image" content={serviceData.twitterImage} />
            </Head>

            {/* Main section */}
            <section className="bg-gray-50 mt-16">
                {/* Breadcrumb */}
                <Breadcum breadcrumbs={breadcrumbs} title={serviceData.title} description={serviceData.description} />

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        {/* Image Section */}
                        {serviceData.image && (
                            <div className="flex justify-center">
                                <img
                                    src={serviceData.image}
                                    alt={serviceData.title}
                                    className="rounded-lg shadow-md max-w-full h-auto mt-10"
                                />
                            </div>
                        )}

                        {/* Text Section */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">{serviceData.title}</h2>
                            <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: serviceData.longDescription || serviceData.description }} />
                            <div className="mt-4">
                                <p className="font-semibold text-sm text-gray-500">Category: <span className="text-gray-700">{serviceData.category}</span></p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    {serviceData.faqs && serviceData.faqs.length > 0 && (
                        <div className="my-12">
                            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                {serviceData.faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-300 shadow">
                                        <button
                                            type="button"
                                            className="w-full flex justify-between items-center p-4 bg-red-500 text-left font-semibold text-lg rounded-lg focus:outline-none"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            {faq.question}
                                            <span className="ml-4">
                                                {activeIndex === index ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 shadow-red-900 shadow rounded-full text-white"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                                                        {/* <line x1="8" y1="12" x2="16" y2="12" stroke="#ff6666" strokeWidth={2} /> */}
                                                        <line x1="5" y1="12" x2="19" y2="12" stroke="#ff6666" strokeWidth={2} />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 shadow-red-900 shadow rounded-full text-white"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                                                        {/* <line x1="8" y1="12" x2="16" y2="12" stroke="#ff6666" strokeWidth={2} />
                                                        <line x1="12" y1="8" x2="12" y2="16" stroke="#ff6666" strokeWidth={2} /> */}
                                                        <line x1="5" y1="12" x2="19" y2="12" stroke="#ff6666" strokeWidth={2} />
                                                        <line x1="12" y1="5" x2="12" y2="19" stroke="#ff6666" strokeWidth={2} />
                                                    </svg>
                                                )}
                                            </span>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
                                                }`}
                                        >
                                            <div className="p-4 bg-gray-50">
                                                <p className="text-gray-600">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ServiceDetails;
