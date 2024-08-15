import PWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.saavncdn.com",
      },
    ], // Add your image domains here
  },
};

const withPWA = PWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default withPWA(nextConfig);
