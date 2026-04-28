import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock } from "lucide-react";

interface TeamCardProps {
  id: string;
  name: string;
  tagline: string;
  route: string;
  color: string;
  logo?: string;
  comingSoon?: boolean;
  index: number;
}

export function TeamCard({ id, name, tagline, route, color, logo, comingSoon, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg bg-[#0d0d14] border border-white/[0.06]"
      style={{ borderColor: `${color}20` }}
      data-testid={`team-card-${id}`}
    >
      {/* Top color strip */}
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />

      <div className="p-6 flex flex-col h-full">
        {/* Game logo or fallback */}
        <div className="h-14 flex items-center mb-5">
          {logo ? (
            <img
              src={logo}
              alt={name}
              className="h-10 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)", maxWidth: 120 }}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <span className="font-display font-black text-3xl tracking-tight text-white/80">
              {name.split(" ")[0].toUpperCase()}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-xl mb-1 text-white leading-tight">{name}</h3>
        <p className="text-white/40 text-sm mb-6 flex-grow leading-relaxed">{tagline}</p>

        {comingSoon ? (
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/30 uppercase tracking-widest">
            <Clock size={12} />
            Coming Soon
          </span>
        ) : (
          <Link
            href={route}
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest group-hover:gap-3 gap-2 transition-all duration-300"
            style={{ color }}
            data-testid={`team-card-link-${id}`}
          >
            View Roster <span>→</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
