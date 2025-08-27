/**
 * @file Map.jsx
 * @description Create the `Map` component to contain all maps. And use `return` to enable users to move and zoom maps.
 * @author Fovir
 * @date 2025-08-27
 */

"use client";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

export default function Map({ children }) {
  return (
    <TransformWrapper
      limitToBounds={false}
      minScale={0.05}
      wheel={{ step: 0.5 }}
    >
      <TransformComponent>{children}</TransformComponent>
    </TransformWrapper>
  );
}
