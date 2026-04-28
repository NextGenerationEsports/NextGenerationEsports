import { motion } from "framer-motion";
import { Link } from "wouter";
import { assetPath } from "@/lib/utils";

// ── HeroSection ───────────────────────────────────────────────────────────────
// Full-viewport hero shown at the top of the homepage.
// EDIT: Update the headline, subheading, and CTA button labels/links below.
// ──────────────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const scrollToRosters = () => {
    document.getElementById("home-rosters")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16"
      data-testid="hero-section"
    >
      {/* Solid dark background */}
      <div className="absolute inset-0 bg-background z-0" />

      {/* Huge faded "NG" watermark — purely decorative */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 select-none pointer-events-none">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-display font-bold text-[40vw] leading-none text-primary whitespace-nowrap"
        >
          NG
        </motion.span>
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* ── Logo ────────────────────────────────────────────────────────────
            EDIT: Replace ng-icon.png in /public to change the hero logo.
        ─────────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={assetPath("ng-icon.png")}
            alt="NG Logo"
            className="w-24 md:w-32 h-auto mx-auto drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]"
          />
        </motion.div>

        {/* ── Headline ────────────────────────────────────────────────────────
            EDIT: Update the headline text here.
        ─────────────────────────────────────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 max-w-5xl uppercase"
        >
          Next Generation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_10px_rgba(124,58,237,0.3)]">
            Esports
          </span>
        </motion.h1>

        {/* ── Subheading ──────────────────────────────────────────────────────
            EDIT: Update the tagline / subheading text here.
        ─────────────────────────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl font-medium"
        >
          Built for competition. Designed for culture. Ready for the future.
        </motion.p>

        {/* ── CTA Buttons ─────────────────────────────────────────────────────
            EDIT: Change href and label for each call-to-action button.
        ─────────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="/teams/lol"
            className="px-8 py-4 bg-primary text-white rounded-lg font-bold uppercase tracking-wider hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all flex-1 sm:flex-none text-center"
          >
            Explore Teams
          </Link>
          <Link
            href="/partners"
            className="px-8 py-4 bg-transparent border-2 border-primary/50 text-white rounded-lg font-bold uppercase tracking-wider hover:bg-primary/10 hover:border-primary transition-all flex-1 sm:flex-none text-center"
          >
            Become a Partner
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          type="button"
          onClick={scrollToRosters}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 flex w-24 flex-col items-center gap-2 self-center text-center"
        >
          <span className="block w-full text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Scroll
          </span>
          <div className="relative flex h-12 w-full items-start justify-center overflow-hidden">
            <span className="absolute top-0 h-full w-px bg-gradient-to-b from-primary via-primary/70 to-transparent" />
            <motion.span
              animate={{ y: [0, 14, 0], opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_rgba(124,58,237,0.6)]"
            />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
