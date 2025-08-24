"use client";
import mapStyle from "./map.module.css";

export default function BellMaps({ storeData }) {
  const WIDTH = 5000;
  const HEIGHT = 1000;

  const gFloorMap = (
    <BellFloorMap
      svgWidth={WIDTH}
      svgHeight={HEIGHT}
      stores={storeData[0]}
    />
  );

  return gFloorMap;
}

function BellFloorMap({ svgWidth, svgHeight, stores }) {
  const ROW_INDEX_LIMIT = 39; // The last store of the first row.
  const STORE_BLOCK_WIDTH = 100; // Width of a store.
  const STORE_BLOCK_HEIGHT = 150; // Height of a store.
  const RIGHT_BOUNDARY = (ROW_INDEX_LIMIT - 1) * STORE_BLOCK_WIDTH; // Right boundary of the map.
  const FIRST_ROW_Y = 10;
  const SECOND_ROW_Y = 200;

  return (
    <svg width={svgWidth} height={svgHeight}>
      {stores.map((store, index) => {
        if (!store.Name) {
          return;
        }

        let x = 0;
        let y = 0;

        if (index < ROW_INDEX_LIMIT) {
          x = (index + 1) * STORE_BLOCK_WIDTH;
          y = FIRST_ROW_Y;
        } else {
          x =
            RIGHT_BOUNDARY -
            (index - ROW_INDEX_LIMIT + 1) * STORE_BLOCK_WIDTH;
          y = SECOND_ROW_Y;
        }

        return (
          <StoreBlock
            x={x}
            y={y}
            width={STORE_BLOCK_WIDTH}
            height={STORE_BLOCK_HEIGHT}
            stroke={"white"}
            strokeWidth={2}
            text={store.Name}
            key={crypto.randomUUID()}
            handleClick={() => alert("Hello")}
          />
        );
      })}
    </svg>
  );
}

function StoreBlock({
  x,
  y,
  fill,
  width,
  height,
  stroke,
  strokeWidth,
  text,
  handleClick,
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        fill={fill}
        width={width}
        height={height}
        stroke={stroke}
        strokeWidth={strokeWidth}
        onClick={handleClick}
      />
      <foreignObject width={width} height={height} x={x} y={y}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className={mapStyle.svgText}
        >
          {text}
        </div>
      </foreignObject>
    </g>
  );
}
