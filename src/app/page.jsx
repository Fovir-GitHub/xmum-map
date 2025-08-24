import BellMaps from "../components/BellMaps/BellMaps";
import fs from "fs";
import path from "path";

function readData() {
  const DATA_FILE = path.join(process.cwd(), "src/data/data.json");
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

export default function Page() {
  const storeData = readData();

  return <BellMaps storeData={storeData} />;
}
