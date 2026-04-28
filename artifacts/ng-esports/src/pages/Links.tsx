import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { FaXTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";
import { socialLinks } from "@/data";
import { assetPath } from "@/lib/utils";

// ── Social Links Page ─────────────────────────────────────────────────────────
// EDIT: Add or remove entries in the `links` array below to update social cards.
//   - name: display name shown on the card
//   - url: full URL to the social profile
//   - handle: short label shown below the name (e.g. "@handle")
//   - color: hex accent color for the icon background
// ──────────────────────────────────────────────────────────────────────────────
const links = [
  { id: "twitter",   name: "X (Twitter)",  url: socialLinks.twitter,   icon: FaXTwitter,  handle: "@Nex1Generation",         color: "#e7e7e7" },
  { id: "instagram", name: "Instagram",     url: socialLinks.instagram, icon: FaInstagram, handle: "@Nex1Generation",         color: "#E1306C" },
  { id: "facebook",  name: "Facebook",      url: socialLinks.facebook,  icon: FaFacebook,  handle: "Next Generation Esports", color: "#1877F2" },
  { id: "tiktok",    name: "TikTok",        url: socialLinks.tiktok,    icon: FaTiktok,    handle: "@nex1generation",         color: "#e7e7e7" },
  { id: "youtube",   name: "YouTube",       url: socialLinks.youtube,   icon: FaYoutube,   handle: "@nex1generation",         color: "#FF0000" },
];

export default function Links() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          {/* EDIT: Replace ng-icon.png in /public to change the logo shown here */}
          <img
            src={assetPath("ng-icon.png")}
            alt="NG"
            className="w-16 h-auto mx-auto mb-8 drop-shadow-[0_0_16px_rgba(124,58,237,0.5)]"
          />
          <h1 className="font-display font-black text-5xl uppercase tracking-tight mb-2">
            Connect <span className="text-primary">With Us</span>
          </h1>
          <p className="text-white/35 text-sm mt-3">Follow NG across every platform.</p>
        </motion.div>

        {/* Social link rows */}
        <div className="max-w-lg mx-auto space-y-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                className="flex items-center gap-4 p-4 bg-[#0d0d14] border border-white/[0.06] rounded-lg hover:border-white/[0.14] hover:bg-[#10101a] transition-all group"
                data-testid={`links-${link.id}`}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: `${link.color}12`, color: link.color }}
                >
                  <Icon size={18} />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-bold text-sm text-white">{link.name}</h3>
                  <p className="text-white/35 text-xs truncate">{link.handle}</p>
                </div>
                <ExternalLink size={13} className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
              </motion.a>
            );
          })}

          {/* Contact & Location */}
          <div className="pt-6 grid grid-cols-2 gap-3">
            {/* EDIT: Update the email shown here via socialLinks.email in src/data/index.ts */}
            <a
              href={socialLinks.email}
              className="group flex flex-col items-center text-center p-5 bg-[#0d0d14] border border-white/[0.06] rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all"
              data-testid="links-email"
            >
              <Mail size={20} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-xs text-white mb-0.5">Email</h4>
              <p className="text-[11px] text-white/35 break-all">nex1generationofficial@gmail.com</p>
            </a>

            {/* EDIT: Update the location text here */}
            <div className="flex flex-col items-center text-center p-5 bg-[#0d0d14] border border-white/[0.06] rounded-lg">
              <MapPin size={20} className="text-primary mb-2" />
              <h4 className="font-bold text-xs text-white mb-0.5">Location</h4>
              <p className="text-[11px] text-white/35">Cairo, Egypt</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
