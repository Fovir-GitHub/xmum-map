/**
 * @file Ly3SecondFloor.jsx
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
  const topRowStart = 0;
  const topRowEnd = 8;

  const leftRowStart = topRowEnd + 1;
  const leftRowEnd = 29;

  const tmallStart = leftRowEnd;
  const tmallEnd = tmallStart + 1;

  const fruitJuiceStart = leftRowEnd;
  const fruitJuiceEnd = fruitJuiceStart + 1;

  const topRightCornerStart = tmallStart + 2;
  const topRightCornerEnd = topRightCornerStart + 2;

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
          limit={40}
          top={1000}
          left={2700}
          width={230}
          height={400}
          locale={locale}
          storeData={storeData.slice(leftRowStart, leftRowEnd)}
          fontSize={"3rem"}
          setSelectedPost={setSelectedPost}
        />
        {/* Top Row End */}
        {/* Right Row Start */}
        <StoresArea
          limit={8}
          top={3000}
          left={5600}
          width={350}
          height={500}
          locale={locale}
          storeData={storeData.slice(topRowStart, topRowEnd)}
          fontSize={"4rem"}
          useRowIndex={true}
          rotate={true}
          setSelectedPost={setSelectedPost}
        />
        {/* Right Row End */}
        {/* Tmall Coffee Start */}
        <StoresArea
          limit={1}
          top={5500}
          left={4600}
          width={800}
          height={800}
          locale={locale}
          storeData={storeData.slice(tmallStart, tmallEnd)}
          fontSize={"6rem"}
          setSelectedPost={setSelectedPost}
        />
        {/* Tmall Coffee End */}
        {/* Fruit Juice Start */}
        <StoresArea
          limit={1}
          top={4500}
          left={2200}
          width={350}
          height={500}
          locale={locale}
          storeData={storeData.slice(fruitJuiceStart, fruitJuiceEnd)}
          fontSize={"3rem"}
          setSelectedPost={setSelectedPost}
        />
        {/* Fruit Juice End */}
        {/* Bottom Right Corner Start */}
        <StoresArea
          limit={2}
          top={5800}
          left={7000}
          width={350}
          height={500}
          locale={locale}
          storeData={storeData.slice(
            topRightCornerStart,
            topRightCornerEnd,
          )}
          fontSize={"3rem"}
          setSelectedPost={setSelectedPost}
        />
        {/* Bottom Right Corner End */}
      </div>
    </div>
  );
}
