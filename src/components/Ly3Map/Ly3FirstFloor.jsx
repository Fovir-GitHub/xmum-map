/**
 * @file src/components/Ly3Map/Ly3FirstFloor.jsx
 * @description Map of LY3 first floor.
 * @author Fovir
 * @since 2025-09-26
 */

"use client";

import { StoresArea } from "../StoresArea/StoresArea";

/**
 * @typedef {object} Ly3FirstFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {Function} setSelectedPost Function used to set selected post.
 */

/**
 * Map of LY3 first floor.
 */
export default function Ly3FirstFloor(
  /** @type {Ly3FirstFloorProps} */
  { storeData, locale, setSelectedPost },
) {
  const leftRowStart = 0;
  const leftRowEnd = leftRowStart + 1;
  const topRowStart = leftRowEnd;
  const topRowEnd = 8;
  const rightRowStart = topRowEnd;
  const rightRowEnd = topRowEnd + 1;

  return (
    <div
      style={{
        width: 10000,
        height: 10000,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "grey",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {/* Left Row Start */}
        <StoresArea
          limit={1}
          top={2000}
          left={0}
          width={2000}
          height={1000}
          locale={locale}
          storeData={storeData.slice(leftRowStart, leftRowEnd)}
          fontSize="10rem"
          setSelectedPost={setSelectedPost}
          rotate={-90}
        />
        {/* Left Row End */}
        {/* Top Row Start */}
        <StoresArea
          limit={topRowEnd - topRowStart + 1}
          storeData={storeData.slice(topRowStart, topRowEnd)}
          width={940}
          height={900}
          top={100}
          left={1800}
          fontSize="6rem"
          locale={locale}
          setSelectedPost={setSelectedPost}
        />
        {/* Top Row End */}
        {/* Right Row Start */}
        <StoresArea
          limit={1}
          storeData={storeData.slice(rightRowStart, rightRowEnd)}
          width={2000}
          height={1000}
          top={2000}
          left={8000}
          fontSize="10rem"
          locale={locale}
          rotate={90}
          setSelectedPost={setSelectedPost}
        />
        {/* Right Row End */}
      </div>
    </div>
  );
}
