/**
 * @file src/components/StoresArea/Overlay.jsx
 * @description Overlay container of a map.
 * @author Fovir
 * @since 2025-09-27
 */

/**
 * @typedef {object} OverlayProps
 *
 * @property {any} children Children elements.
 */

/**
 * Overlay of a map.
 */
export default function Overlay(
  /** @type {OverlayProps} */
  { children },
) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {children}
    </div>
  );
}
