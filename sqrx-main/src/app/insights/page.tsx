import { InsightsClient } from "./InsightsClient";

export const metadata = {
  title: "Insights — Idei practice despre AI și operațiuni | SQRX",
  description:
    "Articole scurte despre automatizare, agenți AI, sisteme interne și implementare practică.",
  openGraph: {
    title: "Insights — SQRX",
    description: "Idei practice despre AI, automatizare și operațiuni.",
  },
};

export default function Page() {
  return <InsightsClient />;
}
