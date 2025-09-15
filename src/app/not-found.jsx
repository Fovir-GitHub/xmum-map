/**
 * @file not-found.js
 * @description 404 page.
 * @author Fovir
 * @date 2025-09-15
 */

import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/");
}
