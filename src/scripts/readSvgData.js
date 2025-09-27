/**
 * @file src/scripts/readSvgData.js
 * @description Read map data from `.xlsx` files and convert them into `.json` format.
 * @author Fovir
 * @since 2025-09-05
 */

import XLSX from "xlsx";
import fs from "fs";
import path from "path";

/**
 * Read `.xlsx` files and output them in `.json` format.
 *
 * The data files path is `src/data`, so the funtion will read the file `${fileName}.xlsx` and output it as `${fileName}.json`.
 *
 * @param {string} fileName File name without extension.
 * @param {number} maxRows Maximum rows to read and parse.
 */
function readXlsx(fileName, maxRows) {
  const dataPath = path.join(process.cwd(), "src/data");
  const inputPath = path.join(dataPath, `${fileName}.xlsx`);
  const outputPath = path.join(dataPath, `${fileName}.json`);

  const MAX_ROWS = maxRows; // Max row of data to be read.
  const workBook = XLSX.readFile(inputPath); // Open the file.
  const result = []; // The result array.

  for (const sheetName of workBook.SheetNames) {
    // Get the work sheet.
    const workSheet = workBook.Sheets[sheetName];

    // Read data with blank lines.
    let data = XLSX.utils.sheet_to_json(workSheet, {
      defval: null,
      blankrows: true,
    });
    data = data.map((row, index) => ({
      Row: index + 2,
      ...row,
    }));
    data = data.slice(0, MAX_ROWS);
    result.push(data);
  }

  fs.writeFileSync(outputPath, JSON.stringify(result));
}

readXlsx("bell_avenue", 78);
readXlsx("bell_suite", 13);
readXlsx("ly3", 40);
readXlsx("b1", 10);
readXlsx("a3", 3);

console.log("\n\nXLSX Parsed\n\n");
