import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-stone-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-[var(--gold-dark)]">
            ホーム
          </Link>
        </li>
        {items.map((item) => (
          <li key={`${item.name}-${item.href ?? "current"}`} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--gold-dark)]">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-stone-800">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
