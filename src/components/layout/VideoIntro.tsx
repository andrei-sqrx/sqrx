"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function VideoIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <video
            src="/animated-logo.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => setShowIntro(false)}
            className="h-full w-full object-contain md:object-cover"
          />
          <button 
            onClick={() => setShowIntro(false)}
            className="absolute bottom-8 right-8 z-[101] text-sm text-muted-foreground/50 hover:text-foreground transition-colors"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
