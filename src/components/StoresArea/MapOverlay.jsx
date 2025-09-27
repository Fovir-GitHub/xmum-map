/**
 * @file src/components/StoresArea/MapOverlay.jsx
 * @description Overlay container of a map.
 * @author Fovir
 * @since 2025-09-27
 */

/**
 * @typedef {object} MapOverlayProps
 *
 * @property {any} children Children elements.
 */

/**
 * Overlay of a map.
 */
export default function MapOverlay(
  /** @type {MapOverlayProps} */
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
