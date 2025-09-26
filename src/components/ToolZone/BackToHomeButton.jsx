/**
 * @file src/components/ToolZone/BackToHomeButton.jsx
 * @description Back to home button.
 * @author Fovir
 * @since 2025-09-23
 */

import { ToggleButton } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useRouter } from "next/navigation";

/**
 * A button clicked to go back home.
 */
export default function BackToHomeButton() {
  const router = useRouter();

  return (
    <ToggleButton onClick={() => router.push("/")}>
      <HomeRoundedIcon />
    </ToggleButton>
  );
}
