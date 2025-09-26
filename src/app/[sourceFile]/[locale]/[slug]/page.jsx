/**
 * @file src/app/[sourceFile]/[locale]/[slug]/page.jsx
 * @description Generate SEO pages for stores.
 * @author Fovir
 * @since 2025-09-26
 */

import DetailPage from "../../../../components/DetailPage/DetailPage";
import xmumConfig from "../../../../config";
import {
  getAllStoresForStaticGeneration,
  getStoreBySlug,
} from "../../../../lib/getStore";

/**
 * Generate static params.
 */
export async function generateStaticParams() {
  const locales = ["zh", "en"];

  const allStores = getAllStoresForStaticGeneration("src/data");
  const params = [];

  for (const store of allStores) {
    if (!store.Slug) {
      continue;
    }

    for (const locale of locales) {
      params.push({
        sourceFile: store.sourceFileName,
        locale: locale,
        slug: store.Slug.toString(),
      });
    }
  }

  return params;
}

/**
 * Generate metadata for all shops.
 */
export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const result = await getStoreBySlug(slug);
  const store = result.found;

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

/**
 * SEO page of stores.
 */
export default async function StorePage({ params }) {
  const { sourceFile, locale, slug } = await params;
  console.log(sourceFile);

  return (
    <div>
      <DetailPage slug={slug} locale={locale} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== "undefined") {
              if ("${sourceFile}" === "bell_avenue" || "${sourceFile}" ==="bell_suite") {
                window.location.replace("/#${slug}${xmumConfig.website.seperatorBetweenSlugAndLocale}${locale}");
              } else {
                window.location.replace("/${sourceFile}/#${slug}${xmumConfig.website.seperatorBetweenSlugAndLocale}${locale}");
              }
            }
          `,
        }}
      />
    </div>
  );
}
