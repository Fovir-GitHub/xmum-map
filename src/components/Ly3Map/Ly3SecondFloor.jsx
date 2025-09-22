"use client";

import DrawAMap from "../DrawAMap/DrawAMap";

export default function Ly3SecondFloor({ storeData, locale }) {
  const topRowStart = 0,
    topRowEnd = 8;
  const leftRowStart = topRowEnd,
    leftRowEnd = 29;
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
      </div>
    </div>
  );
}

function TopRow({ storeData, locale }) {
  const rowIndexLimit = 8;
  const limit = 8;

  const top = 1750;
  const left = 200;

  return (
    <div
      style={{
        position: "relative",
        top: top,
        left: left,
        width: "100%",
        height: "100%",
      }}
    >
      <svg width={"100%"} height={"100%"}>
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: rowIndexLimit,
          limit: limit,
          locale: locale,
          handleStoreBlockClick: () => console.log("Clicked"),
          height: 400,
          width: 350,
          fontSize: "4rem",
        })}
      </svg>
    </div>
  );
}

function LeftRow({ storeData, locale }) {
  const rowIndexLimit = 40;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 600,
        left: -100,
      }}
    >
      <svg
        width={"100%"}
        height={"100%"}
        transform="rotate(-90, 100, 50)"
      >
        {DrawAMap({
          stores: storeData,
          rowIndexLimit: rowIndexLimit,
          limit: rowIndexLimit,
          locale: locale,
          fontSize: "4rem",
          height: 400,
          width: 300,
        })}
      </svg>
    </div>
  );
}
