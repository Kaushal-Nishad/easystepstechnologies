import Breadcum from '@/components/Breadcum';
import services from '@/components/ServicePage/services';
import Head from 'next/head';
import Faqs from '@/components/Faqs';


// Generate static parameters for all service pages
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

const ServiceDetails = async ({ params }: { params: Promise<{slug: string}> }) => {
    const { slug } = await params;
    const service = services.find((service) => service.slug === slug);

    if (!service) {
        return <div>Service not found</div>;
    }

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: service.title },
    ];

    return (
        <>
            {/* Meta tags for SEO */}
            <Head>
                <title>{service.metaTitle}</title>
                <meta name="description" content={service.metaDescription} />
                <meta name="keywords" content={service.metaKeywords} />
                <meta property="og:title" content={service.ogTitle} />
                <meta property="og:description" content={service.ogDescription} />
                <meta property="og:image" content={service.ogImage} />
                <meta property="og:url" content={service.ogUrl} />
                <meta name="twitter:title" content={service.twitterTitle} />
                <meta name="twitter:description" content={service.twitterDescription} />
                <meta name="twitter:image" content={service.twitterImage} />
            </Head>

            {/* Main section */}
            <section className="bg-gray-50 mt-16">
                {/* Breadcrumb */}
                <Breadcum breadcrumbs={breadcrumbs} title={service.title} description={service.description} />

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        {/* Image Section */}
                        {service.image && (
                            <div className="flex justify-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="rounded-lg shadow-md max-w-full h-auto mt-10"
                                />
                            </div>
                        )}

                        {/* Text Section */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                            <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: service.longDescription || service.description }} />
                            <div className="mt-4">
                                <p className="font-semibold text-sm text-gray-500">Category: <span className="text-gray-700">{service.category}</span></p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    {service.faqs && service.faqs.length > 0 && (
                        <Faqs faqs={service.faqs} />
                    )}
                </div>
            </section>
        </>
    );
};

export default ServiceDetails;