/**
 * @file layout.jsx
 * @description Layout of the website.
 * @author Fovir
 * @date 2025-09-12
 */

import "../styles/global.css";
import xmumConfig from "../config";

/**
 * @description Meta data of the site.
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: xmumConfig.website.title,
  icons: {
    icon: xmumConfig.website.logo,
  },
  description: xmumConfig.seo.description,
  keywords: xmumConfig.seo.keywords,
  openGraph: {
    title: xmumConfig.website.title,
    description: xmumConfig.seo.description,
    url: xmumConfig.seo.url,
    siteName: xmumConfig.seo.siteName,
    type: "website",
    locale: xmumConfig.language.default,
    images: xmumConfig.seo.image,
  },
  twitter: {
    card: xmumConfig.seo.image,
    title: xmumConfig.website.title,
    description: xmumConfig.seo.description,
    images: xmumConfig.seo.image,
  },
  alternates: {
    canonical: xmumConfig.seo.url,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={xmumConfig.language.default}>
      <body>{children}</body>
    </html>
  );
}
