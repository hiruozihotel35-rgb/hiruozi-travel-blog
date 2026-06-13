import Image from "next/image";
import Link from "next/link";
import { articleUrl, getCategoryByNameOrSlug } from "@/src/lib/posts";
import { formatDate } from "@/src/lib/format";
import type { Post } from "@/src/lib/posts";

type PostCardProps = {
  post: Post;
  priority?: boolean;
};

export function PostCard({ post, priority = false }: PostCardProps) {
  const category = getCategoryByNameOrSlug(post.category);

  return (
    <article className="group grid overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:border-[var(--gold)] hover:shadow-md">
      <Link href={articleUrl(post.slug)} className="relative block aspect-[16/10] overflow-hidden bg-stone-100">
        <Image
          src={post.eyecatch}
          alt={post.eyecatchAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="grid gap-4 p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
          {category ? (
            <Link href={`/categories/${category.slug}`} className="gold-label">
              {category.name}
            </Link>
          ) : null}
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h2 className="text-lg font-semibold leading-7 text-stone-950">
          <Link href={articleUrl(post.slug)} className="hover:text-[var(--gold-dark)]">
            {post.title}
          </Link>
        </h2>
        <p className="text-sm leading-7 text-stone-600">{post.description}</p>
        <Link
          href={articleUrl(post.slug)}
          className="inline-flex min-h-10 items-center justify-center border border-stone-950 px-4 text-sm font-semibold text-stone-950 transition hover:bg-stone-950 hover:text-white"
        >
          記事を読む
        </Link>
      </div>
    </article>
  );
}
