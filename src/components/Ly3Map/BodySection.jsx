import { useRef, useState } from "react";
import ToolZone from "../ToolZone/ToolZone";
import Map from "../Map/Map";
import Ly3SecondFloor from "./Ly3SecondFloor";

export default function BodySection({ locale, setLocale, ly3Data }) {
  const [layer, setLayer] = useState(0);
  const layerRange = 3;
  const transfromRef = useRef(null);

  const maps = [
    null,
    null,
    <Ly3SecondFloor locale={locale} storeData={ly3Data[2]} />,
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

      <Map transformRef={transfromRef}>{maps[layer]}</Map>
    </>
  );
}
