/**
 * @file Ly3SecondFloor.jsx
 * @description Map of LY3 second floor.
 * @author Fovir
 * @since 2025-09-22
 */

"use client";

import DrawAMap from "../DrawAMap/DrawAMap";

/**
 * Draw the map of LY3 second floor.
 *
 * @param {object[]} storeData Data of stores.
 * @param {string} locale Current locale.
 * @param {Function} setSelectedPost Function used to set selected post.
 */
export default function Ly3SecondFloor({
  storeData,
  locale,
  setSelectedPost,
}) {
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
          limit={8}
          top={1750}
          left={200}
          width={350}
          height={500}
          locale={locale}
          storeData={storeData.slice(topRowStart, topRowEnd)}
          fontSize={"4rem"}
          useRowIndex={true}
          setSelectedPost={setSelectedPost}
        />
        {/* Top Row End */}
        {/* Left Row Start */}
        <StoresArea
          limit={40}
          top={4300}
          left={-2700}
          width={250}
          height={500}
          locale={locale}
          storeData={storeData.slice(leftRowStart, leftRowEnd)}
          fontSize={"4rem"}
          rotate={true}
          setSelectedPost={setSelectedPost}
        />
        {/* Left Row End */}
        {/* Tmall Coffee Start */}
        <StoresArea
          limit={1}
          top={4300}
          left={5400}
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
          top={7500}
          left={4000}
          width={350}
          height={500}
          locale={locale}
          storeData={storeData.slice(fruitJuiceStart, fruitJuiceEnd)}
          fontSize={"3rem"}
          setSelectedPost={setSelectedPost}
        />
        {/* Fruit Juice End */}
        {/* Top Right Corner Start */}
        <StoresArea
          limit={2}
          top={2000}
          left={6000}
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
        {/* Top Right Corner End */}
      </div>
    </div>
  );
}

/**
 * Calculate the total width of a row of stores.
 *
 * @param {object[]} stores Data of stores.
 * @param {number} width Width of a single store.
 *
 * @returns Total width of the row of stores.
 */
function getTotalStoreWidth(stores, width) {
  let totalWidth = 0;

  stores.map(
    (store) => (totalWidth += store.Width !== null ? store.Width : 1),
  );
  return totalWidth * width;
}

/**
 * Draw a row of stores.
 *
 * @param {object[]} storeData Data of stores.
 * @param {string} locale Current locale.
 * @param {number} limit Index limit.
 * @param {number} top Top position in `absolute` layout.
 * @param {number} left Left position in `absolute` layout.
 * @param {number} width Width of a single store block.
 * @param {number} height Height of a single store block.
 * @param {string} fontSize Font size of the store block.
 * @param {Function} setSelectedPost Function used to set selected post.
 * @param {boolean} [useRowIndex=false] Determine whether to use `store.Row` as index.
 * @param {boolean} [rotate=false] Determine whether to rotate the row.
 */
function StoresArea({
  storeData,
  locale,
  limit,
  top,
  left,
  width,
  height,
  fontSize,
  setSelectedPost,
  useRowIndex = false,
  rotate = false,
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: getTotalStoreWidth(storeData, width),
        height: height,
        transform: rotate && "rotate(-90deg)",
        transformOrigin: rotate && "center",
      }}
    >
      <svg width={"100%"} height={"100%"}>
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: limit,
          limit: limit,
          locale: locale,
          height: height,
          width: width,
          fontSize: fontSize,
          useRowIndex: useRowIndex,
          setSelectedPost: setSelectedPost,
        })}
      </svg>
    </div>
  );
}
