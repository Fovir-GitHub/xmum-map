import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useSelectedPost(locale) {
  const [selectedPost, setSelectedPost] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.slice(1);
      if (!hash) {
        setSelectedPost(null);
        return;
      }
      let [slug, localeFromHash] = hash.split("-");
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

  useEffect(() => {
    if (!selectedPost) {
      return;
    }
    const newHash = `${selectedPost.slug}-${locale}`;
    if (window.location.hash.slice(1) !== newHash) {
      router.replace(`${pathname}#${newHash}`);
    }
  }, [selectedPost, locale, pathname, router]);

  return [selectedPost, setSelectedPost];
}
