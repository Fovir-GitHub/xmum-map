/**
 * @file not-found.js
 * @description 404 page redirects to home page.
 * @author Fovir
 * @since 2025-09-05
 */

import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/");
}
