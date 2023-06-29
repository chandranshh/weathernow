/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["cdn.weatherbit.io"],
    hostname: ["cdn.weatherbit.io"],
  },
  ...nextConfig,
};
