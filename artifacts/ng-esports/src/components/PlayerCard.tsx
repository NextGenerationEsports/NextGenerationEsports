import { motion } from "framer-motion";

interface PlayerCardProps {
  id: string;
  name: string;
  role: string;
  country: string;
  photo?: string;
  isCoach?: boolean;
  index: number;
  gameColor?: string;
}

export function PlayerCard({ id, name, role, photo, isCoach, index, gameColor = "#7c3aed" }: PlayerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative rounded-lg overflow-hidden bg-[#0d0d14] border border-white/[0.06]"
      data-testid={`player-card-${id}`}
      style={{ borderColor: `${gameColor}22` }}
    >
      {/* Player photo */}
      <div className="aspect-[3/4] w-full relative overflow-hidden">
        {photo ? (
          <>
            <img
              src={photo}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/40 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: `linear-gradient(135deg, #0d0d14, ${gameColor}15)` }}>
            <span className="font-display font-black text-[7rem] leading-none opacity-10" style={{ color: gameColor }}>
              {name.charAt(0)}
            </span>
          </div>
        )}

        {/* Coach badge */}
        {isCoach && (
          <div className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-black/70 border border-white/20 text-white/70 rounded">
            COACH
          </div>
        )}
      </div>

      {/* Info bar */}
      <div className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: gameColor }}>
          {role}
        </p>
        <h3 className="font-display font-bold text-xl text-white tracking-wide leading-tight">{name}</h3>
        <span className="text-xs text-white/30 mt-1 block">🇪🇬 EG</span>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, transparent, ${gameColor}, transparent)` }}
      />
    </motion.div>
  );
}
