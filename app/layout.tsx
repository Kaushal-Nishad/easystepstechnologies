'use Client';
// import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import NextTopLoader from 'nextjs-toploader';
// import { Metadata } from "next";

// const geistSans = localFont({
//   src: "../public/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "../public/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   icons: "/logo.ico",
//   title: "EasySteps Technologies",
//   description: "Official website of EasySteps Technologies",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen`}>
        <div className="absolute inset-0 -z-10">
          <ParticlesBackground />
        </div>
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
