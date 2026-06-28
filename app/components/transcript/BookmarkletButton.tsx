import { useEffect, useState } from "react";

export default function BookmarkletButton() {
  const [href, setHref] = useState<string>("javascript:void(0)");

  useEffect(() => {
    let cancelled = false;
    fetch("/lemida-bookmarklet.js")
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error("not_found"))))
      .then((src) => {
        const minified = src
          .replace(/\/\*[\s\S]*?\*\//g, "")
          .replace(/\s*\n\s*/g, " ")
          .replace(/\s{2,}/g, " ")
          .trim();
        if (!cancelled) {
          setHref(`javascript:${encodeURIComponent(minified)}`);
        }
      })
      .catch(() => {
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <a
      className="transcript-bookmarklet"
      href={href}
      onClick={(e) => e.preventDefault()}
      draggable
      title="Drag to your bookmarks bar"
    >
      ⭐ Lemida → VTT
    </a>
  );
}
