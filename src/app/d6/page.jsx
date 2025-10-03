/**
 * @file src/app/d6/page.jsx
 * @description Map of D6.
 * @author Fovir
 * @since 2025-10-03
 */

import D6Map from "../../components/D6Map/D6Map";
import { readData } from "../../lib/readData";

/**
 * Page of D6 map.
 */
export default function Ly3() {
  const d6Data = readData("d6.json");

  return <D6Map d6Data={d6Data} />;
}
