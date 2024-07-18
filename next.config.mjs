/** @type {import('next').NextConfig} */
const nextConfig = {
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
