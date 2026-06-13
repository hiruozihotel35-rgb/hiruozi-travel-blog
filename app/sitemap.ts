import type { MetadataRoute } from "next";
import { categories, fixedPages, tags } from "@/src/config/site";
import { absoluteUrl, articleUrl, getAllPosts } from "@/src/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const staticPages = [
    "",
    "/articles",
    "/categories",
    "/tags",
    ...fixedPages.map((page) => page.href),
  ];

  return [
    ...staticPages.map((pathname) => ({
      url: absoluteUrl(pathname),
      lastModified: new Date("2026-06-12"),
      changeFrequency: (pathname === "" ? "daily" : "monthly") as "daily" | "monthly",
      priority: pathname === "" ? 1 : 0.7,
    })),
    ...categories.map((category) => ({
      url: absoluteUrl(`/categories/${category.slug}`),
      lastModified: new Date("2026-06-12"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [absoluteUrl(category.image)],
    })),
    ...tags.map((tag) => ({
      url: absoluteUrl(`/tags/${tag.slug}`),
      lastModified: new Date("2026-06-12"),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(articleUrl(post.slug)),
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [absoluteUrl(post.eyecatch), ...post.gallery.map((image) => absoluteUrl(image.src))],
    })),
  ];
}
