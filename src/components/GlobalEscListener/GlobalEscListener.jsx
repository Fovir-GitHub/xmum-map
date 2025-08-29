/**
 * @file GlobalEscListener.jsx
 * @description This component listens `Esc` globally.
 * @author Fovir
 * @date 2025-08-29
 */

"use client";

import { useEffect } from "react";

/**
 * @param onEsc Function to be ran on pressing `Esc`.
 */
export default function GlobalEscListener({ onEsc }) {
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
