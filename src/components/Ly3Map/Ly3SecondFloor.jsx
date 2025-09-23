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
 * @typedef {object} StoresAreaProps
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {number} limit Index limit.
 * @property {number} top Top position in `absolute` layout.
 * @property {number} left Left position in `absolute` layout.
 * @property {number} width Width of a single store block.
 * @property {number} height Height of a single store block.
 * @property {string} fontSize Font size of the store block.
 * @property {(post: any) => void} setSelectedPost Function used to set selected post.
 * @property {boolean} [useRowIndex=false] Determine whether to use `store.Row` as index.
 * @property {boolean} [rotate=false] Determine whether to rotate the row.
 */

/**
 * Draw a row of stores.
 *
 * @param {StoresAreaProps} props
 */
export function StoresArea(props) {
  const {
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
  } = props;

  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: getTotalStoreWidth(storeData, width),
        height: height,
        transform: rotate && "rotate(90deg)",
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
