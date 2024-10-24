"use client"; // Ensures it's a client-side component

import React, { useState } from 'react';
import MobileNavigation from './MobileNavigation';

const Footer: React.FC = () => {


  return (
    <footer className="w-full footer">
      <MobileNavigation />
      <div className="hidden lg:block py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm">
                We are committed to providing the best services to our customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-sm">
                Email: contact@yourcompany.com
              </p>
              <p className="text-sm">
                Phone: +123 456 7890
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">Facebook</a>
                <a href="#" className="hover:text-gray-400">Twitter</a>
                <a href="#" className="hover:text-gray-400">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
