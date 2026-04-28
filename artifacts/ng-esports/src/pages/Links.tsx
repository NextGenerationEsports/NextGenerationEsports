import { motion } from "framer-motion";
import { Twitter, Youtube, Instagram, MessageSquare, Twitch, Mail, MapPin } from "lucide-react";

export default function Links() {
  const socialLinks = [
    { id: "twitter", name: "Twitter", url: "#", icon: Twitter, handle: "@NG_Esports" },
    { id: "youtube", name: "YouTube", url: "#", icon: Youtube, handle: "NGEsportsTV" },
    { id: "instagram", name: "Instagram", url: "#", icon: Instagram, handle: "@ng.esports" },
    { id: "discord", name: "Discord", url: "#", icon: MessageSquare, handle: "discord.gg/ng" },
    { id: "twitch", name: "Twitch", url: "#", icon: Twitch, handle: "NGEsports" },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <img src="/ng-logo-white.png" alt="NG" className="w-20 h-auto mx-auto mb-8 drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
          <h1 className="font-display font-bold text-5xl uppercase tracking-tight mb-4">
            Connect <span className="text-primary">With Us</span>
          </h1>
        </motion.div>

        <div className="max-w-xl mx-auto space-y-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-4 bg-card/50 border border-card-border rounded-xl hover:bg-primary/20 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center mr-4 group-hover:text-primary transition-colors">
                  <Icon size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg">{link.name}</h3>
                  <p className="text-muted-foreground text-sm">{link.handle}</p>
                </div>
                <span className="text-primary font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Follow →
                </span>
              </motion.a>
            )
          })}

          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="bg-card/30 border border-card-border p-6 rounded-xl flex flex-col items-center text-center">
              <Mail className="text-primary mb-3" size={24} />
              <h4 className="font-bold mb-1">Business Inquiries</h4>
              <p className="text-sm text-muted-foreground">contact@ng-esports.com</p>
            </div>
            <div className="bg-card/30 border border-card-border p-6 rounded-xl flex flex-col items-center text-center">
              <MapPin className="text-primary mb-3" size={24} />
              <h4 className="font-bold mb-1">HQ</h4>
              <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
