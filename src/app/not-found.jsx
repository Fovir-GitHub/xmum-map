/**
 * @file src/app/not-found.jsx
 * @description 404 page redirects to home page.
 * @author Fovir
 * @since 2025-09-05
 */

import { redirect } from "next/navigation";

/**
 * Page of not-found.
 *
 * When users access to an invalid or non-exist page,
 * redirect them to the home page.
 */
export default function NotFound() {
  redirect("/");
}
