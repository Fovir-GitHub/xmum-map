/**
 * @file GlobalEscListener.jsx
 * @description This component listens `Esc` globally.
 * @author Fovir
 * @since 2025-08-29
 */

"use client";

import { useEffect } from "react";

/**
 * @typedef {object} GlobalEscListenerProps
 *
 * @property {Function} onEsc Function to be called when pressing `Esc`.
 */

/**
 * Listener of `Esc` key down.
 */
export default function GlobalEscListener(
  /** @type {GlobalEscListenerProps} */
  { onEsc },
) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onEsc();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onEsc]);

  return null;
}
