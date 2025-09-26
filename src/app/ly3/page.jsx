/**
 * @file src/app/ly3/page.jsx
 * @description Page of LY3.
 * @author Fovir
 * @since 2025-09-21
 */

import Ly3Map from "../../components/Ly3Map/Ly3Map";
import { readData } from "../../lib/readData";

/**
 * Page of LY3 map.
 */
export default function Ly3() {
  const ly3Data = readData("ly3.json");

  return <Ly3Map ly3Data={ly3Data} />;
}
