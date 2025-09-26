/**
 * @file src/lib/readData.jsx
 * @description Read data file and parse it as JSON.
 * @author Fovir
 * @since 2025-09-19
 */

import fs from "fs";
import path from "path";

/**
 * Read data from `src/data/${fileName}` file.
 *
 * The `fileName` includes extension name.
 *
 * @param {string} fileName Name of data file stored under `src/data` directory.
 */
export function readData(fileName) {
  const dataFile = path.join(process.cwd(), `src/data/${fileName}`);
  const fileContent = fs.readFileSync(dataFile);
  return JSON.parse(fileContent);
}
