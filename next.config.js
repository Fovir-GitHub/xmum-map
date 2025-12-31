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
  output: "standalone",
  outputFileTracingExcludes: {
    "/[locale]/[slug]": [
      ".next/cache/**/*",
      "**/.pnpm-store/**/*",
      ".git/**/*",
    ],
  },
};

export default nextConfig;
