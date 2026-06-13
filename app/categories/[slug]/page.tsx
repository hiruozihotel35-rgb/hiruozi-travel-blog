import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { PostCard } from "@/src/components/PostCard";
import { categories, siteConfig } from "@/src/config/site";
import { getCategoryByNameOrSlug, getPostsByCategory } from "@/src/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryByNameOrSlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name}の記事一覧`,
    description: category.description,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      title: `${category.name}の記事一覧 | ${siteConfig.name}`,
      description: category.description,
      url: `/categories/${category.slug}`,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 800,
          alt: `${category.name}カテゴリーのイメージ画像`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name}の記事一覧 | ${siteConfig.name}`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryByNameOrSlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.slug);

  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ name: "カテゴリ一覧", href: "/categories" }, { name: category.name }]} />
        <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
              Category
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
              {category.name}
            </h1>
            <p className="mt-5 text-base leading-8 text-stone-600">{category.description}</p>
            <p className="mt-4 text-sm font-semibold text-[var(--gold-dark)]">{posts.length}件の記事</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-stone-100">
            <Image
              src={category.image}
              alt={`${category.name}カテゴリーのイメージ画像`}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} priority={index < 3} />
          ))}
        </section>
      </div>
    </div>
  );
}
