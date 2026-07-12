import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { absoluteSiteUrl, siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "ヒルオジ旅行ブログのプライバシーポリシー。個人情報、Cookie、広告配信、アクセス解析、免責事項の扱いについて掲載しています。",
  alternates: {
    canonical: absoluteSiteUrl("/privacy"),
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
            では、お問い合わせへの回答、必要な連絡、サイト運営上の確認、記事内容の改善のために、
            お名前、メールアドレス、問い合わせ内容などの個人情報を取得する場合があります。
            取得した個人情報は、これらの目的の範囲内で利用します。
          </p>
          <p>
            法令に基づく場合を除き、本人の同意なく個人情報を第三者へ提供することはありません。
            また、不要になった個人情報は、適切な方法で管理・削除するよう努めます。
          </p>

          <h2>お問い合わせ時に取得する情報</h2>
          <p>
            当サイトへお問い合わせいただく際、返信先としてメールアドレスを取得します。
            取得した情報は、お問い合わせへの回答や確認のために利用し、営業目的の配信などには利用しません。
          </p>

          <h2>Cookieについて</h2>
          <p>
            当サイトでは、サイトの利便性向上、アクセス解析、広告配信、表示内容の改善などのためにCookieを使用する場合があります。
            Cookieは利用者のブラウザに保存される情報であり、当サイトがCookieのみで氏名、住所、メールアドレスなどを特定することはありません。
          </p>
          <p>
            Cookieの利用を望まない場合は、利用しているブラウザの設定からCookieを無効にできます。
            ただし、Cookieを無効にした場合、一部の機能が正しく表示されない可能性があります。
          </p>

          <h2>アクセス解析ツールについて</h2>
          <p>
            当サイトでは、今後Google Analyticsなどのアクセス解析ツールを利用する場合があります。
            アクセス解析ツールは、トラフィックデータの収集のためにCookieを使用することがあります。
            収集されるデータは匿名で扱われ、個人を特定するものではありません。
          </p>

          <h2>広告配信について</h2>
          <p>
            当サイトでは、今後Google AdSenseなどの第三者配信広告サービスを利用する場合があります。
            Googleを含む第三者配信事業者は、利用者の興味に応じた広告を表示するためにCookieを使用することがあります。
          </p>
          <p>
            利用者は、
            <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">
              Googleの広告設定
            </a>
            からパーソナライズ広告を無効にできます。また、広告におけるCookieの利用については、
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
              Googleの広告に関するポリシー
            </a>
            もあわせて確認できます。
          </p>

          <h2>アフィリエイト広告について</h2>
          <p>
            当サイトでは、今後旅行予約サイト、ホテル、クレジットカード、ポイントサービスなどのアフィリエイトプログラムを利用する場合があります。
            記事内のリンクから商品やサービスへ移動し、申込みや購入が行われた場合、当サイトが報酬を受け取ることがあります。
          </p>
          <p>
            掲載する商品やサービスは、できる限り内容を確認したうえで紹介しますが、
            申込み、契約、購入に関する最終判断はリンク先の情報を確認のうえ、ご自身の責任で行ってください。
          </p>

          <h2>免責事項</h2>
          <p>
            掲載内容はできる限り正確な情報となるよう努めますが、旅行情報、ホテル特典、料金、会員制度、
            クレジットカード、ポイント、マイル等の条件は変更される場合があります。予約や申込みの前には、
            必ず公式サイトの最新情報をご確認ください。
          </p>
          <p>
            詳しくは
            <Link href="/disclaimer">免責事項</Link>
            をご確認ください。
          </p>

          <h2>著作権について</h2>
          <p>
            当サイトに掲載している文章、写真、画像、構成などの著作権は、原則として当サイトまたは正当な権利者に帰属します。
            引用の範囲を超えた無断転載、無断使用、複製、再配布はお控えください。
          </p>

          <h2>プライバシーポリシーの変更について</h2>
          <p>
            当サイトでは、法令の変更、利用サービスの追加、運営方針の見直しなどにより、
            本ポリシーの内容を予告なく変更する場合があります。変更後の内容は、当ページに掲載した時点で有効となります。
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
