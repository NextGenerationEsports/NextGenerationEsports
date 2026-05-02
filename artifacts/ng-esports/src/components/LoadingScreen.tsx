import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/utils";

// ── LoadingScreen ─────────────────────────────────────────────────────────────
// Shown on first page load for a branded entry experience.
// EDIT: Adjust the `setTimeout` delay (ms) below to lengthen or shorten it.
//       Change the img src to swap the loading logo.
// ──────────────────────────────────────────────────────────────────────────────
export function LoadingScreen() {
  if (import.meta.env.DEV) {
    return null;
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // EDIT: Change 1800 to adjust how long the loading screen is shown (milliseconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          data-testid="loading-screen"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Glow halo behind logo */}
            <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full animate-pulse scale-150" />

            {/* EDIT: Replace ng-icon.png in /public to change the loading logo */}
            <img
              src={assetPath("ng-icon.png")}
              alt="Next Generation Esports"
              className="w-28 h-auto relative z-10 drop-shadow-[0_0_30px_rgba(124,58,237,0.8)]"
            />

            {/* Animated progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent max-w-[200px] w-full relative z-10"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
