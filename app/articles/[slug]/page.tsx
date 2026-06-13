import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/src/components/AdSlot";
import { AuthorBox } from "@/src/components/AuthorBox";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { PhotoGallery } from "@/src/components/PhotoGallery";
import { PostCard } from "@/src/components/PostCard";
import { ShareButtons } from "@/src/components/ShareButtons";
import { siteConfig } from "@/src/config/site";
import { formatDate } from "@/src/lib/format";
import { MarkdownContent, extractToc } from "@/src/lib/markdown";
import {
  absoluteUrl,
  articleUrl,
  getAllPosts,
  getCategoryByNameOrSlug,
  getPostBySlug,
  getRelatedPosts,
  getTagByNameOrSlug,
  tagUrl,
} from "@/src/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const url = articleUrl(post.slug);

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      url,
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.eyecatch,
          width: 1200,
          height: 800,
          alt: post.eyecatchAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.eyecatch],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = getCategoryByNameOrSlug(post.category);
  const toc = extractToc(post.content);
  const relatedPosts = getRelatedPosts(post, 3);
  const pageUrl = absoluteUrl(articleUrl(post.slug));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    image: [absoluteUrl(post.eyecatch)],
    datePublished: post.date,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.ogpImage),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords: post.tags.join(", "),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category?.name ?? "記事一覧",
        item: absoluteUrl(category ? `/categories/${category.slug}` : "/articles"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <article className="bg-white px-5 py-10 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl">
        <Breadcrumbs
          items={[
            { name: "記事一覧", href: "/articles" },
            ...(category ? [{ name: category.name, href: `/categories/${category.slug}` }] : []),
            { name: post.title },
          ]}
        />

        <header className="mt-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500">
              {category ? (
                <Link href={`/categories/${category.slug}`} className="gold-label">
                  {category.name}
                </Link>
              ) : null}
              <time dateTime={post.date}>投稿日: {formatDate(post.date)}</time>
              <time dateTime={post.updatedAt}>更新日: {formatDate(post.updatedAt)}</time>
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-stone-950 md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-stone-600">{post.description}</p>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-stone-100">
            <Image
              src={post.eyecatch}
              alt={post.eyecatchAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <section className="rounded-lg border border-stone-200 bg-[var(--paper)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-dark)]">
                Summary
              </p>
              <p className="mt-3 text-base leading-8 text-stone-700">{post.summary}</p>
              <p className="mt-4 text-sm leading-7 text-stone-500">{post.affiliateDisclosure}</p>
            </section>

            <AdSlot label="本文上部に配置する広告枠のダミースペースです" />

            <MarkdownContent markdown={post.content} />

            <AdSlot label="本文下部に配置する広告枠のダミースペースです" />

            <PhotoGallery images={post.gallery} />

            <ShareButtons title={post.title} url={pageUrl} />

            <div className="mt-12">
              <AuthorBox compact />
            </div>

            {relatedPosts.length ? (
              <section className="mt-14">
                <div className="mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
                    Related
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-stone-950">関連記事</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((related) => (
                    <PostCard key={related.slug} post={related} />
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            {toc.length ? (
              <nav className="rounded-lg border border-stone-200 bg-white p-5" aria-label="目次">
                <p className="text-sm font-semibold text-stone-950">目次</p>
                <ol className="mt-4 grid gap-2 text-sm leading-6 text-stone-600">
                  {toc.map((item) => (
                    <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
                      <a href={`#${item.id}`} className="hover:text-[var(--gold-dark)]">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div className="mt-6 rounded-lg border border-stone-200 bg-white p-5">
              <p className="text-sm font-semibold text-stone-950">この記事のタグ</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tagName) => {
                  const tag = getTagByNameOrSlug(tagName);
                  return tag ? (
                    <Link key={tag.slug} href={tagUrl(tag.slug)} className="gold-label">
                      {tag.name}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>

            <AdSlot label="サイドバー広告枠のダミースペースです" />
          </aside>
        </div>
      </div>
    </article>
  );
}
