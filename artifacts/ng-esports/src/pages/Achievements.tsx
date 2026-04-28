import { achievements } from "@/data";
import { AchievementCard } from "@/components/AchievementCard";
import { motion } from "framer-motion";

// ── Achievements / Trophy Room Page ──────────────────────────────────────────
// EDIT: Add or remove achievement entries in src/data/index.ts (the `achievements` array).
//       The placeholder "More to Come" cards are automatically shown to fill empty slots.
//       EDIT: Change the number of empty placeholder cards by editing the array below.
// ──────────────────────────────────────────────────────────────────────────────

// EDIT: Change this number to show more or fewer "More to Come" placeholder cards
const PLACEHOLDER_COUNT = 3;

export default function Achievements() {
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
            Trophy <span className="text-primary">Room</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A testament to our dedication, skill, and relentless pursuit of excellence.
          </p>
        </motion.div>

        {/* Achievement grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((item, index) => (
            <AchievementCard key={item.id} {...item} index={index} />
          ))}

          {/* Placeholder "More to Come" cards — auto-filled after real entries */}
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <motion.div
              key={`empty-${i}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center p-12 rounded-xl bg-card/10 border border-card-border/20 border-dashed"
            >
              <div className="w-16 h-16 rounded-full bg-card/50 flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-2xl opacity-50">?</span>
              </div>
              <h3 className="font-display font-bold text-xl text-muted-foreground">More to Come</h3>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}
