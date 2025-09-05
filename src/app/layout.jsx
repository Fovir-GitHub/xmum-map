/**
 * @file layout.jsx
 * @description Layout of the website.
 * @author Fovir
 * @date 2025-09-05
 */

import "../styles/global.css";

// Meta data of the site.
export const metadata = {
  title: "XMUM Map",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
