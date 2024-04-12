/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/app',
            destination: '/src/app',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
