import type { MetadataRoute } from "next";

const fallbackSiteUrl = "https://neeshenterprise.com/";

function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
  try {
    return new URL(rawUrl).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl().replace(/\/$/, "");

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
