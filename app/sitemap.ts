import type { MetadataRoute } from "next";

import { getAllDocsMeta } from "@/lib/docs/get-docs";
import { siteConfig } from "@/lib/site-config";

const STATIC_ROUTES = ["", "/world", "/rules", "/development", "/community"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${siteConfig.url}${path}`,
  }));

  const docEntries = getAllDocsMeta().map((doc) => ({
    url: `${siteConfig.url}${doc.href}`,
  }));

  return [...staticEntries, ...docEntries];
}
