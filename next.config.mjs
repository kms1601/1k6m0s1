/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/blog/All",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "grepp-programmers.s3.ap-northeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      }
    ],
  },
};

export default nextConfig;
