/**
 * @file routerOperation.jsx
 * @description Functions of router operation.
 * @author Fovir
 * @since 2025-09-20
 */

/**
 * Transform URL from `https://example.com#hash-tag` to `https://example.com`.
 *
 * @param {import("next/dist/shared/lib/app-router-context.shared-runtime").AppRouterInstance} router Router of the website.
 * @param {string} pathname Current path name.
 */
export function clearHashTag(router, pathname) {
  router.replace(pathname);
}
