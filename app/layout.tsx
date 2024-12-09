'use Client';
// import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from 'nextjs-toploader';
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen`}>
        <Script
          id="tawk-to-script"
          strategy="afterInteractive"
          src="https://embed.tawk.to/67448d092480f5b4f5a3a0cb/1idhsdscr"
        />
        <Header />
        <main className="flex-grow">
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={9999999999}
            showAtBottom={false}
          />
          {children}
        </main>
        <Footer />


      </body>
    </html>
  );
}
