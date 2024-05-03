/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
