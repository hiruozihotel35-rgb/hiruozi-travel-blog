export const dynamic = "force-static";

const urls = [
  "https://hiruozi-travel-blog.vercel.app/",
  "https://hiruozi-travel-blog.vercel.app/articles",
  "https://hiruozi-travel-blog.vercel.app/categories",
  "https://hiruozi-travel-blog.vercel.app/tags",
  "https://hiruozi-travel-blog.vercel.app/about",
  "https://hiruozi-travel-blog.vercel.app/contact",
  "https://hiruozi-travel-blog.vercel.app/privacy",
  "https://hiruozi-travel-blog.vercel.app/disclaimer",
  "https://hiruozi-travel-blog.vercel.app/articles/waldorf-astoria-osaka-real-review",
];

export function GET() {
  return new Response(`${urls.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
