import { motion } from "framer-motion";
import { partners } from "@/data";
import { PartnerCard } from "@/components/PartnerCard";

export default function Partners() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight mb-4">
            Our <span className="text-primary">Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We collaborate with industry-leading brands that share our vision for the future of competitive gaming.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.id} {...partner} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-card to-card/50 border border-card-border rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase mb-4">Level Up Your Brand</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Reach millions of highly engaged fans across MENA and the globe. Let's build something unforgettable together.
            </p>
            <a href="mailto:partners@ng-esports.com" className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-lg hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all">
              Contact Commercial Team
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
