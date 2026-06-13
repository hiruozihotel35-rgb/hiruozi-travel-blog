import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "ヒルオジ旅行ブログへのお問い合わせページ。記事内容、掲載情報、取材、修正依頼などはこちらからご連絡ください。",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "お問い合わせ" }]} />
        <section className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">お問い合わせ</h1>
          <p className="mt-5 text-base leading-8 text-stone-600">
            記事内容に関するご質問、掲載情報の修正依頼、取材・レビューのご相談はメールでご連絡ください。
            内容を確認のうえ、必要に応じて返信いたします。
          </p>
        </section>

        <section className="mt-10 rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
          <h2 className="text-xl font-semibold text-stone-950">連絡先</h2>
          <p className="mt-4 text-sm leading-7 text-stone-700">
            メールアドレス:
            <Link href={`mailto:${siteConfig.contactEmail}`} className="ml-2 font-semibold text-[var(--gold-dark)]">
              {siteConfig.contactEmail}
            </Link>
          </p>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            お問い合わせの際は、該当記事のURL、確認したい内容、返信先を明記してください。
            営業目的の一斉送信、内容が不明瞭なご連絡には返信できない場合があります。
          </p>
        </section>
      </div>
    </div>
  );
}
