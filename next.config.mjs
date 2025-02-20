/** @type {import('next').NextConfig} */
//const nextConfig = {};

export default {
    async rewrites() {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
      return [
        {
          source: '/api/:path*',
          destination: `${apiUrl}/:path*`
        }
      ];
    }
  };
  

//export default nextConfig;
