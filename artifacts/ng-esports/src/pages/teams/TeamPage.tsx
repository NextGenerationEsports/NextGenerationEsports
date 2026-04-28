import { useParams } from "wouter";
import { motion } from "framer-motion";
import { teams } from "@/data";
import { PlayerCard } from "@/components/PlayerCard";
import { AchievementCard } from "@/components/AchievementCard";
import { Trophy, Target, Shield, Zap } from "lucide-react"; // Sample icons for team achievements
import NotFound from "@/pages/not-found";

export default function TeamPage() {
  const params = useParams();
  const teamId = params.id;
  
  const team = teams.find(t => t.id === teamId);

  if (!team) {
    return <NotFound />;
  }

  // Dummy achievements specifically for the team pages
  const teamAchievements = [
    { id: "ta-1", icon: Trophy, title: "Regional Champions", description: "Secured 1st place in the MENA Regional Qualifier." },
    { id: "ta-2", icon: Target, title: "Undefeated Season", description: "Finished the regular season with a perfect record." },
    { id: "ta-3", icon: Shield, title: "Best Defense", description: "Lowest points conceded in the tournament history." },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Banner tinted with game color */}
      <div 
        className="pt-32 pb-20 relative overflow-hidden border-b border-card-border"
        style={{ '--game-color': team.color } as React.CSSProperties}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{ background: `linear-gradient(to bottom right, var(--game-color), transparent)` }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
              style={{ backgroundColor: `${team.color}30`, color: team.color, border: `1px solid ${team.color}50` }}
            >
              <span className="font-display font-bold text-2xl uppercase">{team.id.substring(0,2)}</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight mb-4">
              {team.name}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/80 max-w-2xl">
              {team.tagline}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        {/* Roster Section */}
        <div className="mb-24">
          <h2 className="font-display font-bold text-3xl uppercase tracking-widest mb-8 border-l-4 pl-4" style={{ borderColor: team.color }}>
            Active Roster
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.players.map((player, index) => (
              <PlayerCard key={player.id} {...player} index={index} />
            ))}
          </div>
        </div>

        {/* Team Achievements Section */}
        <div>
          <h2 className="font-display font-bold text-3xl uppercase tracking-widest mb-8 border-l-4 pl-4" style={{ borderColor: team.color }}>
            Honors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamAchievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} {...achievement} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
