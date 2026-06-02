import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoIntro } from "@/components/layout/VideoIntro";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "SQRX — Agenție AI pentru sisteme utile",
  description:
    "SQRX construiește automatizări, agenți AI și sisteme interne pentru companii care vor rezultate practice.",
  authors: [{ name: "SQRX" }],
  openGraph: {
    title: "SQRX — Agenție AI",
    description: "Implementăm AI pentru operațiuni reale, nu pentru demo-uri.",
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SQRX",
              description:
                "Agenție AI care construiește automatizări, agenți AI și sisteme interne.",
              url: "https://sqrx.ro",
              email: "contact@sqrx.ro",
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
      </body>
    </html>
  );
}
