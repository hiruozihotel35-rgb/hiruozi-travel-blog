import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/config/site";
import { SocialLinks } from "@/src/components/SocialLinks";

type AuthorBoxProps = {
  compact?: boolean;
};

export function AuthorBox({ compact = false }: AuthorBoxProps) {
  return (
    <section className="grid gap-5 rounded-lg border border-stone-200 bg-white p-5 sm:grid-cols-[96px_1fr]">
      <div className="relative h-24 w-24 overflow-hidden rounded-full bg-stone-100">
        <Image
          src={siteConfig.profileImage}
          alt={`${siteConfig.authorName}のプロフィール画像`}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-dark)]">Author</p>
        <h2 className="mt-2 text-xl font-semibold text-stone-950">{siteConfig.authorName}</h2>
        <p className="mt-3 text-sm leading-7 text-stone-600">
          {compact ? siteConfig.profile.slice(0, 112) + "..." : siteConfig.profile}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex min-h-10 items-center justify-center bg-stone-950 px-4 text-sm font-semibold text-white transition hover:bg-[var(--gold-dark)]"
          >
            プロフィールを見る
          </Link>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
