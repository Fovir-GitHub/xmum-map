/**
 * @file next-sitemap.config.cjs
 * @description Configuration file of `next-sitemap`.
 * @author Fovir
 * @since 2025-09-26
 */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.xmummap.com",
  generateRobotsTxt: true,
  priority: 0.7,
  changefreq: "daily",
};
