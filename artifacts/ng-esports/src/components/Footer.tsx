import { Link } from "wouter";
import { FaXTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { socialLinks } from "@/data";
import { assetPath } from "@/lib/utils";

const socials = [
  { icon: FaXTwitter, href: socialLinks.twitter, label: "X / Twitter", testId: "social-twitter" },
  { icon: FaInstagram, href: socialLinks.instagram, label: "Instagram", testId: "social-instagram" },
  { icon: FaFacebook, href: socialLinks.facebook, label: "Facebook", testId: "social-facebook" },
  { icon: FaTiktok, href: socialLinks.tiktok, label: "TikTok", testId: "social-tiktok" },
  { icon: FaYoutube, href: socialLinks.youtube, label: "YouTube", testId: "social-youtube" },
  { icon: MdEmail, href: socialLinks.email, label: "Email", testId: "social-email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-8 relative" data-testid="footer">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* ── Footer Brand ─────────────────────────────────────────────────
              EDIT: Replace ng-icon.png in /public to change the footer logo.
          ─────────────────────────────────────────────────────────────────── */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <img src={assetPath("ng-icon.png")} alt="NG Esports" className="h-10 w-auto" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Next Generation Esports — competing, creating, and building the future of esports.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {socials.map(({ icon: Icon, href, label, testId }) => (
                <a
                  key={testId}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-testid={testId}
                  className="w-9 h-9 rounded border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">About</h4>
            <ul className="flex flex-col gap-3">
              {[
                ["About NG", "/about"],
                ["Achievements", "/achievements"],
                ["Talent", "/talent"],
                ["Careers", "/careers"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/50 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Teams</h4>
            <ul className="flex flex-col gap-3">
              {[
                ["League of Legends", "/teams/lol"],
                ["Valorant", "/teams/valorant"],
                ["CrossFire", "/teams/crossfire"],
                ["Fortnite", "/teams/fortnite"],
                ["FC 2026", "/teams/fc2026"],
                ["Tekken 8", "/teams/tekken-8"],
                ["Management", "/teams/management"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/50 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={socialLinks.email} className="text-sm text-white/50 hover:text-white transition-colors">
                  nex1generationofficial@gmail.com
                </a>
              </li>
              <li>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">
                  @Nex1Generation
                </a>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-white/50 hover:text-white transition-colors">Partner With Us</Link>
              </li>
              <li>
                <Link href="/links" className="text-sm text-white/50 hover:text-white transition-colors">All Links</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            &copy; 2026 Next Generation Esports. All Rights Reserved.
          </p>
          <p className="text-white/25 text-xs">Egypt — Built for the Next Generation</p>
        </div>
      </div>
    </footer>
  );
}
