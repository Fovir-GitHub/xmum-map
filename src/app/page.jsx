/**
 * @file page.jsx
 * @description This is a file from server side, which read map data and pass them to `BellMap`.
 * @author Fovir
 * @date 2025-09-20
 */

import BellMap from "../components/BellMap/BellMap";
import { readData } from "../lib/readData";

export default function Page() {
  const bellAvenueData = readData("bell_avenue.json");
  const bellSuiteData = readData("bell_suite.json");

  return (
    <BellMap
      bellAvenueData={bellAvenueData}
      bellSuiteData={bellSuiteData}
    />
  );
}
