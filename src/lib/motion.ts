import type { Transition } from "framer-motion";

export const ease: Transition["ease"] = "easeOut";

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, ease } satisfies Transition,
};
