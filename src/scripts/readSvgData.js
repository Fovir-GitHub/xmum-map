import XLSX from "xlsx";
import fs from "fs";

// Source file and output file.
const SOURCE_DATA_FILE = "../data/data.xlsx";
const OUTPUT_DIR = "../data/data.json";

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
  OUTPUT_DIR,
  JSON.stringify(readXlsx(SOURCE_DATA_FILE)),
);
