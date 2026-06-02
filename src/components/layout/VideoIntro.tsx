"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function VideoIntro() {
  const [isMounted, setIsMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showIntro]);

  useEffect(() => {
    if (!isMounted) return;

    // Safety fallback: auto-dismiss after 6 seconds max
    const fallbackTimeout = setTimeout(() => {
      console.warn("Video intro safety fallback triggered.");
      setShowIntro(false);
    }, 6000);

    timeoutRef.current = fallbackTimeout;

    // Try to play programmatically
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay blocked or failed, dismissing intro:", error);
          setShowIntro(false);
        });
      }
    }

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, [isMounted]);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;

    const duration = video.duration;
    if (duration && !isNaN(duration) && duration > 0) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Set precise timeout: duration + 300ms buffer
      const durationMs = duration * 1000 + 300;
      timeoutRef.current = setTimeout(() => {
        setShowIntro(false);
      }, durationMs);
    }
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {isMounted && (
            <>
              <video
                ref={videoRef}
                src="/animated-logo.mp4"
                autoPlay
                muted
                playsInline
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setShowIntro(false)}
                onError={() => {
                  console.error("Video failed to load.");
                  setShowIntro(false);
                }}
                className="h-full w-full object-contain md:object-cover"
              />
              <button 
                onClick={() => setShowIntro(false)}
                className="absolute bottom-8 right-8 z-[101] text-xs uppercase tracking-widest text-muted-foreground/60 hover:text-foreground transition-colors bg-background/80 px-4 py-2 border border-hairline backdrop-blur-sm"
              >
                Sari peste intro
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
