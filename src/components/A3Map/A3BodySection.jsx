/**
 * @file src/components/A3Map/A3BodySection.jsx
 * @description Body section of A3.
 * @author Fovir
 * @since 2025-09-27
 */

"use client";

/**
 * @typedef {object} A3BodySectionProps
 *
 * @property {string} locale Current locale from `useState()` function.
 * @property {Function} setLocale Function used to change the value of `locale`.
 * @property {object[][]} a3Data Store data of A3.
 */

import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useSelectedPost } from "../../hooks/useSelectedPost";
import ToolZone from "../ToolZone/ToolZone";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";
import Map from "../Map/Map";
import A3GFloor from "./A3GFloor";
import A3FirstFloor from "./A3FirstFloor";

export default function A3BodySection(
  /** @type {A3BodySectionProps} */
  { locale, setLocale, a3Data },
) {
  const [layer, setLayer] = useState(0);
  const layerRange = 4;
  const layerStart = 0;

  const transformRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const [selectedPost, setSelectedPost] = useSelectedPost(locale);

  const floorMaps = [
    <A3GFloor
      storeData={a3Data[0]}
      locale={locale}
      setSelectedPost={setSelectedPost}
    />,
    <A3FirstFloor
      storeData={a3Data[1]}
      locale={locale}
      setSelectedPost={setSelectedPost}
    />,
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
        layerStart={layerStart}
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

      <Map transformRef={transformRef}>{floorMaps[layer]}</Map>
    </>
  );
}
