import { HomeClient } from "./HomeClient";

export const metadata = {
  title: "SQRX — Sisteme AI care reduc munca manuală",
  description:
    "Agenție AI care construiește automatizări, agenți AI și sisteme interne pentru companii care vor rezultate practice.",
  openGraph: {
    title: "SQRX — Sisteme AI care reduc munca manuală",
    description: "Implementăm AI pentru operațiuni reale, nu pentru demo-uri.",
  },
};

export default function Page() {
  return <HomeClient />;
}
