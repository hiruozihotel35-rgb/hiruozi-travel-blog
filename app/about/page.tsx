import type { Metadata } from "next";
import { AuthorBox } from "@/src/components/AuthorBox";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { SocialLinks } from "@/src/components/SocialLinks";
import { absoluteSiteUrl, siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "ヒルオジ旅行ブログの運営者情報。ホテル宿泊記、ホテル上級会員、旅行に役立つクレジットカードや飛行機情報を発信する個人旅行ブログです。",
  alternates: {
    canonical: absoluteSiteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Breadcrumbs items={[{ name: "運営者情報" }]} />
        <section className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">運営者情報</h1>
          <p className="mt-5 text-base leading-8 text-stone-600">
            {siteConfig.name}は、{siteConfig.authorName}が実際の宿泊体験をもとに、ホテルステイを中心とした
            旅行情報を本音で紹介する個人ブログです。
          </p>
        </section>

        <div className="mt-10">
          <AuthorBox />
        </div>

        <section className="mt-10 rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
          <h2 className="text-xl font-semibold text-stone-950">プロフィール</h2>
          <dl className="mt-5 grid gap-5 text-sm leading-7 text-stone-700">
            <div>
              <dt className="font-semibold text-stone-950">運営者名</dt>
              <dd className="mt-1">{siteConfig.authorName}</dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-950">プロフィール文</dt>
              <dd className="mt-1">{siteConfig.profile}</dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-950">お問い合わせメール</dt>
              <dd className="mt-1">
                <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-[var(--gold-dark)]">
                  {siteConfig.contactEmail}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">発信している主なテーマ</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-stone-700">
              {siteConfig.mainThemes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">SNS</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              記事化前のメモや宿泊中の気づきはSNSでも発信します。
            </p>
            <SocialLinks className="mt-5" />
          </div>
        </section>
      </div>
    </div>
  );
}
