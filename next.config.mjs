/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/blog/All",
        destination: "/blog",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
