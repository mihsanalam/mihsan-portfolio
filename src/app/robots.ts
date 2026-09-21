import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow Google's image crawler — the knowledge panel image
      // grid (like Gazi Jarin's) is fed from Google Images indexing.
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: "https://www.mihsanalam.com/sitemap.xml",
  };
}
