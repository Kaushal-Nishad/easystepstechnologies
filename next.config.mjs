/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['easystepstechnologies.com'], // Add your external domain here
    unoptimized: true, // Disable image optimization for static hosting
  },
 
  // Optional: Add a trailing slash to all paths (useful for static hosting)
  trailingSlash: true,

  // Optional: Prevent automatic `/path` -> `/path/` redirects
  skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  // eslint: {
  //   ignoreDuringBuilds: true, 
  // },
};
export default nextConfig;
