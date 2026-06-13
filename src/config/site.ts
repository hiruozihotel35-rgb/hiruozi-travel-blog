export type Category = {
  name: string;
  slug: string;
  description: string;
  image: string;
};

export type Tag = {
  name: string;
  slug: string;
};

export const siteConfig = {
  name: "ヒルオジ旅行ブログ",
  description:
    "ハイコスパで最高のホテル体験を届ける旅行ブログ。ホテル宿泊記、ホテル上級会員、クレジットカード、飛行機、旅行ノウハウを実体験ベースで発信します。",
  shortDescription: "ハイコスパで最高のホテル体験を届ける旅行ブログ",
  authorName: "ヒルオジ",
  url: "https://hiruozi-travel-blog.com",
  xUrl: "https://x.com/hiruozi_travel",
  instagramUrl: "https://www.instagram.com/hiruozi_travel",
  youtubeUrl: "",
  tiktokUrl: "",
  noteUrl: "https://note.com/hiruozi_travel",
  threadsUrl: "https://www.threads.net/@hiruozi_travel",
  contactEmail: "hello@hiruozi-travel-blog.com",
  profileImage: "/images/profile/hiruozi-profile.png",
  ogpImage: "/images/ogp/default-ogp.png",
  profile:
    "ホテルの朝食、ラウンジ、アップグレードが大好きな個人旅行ブロガー。高級ホテルを無理なく楽しむための予約術、上級会員特典、クレジットカード活用、空港ラウンジのリアルな使い勝手を、実体験に近い目線でまとめています。",
};

export const categories: Category[] = [
  {
    name: "ホテル宿泊記",
    slug: "hotel-reviews",
    description:
      "実際に宿泊したホテルの客室、朝食、ラウンジ、サービス、上級会員特典を本音でレビューするカテゴリー",
    image: "/images/hotels/luxury-suite.png",
  },
  {
    name: "ヒルトン",
    slug: "hilton",
    description:
      "ヒルトン系列ホテル、ヒルトンダイヤモンド、HPCJ、朝食、ラウンジ、アップグレード情報を扱うカテゴリー",
    image: "/images/posts/hilton-diamond.png",
  },
  {
    name: "マリオット",
    slug: "marriott",
    description:
      "マリオット系列ホテル、Marriott Bonvoy、プラチナ特典、宿泊記、ポイント活用を扱うカテゴリー",
    image: "/images/posts/marriott-vs-hilton.png",
  },
  {
    name: "IHG",
    slug: "ihg",
    description:
      "IHG系列ホテル、インターコンチネンタル、クラウンプラザ、IHG One Rewardsなどを扱うカテゴリー",
    image: "/images/posts/ihg-benefits.png",
  },
  {
    name: "ハイアット",
    slug: "hyatt",
    description:
      "ハイアット系列ホテル、グローバリスト、ホテル宿泊記、ブランド比較を扱うカテゴリー",
    image: "/images/posts/hyatt-guide.png",
  },
  {
    name: "クレジットカード",
    slug: "credit-cards",
    description:
      "ホテル宿泊や旅行に役立つクレジットカード、ポイント、マイル、特典を扱うカテゴリー",
    image: "/images/posts/credit-card-travel.png",
  },
  {
    name: "飛行機",
    slug: "flights",
    description:
      "航空会社、空港ラウンジ、マイル、SFC、プレミアムクラス、旅行移動を扱うカテゴリー",
    image: "/images/posts/airport-lounge.png",
  },
];

export const tags: Tag[] = [
  { name: "ホテル宿泊記", slug: "hotel-review" },
  { name: "高級ホテル", slug: "luxury-hotel" },
  { name: "ヒルトンダイヤ", slug: "hilton-diamond" },
  { name: "HPCJ", slug: "hpcj" },
  { name: "マリオットプラチナ", slug: "marriott-platinum" },
  { name: "IHG", slug: "ihg" },
  { name: "ハイアット", slug: "hyatt" },
  { name: "朝食ビュッフェ", slug: "breakfast-buffet" },
  { name: "クラブラウンジ", slug: "club-lounge" },
  { name: "アップグレード", slug: "upgrade" },
  { name: "レイトチェックアウト", slug: "late-checkout" },
  { name: "ポイント宿泊", slug: "point-stay" },
  { name: "夫婦旅行", slug: "couple-trip" },
  { name: "記念日旅行", slug: "anniversary-trip" },
  { name: "ハワイ旅行", slug: "hawaii-trip" },
  { name: "大阪ホテル", slug: "osaka-hotel" },
  { name: "東京ホテル", slug: "tokyo-hotel" },
  { name: "福岡ホテル", slug: "fukuoka-hotel" },
  { name: "空港ラウンジ", slug: "airport-lounge" },
  { name: "SFC", slug: "sfc" },
  { name: "ANA", slug: "ana" },
  { name: "JAL", slug: "jal" },
  { name: "アメックス", slug: "amex" },
  { name: "クレジットカード", slug: "credit-card" },
  { name: "お得旅", slug: "value-trip" },
];

export const fixedPages = [
  { title: "運営者情報", href: "/about" },
  { title: "お問い合わせ", href: "/contact" },
  { title: "プライバシーポリシー", href: "/privacy" },
  { title: "免責事項", href: "/disclaimer" },
  { title: "サイトマップ", href: "/sitemap" },
];

export function getSocialLinks() {
  return [
    { name: "X", href: siteConfig.xUrl },
    { name: "Instagram", href: siteConfig.instagramUrl },
    { name: "YouTube", href: siteConfig.youtubeUrl },
    { name: "TikTok", href: siteConfig.tiktokUrl },
    { name: "note", href: siteConfig.noteUrl },
    { name: "Threads", href: siteConfig.threadsUrl },
  ].filter((link) => link.href);
}
