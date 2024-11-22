import Breadcum from '@/components/Breadcum';
import ServicesPage from '@/components/ServicePage';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Our Services - EasySteps Technologies",
    description: "Explore our wide range of IT services designed to help businesses innovate, scale, and succeed in a digital-first world.",
    icons: { icon: "/logo.png" },
    openGraph: {
      title: "Our Services - EasySteps Technologies",
      description: "Discover tailored IT solutions from EasySteps Technologies, including software development, cloud services, and IT consulting.",
      url: "/services",
    //   images: ["/services-banner.png"], // Replace with a relevant services-related image
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Services - EasySteps Technologies",
      description: "Unleash your business potential with cutting-edge IT services from EasySteps Technologies. Let us help you succeed.",
    //   images: ["/services-banner.png"], // Replace with a relevant services-related image
    },
  };  

const Services = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Our Services' },
    ];
    const description = "Learn more about our mission, vision, and the values that drive us.";
    return (<>
        <section className="bg-gray-50 pt-1 mt-16">
            {/* Breadcrumb */}
            <Breadcum breadcrumbs={breadcrumbs} title="Our Services" description={description} />
            <div className="py-20">
                <ServicesPage />
            </div>
        </section>
    </>);
};

export default Services;
