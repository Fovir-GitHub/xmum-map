/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config) {
    config.externals = config.externals || [];
    config.externals.push(/.*\.pnpm-store.*/);
    return config;
  },
  outputFileTracingExcludes: { "/api/docs": ["./.next/cache/**/*"] },
};

export default nextConfig;
