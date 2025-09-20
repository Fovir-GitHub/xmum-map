/**
 * @file readData.jsx
 * @description Read data file and parse it as JSON.
 * @author Fovir
 * @since 2025-09-19
 */

import fs from "fs";
import path from "path";

export function readData(fileName) {
  const dataFile = path.join(process.cwd(), `src/data/${fileName}`);
  const fileContent = fs.readFileSync(dataFile);
  return JSON.parse(fileContent);
}
