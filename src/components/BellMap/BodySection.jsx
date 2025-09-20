/**
 * @file BodySection.jsx
 * @description Body section of bell map.
 * @author Fovir
 * @since 2025-09-21
 */

import { usePathname, useRouter } from "next/navigation";
import { clearHashTag } from "../../lib/routerOperation";
import { useSelectedPost } from "../../hooks/useSelectedPost";
import xmumConfig from "../../config";
import { useRef, useState } from "react";
import ToolZone from "../ToolZone/ToolZone";
import GlobalEscListener from "../GlobalEscListener/GlobalEscListener";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";
import XmumMap from "./XmumMap";
import BellAvenueMaps from "./BellAvenueMaps";
import BellSuiteMap from "./BellSuiteMap";
import Map from "../Map/Map";

/**
 * @typedef {Object} BodySectionProps
 * @property {string} locale
 * @property {Function} setLocale
 * @property {Array<Array<Object>>} avenueData
 * @property {Array<Array<Object>>} suiteData
 * @property {string[]} showCategories
 */

/**
 * Body section of bell map.
 *
 * @param {BodySectionProps} props
 */
export default function BodySection(props) {
  const { locale, setLocale, avenueData, suiteData, showCategories } =
    props;

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

  // Switch layers when `nextLayer` is not `null`.
  const handleSwitchLayer = (_, nextLayer) => {
    if (nextLayer !== null) {
      setLayer(nextLayer);
    }
  };

  // Function to run when closing the sidebar.
  const closeSidebarEffect = () => {
    setSelectedPost(null);
    clearHashTag(router, pathname);
  };

  // Function to run when stores are clicked.
  const handleStoreBlockClick = (slug, locale) => {
    setSelectedPost({
      slug: slug,
      locale: locale,
    });
  };

  return (
    <>
      <ToolZone
        locale={locale}
        setLocale={setLocale}
        layer={layer}
        layerRange={2}
        handleSwitchLayer={handleSwitchLayer}
        transformRef={transformRef}
      />

      <GlobalEscListener onEsc={closeSidebarEffect} />
      <Sidebar
        onClose={closeSidebarEffect}
        show={selectedPost !== null}
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
                handleStoreBlockClick={handleStoreBlockClick}
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
                handleStoreBlockClick={handleStoreBlockClick}
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
