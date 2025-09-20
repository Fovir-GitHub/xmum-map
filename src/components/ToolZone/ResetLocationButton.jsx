/**
 * @file ResetLocationButton.jsx
 * @description Button component used to reset location of a map.
 * @author Fovir
 * @date 2025-09-20
 */

import { ToggleButton } from "@mui/material";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";

/**
 * @description Component that reset location on a map.
 * @param transformRef Ref of the map.
 */
export default function ResetLocationButton({ transformRef }) {
  return (
    <ToggleButton
      onClick={() => {
        transformRef.current?.resetTransform();
      }}
    >
      <MyLocationRoundedIcon />
    </ToggleButton>
  );
}
