import { Trophy, Star, Users, Gamepad2, Zap, Medal } from "lucide-react";

export const teams = [
  {
    id: "lol",
    name: "League of Legends",
    tagline: "Summoners of the Rift",
    route: "/teams/lol",
    game: "lol",
    color: "#0a1428", // LoL dark blue
    players: [
      { id: "lol-1", name: "Player 1", role: "Top", country: "EG" },
      { id: "lol-2", name: "Player 2", role: "Jungle", country: "EG" },
      { id: "lol-3", name: "Player 3", role: "Mid", country: "EG" },
      { id: "lol-4", name: "Player 4", role: "ADC", country: "EG" },
      { id: "lol-5", name: "Player 5", role: "Support", country: "EG" },
    ],
  },
  {
    id: "valorant",
    name: "Valorant",
    tagline: "Precision. Aggression. Victory.",
    route: "/teams/valorant",
    game: "valorant",
    color: "#ff4655", // Val red
    players: [
      { id: "val-1", name: "Player 1", role: "Duelist", country: "EG" },
      { id: "val-2", name: "Player 2", role: "Initiator", country: "EG" },
      { id: "val-3", name: "Player 3", role: "Controller", country: "EG" },
      { id: "val-4", name: "Player 4", role: "Sentinel", country: "EG" },
      { id: "val-5", name: "Player 5", role: "Flex", country: "EG" },
    ],
  },
  {
    id: "crossfire",
    name: "CrossFire",
    tagline: "Born to Compete",
    route: "/teams/crossfire",
    game: "crossfire",
    color: "#b07d2b", // CF gold
    players: [
      { id: "cf-1", name: "Player 1", role: "Rifler", country: "EG" },
      { id: "cf-2", name: "Player 2", role: "Sniper", country: "EG" },
      { id: "cf-3", name: "Player 3", role: "Entry", country: "EG" },
      { id: "cf-4", name: "Player 4", role: "Support", country: "EG" },
      { id: "cf-5", name: "Player 5", role: "Captain", country: "EG" },
    ],
  },
  {
    id: "fortnite",
    name: "Fortnite",
    tagline: "Build. Adapt. Dominate.",
    route: "/teams/fortnite",
    game: "fortnite",
    color: "#f3af19", // Fortnite yellow
    players: [
      { id: "fn-1", name: "Player 1", role: "IGL", country: "EG" },
      { id: "fn-2", name: "Player 2", role: "Fragger", country: "EG" },
      { id: "fn-3", name: "Player 3", role: "Builder", country: "EG" },
      { id: "fn-4", name: "Player 4", role: "Support", country: "EG" },
    ],
  },
  {
    id: "fc2026",
    name: "FC 2026",
    tagline: "The Beautiful Game, Mastered.",
    route: "/teams/fc2026",
    game: "fc2026",
    color: "#00ff87", // FC green
    players: [
      { id: "fc-1", name: "Player 1", role: "Main", country: "EG" },
      { id: "fc-2", name: "Player 2", role: "Substitute", country: "EG" },
      { id: "fc-3", name: "Player 3", role: "Coach", country: "EG" },
    ],
  },
  {
    id: "tekken-8",
    name: "Tekken 8",
    tagline: "Iron Fists, Iron Will.",
    route: "/teams/tekken-8",
    game: "tekken-8",
    color: "#d01026", // Tekken red
    players: [
      { id: "tk-1", name: "Player 1", role: "Main Fighter", country: "EG" },
      { id: "tk-2", name: "Player 2", role: "Secondary", country: "EG" },
      { id: "tk-3", name: "Player 3", role: "Coach", country: "EG" },
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
    title: "ESS 2025 Champions",
    description: "Crowned champions of the Egyptian Super Series.",
  },
  {
    id: "passion",
    icon: Star,
    title: "Built from passion",
    description: "A legacy forged by dedicated gamers and true fans.",
  },
  {
    id: "community",
    icon: Users,
    title: "Egyptian esports presence",
    description: "The largest and most engaged competitive community in Egypt.",
  },
  {
    id: "rosters",
    icon: Gamepad2,
    title: "6 Competitive Titles",
    description: "Dominating across multiple genres with elite rosters.",
  },
  {
    id: "activations",
    icon: Zap,
    title: "Brand-ready activations",
    description: "Premium partnerships bridging brands and gaming culture.",
  },
  {
    id: "wins",
    icon: Medal,
    title: "Community tournament wins",
    description: "Countless victories at the grassroots level.",
  },
];

export const news = [
  {
    id: "news-1",
    title: "NG Secures ESS 2025 Championship",
    date: "Oct 15, 2025",
    category: "Tournament",
    excerpt: "In a stunning 3-0 sweep, NG takes home the most prestigious trophy in Egyptian esports.",
  },
  {
    id: "news-2",
    title: "Welcoming Nimbus Digital as Title Sponsor",
    date: "Sep 28, 2025",
    category: "Partnership",
    excerpt: "A new era begins as NG partners with Nimbus Digital to revolutionize our infrastructure.",
  },
  {
    id: "news-3",
    title: "New Valorant Roster Announced",
    date: "Sep 10, 2025",
    category: "Roster",
    excerpt: "Meet the five players who will represent NG in the upcoming VCT season.",
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
    name: "Nimbus x NG Hoodie",
    category: "Apparel",
    comingSoon: true,
  },
  {
    id: "store-3",
    name: "NG Stealth Mousepad",
    category: "Accessories",
    comingSoon: true,
  },
];
