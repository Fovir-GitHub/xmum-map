/**
 * @file B1BodySection.jsx
 * @description Body section of B1 map.
 * @author Fovir
 * @since 2025-09-23
 */

import { useRef, useState } from "react";
import ToolZone from "../ToolZone/ToolZone";
import { useSelectedPost } from "../../hooks/useSelectedPost";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname, useRouter } from "next/navigation";
import DetailPage from "../DetailPage/DetailPage";
import Map from "../Map/Map";
import B1GfMap from "./B1GfMap";

/**
 * Body section of B1 map.
 *
 * @param {string} locale Current locale.
 * @param {Function} setLocale Function used to set `locale`.
 * @param {object[][]} b1Data Data of B1 stores.
 */
export default function B1BodySection({ locale, setLocale, b1Data }) {
  const [layer, setLayer] = useState(0);
  const layerRange = 5;
  const transformRef = useRef(null);
  const [selectedPost, setSelectedPost] = useSelectedPost(locale);
  const router = useRouter();
  const pathname = usePathname();

  const floorMaps = [
    null,
    <B1GfMap
      storeData={b1Data[0]}
      locale={locale}
      setSelectedPost={setSelectedPost}
    />,
    null,
    null,
    null,
  ];

  return (
    <>
      <ToolZone
        locale={locale}
        setLocale={setLocale}
        layer={layer}
        setLayer={setLayer}
        layerRange={layerRange}
        transformRef={transformRef}
        layerStart={-1}
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

      <Map transformRef={transformRef}>{floorMaps[layer + 1]}</Map>
    </>
  );
}
