/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mongoose', 'mongodb'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('mongodb', 'mongoose');
    }
    return config;
  },
};

export default nextConfig;
