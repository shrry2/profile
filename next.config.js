/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/posts/:path*",
        destination: "https://shrry2.me/posts/:path*",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
