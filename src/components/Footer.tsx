import Link from "next/link";
import { categories, fixedPages, siteConfig } from "@/src/config/site";
import { SocialLinks } from "@/src/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold)]">
            Hiruozi Travel
          </p>
          <Link href="/" className="mt-3 block text-2xl font-semibold">
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-stone-300">{siteConfig.description}</p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <h2 className="footer-heading">カテゴリー</h2>
          <div className="mt-4 grid gap-2 text-sm text-stone-300">
            {categories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="footer-link">
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-heading">サイト情報</h2>
          <div className="mt-4 grid gap-2 text-sm text-stone-300">
            {fixedPages.map((page) => (
              <Link key={page.href} href={page.href} className="footer-link">
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-stone-400">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
