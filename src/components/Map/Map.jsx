/**
 * @file Map.jsx
 * @description Create the `Map` component to contain all maps.
 * @author Fovir
 * @date 2025-08-26
 */

"use client";
import panzoom from "panzoom";
import { useEffect, useRef } from "react";
import mapStyle from "./map.module.css";

export default function Map({ children }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      const panzoomInstance = panzoom(boxRef.current, {
        zoomSpeed: 1,
        maxZoom: 5,
        minZoom: 0.05,
        smoothScroll: true,
        bounds: false,
      });

      return () => panzoomInstance.dispose();
    }
  }, []);

  return (
    <div ref={boxRef} className={mapStyle.map}>
      {children}
    </div>
  );
}
