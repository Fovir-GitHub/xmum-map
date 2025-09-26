"use client";

import { StoresArea } from "../StoresArea/StoresArea";

/**
 * @typedef {object} Ly3FirstFloorProps
 *
 * @property {object[]} storeData Data of stores.
 * @property {string} locale Current locale.
 * @property {Function} setSelectedPost Function used to set selected post.
 */

export default function Ly3FirstFloor(
  /** @type {Ly3FirstFloorProps} */
  { storeData, locale, setSelectedPost },
) {
  const rightRowStart = 0;
  const rightRowEnd = rightRowStart + 1;
  const topRowStart = rightRowEnd;
  const topRowEnd = 10;
  const leftRowStart = topRowEnd;
  const leftRowEnd = topRowEnd + 1;

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
        <StoresArea
          limit={1}
          top={2000}
          left={8000}
          width={2000}
          height={1000}
          locale={locale}
          storeData={storeData.slice(rightRowStart, rightRowEnd)}
          fontSize="10rem"
          setSelectedPost={setSelectedPost}
          rotate={90}
        />
      </div>
    </div>
  );
}
