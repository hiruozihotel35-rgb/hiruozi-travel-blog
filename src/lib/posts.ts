import fs from "node:fs";
import path from "node:path";
import { categories, tags, siteConfig, type Category, type Tag } from "@/src/config/site";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  seoDescription: string;
  date: string;
  updatedAt: string;
  category: string;
  tags: string[];
  eyecatch: string;
  eyecatchAlt: string;
  author: string;
  hotelName?: string;
  brand?: string;
  area?: string;
  rating?: number;
  summary: string;
  affiliateDisclosure: string;
  featured: boolean;
  gallery: GalleryImage[];
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function stripQuotes(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function parseFrontmatter(file: string) {
  const match = file.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: file };
  }

  const rawData = match[1].split("\n");
  const data: Record<string, string | string[]> = {};
  let currentListKey: string | null = null;

  for (const line of rawData) {
    if (!line.trim()) {
      continue;
    }

    if (line.startsWith("  - ") && currentListKey) {
      const list = data[currentListKey];
      if (Array.isArray(list)) {
        list.push(stripQuotes(line.replace("  - ", "")));
      }
      continue;
    }

    const keyValue = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!keyValue) {
      continue;
    }

    const [, key, value] = keyValue;
    if (!value) {
      data[key] = [];
      currentListKey = key;
      continue;
    }

    data[key] = stripQuotes(value);
    currentListKey = null;
  }

  return { data, content: match[2].trim() };
}

function readString(data: Record<string, string | string[]>, key: string, fallback = "") {
  const value = data[key];
  return typeof value === "string" ? value : fallback;
}

function readBoolean(data: Record<string, string | string[]>, key: string) {
  return readString(data, key).toLowerCase() === "true";
}

function readNumber(data: Record<string, string | string[]>, key: string) {
  const value = Number(readString(data, key));
  return Number.isFinite(value) ? value : undefined;
}

function readTags(data: Record<string, string | string[]>) {
  const value = data.tags;
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value !== "string") {
    return [];
  }

  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function readGallery(data: Record<string, string | string[]>) {
  const value = data.gallery;
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      const [src, alt, caption] = item.split("|").map((part) => part.trim());
      return {
        src,
        alt: alt || "記事内ギャラリー画像",
        caption: caption || "",
      };
    })
    .filter((image) => image.src);
}

function normalizePost(slug: string, data: Record<string, string | string[]>, content: string): Post {
  const title = readString(data, "title", slug);
  const description = readString(data, "description", siteConfig.description);

  return {
    slug,
    title,
    seoTitle: readString(data, "seoTitle", title),
    description,
    seoDescription: readString(data, "seoDescription", description),
    date: readString(data, "date", new Date().toISOString().slice(0, 10)),
    updatedAt: readString(data, "updatedAt", readString(data, "date")),
    category: readString(data, "category"),
    tags: readTags(data),
    eyecatch: readString(data, "eyecatch", siteConfig.ogpImage),
    eyecatchAlt: readString(data, "eyecatchAlt", title),
    author: readString(data, "author", siteConfig.authorName),
    hotelName: readString(data, "hotelName") || undefined,
    brand: readString(data, "brand") || undefined,
    area: readString(data, "area") || undefined,
    rating: readNumber(data, "rating"),
    summary: readString(data, "summary", description),
    affiliateDisclosure: readString(
      data,
      "affiliateDisclosure",
      "この記事には広告を掲載できるスペースを用意しています。現時点では広告コードは設置していません。",
    ),
    featured: readBoolean(data, "featured"),
    gallery: readGallery(data),
    content,
  };
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const file = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
      const { data, content } = parseFrontmatter(file);
      return normalizePost(slug, data, content);
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getFeaturedPosts(limit = 3) {
  const featured = getAllPosts().filter((post) => post.featured);
  return (featured.length ? featured : getAllPosts()).slice(0, limit);
}

export function getCategoryByNameOrSlug(value: string): Category | undefined {
  return categories.find((category) => category.name === value || category.slug === value);
}

export function getPostsByCategory(slug: string) {
  const category = getCategoryByNameOrSlug(slug);
  if (!category) {
    return [];
  }

  return getAllPosts().filter((post) => {
    const postCategory = getCategoryByNameOrSlug(post.category);
    return postCategory?.slug === category.slug;
  });
}

export function getTagByNameOrSlug(value: string): Tag | undefined {
  return tags.find((tag) => tag.name === value || tag.slug === value);
}

export function getPostsByTag(slug: string) {
  const tag = getTagByNameOrSlug(slug);
  if (!tag) {
    return [];
  }

  return getAllPosts().filter((post) => post.tags.includes(tag.name));
}

export function getRelatedPosts(post: Post, limit = 3) {
  const category = getCategoryByNameOrSlug(post.category);

  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const candidateCategory = getCategoryByNameOrSlug(candidate.category);
      const sharedTags = candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      const sameCategory = category?.slug === candidateCategory?.slug ? 2 : 0;
      return {
        post: candidate,
        score: sharedTags + sameCategory,
      };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .slice(0, limit)
    .map((item) => item.post);
}

export function getTagCounts() {
  const allPosts = getAllPosts();
  return tags.map((tag) => ({
    ...tag,
    count: allPosts.filter((post) => post.tags.includes(tag.name)).length,
  }));
}

export function getCategoryCounts() {
  return categories.map((category) => ({
    ...category,
    count: getPostsByCategory(category.slug).length,
  }));
}

export function absoluteUrl(pathname = "") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export function articleUrl(slug: string) {
  return `/articles/${slug}`;
}

export function categoryUrl(slug: string) {
  return `/categories/${slug}`;
}

export function tagUrl(slug: string) {
  return `/tags/${slug}`;
}
