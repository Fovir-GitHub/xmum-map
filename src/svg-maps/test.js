import { SVG, registerWindow } from "@svgdotjs/svg.js";
import { createSVGWindow } from "svgdom";
import fs from "fs";

// 创建虚拟 DOM
const window = createSVGWindow();
const document = window.document;
registerWindow(window, document);

const width = 800;
const height = 400;
const draw = SVG(document.documentElement).size(width, height);

// 街道背景
draw.rect(width, height).fill("#f0f0f0");

// 店铺数据（简单示例）
const stores = [
  { name: "Store A" },
  { name: "Store B" },
  { name: "Store C" },
  { name: "Store D" },
];

// 两排排列
const storeWidth = 100;
const storeHeight = 50;
stores.forEach((store, i) => {
  const x = i * (storeWidth + 20);
  // 上排
  draw.rect(storeWidth, storeHeight).fill("#ffcc00").move(x, 50);
  draw.text(store.name).move(x + 10, 50 + 15);

  // 下排
  draw.rect(storeWidth, storeHeight).fill("#00ccff").move(x, 150);
  draw.text(store.name).move(x + 10, 150 + 15);
});

// 输出 SVG 文件
fs.writeFileSync("street_map.svg", draw.svg());
console.log("✅ street_map.svg 已生成");
