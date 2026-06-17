import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { PostCard } from "@/src/components/PostCard";
import { SectionHeader } from "@/src/components/SectionHeader";
import { absoluteSiteUrl, siteConfig, tags } from "@/src/config/site";
import { getPostsByTag, getTagByNameOrSlug } from "@/src/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTagByNameOrSlug(slug);

  if (!tag) {
    return {};
  }

  const description = `${tag.name}タグの記事一覧。${siteConfig.name}内のホテル・旅行関連記事をまとめています。`;

  return {
    title: `${tag.name}タグの記事一覧`,
    description,
    alternates: {
      canonical: absoluteSiteUrl(`/tags/${tag.slug}`),
    },
    openGraph: {
      title: `${tag.name}タグの記事一覧 | ${siteConfig.name}`,
      description,
      url: absoluteSiteUrl(`/tags/${tag.slug}`),
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const tag = getTagByNameOrSlug(slug);

  if (!tag) {
    notFound();
  }

  const posts = getPostsByTag(tag.slug);

  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ name: "タグ一覧", href: "/tags" }, { name: tag.name }]} />
        <div className="mt-10">
          <SectionHeader
            eyebrow="Tag"
            title={`${tag.name}の記事`}
            description={`${tag.name}に関連するホテル・旅行記事をまとめています。`}
          />
        </div>
        {posts.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} priority={index < 3} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <p className="text-stone-700">このタグの記事は現在整理中です。関連カテゴリから記事を探せます。</p>
            <Link
              href="/categories"
              className="mt-4 inline-flex min-h-10 items-center bg-stone-950 px-4 text-sm font-semibold text-white"
            >
              カテゴリ一覧へ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
