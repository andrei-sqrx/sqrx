import { AboutClient } from "./AboutClient";

export const metadata = {
  title: "Despre SQRX — Agenție AI din România focusată pe sisteme utile",
  description:
    "SQRX este o agenție AI din România care construiește automatizări, agenți AI și sisteme interne cu impact operațional real pentru companii.",
  openGraph: {
    title: "Despre SQRX — Agenție AI România",
    description:
      "Cine suntem, cum lucrăm și ce principii ghidează fiecare proiect. Agenție AI cu focus pe rezultate practice.",
  },
};

export default function Page() {
  return <AboutClient />;
}
