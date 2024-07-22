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
          hostname: 'drive.google.com',
        }
    ],
  },
};

export default nextConfig;
