import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  const { slug, locale } = params;
  const filePath = path.join(
    process.cwd(),
    "posts",
    `${slug}.${locale}.md`,
  );
  const fileContent = fs.readFileSync(filePath, "utf8");

  return new Response(JSON.stringify({ content: fileContent }));
}
