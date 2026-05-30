"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { CATEGORIES, INSIGHTS } from "@/data/insights";
import { fadeUp } from "@/lib/motion";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function InsightsClient() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Toate");
  const [email, setEmail] = useState("");

  const featured = INSIGHTS.find((i) => i.featured) ?? INSIGHTS[0];
  const rest = INSIGHTS.filter((i) => i.slug !== featured.slug);
  const filtered = active === "Toate" ? rest : rest.filter((i) => i.category === active);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Introdu o adresă de email validă.");
      return;
    }
    toast.success("Mulțumim. Îți vom scrie când publicăm un articol nou.");
    setEmail("");
  };

  return (
    <div>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Insights
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight md:text-7xl">
            Insights.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Aici împărtășim gânduri practice despre automatizare, agenți, sisteme interne și
            implementare reală. Articole scurte, fără jargon.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <motion.article
            {...fadeUp}
            className="grid gap-10 border border-hairline p-8 md:grid-cols-12 md:p-12"
          >
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Articol recomandat · {featured.category}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {formatDate(featured.date)} · {featured.readMinutes} min
              </p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{featured.excerpt}</p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="mt-8 inline-flex items-center gap-2 text-sm hover:underline cursor-not-allowed opacity-50"
              >
                Citește articolul <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`inline-flex h-9 items-center border px-4 text-sm transition-colors ${
                  active === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-hairline text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-px bg-hairline md:grid-cols-3">
            {filtered.map((a) => (
              <motion.article key={a.slug} {...fadeUp} className="bg-background p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {a.category}
                </p>
                <h3 className="mt-6 font-display text-xl font-semibold leading-tight">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatDate(a.date)}</span>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-foreground hover:underline cursor-not-allowed opacity-50"
                  >
                    Citește mai mult →
                  </a>
                </div>
              </motion.article>
            ))}
            {filtered.length === 0 && (
              <div className="bg-background p-12 text-center text-sm text-muted-foreground md:col-span-3">
                Nu există articole în această categorie încă.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Idei noi în inbox, când avem ceva de spus.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fără spam. Doar articole scurte, atunci când publicăm.
            </p>
          </div>
          <form onSubmit={onSubscribe} className="flex w-full gap-0 md:col-span-7 md:items-start">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="adresa@companie.ro"
              className="h-12 w-full border border-hairline bg-background px-4 text-base outline-none focus:border-foreground"
            />
            <button
              type="submit"
              className="h-12 shrink-0 bg-primary px-6 text-sm font-medium text-primary-foreground"
            >
              Abonează-mă
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
