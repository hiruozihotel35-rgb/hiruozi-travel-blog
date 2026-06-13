import Image from "next/image";
import Link from "next/link";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

function headingId(text: string, index: number) {
  const slug = text
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "");

  return slug ? `${slug}-${index}` : `section-${index}`;
}

export function extractToc(markdown: string): TocItem[] {
  let index = 0;

  return markdown
    .split("\n")
    .map((line) => {
      const heading = line.match(/^(#{2,3})\s+(.+)$/);
      if (!heading) {
        return null;
      }

      index += 1;
      return {
        id: headingId(heading[2], index),
        text: heading[2],
        level: heading[1].length as 2 | 3,
      };
    })
    .filter((item): item is TocItem => Boolean(item));
}

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) {
          return <strong key={`${part}-${index}`}>{bold[1]}</strong>;
        }

        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const href = link[2];
          const isExternal = href.startsWith("http");
          if (isExternal) {
            return (
              <a key={`${part}-${index}`} href={href} rel="noreferrer" target="_blank">
                {link[1]}
              </a>
            );
          }

          return (
            <Link key={`${part}-${index}`} href={href}>
              {link[1]}
            </Link>
          );
        }

        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

function MarkdownImage({ line }: { line: string }) {
  const image = line.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/);
  if (!image) {
    return null;
  }

  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-lg bg-stone-100">
        <Image
          src={image[2]}
          alt={image[1]}
          width={1400}
          height={900}
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      {image[3] ? <figcaption className="mt-3 text-sm text-stone-500">{image[3]}</figcaption> : null}
    </figure>
  );
}

export function MarkdownContent({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const blocks: React.ReactNode[] = [];
  let index = 0;
  let headingIndex = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      headingIndex += 1;
      const level = heading[1].length;
      const id = headingId(heading[2], headingIndex);

      if (level === 2) {
        blocks.push(
          <h2 key={id} id={id}>
            {heading[2]}
          </h2>,
        );
      } else {
        blocks.push(
          <h3 key={id} id={id}>
            {heading[2]}
          </h3>,
        );
      }

      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].startsWith("- ")) {
        items.push(lines[index].replace("- ", ""));
        index += 1;
      }

      blocks.push(
        <ul key={`ul-${index}`}>
          {items.map((item) => (
            <li key={item}>
              <InlineText text={item} />
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s/, ""));
        index += 1;
      }

      blocks.push(
        <ol key={`ol-${index}`}>
          {items.map((item) => (
            <li key={item}>
              <InlineText text={item} />
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    if (line.startsWith("![")) {
      blocks.push(<MarkdownImage key={`image-${index}`} line={line} />);
      index += 1;
      continue;
    }

    const paragraph: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{2,3})\s+/.test(lines[index]) &&
      !lines[index].startsWith("- ") &&
      !/^\d+\.\s/.test(lines[index]) &&
      !lines[index].startsWith("![")
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push(
      <p key={`p-${index}`}>
        <InlineText text={paragraph.join(" ")} />
      </p>,
    );
  }

  return <div className="article-body">{blocks}</div>;
}
