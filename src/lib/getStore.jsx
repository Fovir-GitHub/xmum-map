/**
 * @file src/lib/getStore.jsx
 * @description Get store data.
 * @author Fovir
 * @since 2025-09-17
 */

import fs from "fs";
import path from "path";

// Default directory of data files.
const storeFileDirectory = "src/data";

/**
 * Get all `.json` files under `directory`.
 *
 * @param {string} directory Directory of file.
 */
export function getJsonFiles(directory = storeFileDirectory) {
  const dataDirectory = path.join(process.cwd(), directory);

  const files = fs.readdirSync(dataDirectory);
  return files.filter((file) => path.extname(file) === ".json");
}

/**
 * Get store information by slug.
 *
 * @param {string} slug Slug of the store.
 * @param {string} dataDirectory Directory of data.
 *
 * @returns {{found: object, sourceFile: string, sourceFileName: string}} An object includes founded store, full source file name, and source file name without extension.
 */
export async function getStoreBySlug(
  slug,
  dataDirectory = storeFileDirectory,
) {
  const storeFiles = getJsonFiles(dataDirectory);

  for (const file of storeFiles) {
    const filePath = path.join(process.cwd(), dataDirectory, file);
    const rawData = fs.readFileSync(filePath, "utf8");
    const nestedStores = JSON.parse(rawData);
    const stores = nestedStores.flat();

    const foundObject = stores.find((s) => s.Slug == slug);
    if (foundObject) {
      return {
        found: foundObject,
        sourceFile: file,
        sourceFileName: file.replace(".json", ""),
      };
    }
  }

  return {
    found: null,
    sourceFile: null,
    sourceFileName: null,
  };
}

/**
 * Get all stores for generating static params.
 *
 * @param {string} dataDirectory Directory of data files.
 *
 * @returns {object[]} An array of all store objects.
 */
export function getAllStoresForStaticGeneration(
  dataDirectory = storeFileDirectory,
) {
  const storeFiles = getJsonFiles(dataDirectory);
  const allStores = [];

  for (const file of storeFiles) {
    const filePath = path.join(process.cwd(), dataDirectory, file);
    const rawData = fs.readFileSync(filePath, "utf8");
    const nestedStores = JSON.parse(rawData);
    const stores = nestedStores.flat();

    const storesWithSource = stores.map((store) => ({
      ...store,
      sourceFile: file,
      sourceFileName: file.replace(".json", ""),
    }));

    allStores.push(...storesWithSource);
  }

  return allStores;
}
