import type { MetadataRoute } from "next";
import { absoluteUrl, articleUrl, getAllPosts } from "@/src/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts({ includeDrafts: false });
  const staticLastModified = new Date("2026-07-14T00:00:00.000Z");
  const staticPages = [
    "/",
    "/articles",
    "/categories",
    "/tags",
    "/about",
    "/contact",
    "/privacy",
    "/disclaimer",
  ];

  return [
    ...staticPages.map((pathname) => ({
      url: absoluteUrl(pathname),
      lastModified: staticLastModified,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(articleUrl(post.slug)),
      lastModified: new Date(post.updatedAt),
    })),
  ];
}
