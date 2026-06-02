import { ContactClient } from "./ContactClient";

export const metadata = {
  title: "Contact — SQRX",
  description:
    "Spune-ne ce vrei să îmbunătățești, să automatizezi sau să construiești. Răspundem rapid.",
  openGraph: {
    title: "Contact — SQRX",
    description: "Trimite-ne o cerere și revenim cu următorii pași.",
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
                email: "contact@sqrx.ro",
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
