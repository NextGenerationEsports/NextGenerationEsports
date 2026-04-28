import { motion } from "framer-motion";

interface StoreCardProps {
  id: string;
  name: string;
  category: string;
  comingSoon: boolean;
  index: number;
}

export function StoreCard({ id, name, category, comingSoon, index }: StoreCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-xl overflow-hidden bg-card/50 border border-card-border/50 backdrop-blur-sm cursor-not-allowed"
      data-testid={`store-card-${id}`}
    >
      <div className="aspect-square w-full bg-gradient-to-br from-muted/50 to-card flex items-center justify-center relative">
        <div className="w-24 h-24 rounded-full bg-primary/10 blur-xl absolute" />
        {comingSoon && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30">
              Coming Soon
            </span>
          </div>
        )}
      </div>
      <div className="p-5 text-center border-t border-card-border/50">
        <span className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-1 block">{category}</span>
        <h3 className="font-display font-bold text-lg">{name}</h3>
      </div>
    </motion.div>
  );
}
