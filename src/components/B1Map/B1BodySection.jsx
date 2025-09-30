/**
 * @file src/components/B1Map/B1BodySection.jsx
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
 * @typedef {object} B1BodySectionProps
 *
 * @property {string} locale Current locale.
 * @property {Function} setLocale Function used to set `locale`.
 * @property {object[][]} b1Data Data of B1 stores.
 */

/**
 * Body section of B1 map.
 */
export default function B1BodySection(
  /** @type {B1BodySectionProps} */
  { locale, setLocale, b1Data },
) {
  const [layer, setLayer] = useState(0);
  const layerRange = 5;
  const transformRef = useRef(null);
  const [selectedPost, setSelectedPost] = useSelectedPost(locale);
  const router = useRouter();
  const pathname = usePathname();

  const floorMaps = [
    null,
    <B1GfMap storeData={b1Data[0]} locale={locale} />,
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
