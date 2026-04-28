import { motion } from "framer-motion";
import { teams } from "@/data";
import { PlayerCard } from "@/components/PlayerCard";

export default function Talent() {
  // Flatten all players into one array for the talent grid
  const allTalent = teams.flatMap(team => 
    team.players.map(player => ({ ...player, teamName: team.name, game: team.game }))
  );

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight mb-4">
            Our <span className="text-primary">Talent</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The faces behind the victories. Elite competitors representing NG across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allTalent.map((player, index) => (
            <PlayerCard key={player.id} {...player} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
