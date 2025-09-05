/**
 * @file Map.jsx
 * @description Create the `Map` component to contain all maps. And use `react-zoom-pan-pinch` to enable users to move and zoom maps.
 * @author Fovir
 * @date 2025-08-30
 */

"use client";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { useEffect, useState } from "react";

export default function Map({ children, mapWidth, transformRef }) {
  // Get current window width.
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // If it has not got the window width, then skip the render process.
  if (windowWidth === 0) {
    return;
  }

  return (
    <TransformWrapper
      ref={transformRef}
      limitToBounds={false}
      minScale={0.05}
      wheel={{ step: 0.01 }}
      initialScale={0.8}
    >
      <TransformComponent>{children}</TransformComponent>
    </TransformWrapper>
  );
}
