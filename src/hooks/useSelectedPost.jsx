import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import xmumConfig from "../config";

/**
 * Hook of setting selected post.
 *
 * @param {string} locale Current locale.
 *
 * @returns `[selectedPost, setSelectedPost]`
 *  - `selectedPost` Current selected post.
 *  - `setSelectedPost` Function used to set post.
 */
export function useSelectedPost(locale) {
  const [selectedPost, setSelectedPost] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  // Update selected post when hash tag changes.
  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.slice(1);
      if (!hash) {
        setSelectedPost(null);
        return;
      }
      let [slug, localeFromHash] = hash.split(
        xmumConfig.website.seperatorBetweenSlugAndLocale,
      );
      if (!localeFromHash) {
        setSelectedPost(null);
        return;
      }
      setSelectedPost({ slug: slug, locale: localeFromHash });
    }

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () =>
      window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update hash tag when selected post changes.
  useEffect(() => {
    if (!selectedPost) {
      return;
    }
    const newHash = `${selectedPost.slug}${xmumConfig.website.seperatorBetweenSlugAndLocale}${locale}`;
    if (window.location.hash.slice(1) !== newHash) {
      router.replace(`${pathname}#${newHash}`);
    }
  }, [selectedPost, locale, pathname, router]);

  console.log(selectedPost);

  return [selectedPost, setSelectedPost];
}
