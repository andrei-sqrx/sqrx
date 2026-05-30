"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const POV = [
  "AI-ul trebuie să fie util, nu spectaculos.",
  "Operațiunile contează mai mult decât demo-urile.",
  "Sistemele bune reduc fricțiunea, nu o mută.",
  "Claritatea bate complexitatea, mereu.",
];

const PRINCIPLES = [
  ["Precizie", "Decizii argumentate, nu intuiții vagi."],
  ["Claritate", "Scop clar, livrare clară, comunicare clară."],
  ["Utilitate", "Construim doar ce este folosit zi de zi."],
  ["Viteză", "Cicluri scurte, livrări frecvente."],
  ["Fiabilitate", "Sisteme stabile, documentate, ușor de preluat."],
];

const PROCESS = [
  ["Descoperire", "Înțelegem contextul, oamenii și constrângerile."],
  ["Definire", "Stabilim un scope strâns și criterii de succes."],
  ["Construcție", "Implementăm iterativ, cu feedback constant."],
  ["Lansare", "Predăm sistemul, documentația și suportul."],
];

export function AboutClient() {
  return (
    <div>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Despre
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight md:text-7xl">
            Despre SQRX.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Suntem o agenție AI focusată pe sisteme utile, claritate operațională și implementare
            practică. Lucrăm cu echipe care vor rezultate, nu prezentări.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Misiune
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              Existăm pentru a ajuta companiile să folosească AI-ul în moduri care reduc fricțiunea,
              nu adaugă zgomot. Construim sisteme care sunt folosite, nu prezentate.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Punct de vedere
          </p>
          <div className="mt-12 grid gap-px bg-hairline md:grid-cols-2">
            {POV.map((line, i) => (
              <motion.div key={i} {...fadeUp} className="bg-background p-10">
                <p className="font-display text-2xl font-semibold leading-tight md:text-3xl">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Principii de lucru
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Cinci principii care ghidează fiecare proiect.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-px bg-hairline sm:grid-cols-2">
              {PRINCIPLES.map(([t, d]) => (
                <motion.div key={t} {...fadeUp} className="bg-background p-8">
                  <h3 className="font-display text-xl font-semibold">{t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Proces
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            De la descoperire la lansare.
          </h2>
          <div className="mt-12 grid gap-px bg-hairline md:grid-cols-4">
            {PROCESS.map(([t, d], i) => (
              <motion.div key={t} {...fadeUp} className="bg-background p-6">
                <p className="font-display text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full border border-hairline bg-surface-muted">
              <div className="flex h-full items-center justify-center">
                <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Portret fondator
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Fondator
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              SQRX pornește de la o idee simplă.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              AI-ul trebuie să facă munca mai clară, mai rapidă și mai eficientă. Nu să înlocuiască
              oameni cu interfețe noi, ci să le elimine pașii inutili.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Lucrăm direct cu fondatori și echipe operaționale. Fără intermediari, fără promisiuni
              nerealiste, fără demo-uri care nu ajung niciodată în producție.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center md:justify-between md:py-32">
          <h2 className="max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Hai să discutăm despre proiectul tău.
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-12 w-fit items-center bg-primary-foreground px-6 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            Contactează SQRX
          </Link>
        </div>
      </section>
    </div>
  );
}
