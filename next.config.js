/**
 * @file next.config.js
 * @description Configuration file of Next.JS.
 * @author Fovir
 * @since 2025-09-26
 */

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
  outputFileTracingExcludes: {
    "/[sourceFile]/[locale]/[slug]": [".next/cache/**/*"],
  },
};

export default nextConfig;
