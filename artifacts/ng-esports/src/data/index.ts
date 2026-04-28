import { Trophy, Star, Users, Gamepad2, Zap, Medal, Target, Flame, Crown, Shield } from "lucide-react";

// ── Social Links ───────────────────────────────────────────────────────────────
// EDIT: Update these URLs to match the organization's official social accounts.
// ──────────────────────────────────────────────────────────────────────────────
export const socialLinks = {
  twitter: "https://x.com/Nex1Generation",
  instagram: "https://www.instagram.com/Nex1Generation",
  facebook: "https://www.facebook.com/profile.php?id=61572884502734",
  tiktok: "https://www.tiktok.com/@nex1generation",
  youtube: "https://www.youtube.com/@nex1generation",
  email: "mailto:nex1generationofficial@gmail.com",
};

// ── Management Staff ───────────────────────────────────────────────────────────
// EDIT: Replace placeholder names with real staff names, roles, and bios.
// ──────────────────────────────────────────────────────────────────────────────
export const management = [
  { id: "mgmt-1", name: "NG Management", role: "Executive Management", bio: "Leading the organization's vision, strategy, and competitive direction across all titles." },
  { id: "mgmt-2", name: "Operations Lead", role: "Operations & Logistics", bio: "Overseeing day-to-day operations, player welfare, scheduling, and tournament coordination." },
  { id: "mgmt-3", name: "Content Director", role: "Content & Media", bio: "Driving all creative output, social media presence, and brand storytelling for NG." },
  { id: "mgmt-4", name: "Partnerships Manager", role: "Partnerships & Sponsorships", bio: "Building brand relationships and securing sponsorships to support the org's growth." },
  { id: "mgmt-5", name: "Head Coach", role: "Performance & Coaching", bio: "Developing player skills, building competitive strategies, and preparing rosters for top-level play." },
  { id: "mgmt-6", name: "Community Manager", role: "Community & Engagement", bio: "Connecting NG with its fanbase, managing community events, and building Egyptian esports culture." },
];

// ── Teams ─────────────────────────────────────────────────────────────────────
// EDIT: Each object represents one team/division.
//   - logo: path to game logo in /public (empty string = show game name as text)
//   - color: primary brand hex color used for accents and highlights
//   - comingSoon: set true to hide roster and show a "Coming Soon" state
//   - players: add/remove player objects; set isCoach: true for coaches
//   - achievements: list of notable accomplishments shown on the team page
// ──────────────────────────────────────────────────────────────────────────────
export const teams = [
  {
    id: "lol",
    name: "League of Legends",
    tagline: "Summoners of the Rift",
    route: "/teams/lol",
    game: "lol",
    color: "#C89B3C",
    // EDIT: Replace with the path to the LoL logo in /public
    logo: "/logo-lol.png",
    bannerGradient: "from-[#0a1428] via-[#091024] to-background",
    bannerAccent: "rgba(200,155,60,0.15)",
    comingSoon: false,
    division: "AL Division 2",
    achievements: [
      { id: "lol-a1", icon: Trophy, title: "LOL Egypt 2025 — 1st Place", description: "Champions of the Egyptian League of Legends national championship." },
      { id: "lol-a2", icon: Crown, title: "MENA Region 2026 — Top 8", description: "Ranked among the top 8 teams across the entire Middle East & North Africa." },
      { id: "lol-a3", icon: Target, title: "Top 3 in Egypt", description: "A consistent leading force in the local Egyptian competitive scene." },
    ],
    players: [
      { id: "lol-1", name: "Poro", role: "Top", country: "EG", photo: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg" },
      { id: "lol-2", name: "Fr0m02Her0", role: "Jungler", country: "EG", photo: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg" },
      { id: "lol-3", name: "Kaine", role: "Mid", country: "EG", photo: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg" },
      { id: "lol-4", name: "BipolarXD", role: "Bot Lane", country: "EG", photo: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg" },
      { id: "lol-5", name: "Chimp", role: "Support", country: "EG", photo: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg" },
      { id: "lol-6", name: "Akaryu", role: "Coach", country: "EG", photo: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg", isCoach: true },
    ],
  },
  {
    id: "valorant",
    name: "Valorant",
    tagline: "Precision. Aggression. Victory.",
    route: "/teams/valorant",
    game: "valorant",
    color: "#FF4655",
    // EDIT: Official Valorant logo (SVG). Replace with /logo-valorant.png if you prefer a PNG.
    logo: "/logo-valorant.svg",
    bannerGradient: "from-[#1a0608] via-[#12040a] to-background",
    bannerAccent: "rgba(255,70,85,0.12)",
    comingSoon: true,
    achievements: [
      { id: "val-a1", icon: Trophy, title: "AGCC Season 1 — 1st Place", description: "Champions of the Abu Dhabi Gaming Community Cup Season 1." },
      { id: "val-a2", icon: Medal, title: "AGCC S2 & S3 — 3rd Place", description: "Consistent podium finishes across two consecutive seasons." },
      { id: "val-a3", icon: Target, title: "MENA Regional — 4th Place", description: "Ranked 4th across the entire MENA region." },
      { id: "val-a4", icon: Flame, title: "VCL 2026 Promo/Relg. — 4th Place", description: "Proving our elite standing in the Valorant Champions League." },
      { id: "val-a5", icon: Star, title: "Warpros Vol.9 — Top 6", description: "Competing among top-tier international Valorant teams." },
      { id: "val-a6", icon: Zap, title: "Insomnia Egypt 2025 — Top 4", description: "4th place finish at the national Valorant finals." },
    ],
    players: [],
  },
  {
    id: "crossfire",
    name: "CrossFire",
    tagline: "Born to Compete",
    route: "/teams/crossfire",
    game: "crossfire",
    color: "#F5A623",
    // EDIT: CrossFire logo. Replace with a higher-res version if available.
    logo: "/logo-crossfire.svg",
    bannerGradient: "from-[#1a1000] via-[#130d00] to-background",
    bannerAccent: "rgba(245,166,35,0.1)",
    comingSoon: true,
    achievements: [],
    players: [],
  },
  {
    id: "fortnite",
    name: "Fortnite",
    tagline: "Build. Adapt. Dominate.",
    route: "/teams/fortnite",
    game: "fortnite",
    color: "#00CFFF",
    // EDIT: Replace with the path to the Fortnite logo in /public
    logo: "/logo-fortnite.png",
    bannerGradient: "from-[#001a2a] via-[#000f1a] to-background",
    bannerAccent: "rgba(0,207,255,0.1)",
    comingSoon: false,
    achievements: [
      { id: "fn-a1", icon: Trophy, title: "Insomnia Egypt 2026 — 1st Place", description: "Fortnite champions of the Insomnia Egypt 2026 tournament." },
    ],
    players: [
      // EDIT: Add more players by duplicating this object and updating the fields
      { id: "fn-1", name: "Yassin", role: "IGL", country: "EG", photo: "/player-yassin.jpg" },
      { id: "fn-2", name: "Zak", role: "Fragger", country: "EG", photo: "/player-zak.jpg" },
    ],
  },
  {
    id: "fc2026",
    name: "FC 2026",
    tagline: "The Beautiful Game, Mastered.",
    route: "/teams/fc2026",
    game: "fc2026",
    color: "#00E87A",
    // EDIT: Replace with the path to the FC 2026 logo in /public
    logo: "/logo-fc26.webp",
    bannerGradient: "from-[#001a0e] via-[#000f08] to-background",
    bannerAccent: "rgba(0,232,122,0.1)",
    comingSoon: false,
    achievements: [
      { id: "fc-a1", icon: Trophy, title: "Play Away Tournament — 1st Place", description: "Champions of the Insomnia Egypt 2026 Play Away Tournament." },
      { id: "fc-a2", icon: Crown, title: "Game Spot Tournament — 1st Place", description: "Champions of the Insomnia Egypt 2026 Game Spot Tournament." },
      { id: "fc-a3", icon: Medal, title: "Birell Insomnia Egypt 2026 — 3rd Place", description: "Bronze finish at the Birell Insomnia Egypt 2026 championship." },
      { id: "fc-a4", icon: Target, title: "Birell Insomnia Egypt 2026 — 4th Place", description: "4th place finish at the second Birell Insomnia Egypt 2026 bracket." },
    ],
    players: [
      { id: "fc-1", name: "Eydoox", role: "Main Player", country: "EG", photo: "/player-eydoox.jpg" },
      { id: "fc-2", name: "Bondok", role: "Main Player", country: "EG", photo: "/player-bondok.jpg" },
    ],
  },
  {
    id: "tekken-8",
    name: "Tekken 8",
    tagline: "Iron Fists, Iron Will.",
    route: "/teams/tekken-8",
    game: "tekken-8",
    color: "#E53E3E",
    // EDIT: Replace with the path to the Tekken 8 logo in /public
    logo: "/logo-tekken8.png",
    bannerGradient: "from-[#1a0000] via-[#120000] to-background",
    bannerAccent: "rgba(229,62,62,0.12)",
    comingSoon: false,
    achievements: [
      { id: "tk-a1", icon: Trophy, title: "Tekken 8 Egypt 2026 — 1st Place", description: "Undisputed Egyptian national champion in Tekken 8." },
      { id: "tk-a2", icon: Medal, title: "Tekken 8 MENA 2025 — Top 3", description: "Podium finish across the entire Middle East & North Africa region." },
    ],
    players: [
      { id: "tk-1", name: "SuperBrine", role: "Main Fighter", country: "EG", photo: "/player-superbrine.jpg" },
    ],
  },
];

// ── Partners ──────────────────────────────────────────────────────────────────
// EDIT: Add or remove partner objects to update the partners section and logo slider.
//   - logo: path to partner logo in /public
//   - link: URL to the partner's website or social page
// ──────────────────────────────────────────────────────────────────────────────
export const partners = [
  {
    id: "up2",
    name: "up2 production",
    logo: "/partner-hexagon.png",
    category: "Technology Partner",
    description: "Powering the next generation of digital infrastructure and content production for NG Esports.",
    link: "https://x.com/Up2Production",
  },
  {
    id: "toxic",
    name: "Toxic Gaming",
    logo: "/partner-toxic-gaming.png",
    category: "Apparel & Gaming House",
    description: "Official apparel partner and the home of NG Esports. Toxic Gaming is our official Gaming House in Cairo — where the team trains, lives, and competes.",
    link: "https://www.google.com/maps/search/TOXiC+Gaming/@30.0712788,31.516235,17z?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

// ── Homepage Achievements Strip ───────────────────────────────────────────────
// EDIT: Add, remove, or reorder achievement entries shown on the homepage grid.
//   - icon: any icon imported from "lucide-react"
// ──────────────────────────────────────────────────────────────────────────────
export const achievements = [
  { id: "ess-2025", icon: Trophy, title: "ESS 2025 — Champions", description: "Crowned champions of the Egyptian Super Series." },
  { id: "insomnia", icon: Target, title: "Insomnia Egypt 2025 — Top 4", description: "Valorant top 4 at Insomnia Egypt 2025." },
  { id: "warpros", icon: Star, title: "Warpros Vol.9 — Top 6", description: "Valorant — Top 6 among international competitors." },
  { id: "lol-egypt", icon: Crown, title: "LOL Egypt 2025 — 1st Place", description: "Egyptian national LoL champions." },
  { id: "lol-mena", icon: Gamepad2, title: "LOL MENA 2026 — Top 8", description: "Top 8 in the MENA region." },
  { id: "tekken-egypt", icon: Flame, title: "Tekken 8 Egypt 2026 — 1st Place", description: "Egyptian national Tekken 8 champions." },
  { id: "tekken-mena", icon: Medal, title: "Tekken 8 MENA 2025 — Top 3", description: "MENA Tekken 8 podium finish." },
  { id: "agcc", icon: Zap, title: "AGCC — 1st Place", description: "Abu Dhabi Gaming Community Cup champions." },
  { id: "fn-insomnia", icon: Shield, title: "Fortnite Insomnia 2026 — 1st", description: "Fortnite Insomnia Egypt 2026 champions." },
  { id: "fc-insomnia", icon: Users, title: "FC 2026 Insomnia 2026 — Multiple Wins", description: "FC 2026 domination at Insomnia Egypt 2026." },
];

// ── News Articles ─────────────────────────────────────────────────────────────
// EDIT: Add new articles at the top of this array so they appear first.
//   - date: display string (e.g. "Apr 28, 2026")
//   - category: short label shown on the card (e.g. "Roster", "Tournament", "Announcement")
//   - link: external URL (X/Twitter post, article, etc.)
// ──────────────────────────────────────────────────────────────────────────────
export const news = [
  {
    id: "news-1",
    title: "SuperBrine Signs With NG — Tekken 8's Next Champion",
    date: "Apr 20, 2026",
    category: "Roster",
    excerpt: "Next Generation Esports is proud to announce the signing of SuperBrine to our Tekken 8 division. A dominant force in Egyptian and regional fighting game circles, SuperBrine brings championship pedigree and raw competitive drive. Welcome to the family.",
    link: "https://x.com/Nex1Generation/status/1976775126336389551",
  },
  {
    id: "news-2",
    title: "Fortnite & FC 2026 Rosters Dominate Insomnia Egypt 2026",
    date: "Apr 23, 2026",
    category: "Tournament",
    excerpt: "NG delivered a historic performance at Insomnia Egypt 2026. Our Fortnite duo claimed 1st place, while the FC 2026 squad swept multiple brackets — taking 1st at Play Away and Game Spot, and placing 3rd and 4th at Birell. This is what Next Generation looks like.",
    link: "https://x.com/Nex1Generation/status/2045926506031874554",
  },
  {
    id: "news-3",
    title: "Eydoox & Bondok Join NG FC 2026",
    date: "Apr 22, 2026",
    category: "Roster",
    excerpt: "Two of Egypt's most dangerous FC 2026 players have joined Next Generation Esports. Eydoox and Bondok are ready to represent NG at the highest level — and Insomnia Egypt 2026 proved exactly that with back-to-back championship wins.",
    link: "https://x.com/Nex1Generation/status/2045941120614486372",
  },
  {
    id: "news-4",
    title: "Next Generation Esports — Official Organization Announcement",
    date: "Apr 18, 2026",
    category: "Announcement",
    excerpt: "We are Next Generation Esports. Built in Egypt. Built for competition. Built to develop players, create culture, and connect brands with the future of gaming. From this day forward, we compete not just as players — but as an organization with a mission. The next generation starts now.",
    link: "https://x.com/Nex1Generation/status/2044797825611948265",
  },
];

// ── Store Items ───────────────────────────────────────────────────────────────
// EDIT: Add or update merchandise. Set comingSoon: false and add a price/link
//       when the store goes live.
// ──────────────────────────────────────────────────────────────────────────────
export const storeItems = [
  { id: "store-1", name: "NG Pro Jersey 2026", category: "Apparel", comingSoon: true },
  { id: "store-2", name: "NG Stealth Hoodie", category: "Apparel", comingSoon: true },
  { id: "store-3", name: "NG Mousepad XL", category: "Accessories", comingSoon: true },
  { id: "store-4", name: "Signed Player Merch", category: "Collectibles", comingSoon: true },
];
