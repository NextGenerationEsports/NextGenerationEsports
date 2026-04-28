import { Link } from "wouter";
import { Twitter, Youtube, Instagram, MessageSquare, Twitch } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-card-border pt-16 pb-8 relative overflow-hidden" data-testid="footer">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-6 inline-block">
              <img src="/ng-logo-white.png" alt="NG Esports" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Next Generation Esports. Built for competition. Designed for culture. Ready for the future.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-white">About</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About NG</Link></li>
              <li><Link href="/achievements" className="text-muted-foreground hover:text-primary transition-colors text-sm">Achievements</Link></li>
              <li><Link href="/talent" className="text-muted-foreground hover:text-primary transition-colors text-sm">Talent</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-white">Teams</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/teams/lol" className="text-muted-foreground hover:text-primary transition-colors text-sm">League of Legends</Link></li>
              <li><Link href="/teams/valorant" className="text-muted-foreground hover:text-primary transition-colors text-sm">Valorant</Link></li>
              <li><Link href="/teams/crossfire" className="text-muted-foreground hover:text-primary transition-colors text-sm">CrossFire</Link></li>
              <li><Link href="/teams/fortnite" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fortnite</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors" data-testid="social-twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors" data-testid="social-youtube">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors" data-testid="social-instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors" data-testid="social-discord">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors" data-testid="social-tiktok">
                <Twitch size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; 2026 Next Generation Esports. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/links" className="text-muted-foreground hover:text-primary transition-colors text-xs">Privacy Policy</Link>
            <Link href="/links" className="text-muted-foreground hover:text-primary transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
