/**
 * @file page.jsx
 * @description This is a file from server side, which read map data and pass them to `AppWrapper`.
 * @author Fovir
 * @date 2025-09-19
 */

import AppWrapper from "../components/AppWrapper/AppWrapper";
import { readData } from "../lib/readData";

export default function Page() {
  const bellAvenueData = readData("bell_avenue.json");
  const bellSuiteData = readData("bell_suite.json");

  return (
    <AppWrapper
      bellAvenueData={bellAvenueData}
      bellSuiteData={bellSuiteData}
    />
  );
}
