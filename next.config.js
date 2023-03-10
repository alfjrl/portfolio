/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "freakonomics.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

// https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1492895089i/34790762.jpg
// https://freakonomics.com/wp-content/uploads/2021/07/NoStupidQuestions-logo.png
// https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg
