/**
 * @file src/components/BellMap/BellBodySection.jsx
 * @description Body section of bell map.
 * @author Fovir
 * @since 2025-09-25
 */

import { usePathname, useRouter } from "next/navigation";
import { useSelectedPost } from "../../hooks/useSelectedPost";
import xmumConfig from "../../config";
import { useRef, useState } from "react";
import ToolZone from "../ToolZone/ToolZone";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";
import XmumMap from "./XmumMap";
import BellAvenueMaps from "./BellAvenueMaps";
import BellSuiteMap from "./BellSuiteMap";
import Map from "../Map/Map";

/**
 * @typedef {object} BellBodySectionProps
 *
 * @property {string} locale Current locale.
 * @property {Function} setLocale Function used to set locale.
 * @property {object[][]} avenueData Data of bell avenue.
 * @property {object[][]} suiteData Data of bell suite.
 * @property {string[]} showCategories Categories that can be displayed.
 */

/**
 * Body section of bell map.
 */
export default function BellBodySection(
  /** @type {BellBodySectionProps} */
  { locale, setLocale, avenueData, suiteData, showCategories },
) {
  // Width and height of map.
  const bellAvenueMapWidth = xmumConfig.map.bellAvenueWidth;
  const bellSuiteMapWidth = xmumConfig.map.bellSuiteWidth;
  const mapHeight = xmumConfig.map.height;

  // Ref to `TransformWrapper`.
  const transformRef = useRef(null);

  // Hash tag operations.
  const router = useRouter();
  const pathname = usePathname();

  // Floor layers.
  const [layer, setLayer] = useState(0);

  // Clicked store.
  const [selectedPost, setSelectedPost] = useSelectedPost(locale);

  return (
    <>
      <ToolZone
        locale={locale}
        setLocale={setLocale}
        layer={layer}
        setLayer={setLayer}
        layerRange={2}
        transformRef={transformRef}
      />

      <Sidebar
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        router={router}
        pathname={pathname}
      >
        <DetailPage
          slug={selectedPost?.slug || "404"}
          locale={locale}
        />
      </Sidebar>

      <Map transformRef={transformRef}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "500px",
          }}
        >
          <XmumMap />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                flex: 1,
              }}
            >
              <BellAvenueMaps
                storeData={avenueData}
                currentFloor={layer}
                mapWidth={bellAvenueMapWidth}
                mapHeight={mapHeight}
                showCategories={showCategories}
                locale={locale}
              />
            </div>
            <div
              style={{
                flex: 1,
                marginLeft: "200px",
              }}
            >
              <BellSuiteMap
                storeData={suiteData}
                locale={locale}
                mapWidth={bellSuiteMapWidth}
                mapHeight={mapHeight}
              />
            </div>
          </div>
        </div>
      </Map>
    </>
  );
}
