import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { storeItems } from "@/data";
import { StoreCard } from "@/components/StoreCard";

export default function Store() {
  return (
    <div className="min-h-screen overflow-hidden bg-background pt-28 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.08),transparent_22%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid items-end gap-10 rounded-[2rem] border border-card-border/60 bg-card/35 p-6 backdrop-blur-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-10"
        >
          <div>
            <span className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
              Official Merchandise
            </span>
            <h1 className="font-display text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
              NG Store
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Apparel and desk gear built to match the same premium esports identity as the rest of the site.
              Click any product to open a full product page with gallery, details, and animated inspection.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/store/${storeItems[0]?.slug ?? ""}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-white transition-all hover:bg-primary/85"
              >
                Explore The Drop <ArrowRight size={16} />
              </Link>
              <Link
                href="/links"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                Contact NG
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-card-border/60 bg-background/50 p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Sparkles size={18} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Style</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Modern drop presentation with product-first visuals and motion.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-card-border/60 bg-background/50 p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <ShieldCheck size={18} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Material Focus</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Hoodie fabric and mousepad surface details are surfaced clearly inside each product page.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-card-border/60 bg-background/50 p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Zap size={18} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Hover Zoom</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Product cards and detail pages respond to the mouse with a smoother Amazon-style inspect effect.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {storeItems.map((item, index) => (
            <StoreCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
