import { Link } from "wouter";
import { motion } from "framer-motion";

// ── 404 Not Found Page ────────────────────────────────────────────────────────
// Shown when a user visits a URL that has no matching route.
// EDIT: Update the message or CTA button text/link as needed.
// ──────────────────────────────────────────────────────────────────────────────
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* 404 watermark */}
        <div className="font-display font-black text-[8rem] leading-none text-primary/10 select-none mb-2">
          404
        </div>

        {/* NG logo */}
        <img
          src="/ng-icon.png"
          alt="NG Esports"
          className="w-14 h-auto mx-auto mb-6 drop-shadow-[0_0_12px_rgba(124,58,237,0.5)]"
        />

        {/* EDIT: Update the heading and body text here */}
        <h1 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-white/40 text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
          Head back to the homepage to keep exploring NG.
        </p>

        {/* EDIT: Change href to redirect somewhere else if needed */}
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary text-white font-bold uppercase tracking-wider rounded-lg hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
