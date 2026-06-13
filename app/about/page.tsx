import type { Metadata } from "next";
import { AuthorBox } from "@/src/components/AuthorBox";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { SocialLinks } from "@/src/components/SocialLinks";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "ヒルオジ旅行ブログの運営者情報。ホテル宿泊記、ホテル上級会員、旅行に役立つクレジットカードや飛行機情報を発信する個人旅行ブログです。",
  alternates: {
    canonical: "/about",
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
            {siteConfig.name}は、ホテルステイを中心に旅の満足度を上げる情報をまとめる個人ブログです。
            宿泊記、ホテル上級会員、クレジットカード、空港ラウンジ、マイル活用を扱います。
          </p>
        </section>

        <div className="mt-10">
          <AuthorBox />
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">発信方針</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              公式情報だけでは分かりにくい、実際の使いやすさや満足度を大切にします。
              良かった点だけでなく、気になった点や注意点もあわせて掲載します。
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-[var(--paper)] p-6">
            <h2 className="text-xl font-semibold text-stone-950">SNS</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              記事化前のメモや宿泊中の気づきはSNSでも発信します。各URLは設定ファイルから変更できます。
            </p>
            <SocialLinks className="mt-5" />
          </div>
        </section>
      </div>
    </div>
  );
}
