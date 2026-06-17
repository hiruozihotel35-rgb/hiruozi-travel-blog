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
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-9 items-center gap-2 border border-stone-200 px-3 text-xs font-semibold text-stone-700 transition hover:border-[var(--gold)] hover:text-[var(--gold-dark)]"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-5 min-w-5 items-center justify-center bg-stone-950 px-1 text-[10px] font-bold leading-none text-white"
          >
            {link.iconLabel}
          </span>
          {link.name}
        </a>
      ))}
    </div>
  );
}
