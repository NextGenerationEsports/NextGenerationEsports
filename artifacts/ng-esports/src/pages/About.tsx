import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight mb-6">
            About <span className="text-primary">NG</span>
          </h1>
          
          <div className="w-24 h-1 bg-primary mb-12" />

          <div className="space-y-16">
            <section>
              <h2 className="font-display font-bold text-3xl mb-6 uppercase text-white/90">Our Mission</h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Next Generation Esports (NG) was founded with a singular purpose: to elevate the competitive gaming ecosystem in Egypt and the MENA region. We believe in creating pathways for local talent to shine on global stages, combining world-class infrastructure with unapologetic passion.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are more than just a collection of teams; we are a culture brand bridging the gap between gaming, lifestyle, and elite performance.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-3xl mb-6 uppercase text-white/90">The Vision</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card/30 p-8 rounded-xl border border-card-border">
                  <h3 className="text-xl font-bold mb-4 text-primary">For the Players</h3>
                  <p className="text-muted-foreground">Providing tier-1 support, coaching, and facilities to ensure our rosters can focus purely on winning.</p>
                </div>
                <div className="bg-card/30 p-8 rounded-xl border border-card-border">
                  <h3 className="text-xl font-bold mb-4 text-primary">For the Fans</h3>
                  <p className="text-muted-foreground">Creating unforgettable narratives, premium apparel, and digital experiences that make you proud to rep NG.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-3xl mb-6 uppercase text-white/90">Our History</h2>
              <div className="border-l-2 border-primary/30 pl-8 space-y-8 relative">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-background" />
                  <h3 className="font-display font-bold text-2xl text-white">2023</h3>
                  <p className="text-muted-foreground mt-2">Founded in Cairo. Initial rosters in League of Legends and CrossFire.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-background" />
                  <h3 className="font-display font-bold text-2xl text-white">2024</h3>
                  <p className="text-muted-foreground mt-2">Expanded into Valorant and Fortnite. Opened the first NG performance facility.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-background" />
                  <h3 className="font-display font-bold text-2xl text-white">2025</h3>
                  <p className="text-muted-foreground mt-2">Crowned ESS Champions. Secured multi-year title partnership with Nimbus Digital.</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
