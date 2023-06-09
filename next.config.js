/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      { protocol: "https", hostname: "i.ytimg.com", port: "", pathname: "/**" },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
