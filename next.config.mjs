/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/login/redirect",
        destination: "/",
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
