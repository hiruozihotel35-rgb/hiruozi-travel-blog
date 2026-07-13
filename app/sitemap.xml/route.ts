import { absoluteSiteUrl } from "@/src/config/site";
import { articleUrl, getAllPosts } from "@/src/lib/posts";

export const dynamic = "force-static";

const staticPages = [
  { path: "/", lastmod: "2026-07-14" },
  { path: "/articles", lastmod: "2026-07-14" },
  { path: "/categories", lastmod: "2026-07-14" },
  { path: "/tags", lastmod: "2026-07-14" },
  { path: "/about", lastmod: "2026-07-14" },
  { path: "/contact", lastmod: "2026-07-14" },
  { path: "/privacy", lastmod: "2026-07-14" },
  { path: "/disclaimer", lastmod: "2026-07-14" },
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatDate(value: string) {
  return value.slice(0, 10);
}

export function GET() {
  const publicPosts = getAllPosts({ includeDrafts: false }).map((post) => ({
    path: articleUrl(post.slug),
    lastmod: formatDate(post.updatedAt),
  }));

  const urls = [...staticPages, ...publicPosts];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${escapeXml(absoluteSiteUrl(item.path))}</loc>
    <lastmod>${escapeXml(item.lastmod)}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
