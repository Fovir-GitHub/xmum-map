/**
 * @file src/app/layout.jsx
 * @description Layout of the website.
 * @author Fovir
 * @since 2025-08-22
 */

import "../styles/global.css";
import xmumConfig from "../config";
import Script from "next/script";

/**
 * Meta data of the site.
 *
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

/**
 * Root layout of page.jsx.
 *
 * It inserts the statstic link.
 */
export default function RootLayout({ children }) {
  return (
    <html lang={xmumConfig.language.default}>
      <body>
        {children}

        <Script
          src="https://umami.fovir.fyi/script.js"
          data-website-id="e1fe0b15-8800-43bb-8e87-87bd8aa1b98b"
          defer
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
