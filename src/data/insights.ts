export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Automatizare" | "Agenți AI" | "Operațiuni" | "Strategie" | "Integrări";
  date: string;
  readMinutes: number;
  featured?: boolean;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "ce-merita-automatizat-prima-data",
    title: "Ce merită automatizat prima dată într-o companie",
    excerpt:
      "Înainte să implementezi orice tool, identifică procesele cu impact mare și efort mic. Un cadru simplu pentru prioritizare.",
    category: "Automatizare",
    date: "2025-03-12",
    readMinutes: 6,
    featured: true,
  },
  {
    slug: "agenti-vs-automatizare",
    title: "Agenți AI vs automatizare: care este alegerea corectă?",
    excerpt:
      "Nu orice problemă cere un agent. Diferența dintre fluxuri deterministe și sisteme cu raționament, pe scurt.",
    category: "Agenți AI",
    date: "2025-02-28",
    readMinutes: 5,
  },
  {
    slug: "de-ce-se-blocheaza-proiecte-ai",
    title: "De ce multe proiecte AI interne se blochează înainte de lansare",
    excerpt:
      "Proof-of-concept-uri abandonate, integrări care nu se închid, lipsă de owner. Tipare comune și remedii.",
    category: "Operațiuni",
    date: "2025-02-14",
    readMinutes: 7,
  },
  {
    slug: "costul-ascuns-tooluri",
    title: "Costul ascuns al tool-urilor care nu comunică între ele",
    excerpt:
      "Fragmentarea costă mai mult decât licențele. Cum estimezi pierderea reală cauzată de procese rupte.",
    category: "Integrări",
    date: "2025-01-30",
    readMinutes: 6,
  },
  {
    slug: "pregateste-echipa-ai",
    title: "Cum îți pregătești echipa pentru implementarea AI",
    excerpt:
      "Pregătirea operațională contează mai mult decât alegerea modelului. Pași practici pentru o tranziție clară.",
    category: "Strategie",
    date: "2025-01-15",
    readMinutes: 5,
  },
  {
    slug: "sisteme-ai-utile",
    title: "Cum construiești sisteme AI utile fără să complici operațiunile",
    excerpt:
      "Constrângeri sănătoase, scope strict, livrabile mici. Filozofia din spatele sistemelor care chiar sunt folosite.",
    category: "Strategie",
    date: "2024-12-20",
    readMinutes: 6,
  },
  {
    slug: "pregatesti-operatiuni-ai",
    title: "Cum îți pregătești operațiunile pentru implementarea AI",
    excerpt:
      "Documentație, owner, criterii de succes. Lista minimă înainte de a porni un proiect cu impact.",
    category: "Operațiuni",
    date: "2024-12-05",
    readMinutes: 4,
  },
];

export const CATEGORIES = [
  "Toate",
  "Automatizare",
  "Agenți AI",
  "Operațiuni",
  "Strategie",
  "Integrări",
] as const;
