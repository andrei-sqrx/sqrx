"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp, ease } from "@/lib/motion";

const SERVICES = [
  {
    n: "01",
    title: "Automatizări AI",
    description:
      "Construim fluxuri și sisteme care reduc munca repetitivă și fac procesele interne mai eficiente.",
    helps: [
      "Task-uri administrative repetitive",
      "Transfer de informație între tool-uri",
      "Lead routing",
      "Rapoarte recurenre",
    ],
    deliverables: [
      "Mapare de proces",
      "Arhitectură de automatizare",
      "Implementare",
      "Documentație",
    ],
    fit: "Potrivit pentru echipe care pierd timp în activități manuale repetitive.",
  },
  {
    n: "02",
    title: "Agenți AI",
    description:
      "Construim agenți AI orientați pe funcții clare, utile în contexte reale de business.",
    helps: [
      "Cercetare internă",
      "Suport operațional",
      "Asistență pe task-uri",
      "Procese de calificare",
    ],
    deliverables: [
      "Definire logică",
      "Configurare flux",
      "Integrare cu tool-uri",
      "Testare operațională",
    ],
    fit: "Potrivit pentru echipe care vor să automatizeze decizii repetitive cu context.",
  },
  {
    n: "03",
    title: "Sisteme de cunoaștere",
    description:
      "Structurăm informația internă astfel încât echipa să găsească mai repede răspunsurile corecte.",
    helps: ["Acces la SOP-uri", "Căutare internă", "Documentație fragmentată", "Knowledge sharing"],
    deliverables: [
      "Audit de surse",
      "Arhitectură informațională",
      "Sistem de căutare",
      "Mentenanță",
    ],
    fit: "Potrivit pentru companii cu documentație împrăștiată între tool-uri.",
  },
  {
    n: "04",
    title: "Integrări",
    description: "Conectăm soluțiile AI la aplicațiile deja folosite în companie.",
    helps: ["CRM", "Slack", "Email", "Formulare", "Baze de date", "Tool-uri interne"],
    deliverables: ["Mapare API", "Implementare conector", "Testare end-to-end", "Monitorizare"],
    fit: "Potrivit pentru echipe cu stack tehnologic existent care nu mai comunică între ele.",
  },
];

const PROCESS = [
  ["01", "Descoperire", "Discutăm contextul, obiectivele și constrângerile reale."],
  ["02", "Definire", "Stabilim scope-ul, livrabilele și criteriile de succes."],
  ["03", "Construcție", "Implementăm soluția iterativ, cu feedback constant."],
  ["04", "Testare", "Validăm sistemul în condiții reale de operare."],
  ["05", "Lansare", "Punem totul în producție și predăm documentația."],
];

const FAQ = [
  {
    q: "Cu ce tip de companii lucrați?",
    a: "Lucrăm cu companii care au procese operaționale clare și vor să le facă mai eficiente. Nu suntem dependenți de o anumită industrie sau dimensiune.",
  },
  {
    q: "Puteți lucra cu tool-urile pe care le folosim deja?",
    a: "Da. Pornim de la stack-ul existent și construim deasupra. Înlocuim tool-uri doar când este absolut necesar.",
  },
  {
    q: "Cum începe un proiect?",
    a: "Cu o discuție scurtă în care înțelegem contextul. Dacă există potrivire, urmează o fază scurtă de descoperire înainte de propunere.",
  },
  {
    q: "Oferiți și suport după implementare?",
    a: "Da. Fiecare proiect include o perioadă de suport, iar pentru sisteme critice oferim mentenanță continuă.",
  },
  {
    q: "Cum estimați costul unui proiect?",
    a: "După faza de descoperire propunem un scope clar și un cost fix sau pe etape, în funcție de complexitate.",
  },
];

export function ServicesClient() {
  return (
    <div>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Servicii
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight md:text-7xl">
            Servicii AI pentru operațiuni reale.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Ajutăm companiile să implementeze sisteme AI utile, focusate pe automatizare, eficiență
            internă și operațiuni clare.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6">
          {SERVICES.map((s) => (
            <motion.div
              key={s.n}
              {...fadeUp}
              className="grid gap-10 border-b border-hairline py-16 last:border-0 md:grid-cols-12 md:py-24"
            >
              <div className="md:col-span-4">
                <p className="font-display text-sm text-muted-foreground">{s.n}</p>
                <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {s.title}
                </h2>
              </div>
              <div className="space-y-10 md:col-span-8">
                <p className="text-lg">{s.description}</p>
                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Ajută la
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm">
                      {s.helps.map((h) => (
                        <li key={h} className="border-b border-hairline pb-2">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Livrabile exemplu
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm">
                      {s.deliverables.map((d) => (
                        <li key={d} className="border-b border-hairline pb-2">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground">Potrivit pentru:</span> {s.fit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Proces de colaborare
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Cinci pași, fără surprize pe parcurs.
          </h2>
          <div className="mt-12 grid gap-px bg-hairline md:grid-cols-5">
            {PROCESS.map(([n, title, text]) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, ease }}
                className="bg-background p-6"
              >
                <p className="font-display text-sm text-muted-foreground">{n}</p>
                <h3 className="mt-6 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Întrebări frecvente
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Răspunsuri scurte la întrebări reale.
              </h2>
            </div>
            <div className="md:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {FAQ.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-hairline">
                    <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center md:justify-between md:py-32">
          <h2 className="max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Ai nevoie de un sistem care chiar economisește timp?
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
