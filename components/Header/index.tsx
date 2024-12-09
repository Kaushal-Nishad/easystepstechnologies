"use client"; // Ensures it's a client component

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  // State to manage drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className="navbar w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <Link href={'/'} >
              <Image src={'https://easystepstechnologies.com/logo.png'} alt='EasySteps Technologies Logo' width={100} height={36} />
            </Link>
          </div>

          {/* Toggle Button (Hamburger) */}
          <button
            onClick={toggleDrawer}
            className="md:hidden toggle-btn focus:outline-none"
            aria-label="Menu toggle"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isDrawerOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/about-us" className="hover:text-gray-400">About</Link>
            <Link href="/services" className="hover:text-gray-400">Services</Link>
            <Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link>
            <Link href="/courses" className="hover:text-gray-400">Courses & Certifications</Link>
            <Link href="/success-stories" className="hover:text-gray-400">Success Stories</Link>
            <Link href="/contact-us" className="hover:text-gray-400">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <motion.div
        className={`fixed inset-y-0 left-0 z-50 w-64 text-white shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
        initial={{ x: '-100%' }}
        animate={{ x: isDrawerOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col toggle-nav h-full p-4">
          <div className="text-2xl font-bold mb-8">
            <Link href={'/'} >
              <Image src={'https://easystepstechnologies.com/logo.png'} alt='EasySteps Technologies Logo' width={100} height={36} />
            </Link>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-gray-400" onClick={closeDrawer}>Home</Link>
            <Link href="/about-us" className="hover:text-gray-400" onClick={closeDrawer}>About Us</Link>
            <Link href="/services" className="hover:text-gray-400" onClick={closeDrawer}>Services</Link>
            <Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link>
            <Link href="/courses" className="hover:text-gray-400">Courses & Certifications</Link>
            <Link href="/success-stories" className="hover:text-gray-400">Success Stories</Link>
            <Link href="/contact-us" className="hover:text-gray-400" onClick={closeDrawer}>Contact Us</Link>
          </nav>
        </div>
      </motion.div>

      {/* Background overlay (click to close) */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeDrawer}
        ></div>
      )}
    </header>
  );
};

export default Header;
