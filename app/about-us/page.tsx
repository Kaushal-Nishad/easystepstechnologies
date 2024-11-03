import React from "react";
import Breadcum from "@/components/Breadcum";
import OurTeamSection from "@/components/TeamSection";

const AboutUs = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us' },
  ];
  const description = "Learn more about our mission, vision, and the values that drive us.";

  return (
    <>
      <section className="bg-gray-50 pt-1 mt-16">
        {/* Breadcrumb */}
        <Breadcum breadcrumbs={breadcrumbs} title="About Us" description={description} />

        {/* Introduction Section */}
        <div className="container">
          <div className="mx-auto text-center">
            <p className="text-lg text-gray-700 mx-auto my-20">
              At EasySteps Technologies, we specialize in providing top-notch IT solutions that empower businesses to succeed in a digital world. Our commitment to innovation and customer satisfaction drives everything we do.
            </p>
          </div>

          {/* Mission and Vision Section */}
          <div className="relative mx-auto mt-12 mb-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-semibold text-blue-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg">
                  To provide cutting-edge IT services and solutions that drive business growth and success, helping organizations harness the power of technology to innovate and thrive.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-blue-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg">
                  To be a global leader in IT services by consistently delivering value-driven solutions with a focus on quality, innovation, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mx-auto mb-20">
            <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Innovation', text: 'We are dedicated to staying at the forefront of technology, constantly seeking new and innovative solutions to enhance our services.' },
                { title: 'Integrity', text: 'Our success is rooted in trust. We prioritize transparency and integrity in every aspect of our business.' },
                { title: 'Customer Focus', text: 'We are committed to providing personalized, client-focused solutions that deliver tangible results.' },
                { title: 'Excellence', text: 'We strive to exceed expectations and deliver exceptional quality in every project.' }
              ].map((value, index) => (
                <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
          <OurTeamSection />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
