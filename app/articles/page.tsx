import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { PostCard } from "@/src/components/PostCard";
import { SectionHeader } from "@/src/components/SectionHeader";
import { absoluteSiteUrl, siteConfig } from "@/src/config/site";
import { getAllPosts } from "@/src/lib/posts";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "ヒルオジ旅行ブログの記事一覧。ホテル宿泊記、ホテル上級会員、クレジットカード、飛行機、旅行ノウハウの記事をまとめています。",
  alternates: {
    canonical: absoluteSiteUrl("/articles"),
  },
  openGraph: {
    title: `記事一覧 | ${siteConfig.name}`,
    description:
      "ホテル宿泊記、ホテル上級会員、クレジットカード、飛行機、旅行ノウハウの記事一覧です。",
    url: absoluteSiteUrl("/articles"),
  },
};

export default function ArticlesPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ name: "記事一覧" }]} />
        <div className="mt-10">
          <SectionHeader
            eyebrow="All Articles"
            title="記事一覧"
            description="ホテルステイを中心に、旅を快適にする知識と体験をまとめています。"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} priority={index < 3} />
          ))}
        </div>
      </div>
    </div>
  );
}
