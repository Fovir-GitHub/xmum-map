/**
 * @file build-mdx.js
 * @description Convert `.mdx` files to `.html`.
 * @author Fovir
 * @date 2025-09-04
 */

import fs from "fs";
import path from "path";
import { compile } from "@mdx-js/mdx";
import { renderToStaticMarkup } from "react-dom/server";

const mdxDir = path.join(process.cwd(), "posts/");
const outDir = path.join(process.cwd(), "public/mdx-html");
const tempDir = path.join(process.cwd(), ".temp");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

async function build() {
  const files = fs
    .readdirSync(mdxDir)
    .filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const filePath = path.join(mdxDir, file);
    const mdxSource = fs.readFileSync(filePath, "utf8");

    const compiled = await compile(mdxSource, {
      outputFormat: "program",
      baseUrl: new URL(`file://${filePath}`).href,
    });

    const tempFile = path.join(tempDir, file.replace(".mdx", ".mjs"));
    fs.writeFileSync(tempFile, String(compiled));

    const { default: Content } = await import(`file://${tempFile}`);

    const html = renderToStaticMarkup(Content({}));
    const outFile = path.join(outDir, file.replace(".mdx", ".html"));
    fs.writeFileSync(outFile, html);
    console.log(`✅ Generated ${outFile}`);
  }
}

build();
