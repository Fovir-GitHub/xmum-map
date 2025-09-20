/**
 * @file LanguageSwitcher.jsx
 * @description Language switcher button component.
 * @author Fovir
 * @since 2025-09-20
 */

import { ToggleButton } from "@mui/material";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";

/**
 * Button that switch language between `zh` and `en`.
 *
 * It will display `locale` as text, and it requires `setLocale` to change the locale.
 *
 * @param locale Locale from `useState()`.
 * @param setLocale Function used to set locale.
 */
export default function LanguageSwitcher({ locale, setLocale }) {
  return (
    <ToggleButton
      onClick={() => {
        if (locale === "zh") {
          setLocale("en");
        } else {
          setLocale("zh");
        }
      }}
      sx={{
        backgroundColor: catppuccinMochaColors.blue,
        "&:hover": {
          backgroundColor: catppuccinMochaColors.sapphire,
        },
      }}
    >
      {locale}
    </ToggleButton>
  );
}
