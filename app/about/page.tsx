import type { Metadata } from "next";
import Link from "next/link";
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
            {siteConfig.name}は、{siteConfig.authorName}が実際に泊まったホテル体験を中心に、
            旅行を少しでもお得に、満足度高く楽しむための情報を本音でまとめている個人ブログです。
          </p>
        </section>

        <div className="mt-10">
          <AuthorBox />
        </div>

        <section className="mt-10 rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
          <h2 className="text-xl font-semibold text-stone-950">基本情報</h2>
          <dl className="mt-5 grid gap-5 text-sm leading-7 text-stone-700">
            <div>
              <dt className="font-semibold text-stone-950">運営者名</dt>
              <dd className="mt-1">{siteConfig.authorName}</dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-950">ブログ名</dt>
              <dd className="mt-1">{siteConfig.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-950">ブログのテーマ</dt>
              <dd className="mt-1">
                高級ホテルの宿泊記を中心に、ホテル上級会員、無料宿泊特典、クレジットカード特典、
                空港ラウンジ、飛行機、旅行準備など、旅行の満足度を上げるための情報を扱います。
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-950">プロフィール</dt>
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
            <h2 className="text-xl font-semibold text-stone-950">発信ジャンル</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-stone-700">
              {siteConfig.mainThemes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">レビュー方針</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              宿泊記や旅行情報は、実際の体験や調査をもとに、良かった点だけでなく気になった点も正直に書く方針です。
              料金、特典、サービス内容は変わることがあるため、予約や申込みの前には公式情報もあわせて確認してください。
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">掲載する情報について</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              当サイトでは、ホテル、飛行機、空港ラウンジ、クレジットカード、旅行準備などの情報を扱います。
              掲載内容はできるだけ確認してから公開しますが、宿泊時期やキャンペーン、各社の運用によって内容が変わる場合があります。
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">問い合わせとSNS</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              記事内容の確認、修正依頼、広告掲載、取材などのご連絡はお問い合わせページからお願いします。
              記事化前のメモや宿泊中の気づきはSNSでも発信します。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center justify-center bg-stone-950 px-4 text-sm font-semibold text-white transition hover:bg-[var(--gold-dark)]"
              >
                お問い合わせ
              </Link>
              <SocialLinks />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
