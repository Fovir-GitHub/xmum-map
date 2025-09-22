/**
 * @file Ly3SecondFloor.jsx
 * @description Map of LY3 second floor.
 * @author Fovir
 * @since 2025-09-22
 */

/**
 * TODO:
 *  Refactor maps.
 */

"use client";

import DrawAMap from "../DrawAMap/DrawAMap";

export default function Ly3SecondFloor({ storeData, locale }) {
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
      <img src="maps/LY3_2F.svg" width={10000} height={10000} />

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
        <TopRow
          storeData={storeData.slice(topRowStart, topRowEnd)}
          locale={locale}
        />
        <LeftRow
          storeData={storeData.slice(leftRowStart, leftRowEnd)}
          locale={locale}
        />
        <TmallCoffee
          storeData={storeData.slice(tmallStart, tmallEnd)}
          locale={locale}
        />
        <FruitJuice
          storeData={storeData.slice(fruitJuiceStart, fruitJuiceEnd)}
          locale={locale}
        />
        <TopRightCorner
          storeData={storeData.slice(
            topRightCornerStart,
            topRightCornerEnd,
          )}
          locale={locale}
        />
      </div>
    </div>
  );
}

function getTotalStoreWidth(stores, width) {
  let totalWidth = 0;

  stores.map(
    (store) => (totalWidth += store.Width !== null ? store.Width : 1),
  );
  return totalWidth * width;
}

function TopRow({ storeData, locale }) {
  const rowIndexLimit = 8;
  const limit = 8;

  const top = 1750;
  const left = 200;

  const storeWidth = 350;
  const storeHeight = 500;

  return (
    <div
      style={{
        position: "relative",
        top: top,
        left: left,
        width: getTotalStoreWidth(storeData, storeWidth),
        height: storeHeight,
      }}
    >
      <svg width={"100%"} height={"100%"}>
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: rowIndexLimit,
          limit: limit,
          locale: locale,
          handleStoreBlockClick: () => console.log("Clicked"),
          height: storeHeight,
          width: storeWidth,
          fontSize: "4rem",
        })}
      </svg>
    </div>
  );
}

function LeftRow({ storeData, locale }) {
  const rowIndexLimit = 40;
  const storeWidth = 250;
  const storeHeight = 500;

  const top = 4300;
  const left = -2700;

  return (
    <div
      style={{
        width: getTotalStoreWidth(storeData, storeWidth),
        height: storeHeight,
        position: "absolute",
        top: top,
        left: left,
        transform: "rotate(-90deg)",
        transformOrigin: "center",
      }}
    >
      <svg width={"100%"} height={"100%"}>
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: rowIndexLimit,
          limit: rowIndexLimit,
          locale: locale,
          fontSize: "4rem",
          height: storeHeight,
          width: storeWidth,
          useRowIndex: false,
        })}
      </svg>
    </div>
  );
}

function TmallCoffee({ storeData, locale }) {
  const limit = 1;
  const storeWidth = 800;
  const storeHeight = 800;
  const top = 4300;
  const left = 5400;

  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        height: storeHeight,
        width: getTotalStoreWidth(storeData, storeWidth),
      }}
    >
      <svg width={"100%"} height={"100%"}>
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: limit,
          locale: locale,
          limit: limit,
          useRowIndex: false,
          width: storeWidth,
          height: storeHeight,
          fontSize: "6rem",
        })}
      </svg>
    </div>
  );
}

function FruitJuice({ storeData, locale }) {
  const limit = 1;

  const storeWidth = 350;
  const storeHeight = 500;

  const top = 7500;
  const left = 4000;

  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        height: storeHeight,
        width: getTotalStoreWidth(storeData, storeWidth),
      }}
    >
      <svg width={"100%"} height={"100%"}>
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: limit,
          locale: locale,
          limit: limit,
          useRowIndex: false,
          width: storeWidth,
          height: storeHeight,
          fontSize: "3rem",
        })}
      </svg>
    </div>
  );
}

function TopRightCorner({ storeData, locale }) {
  const limit = 2;

  const storeWidth = 350;
  const storeHeight = 500;

  const top = 2000;
  const left = 6000;

  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        height: storeHeight,
        width: getTotalStoreWidth(storeData, storeWidth),
      }}
    >
      <svg width={"100%"} height={"100%"}>
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: limit,
          locale: locale,
          limit: limit,
          useRowIndex: false,
          width: storeWidth,
          height: storeHeight,
          fontSize: "3rem",
        })}
      </svg>
    </div>
  );
}
