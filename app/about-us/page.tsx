import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 pt-20 mb-0 pb-0 mt-40">
      {/* Introduction Section */}
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          About EasySteps Technologies
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At EasySteps Technologies, we specialize in providing top-notch IT solutions that empower businesses to succeed in a digital world. Our commitment to innovation and customer satisfaction drives everything we do.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="container mx-auto px-6 lg:px-20 mt-16">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              To provide cutting-edge IT services and solutions that drive business growth and success, helping organizations harness the power of technology to innovate and thrive.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg">
              To be a global leader in IT services by consistently delivering value-driven solutions with a focus on quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6 lg:px-20 mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">
          Our Core Values
        </h2>
        <div className="flex flex-wrap justify-center space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="max-w-sm bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Innovation
            </h3>
            <p className="text-gray-600">
              We are dedicated to staying at the forefront of technology, constantly seeking new and innovative solutions to enhance our services.
            </p>
          </div>
          <div className="max-w-sm bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Integrity
            </h3>
            <p className="text-gray-600">
              Our success is rooted in trust. We prioritize transparency and integrity in every aspect of our business.
            </p>
          </div>
          <div className="max-w-sm bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Customer Focus
            </h3>
            <p className="text-gray-600">
              We are committed to providing personalized, client-focused solutions that deliver tangible results.
            </p>
          </div>
          <div className="max-w-sm bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Excellence
            </h3>
            <p className="text-gray-600">
              We strive to exceed expectations and deliver exceptional quality in every project.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container mx-auto px-6 lg:px-20 mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace these with real team members */}
          <div className="text-center">
            <Image
              src="/team-member-1.jpg"
              alt="Team Member 1"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              John Doe
            </h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <Image
              src="/team-member-2.jpg"
              alt="Team Member 2"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              Jane Smith
            </h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="text-center">
            <Image
              src="/team-member-3.jpg"
              alt="Team Member 3"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              Alex Johnson
            </h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-6 lg:px-20 mt-16 mb-0  bg-blue-900 py-16 text-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* Testimonial 1 */}
            <div className="swiper-slide text-center">
              <p className="text-lg italic max-w-3xl mx-auto">
                "EasySteps Technologies provided us with exceptional service, helping our business grow with their innovative IT solutions."
              </p>
              <p className="mt-4">- Client Name, Company</p>
            </div>
            {/* Testimonial 2 */}
            <div className="swiper-slide text-center">
              <p className="text-lg italic max-w-3xl mx-auto">
                "Their team is responsive, professional, and truly understands the needs of our business."
              </p>
              <p className="mt-4">- Client Name, Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
