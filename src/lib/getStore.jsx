/**
 * @file getStore.jsx
 * @description Get store data.
 * @author Fovir
 * @since 2025-09-17
 */

import fs from "fs";
import path from "path";

/**
 * Get a store by slug.
 *
 * @param {string} slug Slug of the store.
 *
 * @returns {object | null} If the store exists, the function will return the store object. Otherwise, it will return `null`.
 */
export async function getStoreBySlug(slug) {
  const storeFiles = ["bell_avenue.json", "bell_suite.json"];
  let allStores = [];

  for (const file of storeFiles) {
    const filePath = path.join(process.cwd(), "src/data", file);
    const rawData = fs.readFileSync(filePath, "utf8");
    const nestedStores = JSON.parse(rawData);

    const stores = nestedStores.flat();
    allStores = allStores.concat(stores);
  }

  // Let 123 matches "123".
  return allStores.find((s) => s.Slug == slug) || null;
}
