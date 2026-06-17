import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { SectionHeader } from "@/src/components/SectionHeader";
import { absoluteSiteUrl, siteConfig } from "@/src/config/site";
import { getTagCounts } from "@/src/lib/posts";

export const metadata: Metadata = {
  title: "タグ一覧",
  description:
    "ホテル宿泊記、高級ホテル、クラブラウンジ、空港ラウンジ、クレジットカードなど、旅行ブログのタグ一覧です。",
  alternates: {
    canonical: absoluteSiteUrl("/tags"),
  },
  openGraph: {
    title: `タグ一覧 | ${siteConfig.name}`,
    description: "ヒルオジ旅行ブログのタグ一覧ページです。",
    url: absoluteSiteUrl("/tags"),
  },
};

export default function TagsPage() {
  const tagCounts = getTagCounts();

  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Breadcrumbs items={[{ name: "タグ一覧" }]} />
        <div className="mt-10">
          <SectionHeader
            eyebrow="Tags"
            title="タグ一覧"
            description="気になる特典、ホテルブランド、旅行スタイルから関連記事を探せます。"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {tagCounts.map((tag) => (
            <Link
              key={tag.slug}
              href={`/tags/${tag.slug}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-stone-200 bg-white px-4 text-sm font-semibold text-stone-800 transition hover:border-[var(--gold)] hover:text-[var(--gold-dark)]"
            >
              <span>{tag.name}</span>
              <span className="text-xs text-stone-500">{tag.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
