"use client";

import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  url: string;
};

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyUrl() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="mt-10 border-t border-stone-200 pt-8">
      <p className="text-sm font-semibold text-stone-950">この記事をシェア</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button"
        >
          Xでシェア
        </a>
        <a
          href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button"
        >
          LINEでシェア
        </a>
        <button type="button" className="share-button" onClick={copyUrl}>
          {copied ? "コピーしました" : "URLをコピー"}
        </button>
      </div>
    </div>
  );
}
