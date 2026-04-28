import { motion } from "framer-motion";
import { Link } from "wouter";
import { management, socialLinks } from "@/data";
import { ArrowLeft, Users } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

// ── Management Page ────────────────────────────────────────────────────────────
// EDIT: All staff data lives in src/data/index.ts under `management`.
//       - SingleMember entries have a top-level `name` field.
//       - MultiMember entries have a `members[]` array (for shared roles like Partnerships).
// ──────────────────────────────────────────────────────────────────────────────

// Types for management entries
type SingleMember = {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  photo?: string;
  bio: string;
  members?: never;
};

type MultiMember = {
  id: string;
  name?: never;
  nickname?: never;
  role: string;
  bio: string;
  photo?: never;
  members: { name: string; nickname?: string; photo?: string }[];
};

type ManagementEntry = SingleMember | MultiMember;

// Avatar square — shows photo or initial-letter fallback
function Avatar({ name, photo }: { name: string; photo?: string }) {
  return (
    <div className="w-14 h-14 rounded-lg overflow-hidden border border-primary/20 flex-shrink-0">
      {photo ? (
        <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
      ) : (
        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
          <span className="font-display font-black text-xl text-primary/70">
            {name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}

// Name with optional (Nickname) label inline
function MemberName({ name, nickname, size = "lg" }: { name: string; nickname?: string; size?: "base" | "lg" }) {
  return (
    <span className={`font-display font-bold text-white leading-tight ${size === "lg" ? "text-xl" : "text-base"}`}>
      {name}
      {nickname && (
        <span className="text-primary/70 font-semibold ml-1.5">({nickname})</span>
      )}
    </span>
  );
}

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="pt-28 pb-16 relative overflow-hidden border-b border-white/[0.05]">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] blur-[120px] opacity-10 pointer-events-none bg-primary" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mgmt-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mgmt-grid)" />
        </svg>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/35 text-xs font-bold uppercase tracking-widest mb-10 hover:text-white transition-colors"
            data-testid="mgmt-back-link"
          >
            <ArrowLeft size={12} /> Back
          </Link>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded border border-primary/30 bg-primary/10 flex items-center justify-center">
              <Users size={18} className="text-primary" />
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-white">
              Management
            </h1>
          </div>
          <p className="text-white/40 text-base mt-2">The team behind the team.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(management as ManagementEntry[]).map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group relative rounded-lg bg-[#0d0d14] border border-white/[0.06] p-6 hover:border-primary/20 transition-colors"
              data-testid={`mgmt-card-${entry.id}`}
            >
              {entry.members ? (
                /* ── Multi-member card (e.g. two people sharing a role) ── */
                <>
                  <div className="flex gap-3 mb-5">
                    {entry.members.map((m) => (
                      <Avatar key={m.name} name={m.name} photo={m.photo} />
                    ))}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
                    {entry.role}
                  </p>
                  <div className="flex flex-col gap-1 mb-3">
                    {entry.members.map((m) => (
                      <MemberName key={m.name} name={m.name} nickname={m.nickname} size="base" />
                    ))}
                  </div>
                </>
              ) : (
                /* ── Single-member card ── */
                <>
                  <div className="mb-5">
                    <Avatar name={entry.name} photo={entry.photo} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">
                    {entry.role}
                  </p>
                  <div className="mb-3">
                    <MemberName name={entry.name} nickname={entry.nickname} size="lg" />
                  </div>
                </>
              )}

              <p className="text-white/40 text-sm leading-relaxed">{entry.bio}</p>

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-lg border border-white/[0.06] bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-1">Work With Us</h3>
            <p className="text-white/40 text-sm">Interested in joining the NG team? We're always building.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold uppercase tracking-widest rounded hover:bg-primary/80 transition-colors"
              data-testid="mgmt-contact-email"
            >
              Contact Us
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white text-sm font-bold uppercase tracking-widest rounded hover:bg-white/5 transition-colors"
              data-testid="mgmt-contact-twitter"
            >
              <FaXTwitter size={14} /> Follow NG
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
