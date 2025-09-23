import B1Map from "../../components/B1Map/B1Map";
import { readData } from "../../lib/readData";

export default function B1() {
  const b1Data = readData("b1.json");

  return <B1Map b1Data={b1Data} />;
}
