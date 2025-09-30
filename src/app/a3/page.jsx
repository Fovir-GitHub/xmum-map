/**
 * @file src/app/a3/page.jsx
 * @description Page of A3 maps.
 * @author Fovir
 * @since 2025-09-27
 */

import A3Map from "../../components/A3Map/A3Map";
import { readData } from "../../lib/readData";

/**
 * A3 page.
 */
export default function A3() {
  const a3Data = readData("a3.json");

  return <A3Map a3Data={a3Data} />;
}
