import type { MetaDescriptor } from "react-router";
import { getMessages, localizePath, type Locale } from "./locale";

export const siteUrl = "https://www.talyaakobi.com";

const linkedin = "https://www.linkedin.com/in/tal-yaakobi-191059227/";
const github = "https://github.com/Yatal42";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function homeMeta(locale: Locale): MetaDescriptor[] {
  const t = getMessages(locale);
  const url = absoluteUrl(localizePath("/", locale));
  const image = absoluteUrl("/og-image.png");

  return [
    { title: t.meta.homeTitle },
    { name: "description", content: t.meta.homeDescription },
    { tagName: "link", rel: "canonical", href: url },
    { tagName: "link", rel: "alternate", hrefLang: "he", href: absoluteUrl("/") },
    { tagName: "link", rel: "alternate", hrefLang: "en", href: absoluteUrl("/en") },
    { tagName: "link", rel: "alternate", hrefLang: "x-default", href: absoluteUrl("/") },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: t.footer.name },
    { property: "og:locale", content: locale === "he" ? "he_IL" : "en_US" },
    { property: "og:url", content: url },
    { property: "og:title", content: t.meta.homeTitle },
    { property: "og:description", content: t.meta.homeDescription },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: t.meta.homeTitle },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: t.meta.homeTitle },
    { name: "twitter:description", content: t.meta.homeDescription },
    { name: "twitter:image", content: image },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": `${siteUrl}/#person`,
            name: "Tal Yaakobi",
            alternateName: "טל יעקובי",
            url: siteUrl,
            image,
            jobTitle: locale === "he" ? "מתרגלת ומורה פרטית למדעי המחשב" : "Computer Science Tutor",
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "HIT - Holon Institute of Technology",
            },
            knowsAbout: ["Computer Science", "Data Structures", "Algorithms", "Probability", "Automata"],
            sameAs: [linkedin, github],
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: t.footer.name,
            inLanguage: locale,
            publisher: { "@id": `${siteUrl}/#person` },
          },
        ],
      },
    },
  ];
}
