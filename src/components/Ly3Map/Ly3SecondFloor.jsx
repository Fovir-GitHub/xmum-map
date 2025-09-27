/**
 * @file src/components/Ly3Map/Ly3SecondFloor.jsx
 * @description Map of LY3 second floor.
 * @author Fovir
 * @since 2025-09-22
 */

"use client";

import { StoresArea } from "../StoresArea/StoresArea";

/**
 * @typedef {object} Ly3SecondFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {Function} setSelectedPost Function used to set selected post.
 */

/**
 * Draw the map of LY3 second floor.
 */
export default function Ly3SecondFloor(
  /** @type {Ly3SecondFloorProps} */
  { storeData, locale, setSelectedPost },
) {
  const rightRowStart = 0;
  const rightRowEnd = 8;

  const topRowStart = rightRowEnd;
  const topRowEnd = 17;

  const tmallStart = 29;
  const tmallEnd = 31;

  const bottomRightStart = 31;
  const bottomRightEnd = bottomRightStart + 2;

  return (
    <div>
      {/* Background image. */}
      <img src="maps/LY3_2F.svg" width={10000} height={10000} />

      {/* Interaction overlay. */}
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {/* Top Row Start */}
        <StoresArea
          limit={topRowEnd - topRowStart + 1}
          storeData={storeData.slice(topRowStart, topRowEnd)}
          top={1000}
          left={2500}
          width={300}
          height={500}
          locale={locale}
          setSelectedPost={setSelectedPost}
          useRowIndex={false}
          fontSize="3.2rem"
        />
        {/* Top Row End */}
        {/* Right Row Start */}
        <StoresArea
          limit={rightRowEnd - rightRowStart + 1}
          storeData={storeData.slice(rightRowStart, rightRowEnd)}
          locale={locale}
          setSelectedPost={setSelectedPost}
          top={2000}
          left={6400}
          width={200}
          height={500}
          useRowIndex={true}
          rotate={90}
          fontSize="5rem"
        />
        {/* Right Row End */}
        {/* Tmall Coffee Start */}
        <StoresArea
          limit={tmallEnd - tmallStart + 1}
          storeData={storeData.slice(tmallStart, tmallEnd)}
          locale={locale}
          setSelectedPost={setSelectedPost}
          top={5200}
          left={4500}
          width={400}
          height={500}
          useRowIndex={false}
          fontSize="4rem"
        />
        {/* Tmall Coffee End */}
        {/* Fruit Juice Start */}

        {/* Fruit Juice End */}
        {/* Bottom Right Corner Start */}
        <StoresArea
          limit={bottomRightEnd - bottomRightStart + 1}
          storeData={storeData.slice(bottomRightStart, bottomRightEnd)}
          locale={locale}
          setSelectedPost={setSelectedPost}
          top={5800}
          left={7200}
          width={400}
          height={500}
          useRowIndex={false}
          fontSize="4rem"
        />
        {/* Bottom Right Corner End */}
      </div>
    </div>
  );
}
