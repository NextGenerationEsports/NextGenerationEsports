import { Trophy, Star, Users, Gamepad2, Zap, Medal, Target, Flame, Crown } from "lucide-react";

export const teams = [
  {
    id: "lol",
    name: "League of Legends",
    tagline: "Summoners of the Rift",
    route: "/teams/lol",
    game: "lol",
    color: "#C89B3C",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/1200px-League_of_Legends_2019_vector.svg.png",
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg",
    comingSoon: true,
    achievements: [
      { id: "val-a1", icon: Trophy, title: "AGCC Season 1 — 1st Place", description: "Champions of the Abu Dhabi Gaming Community Cup Season 1." },
      { id: "val-a2", icon: Medal, title: "AGCC S2 & S3 — 3rd Place", description: "Consistent podium finishes across two consecutive seasons." },
      { id: "val-a3", icon: Target, title: "MENA Regional — 4th Place", description: "Ranked 4th across the entire MENA region." },
      { id: "val-a4", icon: Flame, title: "VCL 2026 Promo/Relg. — 4th Place", description: "Secured our elite standing in the Valorant Champions League." },
      { id: "val-a5", icon: Star, title: "Warpros Vol.9 — 5th Place", description: "5th among top-tier international competitors at Odyssey Warpros Vol. 9." },
      { id: "val-a6", icon: Zap, title: "Insomnia Egypt 2025 — 4th Place", description: "Secured 4th in the national Valorant finals." },
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
    logo: "",
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
    color: "#00D4FF",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Fortnite_-_logo_glyph.png/240px-Fortnite_-_logo_glyph.png",
    comingSoon: false,
    achievements: [],
    players: [
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
    color: "#00FF87",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/FC_24_logo.png/240px-FC_24_logo.png",
    comingSoon: false,
    achievements: [],
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Tekken_8_logo.png/240px-Tekken_8_logo.png",
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

export const partners = [
  {
    id: "nimbus",
    name: "Nimbus Digital",
    logo: "/partner-hexagon.png",
    category: "Technology",
    description: "Powering the next generation of digital infrastructure for NG Esports.",
  },
  {
    id: "toxic",
    name: "Toxic Gaming",
    logo: "/partner-toxic-gaming.png",
    category: "Apparel",
    description: "Official apparel and gear provider for all NG competitive rosters.",
  },
];

export const achievements = [
  {
    id: "ess-2025",
    icon: Trophy,
    title: "ESS 2025 — Champions",
    description: "Crowned champions of the Egyptian Super Series.",
  },
  {
    id: "insomnia",
    icon: Target,
    title: "Insomnia Egypt 2025 — Top 4",
    description: "Valorant — Top 4 finish at Insomnia Egypt.",
  },
  {
    id: "warpros",
    icon: Star,
    title: "Warpros Vol.9 — Top 6",
    description: "Valorant — Top 6 at Warpros against international competition.",
  },
  {
    id: "lol-egypt",
    icon: Crown,
    title: "LOL Egypt 2025 — 1st Place",
    description: "League of Legends Egyptian national champions.",
  },
  {
    id: "lol-mena",
    icon: Gamepad2,
    title: "LOL MENA 2026 — Top 8",
    description: "League of Legends — Among the top 8 teams in the MENA region.",
  },
  {
    id: "tekken-egypt",
    icon: Flame,
    title: "Tekken 8 Egypt 2026 — 1st Place",
    description: "Egyptian national Tekken 8 champions.",
  },
  {
    id: "tekken-mena",
    icon: Medal,
    title: "Tekken 8 MENA 2025 — Top 3",
    description: "Podium finish in the MENA Tekken 8 regional championship.",
  },
  {
    id: "agcc",
    icon: Zap,
    title: "AGCC — 1st Place",
    description: "Abu Dhabi Gaming Community Cup champions.",
  },
];

export const news = [
  {
    id: "news-1",
    title: "NG Secures ESS 2025 Championship",
    date: "Oct 15, 2025",
    category: "Tournament",
    excerpt: "In a dominant performance, NG takes home the most prestigious trophy in Egyptian esports.",
  },
  {
    id: "news-2",
    title: "NG Valorant — AGCC Season 1 Champions",
    date: "Sep 28, 2025",
    category: "Tournament",
    excerpt: "Our Valorant roster conquers the Abu Dhabi Gaming Community Cup Season 1.",
  },
  {
    id: "news-3",
    title: "SuperBrine Claims Tekken 8 Egypt 2026 Title",
    date: "Jan 12, 2026",
    category: "Tournament",
    excerpt: "SuperBrine dominates the Egyptian Tekken 8 national championship, winning 1st place.",
  },
];

export const storeItems = [
  {
    id: "store-1",
    name: "NG Pro Jersey 2026",
    category: "Apparel",
    comingSoon: true,
  },
  {
    id: "store-2",
    name: "NG Stealth Hoodie",
    category: "Apparel",
    comingSoon: true,
  },
  {
    id: "store-3",
    name: "NG Mousepad XL",
    category: "Accessories",
    comingSoon: true,
  },
  {
    id: "store-4",
    name: "Player Signed Merch",
    category: "Collectibles",
    comingSoon: true,
  },
];
