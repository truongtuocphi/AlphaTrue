/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["localhost", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dezyiqwpc/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
