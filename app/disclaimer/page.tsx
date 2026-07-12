import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { absoluteSiteUrl, siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "免責事項",
  description:
    "ヒルオジ旅行ブログの免責事項。掲載情報、料金、特典、外部リンク、アフィリエイトに関する注意事項を掲載しています。",
  alternates: {
    canonical: absoluteSiteUrl("/disclaimer"),
  },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "免責事項" }]} />
        <section className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
            Disclaimer
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">免責事項</h1>
          <p className="mt-5 text-sm leading-7 text-stone-600">制定日: 2026年6月12日</p>
        </section>

        <div className="article-body mt-10">
          <h2>掲載情報について</h2>
          <p>
            {siteConfig.name}
            に掲載している情報は、運営者の実体験、調査、公式情報の確認などをもとに作成しています。
            できる限り正確な内容になるよう努めていますが、すべての情報の正確性、最新性、完全性を保証するものではありません。
          </p>
          <p>
            ホテル料金、サービス内容、朝食内容、会員特典、アップグレード、レイトチェックアウト、
            ホテルステータス制度、クレジットカード特典、ポイント、マイル、航空会社のサービス、
            キャンペーン条件などは、予告なく変更される場合があります。
          </p>
          <p>
            予約や申込みの前には、ホテル、航空会社、カード会社、旅行予約サイト、各サービス提供会社などの公式情報を必ず確認してください。
          </p>

          <h2>宿泊記・レビューについて</h2>
          <p>
            記事内の感想は、宿泊時点または利用時点の体験に基づく個人の見解です。
            同じホテルやサービスでも、宿泊時期、客室タイプ、混雑状況、スタッフ体制、会員ステータス、予約方法などにより、
            受けられるサービスや印象が異なる場合があります。
          </p>
          <p>
            良かった点だけでなく、気になった点もできるだけ正直に掲載しますが、あくまで一個人の体験としてご覧ください。
          </p>

          <h2>外部リンクについて</h2>
          <p>
            当サイトには、ホテル、旅行予約サイト、航空会社、カード会社、公式サイトなどへの外部リンクを掲載する場合があります。
            外部サイトへ移動した場合、移動先サイトで提供される情報、サービス、個人情報の取り扱いについて当サイトは責任を負いません。
          </p>

          <h2>アフィリエイトリンクについて</h2>
          <p>
            当サイトでは、将来的に旅行予約サイト、ホテル、クレジットカード等のアフィリエイトリンクを掲載する場合があります。
            アフィリエイトリンクを経由して商品やサービスの申込み、予約、購入が行われた場合、当サイトが報酬を受け取ることがあります。
          </p>
          <p>
            ただし、掲載内容は報酬の有無にかかわらず、できるだけ実体験や調査をもとに整理します。
            リンク先での商品やサービスの申込み、契約、問い合わせは、利用者ご自身の判断と責任で行ってください。
          </p>

          <h2>損害等の責任について</h2>
          <p>
            当サイトの情報を利用したこと、または利用できなかったことによって生じた損害、トラブル、不利益について、
            当サイトでは責任を負いかねます。
            予約、申込み、契約、旅行判断はご自身の責任で行ってください。
          </p>

          <h2>著作権・無断転載について</h2>
          <p>
            当サイトに掲載している文章、写真、画像、構成などの無断転載、無断使用、複製、再配布はお控えください。
            引用する場合は、引用元を明記し、著作権法で認められる範囲内でお願いします。
          </p>

          <h2>お問い合わせ</h2>
          <p>
            掲載内容、画像、リンク、権利関係などに関するお問い合わせは、
            <Link href="/contact">お問い合わせページ</Link>
            または
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            までご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
}
