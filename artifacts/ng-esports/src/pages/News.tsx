import { motion } from "framer-motion";
import { news } from "@/data";
import { NewsCard } from "@/components/NewsCard";

// ── News / NG Intel Page ───────────────────────────────────────────────────────
// EDIT: Add or update articles in src/data/index.ts (the `news` array).
//       Add new items at the TOP of the array so they appear first on this page.
// ──────────────────────────────────────────────────────────────────────────────
export default function News() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* EDIT: Update the headline and subheading */}
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight mb-4">
            NG <span className="text-primary">Intel</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The latest announcements, match results, and organizational updates.
          </p>
        </motion.div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard key={item.id} {...item} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
