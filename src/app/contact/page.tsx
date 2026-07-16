import { ContactClient } from "./ContactClient";

export const metadata = {
  title: "Contact — SQRX Agenție AI România",
  description:
    "Contactează SQRX pentru automatizări AI, agenți AI sau sisteme interne. Răspundem rapid și stabilim următorii pași.",
  openGraph: {
    title: "Contact — SQRX Agenție AI România",
    description:
      "Spune-ne ce vrei să automatizezi sau să construiești. Trimite o cerere și revenim rapid.",
  },
};

export default function Page() {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact SQRX",
              contactPoint: {
                "@type": "ContactPoint",
                email: "andrei@sqrx.net",
                contactType: "sales",
                areaServed: "RO",
                availableLanguage: ["Romanian"],
              },
            }),
          }}
        />
      </head>
      <ContactClient />
    </>
  );
}
