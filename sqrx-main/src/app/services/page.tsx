import { ServicesClient } from "./ServicesClient";

export const metadata = {
  title: "Servicii AI pentru companii — SQRX",
  description:
    "Automatizări AI, agenți AI, sisteme de cunoaștere și integrări. Implementare practică pentru operațiuni reale.",
  openGraph: {
    title: "Servicii — SQRX",
    description:
      "Servicii AI pentru companii: automatizări, agenți, sisteme de cunoaștere, integrări.",
  },
};

export default function Page() {
  return <ServicesClient />;
}
