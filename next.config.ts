/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "testrigor.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "http",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "wproom.com",
      },
      {
        protocol: "https",
        hostname: "www.w3schools.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "wp.logos-download.com",
      },
      {
        protocol: "https",
        hostname: "developer.android.com",
      },
      {
        protocol: "https",
        hostname: "www.mygreatlearning.com",
      },
    ],
  },
};

module.exports = nextConfig;
