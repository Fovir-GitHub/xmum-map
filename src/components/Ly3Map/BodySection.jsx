import { useRef, useState } from "react";
import ToolZone from "../ToolZone/ToolZone";
import Map from "../Map/Map";

export default function BodySection({ locale, setLocale }) {
  const [layer, setLayer] = useState(0);
  const layerRange = 3;
  const transfromRef = useRef(null);

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

      <Map transformRef={transfromRef}></Map>
    </>
  );
}
