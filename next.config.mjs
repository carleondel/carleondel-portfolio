/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "carleondel-portfolio.vercel.app" }],
        destination: "https://carlosleon.dev/:path*",
        permanent: true,
      },
      { source: "/resume", destination: "/carlos-leon-resume.pdf", permanent: false },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/writing", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
