import type { MetadataRoute } from "next";
import { coursePages, site } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/courses",
    ...coursePages.map((course) => `/courses/${course.slug}`),
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
