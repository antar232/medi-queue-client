/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000', // আপনার এক্সপ্রেস ব্যাকএন্ডের পোর্ট
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co.com', // আপনার দেওয়া লিংকের ডোমেইন
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // সাধারণত imgbb-এর ডিরেক্ট ইমেজ লিংক এমন হয়
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
