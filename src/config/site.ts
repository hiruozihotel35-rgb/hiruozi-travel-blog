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

export type SocialLink = {
  name: "X" | "YouTube" | "Instagram" | "TikTok" | "note" | "Threads" | "Facebook" | "Pinterest";
  href: string;
  iconLabel: string;
};

export const siteConfig = {
  name: "ヒルオジ旅行ブログ",
  description: "ハイコスパで最高のホテル体験を届ける旅行ブログ",
  shortDescription: "ハイコスパで最高のホテル体験を届ける旅行ブログ",
  authorName: "ヒルオジ",
  url: "https://hiruozi-travel-blog.vercel.app",
  contactEmail: "hiruozi.hotel35@gmail.com",
  xUrl: "https://x.com/hiruozi_hotel35",
  youtubeUrl: "https://www.youtube.com/channel/UCwNs6XHqR72pnwn18cjTnWg",
  instagramUrl: "https://www.instagram.com/hiruozi_hotel35/",
  tiktokUrl: "https://www.tiktok.com/@hiruozi35",
  noteUrl: "",
  threadsUrl: "",
  facebookUrl: "",
  pinterestUrl: "",
  profileImage: "/images/profile/hiruozi-profile.jpg",
  profileImageAlt: "ヒルオジのプロフィール画像",
  ogpImage: "/images/ogp/default-ogp.png",
  profile:
    "ヒルオジ旅行ブログでは、高級ホテルの宿泊記を中心に、ホテル上級会員、無料宿泊特典、クレジットカード特典、空港ラウンジなど、旅行を少しでもお得に、満足度高く楽しむための情報を発信しています。実際に泊まったホテルの体験をもとに、良かった点だけでなく、気になった点も正直に書くことを大切にしています。ヒルトンやマリオットなどのホテルステイが好きな方、クレジットカード特典をうまく使いたい方、旅行の満足度を上げたい方に向けた個人ブログです。",
  mainThemes: [
    "ホテル宿泊記",
    "ヒルトン、マリオット、IHG、ハイアットなどのホテル情報",
    "ホテル上級会員",
    "クレジットカード特典",
    "無料宿泊特典",
    "空港ラウンジ",
    "飛行機、旅行準備",
    "旅行をお得に楽しむ情報",
  ],
  ads: {
    googleAdsenseClientId: "",
    articleTopSlotId: "",
    articleBottomSlotId: "",
    sidebarSlotId: "",
  },
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
  { name: "ヒルトン", slug: "hilton" },
  { name: "ヒルトンダイヤ", slug: "hilton-diamond" },
  { name: "HPCJ", slug: "hpcj" },
  { name: "マリオットプラチナ", slug: "marriott-platinum" },
  { name: "IHG", slug: "ihg" },
  { name: "ハイアット", slug: "hyatt" },
  { name: "ホテル朝食", slug: "hotel-breakfast" },
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

const socialTopPages = new Set([
  "https://x.com",
  "https://twitter.com",
  "https://www.youtube.com",
  "https://youtube.com",
  "https://www.instagram.com",
  "https://instagram.com",
  "https://www.tiktok.com",
  "https://tiktok.com",
  "https://note.com",
  "https://www.threads.net",
  "https://threads.net",
  "https://www.facebook.com",
  "https://facebook.com",
  "https://www.pinterest.com",
  "https://pinterest.com",
]);

function isConfiguredSocialUrl(href: string) {
  const trimmed = href.trim();

  if (!trimmed) {
    return false;
  }

  try {
    const url = new URL(trimmed);
    const normalized = `${url.origin}${url.pathname}`.replace(/\/+$/, "").toLowerCase();
    return !socialTopPages.has(normalized);
  } catch {
    return false;
  }
}

export function absoluteSiteUrl(pathname = "") {
  if (!pathname) {
    return siteConfig.url;
  }

  if (/^https?:\/\//i.test(pathname)) {
    return pathname;
  }

  const baseUrl = siteConfig.url.replace(/\/+$/, "");
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${baseUrl}${normalizedPath}`;
}

export function getSocialLinks() {
  return [
    { name: "X", href: siteConfig.xUrl, iconLabel: "X" },
    { name: "YouTube", href: siteConfig.youtubeUrl, iconLabel: "YT" },
    { name: "Instagram", href: siteConfig.instagramUrl, iconLabel: "IG" },
    { name: "TikTok", href: siteConfig.tiktokUrl, iconLabel: "TT" },
    { name: "note", href: siteConfig.noteUrl, iconLabel: "N" },
    { name: "Threads", href: siteConfig.threadsUrl, iconLabel: "TH" },
    { name: "Facebook", href: siteConfig.facebookUrl, iconLabel: "FB" },
    { name: "Pinterest", href: siteConfig.pinterestUrl, iconLabel: "P" },
  ].filter((link): link is SocialLink => isConfiguredSocialUrl(link.href));
}
