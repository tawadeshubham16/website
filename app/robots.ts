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

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl().replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl.replace(/^https?:\/\//, ""),
  };
}
