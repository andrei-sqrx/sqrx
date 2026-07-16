import { HomeClient } from "./HomeClient";

export const metadata = {
  title: "SQRX — Agenție AI România | Automatizări și Agenți AI pentru Companii",
  description:
    "Agenție AI din România specializată în automatizări AI, agenți AI și sisteme interne. Implementare practică pentru companii care vor rezultate reale, nu demo-uri.",
  openGraph: {
    title: "SQRX — Agenție AI România",
    description:
      "Automatizări AI, agenți AI și sisteme interne pentru companii din România. Implementare clară, fără promisiuni goale.",
  },
};

export default function Page() {
  return <HomeClient />;
}
