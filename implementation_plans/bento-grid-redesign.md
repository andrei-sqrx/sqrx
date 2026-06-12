# Implementation Plan — Redesign 'Ce facem' Section with Bento Grid

We will update the layout of the **"Ce facem"** section on the homepage to use a modern, premium Bento Grid layout (inspired by the Tailwind CSS component).

---

## Suggestions & Design Decisions

### 1. Bento Card Mapping (4 Slots)
Since SQRX has **3 core services**, we suggest utilizing the 4-slot grid layout by introducing a 4th card focused on **Integrations & Tech Stack**:
*   **Card 1 (Left Tall Card): Agenți AI**
    *   *Visual*: A custom, interactive CSS-based mobile phone mockup simulating a chat / voice assistant interaction.
*   **Card 2 (Top-Middle Card): Automatizări AI**
    *   *Visual*: A clean workflow automation visual (connecting triggers, actions, and databases).
*   **Card 3 (Bottom-Middle Card): Integrări & Tech** (Suggested 4th Card)
    *   *Copy*: "Sistemele noastre se integrează nativ cu platformele pe care le folosești deja (CRMs, Slack, Stripe, email, baze de date)."
    *   *Visual*: A minimal icon cloud or integration connection graphic.
*   **Card 4 (Right Tall Card): Dezvoltare Web**
    *   *Visual*: A code editor mockup containing a clean Next.js/SEO configuration script (perfectly matching "backend, SEO, AEO, and GEO infrastructure").

### 2. Dark/Light Theme Compatibility
Instead of hardcoding dark gray/black tailwind classes (e.g. `bg-gray-900` / `bg-gray-800`), we propose styling the cards using Next.js/Tailwind custom theme variables (e.g. `bg-card`, `border-border`, `text-foreground`). This will ensure the Bento Grid looks incredibly premium and natively supports both Light and Dark modes.

---

## Open Questions

> [!IMPORTANT]
> **Please clarify:**
> 1. Do you agree with adding the **"Integrations & Tech Stack"** card as the 4th block to complete the Bento layout? If not, we can adjust the grid structure to only feature 3 cards.
> 2. Should we style the section as a **persistently dark block** (like the Tailwind example) or make it **theme-adaptive** (matching the site's light/dark modes)?

---

## Proposed Changes

### Core Landing Page Component

#### [MODIFY] [HomeClient.tsx](file:///c:/Users/39349/OneDrive/Desktop/sqrx-official-main/src/app/HomeClient.tsx)
- Replace the current "Ce facem" (`{/* WHAT */}`) section with the new Bento Grid container.
- Implement CSS-based mockup components directly inside the code to avoid external image dependencies and ensure fast load times:
  - **Phone chat mockup** for *Agenți AI*.
  - **Workflow connectors** for *Automatizări AI*.
  - **Integrations graphic** for the 4th card.
  - **Code editor panel** for *Dezvoltare Web*.

---

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no build, layout, or TypeScript errors occur.

### Manual Verification
- Test responsiveness across mobile, tablet, and desktop layouts.
- Verify visual transitions, hover states, and theme toggle styling.
