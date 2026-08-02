import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://orio-tech-website-wtgc.vercel.app/sitemap.xml",
    host: "https://orio-tech-website-wtgc.vercel.app",
  };
}