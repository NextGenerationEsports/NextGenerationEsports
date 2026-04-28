import { achievements } from "@/data";
import { AchievementCard } from "@/components/AchievementCard";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight mb-4">
            Trophy <span className="text-primary">Room</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A testament to our dedication, skill, and relentless pursuit of excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <AchievementCard key={item.id} {...item} index={index} />
          ))}
          {/* Add more decorative cards or future slots */}
          {[1, 2, 3].map((i) => (
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
