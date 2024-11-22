"use client";

import React from 'react';
// import MobileNavigation from './MobileNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer: React.FC = () => {


  return (
    <footer className="w-full footer">
      {/* <MobileNavigation /> */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Dedicated to delivering exceptional services, we strive to meet and exceed our customers&apos; expectations every step of the way.
            </p>

          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/career" className="hover:underline">Career</Link></li>
              <li><Link href="/help-center" className="hover:underline">Help Center</Link></li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <address className="text-sm not-italic space-y-2">
              <p>Email: <a href="mailto:kaushalnishad212@gmail.com" className="hover:underline">kaushalnishad212@gmail.com</a></p>
              <p>Phone:
                <a href="tel:+917985799619" className="hover:underline"> +91 7985799619</a>,
                <a href="tel:+917080042539" className="hover:underline"> +91 7080042539</a>
              </p>
            </address>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-start text-white">
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: '#1877F2' }} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ color: '#1DA1F2' }} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: '#E4405F' }} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: '#FF0000' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 mt-8">
          <span>© 2024 EasySteps Technologies. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">
            Powered by EasySteps Technologies
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
