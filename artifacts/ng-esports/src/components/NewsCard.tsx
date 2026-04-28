import { motion } from "framer-motion";

interface NewsCardProps {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  link?: string;
  index: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  Roster: "#7c3aed",
  Tournament: "#00CFFF",
  Announcement: "#00E87A",
  Partnership: "#F5A623",
};

export function NewsCard({ id, title, date, category, excerpt, link, index }: NewsCardProps) {
  const accent = CATEGORY_COLORS[category] ?? "#7c3aed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative flex flex-col rounded-lg bg-[#0a0a12] border border-white/[0.06] hover:border-white/[0.12] transition-colors overflow-hidden"
      data-testid={`news-card-${id}`}
    >
      {/* Color top bar */}
      <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accent}40 70%, transparent 100%)` }} />

      {/* Category tag banner area */}
      <div className="h-36 relative flex items-center justify-center overflow-hidden" style={{ background: `${accent}08` }}>
        {/* Big faded category text */}
        <span
          className="font-display font-black text-[5rem] uppercase leading-none select-none"
          style={{ color: accent, opacity: 0.08, letterSpacing: "-0.04em" }}
        >
          {category}
        </span>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-[0.15em]"
            style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
          >
            {category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-3">{date}</span>
        <h3 className="font-display font-bold text-lg text-white leading-snug mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed flex-grow mb-5">{excerpt}</p>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] transition-all group-hover:gap-2.5"
            style={{ color: accent }}
            data-testid={`news-card-link-${id}`}
          >
            View Post →
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: accent }}>
            Read More →
          </span>
        )}
      </div>
    </motion.div>
  );
}
