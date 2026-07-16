import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoIntro } from "@/components/layout/VideoIntro";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "SQRX — Agenție AI România | Automatizări și Agenți AI pentru Companii",
  description:
    "SQRX este o agenție AI din România care construiește automatizări, agenți AI și sisteme interne pentru companii care vor rezultate practice, nu demo-uri.",
  authors: [{ name: "SQRX" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "SQRX — Agenție AI România",
    description:
      "Implementăm automatizări AI și agenți AI pentru companii din România. Sisteme utile, nu experimente.",
    type: "website",
    locale: "ro_RO",
    url: "https://sqrx.ro",
    siteName: "SQRX",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQRX — Agenție AI România",
    description:
      "Automatizări AI și agenți AI pentru companii din România. Implementare practică, nu demo-uri.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
        <link rel="canonical" href="https://sqrx.ro" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SQRX",
              description:
                "Agenție AI din România care construiește automatizări, agenți AI și sisteme interne pentru companii.",
              url: "https://sqrx.ro",
              email: "andrei@sqrx.net",
              areaServed: {
                "@type": "Country",
                name: "Romania",
              },
              serviceType: [
                "Automatizări AI",
                "Agenți AI",
                "Sisteme de cunoaștere",
                "Integrări",
                "Dezvoltare Web",
              ],
              foundingLocation: {
                "@type": "Place",
                addressCountry: "RO",
              },
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
      <body className="flex min-h-screen flex-col">
        <VideoIntro />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
