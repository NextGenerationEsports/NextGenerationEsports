import { motion } from "framer-motion";
import { Link } from "wouter";

interface TeamCardProps {
  id: string;
  name: string;
  tagline: string;
  route: string;
  index: number;
}

export function TeamCard({ id, name, tagline, route, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-card/50 border border-card-border/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(91,33,182,0.3)]"
      data-testid={`team-card-${id}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="p-6 h-full flex flex-col items-start">
        <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
          <span className="font-display font-bold text-xl">{id.substring(0, 2).toUpperCase()}</span>
        </div>
        <h3 className="font-display font-bold text-2xl mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow">{tagline}</p>
        <Link href={route} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-foreground transition-colors group-hover:translate-x-1 duration-300">
          View Roster →
        </Link>
      </div>
    </motion.div>
  );
}
