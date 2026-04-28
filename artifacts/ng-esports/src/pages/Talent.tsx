import { motion } from "framer-motion";
import { teams } from "@/data";
import { PlayerCard } from "@/components/PlayerCard";

// ── Talent Page ───────────────────────────────────────────────────────────────
// Flattens all team rosters into a single talent showcase grid.
// EDIT: Add or update players in src/data/index.ts under each team's `players` array.
//       Players from teams with comingSoon: true will still appear here if they have entries.
// ──────────────────────────────────────────────────────────────────────────────
export default function Talent() {
  // Merge every team's roster into one list, attaching the team name and game for context
  const allTalent = teams.flatMap((team) =>
    team.players.map((player) => ({
      ...player,
      teamName: team.name,
      game: team.game,
      gameColor: team.color,
    }))
  );

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* EDIT: Update the headline and subheading */}
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight mb-4">
            Our <span className="text-primary">Talent</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The faces behind the victories. Elite competitors representing NG across the globe.
          </p>
        </motion.div>

        {/* Player grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allTalent.map((player, index) => (
            <PlayerCard key={player.id} {...player} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
