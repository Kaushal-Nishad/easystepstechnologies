import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MobileNavigation = () => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };
    return (
        <>
            <div className="lg:hidden fixed bottom-0 w-full bg-gray-800 text-white shadow-md z-50">
                <div className="flex justify-around items-center py-2">
                    <a href="#" className="text-center">
                        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7m-7 7v12m9-13h4a2 2 0 012 2v7m-2 2l-7 7-7-7m0-8h4m0 0l7 7m-7-7v12" />
                        </svg>
                        <span className="text-sm">Home</span>
                    </a>
                    <a href="#" className="text-center">
                        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 0111 2.277a9 9 0 115.879 15.527m-3.756-9.94h.01" />
                        </svg>
                        <span className="text-sm">Search</span>
                    </a>
                    <a href="#" className="text-center">
                        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4m0 0v4m0 0v4m0 0v4m4-20v4m-4 0H8m4 0h4m-4 0v4" />
                        </svg>
                        <span className="text-sm">Add</span>
                    </a>
                    <a href="#" className="text-center">
                        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Favorites</span>
                    </a>
                    <a href="#" className="text-center">
                        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5-9 5zM12 14v7m0-7l9-5-9-5-9 5z" />
                        </svg>
                        <span className="text-sm">Profile</span>
                    </a>
                </div>

                {/* Toggle More Menu */}
                {isMenuExpanded && (
                    <motion.div
                        className="bg-gray-700 py-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex justify-around">
                            <a href="#" className="text-center">
                                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7m-7 7v12m9-13h4a2 2 0 012 2v7m-2 2l-7 7-7-7m0-8h4m0 0l7 7m-7-7v12" />
                                </svg>
                                <span className="text-sm">Settings</span>
                            </a>
                            <a href="#" className="text-center">
                                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 0111 2.277a9 9 0 115.879 15.527m-3.756-9.94h.01" />
                                </svg>
                                <span className="text-sm">Help</span>
                            </a>
                        </div>
                    </motion.div>
                )}

                <button
                    onClick={toggleMenu}
                    className="w-full text-center py-2 bg-gray-600 text-white"
                >
                    {isMenuExpanded ? 'Hide More' : 'Show More'}
                </button>
            </div>
        </>
    )
}

export default MobileNavigation