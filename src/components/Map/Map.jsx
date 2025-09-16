/**
 * @file Map.jsx
 * @description Create the `Map` component to contain all maps. And use `react-zoom-pan-pinch` to enable users to move and zoom maps.
 * @author Fovir
 * @date 2025-09-16
 */

"use client";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { useEffect, useState } from "react";
import { isMobile } from "../../lib/isMobile";

export default function Map({ children, transformRef }) {
  // Get current window width.
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const mobileDevice = isMobile();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  // If it has not got the window width or height, then skip the render process.
  if (windowWidth === 0 || windowHeight === 0) {
    return;
  }

  return (
    <TransformWrapper
      ref={transformRef}
      limitToBounds={false}
      minScale={0.01}
      wheel={{
        step: 0.0001,
        smoothStep: 0.0002,
        wheelDisabled: false,
        excluded: [],
      }}
      initialScale={
        mobileDevice ? windowWidth / 10000 : windowWidth / 15000
      }
      initialPositionY={mobileDevice ? windowHeight / 4 : 0}
      initialPositionX={
        mobileDevice ? windowWidth / 8 : windowWidth / 4
      }
    >
      <TransformComponent>{children}</TransformComponent>
    </TransformWrapper>
  );
}
