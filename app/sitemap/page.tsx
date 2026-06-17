import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { absoluteSiteUrl, categories, fixedPages, tags } from "@/src/config/site";
import { getAllPosts } from "@/src/lib/posts";

export const metadata: Metadata = {
  title: "サイトマップ",
  description:
    "ヒルオジ旅行ブログのサイトマップ。記事、カテゴリ、タグ、固定ページへのリンクをまとめています。",
  alternates: {
    canonical: absoluteSiteUrl("/sitemap"),
  },
};

export default function SitemapPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs items={[{ name: "サイトマップ" }]} />
        <section className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
            Sitemap
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">サイトマップ</h1>
          <p className="mt-5 text-base leading-8 text-stone-600">
            主要ページ、カテゴリ、タグ、公開記事へのリンクをまとめています。
          </p>
        </section>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">主要ページ</h2>
            <div className="mt-4 grid gap-2 text-sm">
              <Link className="footer-link text-stone-700" href="/">
                トップページ
              </Link>
              <Link className="footer-link text-stone-700" href="/articles">
                記事一覧
              </Link>
              <Link className="footer-link text-stone-700" href="/categories">
                カテゴリ一覧
              </Link>
              <Link className="footer-link text-stone-700" href="/tags">
                タグ一覧
              </Link>
              {fixedPages.map((page) => (
                <Link key={page.href} className="footer-link text-stone-700" href={page.href}>
                  {page.title}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">カテゴリ</h2>
            <div className="mt-4 grid gap-2 text-sm">
              {categories.map((category) => (
                <Link key={category.slug} className="footer-link text-stone-700" href={`/categories/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">タグ</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link key={tag.slug} className="gold-label" href={`/tags/${tag.slug}`}>
                  {tag.name}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">記事</h2>
            <div className="mt-4 grid gap-2 text-sm">
              {posts.map((post) => (
                <Link key={post.slug} className="footer-link text-stone-700" href={`/articles/${post.slug}`}>
                  {post.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
