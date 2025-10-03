/**
 * @file src/components/D6Map/D6BodySection.jsx
 * @description Body section of D6.
 * @author Fovir
 * @since 2025-10-03
 */

import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useSelectedPost } from "../../hooks/useSelectedPost";
import ToolZone from "../ToolZone/ToolZone";
import { getIgnoreLayers } from "../../lib/getIgnoreLayers";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";
import Map from "../Map/Map";

/**
 * @typedef {object} D6BodySectionProps
 *
 * @property {string} locale Current locale.
 * @property {Function} setLocale Function used to change the value of `locale`.
 * @property {object[][]} d6Data Store data of D6.
 */

/**
 * Body section of D6.
 */
export default function D6BodySection(
  /** @type {D6BodySectionProps} */
  { locale, setLocale, d6Data },
) {
  const [layer, setLayer] = useState(0);
  const layerRange = 3;
  const layerStart = 0;
  const transformRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const [selectedPost, setSelectedPost] = useSelectedPost(locale);

  const maps = [null, null, null];

  return (
    <>
      <ToolZone
        locale={locale}
        setLocale={setLocale}
        layer={layer}
        setLayer={setLayer}
        layerRange={layerRange}
        transformRef={transformRef}
        layerIgnore={getIgnoreLayers(layerStart, maps)}
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

      <Map transformRef={transformRef}>{maps[layerStart]}</Map>
    </>
  );
}
