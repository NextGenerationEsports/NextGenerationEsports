import { motion } from "framer-motion";
import { storeItems } from "@/data";
import { StoreCard } from "@/components/StoreCard";

// ── Store Page ─────────────────────────────────────────────────────────────────
// EDIT: Add or update store items in src/data/index.ts (the `storeItems` array).
// EDIT: When the store goes live, replace the "Get Early Access" section below
//       with a real product grid or a link to your merch store (e.g. Shopify, etc.)
// ──────────────────────────────────────────────────────────────────────────────
export default function Store() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgcG9pbnRlci1ldmVudHM9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgNjBoNjBWMEgweiIgZmlsbD0iIzBBMEEwRiIvPjxwb2x5Z29uIGZpbGw9IiMxNTE1MTUiIHBvaW50cz0iNiA2IDU0IDYgNTQgNTQgNiA1NCIvPjxwb2x5Z29uIGZpbGw9IiMwQTBBMEYiIHBvaW50cz0iOCA4IDUyIDggNTIgNTIgOCA1MiIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* EDIT: Update the store headline and tagline */}
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Official Merchandise</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight mb-4">
            The <span className="text-white">Arsenal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pro-grade apparel and accessories. Dropping soon.
          </p>
        </motion.div>

        {/* Product cards — data comes from storeItems in src/data/index.ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeItems.map((item, index) => (
            <StoreCard key={item.id} {...item} index={index} />
          ))}
        </div>

        {/* EDIT: Remove or replace this section once the store goes live */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="bg-card/50 border border-primary/30 p-8 rounded-xl text-center max-w-md backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-2">Get Early Access</h3>
            <p className="text-sm text-muted-foreground mb-6">Sign up to be notified when the store goes live.</p>
            <div className="flex gap-2">
              {/* EDIT: Wire this input + button to a real mailing list (e.g. Mailchimp) when the store opens */}
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow bg-background border border-card-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold uppercase hover:bg-primary/80 transition-colors">
                Join
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
