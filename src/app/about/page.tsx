import { AboutClient } from "./AboutClient";

export const metadata = {
  title: "Despre SQRX — Agenție AI focusată pe sisteme utile",
  description:
    "SQRX este o agenție AI care construiește automatizări, agenți și sisteme interne cu impact operațional real.",
  openGraph: {
    title: "Despre SQRX",
    description: "Despre echipă, principii și mod de lucru.",
  },
};

export default function Page() {
  return <AboutClient />;
}
