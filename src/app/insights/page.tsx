import { InsightsClient } from "./InsightsClient";
import { INSIGHTS } from "@/data/insights";

export const metadata = {
  title: "Insights — Articole despre AI, Automatizări și Operațiuni | SQRX România",
  description:
    "Articole practice despre automatizare AI, agenți AI, sisteme interne și implementare. Scrise de echipa SQRX, agenție AI din România.",
  openGraph: {
    title: "Insights — SQRX Agenție AI România",
    description:
      "Idei practice despre AI, automatizare și operațiuni pentru companii din România.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "SQRX Insights",
  description:
    "Articole practice despre automatizare AI, agenți AI și operațiuni pentru companii",
  url: "https://sqrx.ro/insights",
  publisher: {
    "@type": "LocalBusiness",
    name: "SQRX",
    url: "https://sqrx.ro",
  },
  blogPost: INSIGHTS.map((insight) => ({
    "@type": "BlogPosting",
    headline: insight.title,
    description: insight.excerpt,
    url: `https://sqrx.ro/insights/${insight.slug}`,
    datePublished: insight.date,
    author: { "@type": "Organization", name: "SQRX" },
    keywords: `${insight.category}, agenție AI, automatizări AI, România`,
  })),
};

export default function Page() {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
      </head>
      <InsightsClient />
    </>
  );
}

