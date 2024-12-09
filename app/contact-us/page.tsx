import Breadcum from '@/components/Breadcum';
import Form from '@/components/Form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - EasySteps Technologies",
  description: "Get in touch with EasySteps Technologies for expert IT solutions and support. We're here to help your business thrive.",
  icons: { icon: "https://easystepstechnologies.com/logo.png" },
  openGraph: {
    title: "Contact Us - EasySteps Technologies",
    description: "Have questions or need assistance? Contact EasySteps Technologies today and let us help you achieve your business goals.",
    url: "https://easystepstechnologies.com/contact",
    // images: ["/contact-banner.png"], // Replace with an actual contact-related image
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - EasySteps Technologies",
    description: "Reach out to EasySteps Technologies for tailored IT solutions and exceptional support for your business.",
    // images: ["/contact-banner.png"], // Replace with an actual contact-related image
  },
};

const Contact = () => {
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
        <Form/>
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