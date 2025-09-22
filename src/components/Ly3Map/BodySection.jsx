/**
 * @file BodySection.jsx
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

/**
 * Body section of LY3 map.
 *
 * @param {string} locale Current locale from `useState()` function.
 * @param {Function} setLocale Function used to change the value of `locale`.
 * @param {object[][]} ly3Data Store data of LY3.
 */
export default function BodySection({ locale, setLocale, ly3Data }) {
  const [layer, setLayer] = useState(0);
  const layerRange = 3;
  const transfromRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const [selectedPost, setSelectedPost] = useSelectedPost(locale);

  // Function to run when stores are clicked.
  const handleStoreBlockClick = (slug, locale) => {
    setSelectedPost({
      slug: slug,
      locale: locale,
    });
  };

  const maps = [
    null,
    null,
    <Ly3SecondFloor
      locale={locale}
      storeData={ly3Data[2]}
      handleStoreBlockClick={handleStoreBlockClick}
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
        transformRef={transfromRef}
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

      <Map transformRef={transfromRef}>{maps[layer]}</Map>
    </>
  );
}
