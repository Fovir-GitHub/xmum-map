import fs from "fs";
import path from "path";
import AppWrapper from "../components/AppWrapper/AppWrapper";

function readData() {
  const DATA_FILE = path.join(process.cwd(), "src/data/data.json");
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

export default function Page() {
  const storeData = readData();

  return (
    <>
      <AppWrapper storeData={storeData} />
    </>
  );
}
