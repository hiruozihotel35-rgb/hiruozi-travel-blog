import Link from "next/link";
import { getSocialLinks } from "@/src/config/site";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  const links = getSocialLinks();

  if (!links.length) {
    return null;
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-9 items-center border border-stone-200 px-3 text-xs font-semibold uppercase tracking-[0.08em] text-stone-700 transition hover:border-[var(--gold)] hover:text-[var(--gold-dark)]"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
