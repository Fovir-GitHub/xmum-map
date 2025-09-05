/**
 * @file layout.jsx
 * @description Layout of the website.
 * @author Fovir
 * @date 2025-09-05
 */

import "../styles/global.css";
import xmumConfig from "../config";

// Meta data of the site.
export const metadata = {
  title: xmumConfig.website.title,
  icons: {
    icon: xmumConfig.website.logo,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
