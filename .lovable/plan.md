## SQRX — site agenție AI, complet în română

Site multi-pagină construit pe TanStack Start (stack-ul curent), estetică monocromă editorială, tipografie Space Grotesk + Inter, light implicit cu toggle dark, totul în română nativă de business.

### Sistem de design

- Palette monocrom în `src/styles.css` (oklch): negru pur, alb pur, 4 niveluri de gri pentru ierarhie. Fără gradient, fără glow, fără glass.
- Tipografie: `Space Grotesk` (display, titluri mari, tracking strâns) + `Inter` (body). Încarcate via `<link>` în `__root.tsx`.
- Tokeni semantici noi: `--hairline` (linii subțiri 1px), `--surface-muted`, `--ink` (foreground accent). Utilitare Tailwind pentru border subțil.
- Componente shadcn: `button` (variante `default` negru solid, `outline` border subțire, `ghost`), `input`, `textarea`, `label`, `accordion` (FAQ), `sheet` (meniu mobil), `sonner` (toast contact).
- Toggle temă: hook simplu cu `localStorage` + `ScriptOnce` în root pentru a evita flash. Buton în header (icon Sun/Moon).
- Motion: `framer-motion` doar pentru fade/slide subtil la scroll (IntersectionObserver via `whileInView`), durate 400–600ms, ease-out. Fără paralax, fără elemente plutitoare.

### Layout global

- `src/components/layout/Header.tsx`: sticky, înălțime 64px, hairline jos. Stânga: logo „SQRX" (Space Grotesk, tracking-widest). Centru/dreapta: nav (`Servicii`, `Despre`, `Insights`, `Contact`), CTA `Programează o discuție`, toggle temă. Mobile: `Sheet` cu nav vertical.
- `src/components/layout/Footer.tsx`: 3 coloane pe desktop, stivuit pe mobil. Coloane: brand + tagline scurt; Navigare; Contact (email placeholder `contact@sqrx.ro`, link `Politica de confidențialitate`). Hairline sus, copyright jos.
- `Header` și `Footer` randate în `__root.tsx` în jurul `<Outlet />`.

### Rute (fișiere noi în `src/routes/`)

Fiecare rută are `head()` propriu cu titlu + descriere + og:title + og:description în română, JSON-LD relevant.

1. `index.tsx` — Home
   - Hero: H1 mare („SQRX construiește sisteme AI care reduc munca manuală."), subtitlu, două CTA, linie de încredere mică dedesubt.
   - Ce face SQRX: 3 carduri (Automatizări AI, Agenți AI, Sisteme de cunoaștere) cu numerotare 01/02/03.
   - Pentru cine: listă cu hairlines, 4 puncte.
   - Cum lucrăm: 3 pași orizontali pe desktop, stivuiți mobil.
   - De ce SQRX: 6 principii într-un grid 3×2.
   - Insights selectate: 3 carduri articole (link spre `/insights`).
   - CTA final: bandă neagră contrast, titlu + buton.
   - JSON-LD: `Organization`.

2. `services.tsx` — Servicii
   - Intro H1 + paragraf.
   - 4 blocuri mari de servicii (Automatizări AI, Agenți AI, Sisteme de cunoaștere, Integrări), fiecare cu: descriere, „Ajută la", „Livrabile exemplu", „Potrivit pentru". Layout split 2 coloane pe desktop (etichetă + conținut), hairlines între blocuri.
   - Proces de colaborare: 5 pași (Descoperire, Definire, Construcție, Testare, Lansare).
   - FAQ: `Accordion` cu 5 întrebări.
   - CTA final.
   - JSON-LD: `Service`.

3. `about.tsx` — Despre
   - Intro H1 + paragraf.
   - Misiune.
   - Punct de vedere (4 declarații editoriale, tipografie mare).
   - Principii de lucru: 5 blocuri (Precizie, Claritate, Utilitate, Viteză, Fiabilitate).
   - Proces.
   - Secțiune fondator: layout cu spațiu rezervat portret (placeholder neutru, nu imagine generată), text adaptabil.
   - CTA `Contactează SQRX`.

4. `insights.tsx` — Insights
   - Intro H1.
   - Articol featured (card mare, fără imagine fabricată — folosim compoziție tipografică + categorie + dată).
   - Filtre categorii (butoane vizuale, fără logică server — state local pentru filtrare client).
   - Grid 6 articole (titlu, excerpt, categorie, „Citește mai mult"). Datele articolelor într-un fișier `src/data/insights.ts`.
   - Articolele sunt doar carduri pentru moment (fără rute individuale `/insights/$slug` — pot fi adăugate ulterior; linkurile rămân `#` cu `aria-disabled` sau scroll-to-top, marcat clar în cod ca extensibil).
   - CTA newsletter minimalist (input email + buton, doar UI cu toast „Mulțumim").

5. `contact.tsx` — Contact
   - Intro H1 + paragraf.
   - Formular (Nume, Email, Companie, „Ce vrei să construiești sau să îmbunătățești?", „Termen estimativ (opțional)"). Validare client-side cu `react-hook-form` + `zod` (deja în proiect probabil; adăugăm dacă lipsesc). Mesaje de eroare în română. La submit: `toast.success` și reset form.
   - Bloc „Ce urmează" — 3 pași.
   - Notă de potrivire.
   - Contact alternativ: email placeholder + spațiu „Programează direct" (link calendar placeholder `#`).

### SEO & infrastructură

- `head()` per rută cu titluri unice în română (ex. „Servicii AI pentru companii — SQRX").
- JSON-LD `Organization` la root, `Service` pe `/services`, `ContactPoint` pe `/contact`.
- `src/routes/robots[.]txt.tsx` și `src/routes/sitemap[.]xml.tsx` — server routes care returnează text/xml cu cele 5 rute.
- Alt text românesc pe orice imagine (rămân puține; folosim mai mult tipografie).
- Lang: `<html lang="ro">` în `__root.tsx`.

### Fișiere create / modificate

- Modificate: `src/styles.css`, `src/routes/__root.tsx`, `src/routes/index.tsx`.
- Noi: `src/routes/services.tsx`, `src/routes/about.tsx`, `src/routes/insights.tsx`, `src/routes/contact.tsx`, `src/routes/robots[.]txt.tsx`, `src/routes/sitemap[.]xml.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/ThemeToggle.tsx`, `src/components/sections/*` (Hero, ServiceCard, ProcessSteps, PrincipleGrid, CtaBanner, ArticleCard), `src/data/insights.ts`, `src/hooks/use-theme.ts`.

### Dependențe noi

`framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers` (verific întâi ce există în `package.json` la implementare).

### În afara scopului

- Rute individuale pentru articole (`/insights/$slug`) — articolele sunt carduri statice acum.
- Backend pentru formularul de contact — doar UI cu validare și toast.
- Imagini/portrete generate — folosim spații rezervate neutre.
- Conținut fabricat (testimoniale, logo-uri clienți, metrici).
