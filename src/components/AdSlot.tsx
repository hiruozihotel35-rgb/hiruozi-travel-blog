type AdSlotProps = {
  label?: string;
};

export function AdSlot({ label = "広告掲載スペース" }: AdSlotProps) {
  return (
    <aside className="my-10 border border-dashed border-stone-300 bg-stone-50 px-5 py-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">Advertisement</p>
      <p className="mt-2 text-sm text-stone-500">{label}</p>
    </aside>
  );
}
