import { useState } from "react";
import ToolZone from "../ToolZone/ToolZone";

export default function BodySection({ locale, setLocale }) {
  const [layer, setLayer] = useState(0);
  const layerRange = 3;

  return (
    <>
      <ToolZone
        locale={locale}
        setLocale={setLocale}
        layer={layer}
        setLayer={setLayer}
        layerRange={layerRange}
      />
    </>
  );
}
