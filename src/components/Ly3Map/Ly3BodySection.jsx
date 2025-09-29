/**
 * @file src/components/Ly3Map/Ly3BodySection.jsx
 * @description Body section of LY3 map.
 * @author Fovir
 * @since 2025-09-21
 */

import { useRef, useState } from "react";
import ToolZone from "../ToolZone/ToolZone";
import Map from "../Map/Map";
import Ly3SecondFloor from "./Ly3SecondFloor";
import { useSelectedPost } from "../../hooks/useSelectedPost";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "../Sidebar/Sidebar";
import DetailPage from "../DetailPage/DetailPage";
import Ly3GFloor from "./Ly3GFloor";
import Ly3FirstFloor from "./Ly3FirstFloor";

/**
 * @typedef {object} Ly3BodySectionProps
 *
 * @property {string} locale Current locale from `useState()` function.
 * @property {Function} setLocale Function used to change the value of `locale`.
 * @property {object[][]} ly3Data Store data of LY3.
 */

/**
 * Body section of LY3 map.
 */
export default function Ly3BodySection(
  /** @type {Ly3BodySectionProps} */
  { locale, setLocale, ly3Data },
) {
  const [layer, setLayer] = useState(0);
  const layerRange = 3;
  const transformRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const [selectedPost, setSelectedPost] = useSelectedPost(locale);

  const maps = [
    <Ly3GFloor
      storeData={ly3Data[0]}
      locale={locale}
      setSelectedPost={setSelectedPost}
    />,
    <Ly3FirstFloor
      locale={locale}
      storeData={ly3Data[1]}
      setSelectedPost={setSelectedPost}
    />,
    <Ly3SecondFloor
      locale={locale}
      storeData={ly3Data[2]}
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

      <Map transformRef={transformRef}>{maps[layer]}</Map>
    </>
  );
}
