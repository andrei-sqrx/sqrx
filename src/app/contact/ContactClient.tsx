"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { fadeUp } from "@/lib/motion";

type Errors = Partial<Record<"name" | "email" | "company" | "message", string>>;

export function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const update =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Numele este prea scurt.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Adresă de email invalidă.";
    if (form.company.trim().length < 2) next.company = "Adaugă numele companiei.";
    if (form.message.trim().length < 10) next.message = "Spune-ne mai multe (minim 10 caractere).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Mulțumim. Revenim în maximum 2 zile lucrătoare.");
      setForm({ name: "", email: "", company: "", message: "", timeline: "" });
    }, 600);
  };

  return (
    <div>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight md:text-7xl">
            Contact.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Spune-ne ce vrei să îmbunătățești, să automatizezi sau să construiești.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Ce urmează după ce trimiți cererea?
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                ["01", "Trimiți cererea", "Completezi formularul cu detaliile relevante."],
                ["02", "Analizăm solicitarea", "Înțelegem contextul și verificăm potrivirea."],
                ["03", "Revenim cu pașii următori", "În maximum 2 zile lucrătoare."],
              ].map(([n, t, d]) => (
                <li key={n} className="border-b border-hairline pb-6">
                  <p className="font-display text-sm text-muted-foreground">{n}</p>
                  <p className="mt-2 text-lg font-medium">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 border border-hairline p-6">
              <p className="text-sm text-muted-foreground">
                Potrivit pentru echipe care caută implementare practică, automatizare și sisteme
                interne mai bune.
              </p>
            </div>

            <div className="mt-8 space-y-2 text-sm">
              <p className="text-muted-foreground">Sau scrie direct:</p>
              <a href="mailto:andrei@sqrx.net" className="block text-base hover:underline">
                andrei@sqrx.net
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="block text-base text-muted-foreground hover:text-foreground cursor-not-allowed opacity-50"
              >
                Programează direct în calendar →
              </a>
            </div>
          </div>

          <motion.form
            {...fadeUp}
            onSubmit={onSubmit}
            className="space-y-6 md:col-span-7"
            noValidate
          >
            <Field label="Nume" error={errors.name}>
              <input
                value={form.name}
                onChange={update("name")}
                className="h-12 w-full border border-hairline bg-background px-4 outline-none focus:border-foreground"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                className="h-12 w-full border border-hairline bg-background px-4 outline-none focus:border-foreground"
              />
            </Field>
            <Field label="Companie" error={errors.company}>
              <input
                value={form.company}
                onChange={update("company")}
                className="h-12 w-full border border-hairline bg-background px-4 outline-none focus:border-foreground"
              />
            </Field>
            <Field label="Ce vrei să construiești sau să îmbunătățești?" error={errors.message}>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={6}
                className="w-full border border-hairline bg-background p-4 outline-none focus:border-foreground"
              />
            </Field>
            <Field label="Termen estimativ (opțional)">
              <input
                value={form.timeline}
                onChange={update("timeline")}
                placeholder="Ex: în următoarele 4–6 săptămâni"
                className="h-12 w-full border border-hairline bg-background px-4 outline-none focus:border-foreground"
              />
            </Field>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-12 w-full items-center justify-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Se trimite..." : "Trimite cererea"}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="mt-3">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </label>
  );
}
