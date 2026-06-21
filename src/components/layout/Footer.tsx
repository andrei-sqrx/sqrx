import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="font-display text-lg font-bold tracking-[0.2em]">
              SQRX
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Construim sisteme AI utile pentru companii care vor rezultate, nu demo-uri.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Navigare
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-foreground">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground">
                  Despre
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-foreground">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:andrei@sqrx.net" className="hover:text-foreground">
                  andrei@sqrx.net
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Politica de confidențialitate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SQRX. Toate drepturile rezervate.</p>
          <p>Construit în România.</p>
        </div>
      </div>
    </footer>
  );
}
