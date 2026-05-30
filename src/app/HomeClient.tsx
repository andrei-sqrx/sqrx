"use client";

import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

const ease: Transition["ease"] = "easeOut";
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, ease } satisfies Transition,
};

const SERVICES = [
  {
    n: "01",
    title: "Automatizări AI",
    text: "Elimină pașii repetați și transformă procesele manuale în fluxuri clare.",
  },
  {
    n: "02",
    title: "Agenți AI",
    text: "Construim sisteme AI orientate pe sarcini reale din operațiuni, suport sau cercetare internă.",
  },
  {
    n: "03",
    title: "Sisteme de cunoaștere",
    text: "Facem informația internă mai ușor de găsit, folosit și actualizat.",
  },
];

const AUDIENCE = [
  "Echipe care pierd timp în operațiuni repetitive",
  "Companii cu procese fragmentate între mai multe tool-uri",
  "Fondatori care vor implementare practică, nu experimente",
  "Echipe care au nevoie de sisteme interne mai clare",
];

const PROCESS = [
  {
    n: "01",
    title: "Analizăm",
    text: "Identificăm blocajele, repetițiile și zonele unde AI-ul poate produce un rezultat util.",
  },
  {
    n: "02",
    title: "Construim",
    text: "Definim soluția și o implementăm în jurul unei nevoi operaționale reale.",
  },
  {
    n: "03",
    title: "Optimizăm",
    text: "Îmbunătățim sistemul după lansare și îl facem mai ușor de folosit.",
  },
];

const PRINCIPLES = [
  ["Claritate", "În scop, livrare și comunicare."],
  ["Practic", "Implementare orientată pe rezultat operațional."],
  ["Viteză", "Cicluri scurte, decizii rapide."],
  ["Utilitate", "Sisteme folosite, nu demo-uri spectaculoase."],
  ["Documentație", "Tot ce livrăm rămâne explicat."],
  ["Direct", "Comunicare onestă, fără jargon."],
];

export function HomeClient() {
  const featured = INSIGHTS.slice(0, 3);
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-32 md:pb-40">
          <motion.p
            {...fadeUp}
            className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground"
          >
            Agenție AI · România
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
          >
            SQRX construiește sisteme AI care reduc munca manuală.
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Implementăm automatizări, agenți AI și sisteme interne pentru companii care vor soluții
            utile, nu promisiuni goale.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Programează o discuție
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center gap-2 border border-foreground px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Vezi serviciile
            </Link>
          </motion.div>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-10 text-sm text-muted-foreground"
          >
            Lucrăm cu echipe care vor implementare clară, nu prezentări de slide-uri.
          </motion.p>
        </div>
      </section>

      {/* WHAT */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Ce facem
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Trei direcții, un singur scop: rezultat operațional.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-px bg-hairline sm:grid-cols-3">
                {SERVICES.map((s) => (
                  <motion.div key={s.n} {...fadeUp} className="bg-background p-8">
                    <p className="font-display text-sm text-muted-foreground">{s.n}</p>
                    <h3 className="mt-8 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Pentru cine
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Construim pentru echipe care vor să avanseze, nu doar să experimenteze.
              </h2>
            </div>
            <ul className="md:col-span-7">
              {AUDIENCE.map((item, i) => (
                <motion.li
                  key={item}
                  {...fadeUp}
                  className="flex items-start gap-6 border-b border-hairline py-6 first:border-t"
                >
                  <span className="font-display text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Cum lucrăm
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Un proces scurt, clar, fără pași inutili.
          </h2>
          <div className="mt-16 grid gap-px bg-hairline md:grid-cols-3">
            {PROCESS.map((p) => (
              <motion.div key={p.n} {...fadeUp} className="bg-background p-8">
                <p className="font-display text-sm text-muted-foreground">{p.n}</p>
                <h3 className="mt-8 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                De ce SQRX
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Principii pe care le aplicăm la fiecare proiect.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-px bg-hairline sm:grid-cols-2 md:grid-cols-3">
                {PRINCIPLES.map(([title, text]) => (
                  <motion.div key={title} {...fadeUp} className="bg-background p-6">
                    <h3 className="font-display text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Insights
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Gânduri practice despre AI și operațiuni.
              </h2>
            </div>
            <Link
              href="/insights"
              className="hidden items-center gap-2 text-sm hover:underline md:inline-flex"
            >
              Toate articolele <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-px bg-hairline md:grid-cols-3">
            {featured.map((a) => (
              <motion.article key={a.slug} {...fadeUp} className="bg-background p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {a.category}
                </p>
                <h3 className="mt-6 font-display text-xl font-semibold leading-tight">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
                <Link
                  href="/insights"
                  className="mt-6 inline-flex items-center gap-1 text-sm hover:underline"
                >
                  Citește <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center md:justify-between md:py-32">
          <h2 className="max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Vrei să construim ceva util?
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-12 w-fit items-center gap-2 bg-primary-foreground px-6 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            Programează o discuție <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
