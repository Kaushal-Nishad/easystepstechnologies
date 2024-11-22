'use client';

import React, { useState } from 'react';

interface Faq {
    question: string;
    answer: string;
}

interface FaqsProps {
    faqs: Faq[];
}

const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
                <div className="my-12">
                    <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
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
                                                <line x1="5" y1="12" x2="19" y2="12" stroke="#ff6666" strokeWidth={2} />
                                                <line x1="12" y1="5" x2="12" y2="19" stroke="#ff6666" strokeWidth={2} />
                                            </svg>
                                        )}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
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
        </>
    );
}

export default Faqs;