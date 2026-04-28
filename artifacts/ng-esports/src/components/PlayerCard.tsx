import { motion } from "framer-motion";
import { Twitter, Twitch, Instagram } from "lucide-react";

interface PlayerCardProps {
  id: string;
  name: string;
  role: string;
  country: string;
  index: number;
}

export function PlayerCard({ id, name, role, country, index }: PlayerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-xl overflow-hidden bg-card/50 border border-card-border/50 backdrop-blur-sm"
      data-testid={`player-card-${id}`}
    >
      <div className="aspect-[3/4] w-full bg-gradient-to-t from-background via-muted/50 to-primary/10 relative">
        {/* Player placeholder graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="font-display font-bold text-9xl text-primary">{index + 1}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300 group-hover:-translate-y-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold tracking-wider text-primary uppercase">{role}</span>
          <span className="text-lg" title={country}>🇪🇬</span>
        </div>
        <h3 className="font-display font-bold text-2xl mb-3">{name}</h3>
        
        <div className="flex gap-3 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Twitter size={18} /></a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Twitch size={18} /></a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Instagram size={18} /></a>
        </div>
      </div>
    </motion.div>
  );
}
