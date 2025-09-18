/**
 * @file page.jsx
 * @description Generate metadata for shops.
 * @author Fovir
 * @date 2025-09-18
 */

import DetailPage from "../../../components/DetailPage/DetailPage";
import xmumConfig from "../../../config";
import { getStoreBySlug } from "../../../lib/getStore";

// Generate metadata for all shops.
export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const store = await getStoreBySlug(slug);

  if (!store || !store.Name) {
    return { title: xmumConfig.seo.siteName };
  }

  const title = store.Name + " | " + xmumConfig.seo.siteName;
  const description = store.Description || xmumConfig.seo.description;
  const image = store.Image || xmumConfig.seo.image;

  return {
    title: title,
    icons: {
      icon: xmumConfig.website.logo,
    },
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      locale: locale,
      images: image,
    },
    twitter: {
      card: image,
      title: title,
      description: description,
      images: image,
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
}

// Seo page for robots.
export default async function ShopSeoPage({ params }) {
  const { slug, locale } = await params;

  return (
    <div>
      <DetailPage slug={slug} locale={locale} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== "undefined") {
              window.location.replace("/#${slug}-${locale}");
            }
          `,
        }}
      />
    </div>
  );
}
