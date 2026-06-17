import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { SectionHeader } from "@/src/components/SectionHeader";
import { absoluteSiteUrl, siteConfig } from "@/src/config/site";
import { getCategoryCounts } from "@/src/lib/posts";

export const metadata: Metadata = {
  title: "カテゴリ一覧",
  description:
    "ホテル宿泊記、ヒルトン、マリオット、IHG、ハイアット、クレジットカード、飛行機のカテゴリ一覧です。",
  alternates: {
    canonical: absoluteSiteUrl("/categories"),
  },
  openGraph: {
    title: `カテゴリ一覧 | ${siteConfig.name}`,
    description: "ヒルオジ旅行ブログのカテゴリ一覧ページです。",
    url: absoluteSiteUrl("/categories"),
  },
};

export default function CategoriesPage() {
  const categories = getCategoryCounts();

  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ name: "カテゴリ一覧" }]} />
        <div className="mt-10">
          <SectionHeader
            eyebrow="Categories"
            title="カテゴリ一覧"
            description="カテゴリーは大分類です。ホテルブランドや特典、旅行スタイルなどの細かな分類はタグで管理しています。"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group overflow-hidden rounded-lg border border-stone-200 bg-white transition hover:border-[var(--gold)] hover:shadow-md"
            >
              <div className="relative aspect-[16/9] bg-stone-100">
                <Image
                  src={category.image}
                  alt={`${category.name}カテゴリーのイメージ画像`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-stone-950">{category.name}</h2>
                  <span className="text-sm font-semibold text-[var(--gold-dark)]">{category.count}件</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
