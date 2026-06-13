import Image from "next/image";
import type { GalleryImage } from "@/src/lib/posts";

export function PhotoGallery({ images }: { images: GalleryImage[] }) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="mt-14">
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-dark)]">
          Photo Gallery
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-stone-950">写真ギャラリー</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {images.map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-lg border border-stone-200 bg-white">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {image.caption ? <figcaption className="p-4 text-sm leading-6 text-stone-600">{image.caption}</figcaption> : null}
          </figure>
        ))}
      </div>
    </section>
  );
}
