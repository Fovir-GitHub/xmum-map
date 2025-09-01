import XLSX from "xlsx";
import fs from "fs";
import { json } from "stream/consumers";

// Source file and output file.
const BELL_AVENUE_SOURCE_FILE = "../data/bell_avenue.xlsx";
const BELL_AVENUE_OUTPUT_FILE = "../data/bell_avenue.json";
const BELL_SUITE_SROUCE_FILE = "../data/bell_suite.xlsx";
const BELL_SUITE_OUTPUT_FILE = "../data/bell_suite.json";

/**
 * @description Read data from `.xlsx` files.
 * @param {string} fileName - The `.xlsx` file to read.
 * @returns {Array} - JSON array.
 */
function readXlsx(fileName) {
  const MAX_ROWS = 78; // Max row of data to be read.
  const workBook = XLSX.readFile(fileName); // Open the file.
  const result = []; // The result array.

  for (const sheetName of workBook.SheetNames) {
    // Get the work sheet.
    const workSheet = workBook.Sheets[sheetName];

    // Read data with blank lines.
    let data = XLSX.utils.sheet_to_json(workSheet, {
      defval: null,
      blankrows: true,
    });
    data = data.slice(0, MAX_ROWS);
    result.push(data);
  }

  return result;
}

// Output the result.
fs.writeFileSync(
  BELL_AVENUE_OUTPUT_FILE,
  JSON.stringify(readXlsx(BELL_AVENUE_SOURCE_FILE)),
);
fs.writeFileSync(
  BELL_SUITE_OUTPUT_FILE,
  JSON.stringify(readXlsx(BELL_AVENUE_SOURCE_FILE)),
);

console.log("\n\nXLSX Parsed\n\n");
