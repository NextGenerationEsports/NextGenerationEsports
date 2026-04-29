import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { teams } from "@/data";
import { PlayerCard } from "@/components/PlayerCard";
import { Clock, ArrowLeft, type LucideIcon } from "lucide-react";
import NotFound from "@/pages/not-found";

function AchievementRow({ icon: Icon, title, description, color, index }: { icon: LucideIcon; title: string; description: string; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 py-5 border-b border-white/[0.05] last:border-0"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center mt-0.5" style={{ background: `${color}18`, color }}>
        <Icon size={15} />
      </div>
      <div>
        <p className="font-display font-bold text-[15px] text-white leading-tight">{title}</p>
        <p className="text-white/40 text-sm mt-0.5 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Game-specific background SVG patterns
function GameBannerBg({ game, color }: { game: string; color: string }) {
  if (game === "lol") {
    return (
      <>
        {/* LoL hexagon pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" x="0" y="0" width="56" height="64" patternUnits="userSpaceOnUse">
              <polygon points="28,2 54,16 54,48 28,62 2,48 2,16" fill="none" stroke={color} strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </>
    );
  }
  if (game === "valorant") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="val" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 L30 0 L60 30 L30 60 Z" fill="none" stroke={color} strokeWidth="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#val)" />
      </svg>
    );
  }
  if (game === "fortnite") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="fn" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="40" x2="40" y2="0" stroke={color} strokeWidth="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fn)" />
      </svg>
    );
  }
  if (game === "fc2026") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="fc" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="25" fill="none" stroke={color} strokeWidth="0.8"/>
            <circle cx="30" cy="30" r="5" fill={color} opacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fc)" />
      </svg>
    );
  }
  if (game === "tekken-8") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tk" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25 0 L50 25 L25 50 L0 25 Z" fill="none" stroke={color} strokeWidth="1"/>
            <line x1="0" y1="0" x2="50" y2="50" stroke={color} strokeWidth="0.4"/>
            <line x1="50" y1="0" x2="0" y2="50" stroke={color} strokeWidth="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tk)" />
      </svg>
    );
  }
  // crossfire / default
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="cf" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke={color} strokeWidth="0.8"/>
          <line x1="20" y1="0" x2="20" y2="40" stroke={color} strokeWidth="0.4"/>
          <line x1="0" y1="20" x2="40" y2="20" stroke={color} strokeWidth="0.4"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cf)" />
    </svg>
  );
}

export default function TeamPage() {
  const params = useParams();
  const teamId = params.id;
  const team = teams.find(t => t.id === teamId);

  if (!team) return <NotFound />;

  const isTekken = team.id === "tekken-8";

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Banner */}
      <div className={`pt-28 pb-16 relative overflow-hidden border-b border-white/[0.05] bg-gradient-to-b ${team.bannerGradient}`}>
        {/* Pattern overlay */}
        <GameBannerBg game={team.game} color={team.color} />

        {/* Radial glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] blur-[120px] opacity-20 pointer-events-none"
          style={{ background: team.color }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/35 text-xs font-bold uppercase tracking-widest mb-10 hover:text-white transition-colors" data-testid="team-back-link">
            <ArrowLeft size={12} /> All Teams
          </Link>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Game logo */}
            {team.logo && (
              <div className="flex-shrink-0">
                <img
                  src={team.logo}
                  alt={team.name}
                  className={`${isTekken ? "h-20" : "h-14"} w-auto object-contain`}
                  style={{ mixBlendMode: "screen", opacity: 0.9, maxWidth: isTekken ? 240 : 180 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            )}
            <div>
              {team.division && (
                <p className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: team.color }}>
                  {team.division}
                </p>
              )}
              <h1 className="font-display font-black text-5xl md:text-7xl uppercase leading-none text-white tracking-tight mb-3">
                {team.name}
              </h1>
              <p className="text-white/45 text-base font-medium">{team.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-14">
        {team.comingSoon ? (
          /* Coming Soon */
          <div className="py-20 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-lg mb-7 flex items-center justify-center" style={{ background: `${team.color}12`, border: `1px solid ${team.color}25` }}>
              <Clock size={24} style={{ color: team.color }} />
            </div>
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-3">Roster Coming Soon</h2>
            <p className="text-white/35 max-w-md text-sm leading-relaxed">
              The {team.name} roster is being finalized. Announcements dropping soon.
            </p>

            {team.achievements && team.achievements.length > 0 && (
              <div className="mt-14 w-full max-w-xl text-left">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-5 rounded-full" style={{ background: team.color }} />
                  <h3 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-white/50">Previous Achievements</h3>
                </div>
                {team.achievements.map((a, i) => (
                  <AchievementRow key={a.id} {...a} color={team.color} index={i} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Roster */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full" style={{ background: team.color }} />
                <h2 className="font-display font-bold text-xl uppercase tracking-[0.15em] text-white">Active Roster</h2>
              </div>

              {team.players.length === 0 ? (
                <p className="text-white/25 text-sm">No players listed yet.</p>
              ) : (
                <div className={`grid gap-4 ${
                  team.players.length === 1 ? "grid-cols-1 max-w-[220px]"
                  : team.players.length === 2 ? "grid-cols-2 max-w-sm"
                  : team.players.length <= 3 ? "grid-cols-3 max-w-xl"
                  : team.players.length <= 4 ? "grid-cols-2 sm:grid-cols-4"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                }`}>
                  {team.players.map((player, index) => (
                    <PlayerCard key={player.id} {...player} index={index} gameColor={team.color} />
                  ))}
                </div>
              )}
            </div>

            {/* Achievements */}
            {team.achievements && team.achievements.length > 0 && (
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 rounded-full" style={{ background: team.color }} />
                  <h2 className="font-display font-bold text-xl uppercase tracking-[0.15em] text-white">Achievements</h2>
                </div>
                {team.achievements.map((a, i) => (
                  <AchievementRow key={a.id} {...a} color={team.color} index={i} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
