import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, ArrowRight } from "lucide-react";

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
  const isTekken = id === "tekken-8";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg bg-[#0a0a12] border border-white/[0.06] flex flex-col hover:border-white/[0.12] transition-colors duration-300"
      data-testid={`team-card-${id}`}
    >
      {/* Top accent bar */}
      <div className="h-[2px] w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, ${color} 0%, ${color}40 60%, transparent 100%)` }} />

      <div className="p-6 flex flex-col flex-grow">
        {/* Logo area */}
        <div className="h-12 flex items-center mb-6">
          {logo ? (
            <img
              src={logo}
              alt={name}
              className={`${isTekken ? "h-11" : "h-9"} w-auto object-contain object-left`}
              style={{ mixBlendMode: "screen", maxWidth: isTekken ? 180 : 150, opacity: 0.85 }}
              loading="lazy"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                const span = document.createElement("span");
                span.className = "font-display font-black text-2xl tracking-tight text-white/80";
                span.textContent = name.split(" ")[0].toUpperCase();
                el.parentElement?.appendChild(span);
              }}
            />
          ) : (
            <span className="font-display font-black text-2xl tracking-tight text-white/70 uppercase">
              {name.split(" ")[0]}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-lg text-white leading-tight mb-1">{name}</h3>
        <p className="text-white/35 text-sm flex-grow leading-relaxed mb-6">{tagline}</p>

        {comingSoon ? (
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/25">
            <Clock size={11} />
            Coming Soon
          </div>
        ) : (
          <Link
            href={route}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 group-hover:gap-3"
            style={{ color }}
            data-testid={`team-card-link-${id}`}
          >
            View Roster <ArrowRight size={12} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
