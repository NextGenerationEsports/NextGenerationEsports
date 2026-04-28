import { HeroSection } from "@/components/HeroSection";
import { TeamCard } from "@/components/TeamCard";
import { AchievementCard } from "@/components/AchievementCard";
import { LogoSlider } from "@/components/LogoSlider";
import { NewsCard } from "@/components/NewsCard";
import { StoreCard } from "@/components/StoreCard";
import { teams, achievements, news, storeItems } from "@/data";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Teams Preview */}
      <section id="home-rosters" className="py-24 relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-2">Our Rosters</h2>
            <p className="text-muted-foreground max-w-xl">Competing at the highest level across the world's most popular titles.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <TeamCard key={team.id} {...team} index={index} />
          ))}
        </div>
      </section>

      {/* Achievements Strip */}
      <section className="py-20 bg-card/20 border-y border-card-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl uppercase tracking-tight mb-2">A Legacy of Winning</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} {...achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
          <h2 className="font-display font-bold text-sm text-primary uppercase tracking-widest mb-2">Powered By</h2>
        </div>
        <LogoSlider />
      </section>

      {/* News Preview */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-2">Latest Intel</h2>
            <p className="text-muted-foreground max-w-xl">Stay updated with NG rosters, partnerships, and announcements.</p>
          </div>
          <Link href="/news" className="text-sm font-semibold uppercase tracking-wider border-b border-primary text-primary hover:text-white hover:border-white transition-all pb-1">
            View All News
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item, index) => (
            <NewsCard key={item.id} {...item} index={index} />
          ))}
        </div>
      </section>

      {/* Store Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 border-y border-primary/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">Official Gear</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Rep the squad. High-performance apparel dropping soon.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {storeItems.slice(0, 3).map((item, index) => (
              <StoreCard key={item.id} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
