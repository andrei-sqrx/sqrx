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
    title: "Agenți AI",
    text: "Agenți de chat și agenți vocali, concepuți pentru afaceri care interacționează cu clienții în special online, mai degrabă decât fizic.",
  },
  {
    n: "02",
    title: "Automatizări AI",
    text: "Sisteme configurate pentru a automatiza sarcini care doar consumă timp și țin angajații ocupați.",
  },
  {
    n: "03",
    title: "Dezvoltare Web",
    text: "Construirea și designul site-urilor web alături de infrastructura online necesară, incluzând backend, SEO, AEO și GEO.",
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
      <section className="border-b border-hairline bg-muted/5">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Ce facem
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Trei direcții, un singur scop: rezultat operațional.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
            {/* Card 1: Agenți AI */}
            <motion.div {...fadeUp} className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-3xl bg-card border border-hairline"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[23px]">
                <div className="p-8 sm:p-10 pb-0">
                  <p className="font-display text-xs font-semibold tracking-widest text-muted-foreground uppercase">01 / Agenți AI</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">Agenți de chat și vocali</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Agenți de chat și vocali, concepuți pentru afaceri care interacționează cu clienții în special online, mai degrabă decât fizic.
                  </p>
                </div>
                {/* Visual: Chat simulator inside phone */}
                <div className="relative min-h-[300px] w-full grow mt-8">
                  <div className="absolute inset-x-8 top-0 bottom-0 overflow-hidden rounded-t-2xl border-x border-t border-hairline bg-background/50 p-4 shadow-sm">
                    <div className="space-y-3 text-[11px] leading-relaxed">
                      <div className="flex justify-end">
                        <div className="bg-foreground text-background rounded-2xl rounded-tr-none px-3 py-1.5 max-w-[85%] font-medium">
                          Cum pot programa o discuție cu voi?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-card text-foreground rounded-2xl rounded-tl-none px-3 py-1.5 max-w-[85%] border border-hairline">
                          Salut! Apasă butonul din colț sau lasă-mi un mesaj direct aici și te ajut imediat.
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-foreground text-background rounded-2xl rounded-tr-none px-3 py-1.5 max-w-[85%] font-medium">
                          Vreau o discuție scurtă mâine.
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-card text-foreground rounded-2xl rounded-tl-none px-3 py-1.5 max-w-[85%] border border-hairline flex items-center gap-1">
                          <span className="h-1 w-1 bg-foreground rounded-full animate-bounce"></span>
                          <span className="h-1 w-1 bg-foreground rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          <span className="h-1 w-1 bg-foreground rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-3xl shadow-sm outline outline-hairline"></div>
            </motion.div>

            {/* Card 2: Automatizări AI */}
            <motion.div {...fadeUp} className="relative">
              <div className="absolute inset-px rounded-3xl bg-card border border-hairline"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[23px]">
                <div className="p-8 sm:p-10 pb-0">
                  <p className="font-display text-xs font-semibold tracking-widest text-muted-foreground uppercase">02 / Automatizări</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">Automatizări de procese</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Sisteme configurate pentru a automatiza sarcini care doar consumă timp și țin angajații ocupați.
                  </p>
                </div>
                {/* Visual: Workflow automation connector */}
                <div className="flex flex-1 items-center justify-center p-8 sm:p-10 min-h-[140px]">
                  <div className="flex items-center gap-2 text-[10px] font-mono w-full max-w-xs justify-between">
                    <div className="border border-hairline bg-background px-3 py-2 rounded shadow-sm">
                      <div className="text-[8px] text-muted-foreground uppercase">Trigger</div>
                      <div className="font-semibold text-foreground mt-0.5">Email nou</div>
                    </div>
                    <div className="h-px bg-hairline flex-1 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-foreground"></div>
                    </div>
                    <div className="border border-foreground/30 bg-muted/30 px-3 py-2 rounded shadow-sm text-center">
                      <div className="text-[8px] text-foreground uppercase">Agent AI</div>
                      <div className="font-semibold text-foreground mt-0.5">Analiză</div>
                    </div>
                    <div className="h-px bg-hairline flex-1 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-foreground"></div>
                    </div>
                    <div className="border border-hairline bg-background px-3 py-2 rounded shadow-sm">
                      <div className="text-[8px] text-muted-foreground uppercase">Action</div>
                      <div className="font-semibold text-foreground mt-0.5">Update CRM</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-3xl shadow-sm outline outline-hairline"></div>
            </motion.div>

            {/* Card 3: Integrări */}
            <motion.div {...fadeUp} className="relative lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-3xl bg-card border border-hairline"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[23px]">
                <div className="p-8 sm:p-10 pb-0">
                  <p className="font-display text-xs font-semibold tracking-widest text-muted-foreground uppercase">Integrare</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">Conectivitate totală</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Sistemele noastre se conectează nativ cu platformele pe care le folosești deja (CRM, Slack, Stripe, baze de date).
                  </p>
                </div>
                {/* Visual: Logo Cloud or minimal integration labels */}
                <div className="flex flex-1 items-center justify-center p-8 sm:p-10 min-h-[140px]">
                  <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-muted-foreground">
                    <span className="px-2.5 py-1.5 border border-hairline rounded-full bg-background/50">Slack</span>
                    <span className="px-2.5 py-1.5 border border-hairline rounded-full bg-background/50">Stripe</span>
                    <span className="px-2.5 py-1.5 border border-hairline rounded-full bg-background/50">HubSpot</span>
                    <span className="px-2.5 py-1.5 border border-hairline rounded-full bg-background/50">Custom API</span>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-3xl shadow-sm outline outline-hairline"></div>
            </motion.div>

            {/* Card 4: Dezvoltare Web */}
            <motion.div {...fadeUp} className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-3xl bg-card border border-hairline"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[23px]">
                <div className="p-8 sm:p-10 pb-0">
                  <p className="font-display text-xs font-semibold tracking-widest text-muted-foreground uppercase">03 / Dezvoltare Web</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">Infrastructură & SEO</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Construirea și designul site-urilor web alături de infrastructura online necesară, incluzând backend, SEO, AEO și GEO.
                  </p>
                </div>
                {/* Visual: Code Editor Mockup */}
                <div className="relative min-h-[300px] w-full grow mt-8">
                  <div className="absolute top-0 right-0 bottom-0 left-8 overflow-hidden rounded-tl-2xl border-l border-t border-hairline bg-background/40 font-mono text-[10px] text-muted-foreground shadow-sm">
                    <div className="flex border-b border-hairline bg-muted/30">
                      <div className="border-r border-hairline bg-background px-3 py-1.5 text-foreground font-medium">seo-config.ts</div>
                      <div className="px-3 py-1.5 border-r border-hairline">next.config.js</div>
                    </div>
                    <div className="p-4 space-y-1">
                      <div><span className="text-muted-foreground">export const</span> <span className="text-foreground">seoConfig</span> = &#123;</div>
                      <div className="pl-4">title: <span className="text-muted-foreground">"SQRX — Agenție AI"</span>,</div>
                      <div className="pl-4">description: <span className="text-muted-foreground">"Sisteme utile"</span>,</div>
                      <div className="pl-4">aeoEnabled: <span className="text-foreground">true</span>,</div>
                      <div className="pl-4">geoOptimized: <span className="text-foreground">true</span></div>
                      <div>&#125;;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-3xl shadow-sm outline outline-hairline"></div>
            </motion.div>
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
