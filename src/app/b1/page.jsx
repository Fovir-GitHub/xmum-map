/**
 * @file src/app/b1/page.jsx
 * @description Page of B1 map.
 * @author Fovir
 * @since 2025-09-23
 */

import B1Map from "../../components/B1Map/B1Map";
import { readData } from "../../lib/readData";

/**
 * Page of B1 map.
 */
export default function B1() {
  const b1Data = readData("b1.json");

  return <B1Map b1Data={b1Data} />;
}
