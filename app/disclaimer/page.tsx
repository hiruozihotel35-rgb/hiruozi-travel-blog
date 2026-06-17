import type { Metadata } from "next";
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
            では、できる限り正確な情報を掲載するよう努めていますが、旅行情報、ホテル特典、料金、
            キャンペーン、クレジットカード、ポイント、マイル、航空会社、ホテル上級会員制度などの条件は
            変更される場合があります。
          </p>
          <p>
            予約や申込みの前には、ホテル、航空会社、カード会社、旅行予約サイトなどの公式情報を必ず確認してください。
          </p>

          <h2>宿泊記・レビューについて</h2>
          <p>
            記事内の感想は、宿泊時点または利用時点の体験に基づく個人の見解です。
            同じホテルやサービスでも、時期、客室、混雑状況、スタッフ体制により印象が異なる場合があります。
          </p>

          <h2>外部リンクについて</h2>
          <p>
            当サイトから外部サイトへ移動した場合、移動先サイトで提供される情報やサービスについて当サイトは責任を負いません。
          </p>

          <h2>アフィリエイトリンクについて</h2>
          <p>
            当サイトでは、将来的に旅行予約サイト、ホテル、クレジットカード等のアフィリエイトリンクを掲載する場合があります。
            リンク先での商品やサービスの申込み、契約、問い合わせは、利用者ご自身の判断と責任で行ってください。
          </p>

          <h2>損害等の責任について</h2>
          <p>
            当サイトの情報を利用したことによって生じた損害について、当サイトでは責任を負いかねます。
            予約、申込み、契約、旅行判断はご自身の責任で行ってください。
          </p>
        </div>
      </div>
    </div>
  );
}
