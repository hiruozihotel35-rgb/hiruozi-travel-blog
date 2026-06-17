import { siteConfig } from "@/src/config/site";

type AdSlotProps = {
  slotId?: string;
  className?: string;
  format?: "auto" | "fluid";
};

export function AdSlot({ slotId = "", className = "", format = "auto" }: AdSlotProps) {
  const clientId = siteConfig.ads.googleAdsenseClientId.trim();
  const normalizedSlotId = slotId.trim();

  if (!clientId || !normalizedSlotId) {
    return null;
  }

  return (
    <aside className={`my-10 ${className}`} aria-label="広告">
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={normalizedSlotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
