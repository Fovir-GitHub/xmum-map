import fs from "fs";
import path from "path";
import AppWrapper from "../components/AppWrapper/AppWrapper";

function readData(fileName) {
  const dataFile = path.join(process.cwd(), `src/data/${fileName}`);
  const fileContent = fs.readFileSync(dataFile);
  return JSON.parse(fileContent);
}

export default function Page() {
  const bellAvenueData = readData("bell_avenue.json");
  const bellSuiteData = readData("bell_suite.json");

  return (
    <>
      <AppWrapper
        bellAvenueData={bellAvenueData}
        bellSuiteData={bellSuiteData}
      />
    </>
  );
}
