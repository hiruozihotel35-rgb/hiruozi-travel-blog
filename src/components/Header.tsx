import Link from "next/link";
import { categories, siteConfig } from "@/src/config/site";
import { SocialLinks } from "@/src/components/SocialLinks";

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group inline-flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
              Hiruozi Travel
            </span>
            <span className="mt-1 text-xl font-semibold tracking-[0.02em] text-stone-950 group-hover:text-[var(--gold-dark)]">
              {siteConfig.name}
            </span>
          </Link>
          <div className="lg:hidden">
            <SocialLinks />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <nav aria-label="メインナビゲーション" className="flex gap-1 overflow-x-auto pb-1">
            <Link className="nav-link" href="/articles">
              記事一覧
            </Link>
            {categories.map((category) => (
              <Link key={category.slug} className="nav-link" href={`/categories/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
