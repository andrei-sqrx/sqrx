import { ServicesClient } from "./ServicesClient";

export const metadata = {
  title: "Servicii AI pentru Companii din România — Automatizări, Agenți AI | SQRX",
  description:
    "Automatizări AI, agenți AI, sisteme de cunoaștere și integrări pentru companii din România. Implementare practică, fără experimente inutile.",
  openGraph: {
    title: "Servicii AI pentru Companii — SQRX România",
    description:
      "Automatizări AI, agenți AI, sisteme interne și integrări. Agenție AI cu focus pe operațiuni reale.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicii SQRX",
  description: "Servicii AI oferite de SQRX pentru companii din România",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Automatizări AI",
      description:
        "Construim fluxuri și sisteme care reduc munca repetitivă și fac procesele interne mai eficiente.",
      provider: { "@type": "LocalBusiness", name: "SQRX", url: "https://sqrx.ro" },
      areaServed: { "@type": "Country", name: "Romania" },
      serviceType: "Automatizări AI",
    },
    {
      "@type": "Service",
      position: 2,
      name: "Agenți AI",
      description:
        "Construim agenți AI orientați pe funcții clare, utili în contexte reale de business.",
      provider: { "@type": "LocalBusiness", name: "SQRX", url: "https://sqrx.ro" },
      areaServed: { "@type": "Country", name: "Romania" },
      serviceType: "Agenți AI",
    },
    {
      "@type": "Service",
      position: 3,
      name: "Sisteme de cunoaștere",
      description:
        "Structurăm informația internă astfel încât echipa să găsească mai repede răspunsurile corecte.",
      provider: { "@type": "LocalBusiness", name: "SQRX", url: "https://sqrx.ro" },
      areaServed: { "@type": "Country", name: "Romania" },
      serviceType: "Knowledge Management",
    },
    {
      "@type": "Service",
      position: 4,
      name: "Integrări",
      description: "Conectăm soluțiile AI la aplicațiile deja folosite în companie.",
      provider: { "@type": "LocalBusiness", name: "SQRX", url: "https://sqrx.ro" },
      areaServed: { "@type": "Country", name: "Romania" },
      serviceType: "Integrări software",
    },
  ],
};

export default function Page() {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <ServicesClient />
    </>
  );
}

