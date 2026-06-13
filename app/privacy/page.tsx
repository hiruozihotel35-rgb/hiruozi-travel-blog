import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "ヒルオジ旅行ブログのプライバシーポリシー。個人情報、Cookie、広告配信、アクセス解析、免責事項の扱いについて掲載しています。",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "プライバシーポリシー" }]} />
        <section className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">
            プライバシーポリシー
          </h1>
          <p className="mt-5 text-sm leading-7 text-stone-600">制定日: 2026年6月12日</p>
        </section>

        <div className="article-body mt-10">
          <h2>個人情報の利用目的</h2>
          <p>
            {siteConfig.name}
            では、お問い合わせ時にメールアドレス等の個人情報を取得する場合があります。
            取得した情報は、お問い合わせへの回答や必要な連絡のために利用し、それ以外の目的では利用しません。
          </p>

          <h2>Cookieについて</h2>
          <p>
            当サイトでは、利便性向上、アクセス解析、広告配信のためにCookieを使用する場合があります。
            Cookieによって個人を特定する情報を取得するものではありません。
          </p>

          <h2>広告配信について</h2>
          <p>
            当サイトでは将来的にGoogleアドセンスなどの第三者配信広告サービスを利用する場合があります。
            広告配信事業者は、ユーザーの興味に応じた広告を表示するためCookieを使用することがあります。
          </p>

          <h2>アクセス解析について</h2>
          <p>
            当サイトではアクセス状況を把握するため、アクセス解析ツールを利用する場合があります。
            収集されるデータは匿名であり、個人を特定するものではありません。
          </p>

          <h2>アフィリエイトについて</h2>
          <p>
            当サイトでは、旅行予約サイトやクレジットカード等のアフィリエイトプログラムを利用する場合があります。
            商品やサービスの申込み、契約はリンク先の事業者との取引となります。
          </p>

          <h2>お問い合わせ</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            までご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
}
