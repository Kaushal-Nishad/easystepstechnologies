'use client';

import React, { useState } from 'react';


const Form = () => {
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

    return (
        <>
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
        </>
    )
}

export default Form;