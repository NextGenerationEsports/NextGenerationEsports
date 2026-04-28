import { motion } from "framer-motion";
import { Link } from "wouter";

interface PartnerCardProps {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  index: number;
}

export function PartnerCard({ id, name, logo, category, description, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-xl p-8 bg-card/50 border border-card-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
      data-testid={`partner-card-${id}`}
    >
      <div className="h-24 w-auto mb-6 flex items-center justify-start">
        <img src={logo} alt={name} className="max-h-full max-w-[200px] object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-wider">{category}</span>
      <h3 className="font-display font-bold text-2xl mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      <Link href={`/partners`} className="inline-flex items-center text-sm font-semibold text-white group-hover:text-primary transition-colors">
        View Partner →
      </Link>
    </motion.div>
  );
}
