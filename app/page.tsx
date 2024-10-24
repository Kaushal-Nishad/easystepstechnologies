import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      {/* <section className="flex flex-col justify-center items-center text-center py-20 bg-transparent">
        <h1 className="text-5xl font-bold text-white mb-4">
          Empower Your Business with Cutting-edge IT Solutions
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mb-6">
          We deliver tailored IT services that help businesses scale and innovate with confidence.
        </p>
        <a
          href="/services"
          className="px-8 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300"
        >
          Explore Our Services
        </a>
      </section> */}

      {/* Services Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Our IT Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide a full range of IT services designed to help your business succeed in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Software Development</h3>
              <p className="text-gray-600">
                Custom software solutions tailored to meet your unique business requirements.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cloud Solutions</h3>
              <p className="text-gray-600">
                Scalable cloud infrastructure to ensure your business can grow without limits.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">IT Consulting</h3>
              <p className="text-gray-600">
                Strategic IT consulting services to help you plan and implement your digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20  text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose EasySteps Technologies?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our experienced team delivers world-class IT services to help your business thrive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* USP 1 */}
            <div className="bg-gray-100 rounded-lg shadow p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expertise</h3>
              <p className="text-gray-600">We have extensive experience across a wide range of technologies and industries.</p>
            </div>

            {/* USP 2 */}
            <div className="bg-gray-100 rounded-lg  shadow p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated support team is available around the clock to assist you.</p>
            </div>

            {/* USP 3 */}
            <div className="bg-gray-100 rounded-lg  shadow p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600">Our top priority is ensuring that our clients are happy with our services.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-10 bg-amber-400 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6">
            Contact us today to discuss how we can help you take your business to the next level.
          </p>
          <a
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-md shadow hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

