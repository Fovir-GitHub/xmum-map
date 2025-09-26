/**
 * @file src/components/ToolZone/ResetLocationButton.jsx
 * @description Button component used to reset location of a map.
 * @author Fovir
 * @since 2025-09-20
 */

import { ToggleButton } from "@mui/material";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";

/**
 * @typedef {object} ResetLocationButtonProps
 *
 * @property {import("react").Ref} transformRef Ref of map used to reset its location.
 */

/**
 * Component that reset location on a map.
 *
 * When click on the button, it will reset the map to initial state, which includes the scale, position, etc.
 */
export default function ResetLocationButton(
  /** @type {ResetLocationButtonProps} */
  { transformRef },
) {
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
