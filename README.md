# ヒルオジ旅行ブログ

「ハイコスパで最高のホテル体験を届ける旅行ブログ」として作成した、Next.js製の旅行・ホテル特化ブログです。

ホテル宿泊記、ホテル上級会員、クレジットカード、飛行機、旅行ノウハウをMarkdownで追加できます。CMSは使わず、初心者でもファイルを増やして運用しやすい構成にしています。

## 主なファイル構成

```txt
app/                  ページ本体
content/posts/        記事のMarkdown
content/templates/    記事テンプレート
public/images/posts/  記事アイキャッチ画像
public/images/hotels/ 記事内ギャラリーやホテル写真
public/images/profile/プロフィール画像
public/images/ogp/    OGP画像
src/config/site.ts    サイト情報、SNS、カテゴリ、タグ
src/components/       共通パーツ
src/lib/              記事読み込み、日付、Markdown処理
```

## サイト基本設定の変更方法

サイト名、説明文、運営者名、プロフィール文、お問い合わせメール、SNS URL、サイトURLは、原則として次のファイルだけを編集します。

```txt
src/config/site.ts
```

主に編集する項目です。

```ts
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
profile: "プロフィール文",
```

- サイト名を変える: `name`を変更します。
- プロフィール文を変える: `profile`を変更します。
- お問い合わせメールを変える: `contactEmail`を変更します。
- X URLを変える: `xUrl`を変更します。
- YouTube URLを変える: `youtubeUrl`を変更します。
- Instagram URLを変える: `instagramUrl`を変更します。
- TikTok URLを変える: `tiktokUrl`を変更します。
- SNSを非表示にする: 該当SNSのURLを空文字`""`にします。SNSサービスのトップページだけを入れた場合も自動で非表示になります。
- 独自ドメインへ変更する: `url`を独自ドメインのURLに変更します。canonical URL、OGP、sitemap.xml、robots.txt、SNSシェア用URLに反映されます。

## 記事の追加方法

1. `content/templates/`から近いテンプレートを選びます。
   - ホテル宿泊記: `hotel-review-template.md`
   - クレジットカード: `credit-card-template.md`
   - 飛行機: `flight-template.md`
2. テンプレートを`content/posts/`へコピーします。
3. ファイル名を英数字のslugにします。
   - 例: `conrad-osaka-review.md`
4. 先頭の`---`で囲まれた部分を書き換えます。
5. `## 見出し`以下に本文を書きます。

記事URLはファイル名から自動で決まります。

```txt
content/posts/conrad-osaka-review.md
→ /articles/conrad-osaka-review
```

## 記事で設定できる項目

```yaml
title: 記事タイトル
seoTitle: 検索結果向けタイトル
description: 記事ページに表示する説明文
seoDescription: 検索結果向け説明文
date: 2026-01-01
updatedAt: 2026-01-01
category: ホテル宿泊記
tags: ホテル宿泊記, 高級ホテル, 大阪ホテル
eyecatch: /images/posts/example.png
eyecatchAlt: 画像の説明
author: ヒルオジ
hotelName: ホテル名
brand: ブランド名
area: エリア名
rating: 4.5
summary: 記事の要約
affiliateDisclosure: 広告やアフィリエイトに関する説明
featured: true
draft: false
gallery:
  - /images/hotels/example-room.png|客室の写真|客室のキャプション
```

`featured: true`にすると、トップページのおすすめ記事に表示されやすくなります。

記事を公開する場合は、記事ファイルのfront matterで次のように設定します。

```yaml
draft: false
```

記事を下書きにする場合は、次のように設定します。

```yaml
draft: true
```

`draft: true`の記事は、本番環境ではトップページ、記事一覧、カテゴリ別記事一覧、タグ別記事一覧、関連記事、サイトマップ、`sitemap.xml`に表示されません。開発環境では確認できるように読み込まれます。

## 画像の追加方法

画像は`public/images/`配下に置きます。

- 記事のアイキャッチ: `public/images/posts/`
- ホテル写真、ギャラリー画像: `public/images/hotels/`
- プロフィール画像: `public/images/profile/`
- OGP画像: `public/images/ogp/`

Markdownでは`public`を省いたパスを書きます。

```yaml
eyecatch: /images/posts/conrad-osaka.png
eyecatchAlt: コンラッド大阪の客室
```

ギャラリーは次の形式です。

```yaml
gallery:
  - /images/hotels/conrad-room.png|客室の写真|大きな窓が印象的な客室
  - /images/hotels/conrad-breakfast.png|朝食の写真|朝食ビュッフェの一例
```

画像には必ず内容が分かる`alt`テキストを入れてください。ページ側では`next/image`で表示しています。

## ウォルドーフ大阪の記事準備

最初の本番記事ドラフトは次のファイルで管理します。

```txt
content/posts/waldorf-astoria-osaka-real-review.md
```

写真は次のフォルダに置きます。

```txt
public/images/hotels/waldorf-osaka/
```

写真ファイル名は、英数字・小文字・ハイフンで統一します。スペースや日本語は使いません。

```txt
waldorf-osaka-room-01.jpg
waldorf-osaka-room-02.jpg
waldorf-osaka-room-03.jpg
waldorf-osaka-room-04.jpg
waldorf-osaka-room-05.jpg
waldorf-osaka-room-06.jpg
waldorf-osaka-room-07.jpg
waldorf-osaka-room-08.jpg
waldorf-osaka-breakfast.jpg
```

記事本文では、`【ここに実際の予約内容を入力】`のような仮テキストを、実際の宿泊体験に基づく内容へ置き換えてください。料金、部屋タイプ、アップグレード、朝食内容、ヒルトンダイヤ特典などは、確認できた事実だけを書きます。

公開するときは、記事ファイルのfront matterを次のように変更します。

```yaml
draft: false
```

公開前には必ず次を実行し、エラーがないことを確認してください。

```bash
npm run lint
npm run build
```

## カテゴリーの追加方法

カテゴリーは`src/config/site.ts`の`categories`に追加します。

```ts
{
  name: "旅行ノウハウ",
  slug: "travel-tips",
  description: "旅行準備、持ち物、予約術などを扱うカテゴリー",
  image: "/images/posts/travel-tips.png",
}
```

記事の`category`には`name`と同じ文字を書きます。

```yaml
category: 旅行ノウハウ
```

カテゴリーは大分類として使い、細かい分類はタグで管理してください。

## タグの追加方法

タグは`src/config/site.ts`の`tags`に追加します。

```ts
{ name: "沖縄旅行", slug: "okinawa-trip" }
```

記事側では`name`をカンマ区切りで書きます。

```yaml
tags: ホテル宿泊記, 沖縄旅行, 朝食ビュッフェ
```

## SNS URLの変更方法

SNSリンクは`src/config/site.ts`の`siteConfig`で管理します。現在表示するSNSは、X、YouTube、Instagram、TikTokです。

```ts
xUrl: "https://x.com/hiruozi_hotel35",
youtubeUrl: "https://www.youtube.com/channel/UCwNs6XHqR72pnwn18cjTnWg",
instagramUrl: "https://www.instagram.com/hiruozi_hotel35/",
tiktokUrl: "https://www.tiktok.com/@hiruozi35",
```

URLを空文字`""`にすると、そのSNSはヘッダー、フッター、トップページのプロフィール部分、運営者情報ページ、記事下の著者プロフィール欄に表示されません。

## SEOタイトルと説明文の変更方法

記事ごとのSEOはMarkdown先頭の次の項目で変更します。

```yaml
seoTitle: 検索結果に出したいタイトル
seoDescription: 検索結果に出したい説明文
```

全体のサイト名、サイト説明、サイトURL、OGP画像は`src/config/site.ts`で変更します。

```ts
name: "ヒルオジ旅行ブログ",
description: "ハイコスパで最高のホテル体験を届ける旅行ブログ",
url: "https://hiruozi-travel-blog.vercel.app",
ogpImage: "/images/ogp/default-ogp.png",
```

独自ドメインを設定したら、`url`を実際のドメインに変更してください。canonical URL、OGP、sitemap.xml、robots.txt、SNSシェア用URLで使われます。

## ローカルで確認する方法

初回だけ依存関係を入れます。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで次を開きます。

```txt
http://localhost:3000
```

本番ビルドの確認は次のコマンドです。

```bash
npm run lint
npm run build
```

## 本番公開前のチェックリスト

- `src/config/site.ts`の`url`を本番ドメインに変更した
- `contactEmail`を実際に受信できるメールアドレスに変更した
- SNS URLを必要なものだけ設定した
- すべての記事に`seoTitle`と`seoDescription`を入れた
- すべての画像に分かりやすい`alt`を入れた
- アイキャッチ画像が横長で表示崩れしていない
- `/about`、`/contact`、`/privacy`、`/disclaimer`、`/sitemap`の内容を確認した
- `/sitemap.xml`と`/robots.txt`をブラウザで確認した
- `npm run lint`と`npm run build`が成功した

## Googleアドセンス申請前に確認すること

- 運営者情報ページに運営者の説明がある
- お問い合わせページに連絡先がある
- プライバシーポリシーページがある
- 免責事項ページがある
- サイトマップページがある
- ヘッダーとフッターから主要ページへ移動できる
- 各カテゴリーに記事があり、空ページに見えない
- 記事本文が短すぎず、独自の説明や体験ベースの観点がある
- 広告IDを設定していない状態で、公開画面に広告枠や説明文が表示されていない
- 過剰なアフィリエイト誘導やクリック誘導がない
- 画像の権利を確認し、無断転載画像を使っていない
- 料金、特典、会員制度など変更されやすい情報は公開前に公式サイトで確認した

## 現在用意している初期コンテンツ

- ヒルトンダイヤモンドは本当にお得なのか
- マリオットプラチナとヒルトンダイヤを本音比較
- ウォルドーフ・アストリア大阪 宿泊記
- IHGホテルを選ぶメリットと注意点
- ハイアットホテルはどんな人に向いているのか
- ホテル好きが選ぶべきクレジットカードの考え方
- 空港ラウンジを使うと旅行はどれだけ快適になるのか

`ウォルドーフ・アストリア大阪 宿泊記`は、現時点では`draft: true`の下書き記事として管理しています。実際の公開記事として内容を確認・加筆できたら、front matterを`draft: false`に変更してください。
