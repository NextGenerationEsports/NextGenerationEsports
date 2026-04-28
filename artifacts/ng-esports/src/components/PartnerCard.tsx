import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PartnerCardProps {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  link?: string;
  index: number;
}

export function PartnerCard({ id, name, logo, category, description, link, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative rounded-lg bg-[#0a0a12] border border-white/[0.06] hover:border-white/[0.12] transition-colors overflow-hidden flex flex-col"
      data-testid={`partner-card-${id}`}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />

      <div className="p-8 flex flex-col flex-grow">
        {/* Logo */}
        <div className="h-20 flex items-center mb-6">
          <img
            src={logo}
            alt={name}
            className="max-h-full max-w-[180px] object-contain opacity-70 group-hover:opacity-100 transition-opacity"
          />
        </div>

        <span className="inline-block px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-[0.15em] bg-primary/10 text-primary border border-primary/20 mb-4 self-start">
          {category}
        </span>
        <h3 className="font-display font-bold text-xl text-white mb-2">{name}</h3>
        <p className="text-white/40 text-sm leading-relaxed flex-grow mb-6">{description}</p>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary hover:text-white transition-colors group/link"
            data-testid={`partner-link-${id}`}
          >
            View Partner <ExternalLink size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/20">
            View Partner
          </span>
        )}
      </div>
    </motion.div>
  );
}
