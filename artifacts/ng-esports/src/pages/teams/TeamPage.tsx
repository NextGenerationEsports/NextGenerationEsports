import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { teams } from "@/data";
import { PlayerCard } from "@/components/PlayerCard";
import { Clock, ArrowLeft, type LucideIcon } from "lucide-react";
import NotFound from "@/pages/not-found";

function AchievementRow({ icon: Icon, title, description, color, index }: { icon: LucideIcon; title: string; description: string; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 py-5 border-b border-white/[0.06] last:border-0"
    >
      <div className="flex-shrink-0 w-9 h-9 rounded flex items-center justify-center" style={{ background: `${color}18`, color }}>
        <Icon size={16} />
      </div>
      <div>
        <p className="font-display font-bold text-base text-white leading-tight">{title}</p>
        <p className="text-white/40 text-sm mt-0.5">{description}</p>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  const params = useParams();
  const teamId = params.id;
  const team = teams.find(t => t.id === teamId);

  if (!team) return <NotFound />;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="pt-28 pb-16 relative overflow-hidden border-b border-white/[0.06]">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[100px] opacity-15 pointer-events-none"
          style={{ background: team.color }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 text-sm font-semibold mb-8 hover:text-white transition-colors" data-testid="team-back-link">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="flex items-start gap-6">
            {/* Game logo */}
            {team.logo && (
              <div className="flex-shrink-0 hidden sm:block">
                <img
                  src={team.logo}
                  alt={team.name}
                  className="h-16 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            )}
            <div>
              {team.division && (
                <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: team.color }}>
                  {team.division}
                </p>
              )}
              <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-white leading-none mb-3">
                {team.name}
              </h1>
              <p className="text-white/50 text-lg font-medium">{team.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-14">
        {/* Coming Soon State */}
        {team.comingSoon ? (
          <div className="min-h-[40vh] flex flex-col items-center justify-center text-center py-24">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
              style={{ background: `${team.color}15`, border: `1px solid ${team.color}30` }}
            >
              <Clock size={28} style={{ color: team.color }} />
            </div>
            <h2 className="font-display font-black text-4xl text-white uppercase mb-3">Roster Coming Soon</h2>
            <p className="text-white/40 max-w-md">
              We're currently building out the {team.name} roster. Check back soon for player announcements.
            </p>

            {team.achievements && team.achievements.length > 0 && (
              <div className="mt-16 w-full max-w-2xl text-left">
                <h3 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Past Achievements</h3>
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
                <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-white">Active Roster</h2>
              </div>

              {team.players.length === 0 ? (
                <p className="text-white/30">No players listed yet.</p>
              ) : (
                <div className={`grid gap-5 ${
                  team.players.length === 1
                    ? "grid-cols-1 max-w-xs"
                    : team.players.length === 2
                    ? "grid-cols-2 max-w-sm"
                    : team.players.length <= 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : team.players.length <= 4
                    ? "grid-cols-2 sm:grid-cols-4"
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
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 rounded-full" style={{ background: team.color }} />
                  <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-white">Achievements</h2>
                </div>
                <div className="max-w-2xl">
                  {team.achievements.map((a, i) => (
                    <AchievementRow key={a.id} {...a} color={team.color} index={i} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
