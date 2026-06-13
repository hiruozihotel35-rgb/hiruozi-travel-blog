import Image from "next/image";
import Link from "next/link";
import { AuthorBox } from "@/src/components/AuthorBox";
import { PostCard } from "@/src/components/PostCard";
import { SectionHeader } from "@/src/components/SectionHeader";
import { SocialLinks } from "@/src/components/SocialLinks";
import { categories, siteConfig } from "@/src/config/site";
import { getAllPosts, getCategoryCounts, getFeaturedPosts } from "@/src/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 6);
  const featuredPosts = getFeaturedPosts(3);
  const categoryCounts = getCategoryCounts();

  return (
    <>
      <section className="relative min-h-[76svh] overflow-hidden bg-stone-950 text-white">
        <Image
          src="/images/hotels/luxury-suite.png"
          alt="夜景を望む高級ホテル客室の大きなビジュアル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-72"
        />
        <div className="absolute inset-0 bg-stone-950/45" />
        <div className="relative mx-auto flex min-h-[76svh] max-w-7xl items-end px-5 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gold)]">
              Luxury Hotel Media
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {siteConfig.shortDescription}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-100 md:text-lg">
              ホテル宿泊記、上級会員特典、クレジットカード、飛行機移動まで。
              写真と本音レビューで、無理なく上質な旅を選べるブログです。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/articles"
                className="inline-flex min-h-12 items-center bg-white px-5 text-sm font-semibold text-stone-950 transition hover:bg-[var(--gold)]"
              >
                最新記事を見る
              </Link>
              <Link
                href="/categories/hotel-reviews"
                className="inline-flex min-h-12 items-center border border-white px-5 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                ホテル宿泊記へ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Latest"
              title="最新記事"
              description="ホテル、会員特典、カード、空港ラウンジの気になるテーマを実体験目線で整理します。"
            />
            <Link href="/articles" className="mb-8 text-sm font-semibold text-[var(--gold-dark)]">
              すべての記事を見る
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <PostCard key={post.slug} post={post} priority={index < 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Recommended"
            title="おすすめ記事"
            description="まず読んでほしい、ホテル選びと上級会員活用の軸になる記事です。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Categories"
            title="旅のテーマから探す"
            description="カテゴリーは大分類として使い、細かなテーマはタグで管理しています。"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categoryCounts.map((category) => (
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
                    <span className="text-sm font-semibold text-[var(--gold-dark)]">
                      {category.count}件
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold)]">
              Visual Journal
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              写真で選べるホテルレビューへ。
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              客室、朝食、ラウンジ、眺望、館内施設。文章だけでは伝わりにくい空気感を、
              大きな写真とキャプションで残せる構成にしています。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {categories.slice(0, 3).map((category) => (
              <div key={category.slug} className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-800">
                <Image
                  src={category.image}
                  alt={`${category.name}のビジュアル`}
                  fill
                  sizes="(min-width: 1024px) 22vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <AuthorBox />
          <div className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
              SNS
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-stone-950">最新情報はこちら</h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              宿泊前の下調べ、現地で気づいたこと、記事化前のメモはSNSでも発信します。
            </p>
            <SocialLinks className="mt-6" />
          </div>
        </div>
      </section>
    </>
  );
}
