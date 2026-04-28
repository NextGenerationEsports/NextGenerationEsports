import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AchievementCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function AchievementCard({ id, icon: Icon, title, description, index }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-card/30 border border-card-border/30 hover:bg-card/50 transition-colors"
      data-testid={`achievement-card-${id}`}
    >
      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
        <Icon size={32} />
      </div>
      <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
}
