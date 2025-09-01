import fs from "fs";
import path from "path";
import AppWrapper from "../components/AppWrapper/AppWrapper";

function readData(fileName) {
  const dataFile = path.join(process.cwd(), `src/data/${fileName}`);
  return JSON.parse(fs.readFileSync(dataFile));
}

export default function Page() {
  const bellAvenueData = readData("bell_suite.json");

  return (
    <>
      <AppWrapper bellAvenueData={bellAvenueData} />
    </>
  );
}
