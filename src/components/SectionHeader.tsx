type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-stone-600">{description}</p> : null}
    </div>
  );
}
