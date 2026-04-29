import { motion } from "framer-motion";

interface PlayerCardProps {
  id: string;
  name: string;
  role: string;
  country: string;
  countryName?: string;
  photo?: string;
  isCoach?: boolean;
  index: number;
  gameColor?: string;
}

const COUNTRY_NAMES: Record<string, string> = {
  DZ: "Algeria",
  EG: "Egypt",
  RS: "Serbia",
  TN: "Tunisia",
  TR: "Turkey",
};

function normalizeCountryCode(code: string): string {
  return code.trim().toUpperCase();
}

function countryFlag(code: string): string {
  return normalizeCountryCode(code)
    .split("")
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join("");
}

export function PlayerCard({
  id,
  name,
  role,
  country,
  countryName,
  photo,
  isCoach,
  index,
  gameColor = "#7c3aed",
}: PlayerCardProps) {
  const code = normalizeCountryCode(country);
  const nationality = countryName ?? COUNTRY_NAMES[code] ?? code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg border border-white/[0.06] bg-[#0d0d14]"
      data-testid={`player-card-${id}`}
      style={{ borderColor: `${gameColor}22` }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        {photo ? (
          <>
            <img
              src={photo}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/40 to-transparent" />
          </>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, #0d0d14, ${gameColor}15)` }}
          >
            <span
              className="font-display text-[7rem] font-black leading-none opacity-10"
              style={{ color: gameColor }}
            >
              {name.charAt(0)}
            </span>
          </div>
        )}

        {isCoach && (
          <div className="absolute right-3 top-3 rounded border border-white/20 bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white/70">
            COACH
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: gameColor }}>
          {role}
        </p>
        <h3 className="font-display text-xl font-bold leading-tight tracking-wide text-white">{name}</h3>
        <div className="mt-2 flex items-start gap-2">
          <span className="text-base leading-none" aria-hidden="true">
            {countryFlag(code)}
          </span>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
              {code}
            </span>
            <span className="mt-0.5 block text-xs text-white/30">{nationality}</span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(to right, transparent, ${gameColor}, transparent)` }}
      />
    </motion.div>
  );
}
