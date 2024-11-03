"use client";

import { useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Breadcum from '@/components/Breadcum';


// const mapContainerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = { lat: 26.7846537, lng: 83.5128861 };

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'A valid email is required';
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message cannot be empty';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setSubmitted(true);
    } else {
      console.error('Failed to submit form');
    }
  };

    const breadcrumbs = [
      { label: 'Home', href: '/' },
      { label: 'contact' },
    ];
    const description = "We would love to hear from you! Please fill out the form below.";

  return (
    <div className="flex -z-50 flex-col mt-16 pt-1 items-center min-h-screen">
      <Breadcum breadcrumbs={breadcrumbs} title="Contact Us" description={description} />
      {/* Address and Contact Form Section */}
      <div className="w-full max-w-7xl mt-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Address Section */}
        <div className="bg-white p-8 rounded-lg drop-shadow-lg text-gray-700 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Our Office</h3>
          <p>Easy Steps Technologies</p>
          <p>Ramwapur, Road, Lakhesra,</p>
          <p>Gorakhpur, Uttar Pradesh 273002</p>
          <p>Phone: +91 7985799619</p>
          <p>Email: kaushalnishad212@gmail.com</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg drop-shadow-lg space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md focus:outline-none hover:bg-indigo-700 transition-all"
          >
            Send Message
          </button>
          {submitted && (
            <p className="mt-4 text-green-600 text-center font-medium">
              Thank you for reaching out! We’ll get back to you shortly.
            </p>
          )}
        </form>
      </div>
      {/* Full-width Google Map */}
      <div className="w-full flex justify-center mt-12 mb-0 pb-0">
        {/* <LoadScript googleMapsApiKey="AIzaSyB7sltWeJ1XYb76UVcxbSi1ETTfIrt6V0s">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14246.948410550505!2d83.515461!3d26.7846489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399159746eed0a65%3A0x2cf627696cf879e3!2sEasy%20Steps%20Technologies!5e0!3m2!1sen!2sin!4v1730646607364!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Contact;