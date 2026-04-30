import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Camera,
  ChartColumn,
  Clapperboard,
  Crown,
  Download,
  Gamepad2,
  Handshake,
  Mail,
  Megaphone,
  MonitorPlay,
  Radio,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Swords,
  Target,
  Ticket,
  Trophy,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { partners, socialLinks } from "@/data";
import { PartnerCard } from "@/components/PartnerCard";
import { assetPath } from "@/lib/utils";
import { ProposalMetricCard } from "@/components/ProposalMetricCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type AchievementGroup = {
  id: string;
  label: string;
  eyebrow: string;
  items: string[];
};

type CapabilityGroup = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: string[];
};

type RoadmapPhase = {
  phase: string;
  title: string;
  description: string;
};

const proposalDownload = assetPath("ng-partnership-proposal.pdf");

const esportsCards: IconItem[] = [
  {
    title: "Competition",
    description:
      "Professional players and teams compete in organized tournaments with the structure and pressure of traditional sport.",
    icon: Trophy,
  },
  {
    title: "Entertainment",
    description:
      "Esports blends live drama, personalities, highlights, and fandom into a format people actively choose to watch.",
    icon: Sparkles,
  },
  {
    title: "Community",
    description:
      "Fans do not just consume content. They interact, share, react, and build lasting loyalty around teams and creators.",
    icon: Users,
  },
  {
    title: "Media",
    description:
      "The ecosystem runs on short-form content, social storytelling, live production, and repeatable branded moments.",
    icon: Clapperboard,
  },
  {
    title: "Live Streaming",
    description:
      "Streams create real-time visibility and repeated touchpoints between the audience, the talent, and the brand.",
    icon: Radio,
  },
  {
    title: "Brand Opportunities",
    description:
      "For partners, esports creates room for integrated campaigns that feel native instead of interruptive.",
    icon: Handshake,
  },
];

const brandReasons: IconItem[] = [
  {
    title: "Highly Engaged Audience",
    description:
      "Gamers spend hours watching and interacting with content, creating deeper attention than passive ad exposure.",
    icon: Target,
  },
  {
    title: "Young Consumer Access",
    description:
      "Esports gives direct access to Gen Z and young consumers who are highly active online and open to discovering brands.",
    icon: Users,
  },
  {
    title: "Authentic Integration",
    description:
      "Products can become part of the experience through gameplay, streams, community moments, and event activations.",
    icon: ShieldCheck,
  },
  {
    title: "Cross-Platform Visibility",
    description:
      "Exposure can run across live events, streaming platforms, and social media at the same time.",
    icon: MonitorPlay,
  },
  {
    title: "Influencer Impact",
    description:
      "Players and creators act as trusted voices that influence preferences and shape audience attention.",
    icon: Megaphone,
  },
  {
    title: "Real Consumption Moments",
    description:
      "Gaming naturally overlaps with snack and beverage consumption while people play, watch, and spend time online.",
    icon: Zap,
  },
  {
    title: "Community-Driven Marketing",
    description:
      "Esports allows brands to build relationships inside communities instead of relying only on one-way advertising.",
    icon: Crown,
  },
  {
    title: "Measurable Performance",
    description:
      "Campaign activity can be tracked through views, engagement, QR scans, redemptions, and direct interactions.",
    icon: ChartColumn,
  },
  {
    title: "Scalable Growth",
    description:
      "Partnerships can begin with focused activations and expand into broader content, events, and brand ecosystems.",
    icon: ArrowRight,
  },
];

const achievementGroups: AchievementGroup[] = [
  {
    id: "league",
    label: "League of Legends",
    eyebrow: "League of Legends",
    items: [
      "Top 8 in MENA",
      "Esports Summit 2025 LAN Event — 1st Place",
      "Top 3 in Egypt",
    ],
  },
  {
    id: "valorant",
    label: "Valorant",
    eyebrow: "Valorant",
    items: [
      "MENA Regional Championship — 4th Place under the Egyptian flag",
      "Abu Dhabi Gaming Community Cup S1 — 1st Place",
      "VCL 2026 Promotion/Relegation — 4th Place",
      "Odyssey Warpros Vol. 9 — 5th Place",
      "Abu Dhabi Gaming Community Cup S2 & S3 — 3rd Place podium finishes",
      "Insomnia Egypt 2025 — 4th Place",
    ],
  },
  {
    id: "other-games",
    label: "Other Games",
    eyebrow: "Other Games",
    items: [
      "Insomnia 2026 Tekken 8 Tournament — 1st Place",
      "Tekken 8 MENA Region 2025 — Top 3",
      "Insomnia 2026 Fortnite Tournament — 1st Place",
      "Insomnia 2026 FC26 Tournament — Top 4",
      "FC26 Away To Play Tournament 2026 — 1st Place",
      "FC26 GameSpot Tournament 2026 — 1st Place",
    ],
  },
];

const metrics = [
  {
    label: "Gamers in Egypt",
    description: "31M gamers in Egypt according to NTRA 2026.",
    value: 31,
    format: "million" as const,
  },
  {
    label: "Event Attendees",
    description: "35,000+ attendees across events that NG won at.",
    value: 35000,
    plus: true,
  },
  {
    label: "Total Views",
    description: "59M+ total views across live streams and recorded content.",
    value: 59,
    format: "million" as const,
    plus: true,
  },
  {
    label: "Engagements",
    description: "54M+ interactions including likes, shares, comments, and clicks.",
    value: 54,
    format: "million" as const,
    plus: true,
  },
  {
    label: "Live Viewers",
    description: "10,000+ active real-time viewers during streams.",
    value: 10000,
    plus: true,
  },
];

const partnerCapabilities: CapabilityGroup[] = [
  {
    title: "Content & Media",
    subtitle: "Creative execution built for esports attention spans.",
    icon: Video,
    items: [
      "Content creators with 112K+ followers",
      "300+ daily live viewers",
      "Script writers, video editors, designers, photographer, and videographer",
    ],
  },
  {
    title: "Competitive Teams",
    subtitle: "Roster-led visibility inside competitive gaming culture.",
    icon: Gamepad2,
    items: [
      "Players with more than 60K+ followers on Instagram",
      "Competitive rosters across NG's active titles",
      "Talent-led visibility through players, creators, and social presence",
    ],
  },
  {
    title: "Events & Activations",
    subtitle: "On-ground access where gaming communities gather.",
    icon: Ticket,
    items: [
      "On-ground and event activations",
      "Direct connections to major events in Egypt",
      "Community and database access",
      "Product sampling and trial",
    ],
  },
  {
    title: "Brand Integration",
    subtitle: "Partnership visibility across the full NG ecosystem.",
    icon: Camera,
    items: [
      "Brand integration and content",
      "Sponsor logo on jerseys and designs",
      "Media exposure with sponsor branding",
    ],
  },
  {
    title: "Measurement & Reporting",
    subtitle: "Campaigns designed around measurable interaction.",
    icon: ScanSearch,
    items: [
      "Views and engagement tracking",
      "QR scans, redemptions, and direct interaction measurement",
      "Clear monthly KPI reporting structure",
    ],
  },
];

const marketingActivations: IconItem[] = [
  {
    title: "Branded Content Series",
    description:
      "Build recurring content that keeps your products or services visible inside gaming-led storytelling.",
    icon: Clapperboard,
  },
  {
    title: "Player & Creator Features",
    description:
      "Use NG players and creators to present the brand in a voice the audience already trusts.",
    icon: Users,
  },
  {
    title: "Live Stream Presence",
    description:
      "Bring the brand into streams through shoutouts, overlays, and repeated live exposure moments.",
    icon: Radio,
  },
  {
    title: "Interactive Campaign Hooks",
    description:
      "Activate the community through challenges, audience participation, and shareable engagement moments.",
    icon: Zap,
  },
  {
    title: "Tournament Activations",
    description:
      "Use tournaments and bootcamp moments as high-attention environments for branded interaction.",
    icon: Trophy,
  },
  {
    title: "Product Placement",
    description:
      "Place products naturally inside creator content, media shoots, or live gaming environments.",
    icon: Camera,
  },
  {
    title: "Jersey & Visual Branding",
    description:
      "Extend visibility through jerseys, creative assets, social graphics, and recurring team media.",
    icon: ShieldCheck,
  },
  {
    title: "On-Ground Presence",
    description:
      "Create sampling, booth, or event-touchpoint visibility where gaming audiences gather in person.",
    icon: Ticket,
  },
  {
    title: "Trackable Campaigns",
    description:
      "Use QR codes, redemptions, and other measurable touchpoints to understand audience response.",
    icon: ScanSearch,
  },
  {
    title: "Community Storytelling",
    description:
      "Support demand through repeated social exposure, community campaigns, and creator-led narratives.",
    icon: Megaphone,
  },
];

const roadmapPhases: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Brand Introduction",
    description:
      "Introduce the partner to NG's audience through announcement content, social posts, visual branding, and community messaging.",
  },
  {
    phase: "Phase 2",
    title: "Content Integration",
    description:
      "Activate branded videos, player content, creator collaborations, live stream presence, and social media campaigns.",
  },
  {
    phase: "Phase 3",
    title: "Event Activation",
    description:
      "Use tournaments, bootcamps, live events, and on-ground experiences for sampling, engagement, and direct interaction.",
  },
  {
    phase: "Phase 4",
    title: "Measurement & Optimization",
    description:
      "Track views, engagement, clicks, QR scans, redemptions, community response, and content performance to refine the next wave.",
  },
];

const challengePoints = [
  "Brands still see esports as just gaming",
  "Limited structured sponsorships in Egypt",
  "Low brand ownership in the gaming space",
  "Untapped snack and product consumption moments",
];

const opportunityPoints = [
  "Direct access to Egypt's gaming community",
  "Event presence with community interaction",
  "Branded content and media visibility",
  "Measurable partnership activity and campaign learning",
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="max-w-3xl"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/80">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-white/42 md:text-lg">{description}</p>
    </motion.div>
  );
}

function GlassCard({
  title,
  description,
  icon: Icon,
  index,
}: IconItem & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          <Icon size={18} />
        </div>
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/40">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Partners() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <section className="relative overflow-hidden border-b border-white/[0.06] pt-28">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.04]">
          <span className="font-display text-[34vw] font-black uppercase leading-none text-primary">NG</span>
        </div>
        <div className="absolute left-[8%] top-32 h-56 w-56 rounded-full bg-primary/18 blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-indigo-500/10 blur-[150px]" />

        <div className="container relative z-10 mx-auto px-4 pb-20 md:px-6 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
                <img src={assetPath("ng-icon.png")} alt="NG logo" className="h-7 w-auto" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
                  Partner With NG
                </span>
              </div>

              <h1 className="font-display text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl lg:text-[5.25rem]">
                Partner With{" "}
                <span className="bg-gradient-to-r from-primary via-purple-300 to-primary bg-clip-text text-transparent">
                  Next Generation Esports
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/46 md:text-xl">
                Next Generation Esports connects brands with Egypt's gaming audience through competitive teams,
                creators, live content, events, and measurable community activations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#partner-offerings"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(124,58,237,0.45)]"
                >
                  Explore Partnership Opportunities
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#partner-achievements"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-transparent px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:border-primary hover:bg-primary/10"
                >
                  View Our Achievements
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="grid gap-4"
            >
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/85">Audience Snapshot</p>
                    <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-white">
                      Built For Brand Visibility
                    </h2>
                  </div>
                  <img
                    src={assetPath("ng-logo-white.png")}
                    alt="Next Generation logo"
                    className="h-14 w-auto opacity-85 mix-blend-screen"
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/42">
                  NG combines competitive teams, creator coverage, event access, and community touchpoints into
                  partnership opportunities designed for measurable engagement.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {metrics.slice(0, 3).map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.18 + index * 0.08 }}
                    className="rounded-2xl border border-white/[0.08] bg-[#0d0d14]/90 p-5"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">{metric.label}</p>
                    <p className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-white">
                      {metric.format === "million" ? `${metric.value}M` : metric.value.toLocaleString("en-US")}
                      {metric.plus ? "+" : ""}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/38">{metric.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <SectionHeader
          eyebrow="What Is Esports?"
          title="A Competitive Industry Built Around Attention, Culture, and Community"
          description="Esports is the professional side of video gaming, where individual players and teams compete in organized tournaments similar to traditional sports. It combines competition, entertainment, media, live streaming, and community into a format that people actively follow."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {esportsCards.map((card, index) => (
            <GlassCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-card/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Why Esports Matters For Brands"
            title="A Marketing Channel Designed Around Active Attention"
            description="The proposal frames esports as more than gaming. It is a marketing environment where audience attention, creator trust, community participation, and event visibility can work together to increase brand visibility and measurable engagement."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {brandReasons.map((reason, index) => (
              <GlassCard key={reason.title} {...reason} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <SectionHeader
            eyebrow="Who We Are"
            title="A Professional Esports Organization Built To Raise The Standard"
            description="Founded in 2025, Next Generation Esports is presented in the proposal as a professional esports organization and digital media-focused team. The mission is to bridge the gap between local talent and international standards through structured management, competitive rosters, bootcamps, and content production."
          />

          <div className="grid gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/80">Founded</p>
              <p className="mt-3 font-display text-4xl font-black uppercase text-white">2025</p>
              <p className="mt-3 text-sm leading-relaxed text-white/40">
                NG was founded in 2025 with a focus on structured growth, competitive discipline, and media-led visibility.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/80">Built For</p>
                <p className="mt-3 font-display text-2xl font-black uppercase text-white">Competitive Structure</p>
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  The proposal highlights structured management, competitive rosters, bootcamps, and content production as core pillars.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/80">Active Titles</p>
                <p className="mt-3 font-display text-2xl font-black uppercase text-white">LoL, Valorant, FC26, Tekken 8, Fortnite</p>
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  These are the relevant titles already reflected across the proposal and the current website footprint.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="partner-achievements" className="border-y border-white/[0.06] bg-card/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Our Achievements"
            title="Competitive Results That Give The Brand Real Context"
            description="The proposal already documents performance across multiple titles. The results below are presented from the proposal data, organized by game for faster scanning."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Tabs defaultValue="league" className="w-full">
              <TabsList className="h-auto flex-wrap gap-2 rounded-2xl bg-white/[0.04] p-2">
                {achievementGroups.map((group) => (
                  <TabsTrigger
                    key={group.id}
                    value={group.id}
                    className="rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-[0.22em] data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {group.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {achievementGroups.map((group) => (
                <TabsContent key={group.id} value={group.id} className="mt-8">
                  <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                        <Trophy size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/80">{group.eyebrow}</p>
                        <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">
                          Proposal-Verified Highlights
                        </h3>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {group.items.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: index * 0.04 }}
                          viewport={{ once: true }}
                          className="rounded-2xl border border-white/[0.08] bg-[#0d0d14]/85 p-5"
                        >
                          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary/70">
                            Achievement {index + 1}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-white/82">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <SectionHeader
          eyebrow="Esports In Numbers"
          title="Verified Reach From The Proposal Data"
          description="These numbers are taken directly from the proposal. They describe the scale of the Egyptian gaming market and the visibility surrounding NG's competitive and content activity."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {metrics.map((metric) => (
            <ProposalMetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <p className="mt-5 text-sm text-white/32">
          Data source channels: Twitch / Kick / Youtube / Instagram / Facebook / Tiktok
        </p>
      </section>

      <section id="partner-offerings" className="border-y border-white/[0.06] bg-card/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="What NG Provides To Partners"
            title="A Partnership Package Built Around Media, Teams, Events, and Measurement"
            description="NG's value to partners is not one single deliverable. It is the combination of talent, content capabilities, event access, brand integration, and measurable interaction across multiple gaming touchpoints."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {partnerCapabilities.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">{group.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/40">{group.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-[#0d0d14]/75 p-4">
                        <div className="mt-0.5 text-primary">
                          <ShieldCheck size={15} />
                        </div>
                        <p className="text-sm leading-relaxed text-white/78">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <SectionHeader
            eyebrow="How We Market Sponsor Products"
            title="Strategic Activation Across Content, Community, and Live Moments"
            description="Partnership campaigns can be structured to increase brand visibility, drive product trial, create measurable engagement, and connect your brand with the gaming community through repeated exposure."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {marketingActivations.map((item, index) => (
              <GlassCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-card/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Strategic Partnership Roadmap"
            title="A Four-Phase Framework For Launching and Growing The Partnership"
            description="The goal is to move from introduction to measurable execution without making unrealistic promises. Each phase builds on the previous one."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-purple-300 to-transparent" />
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/80">{phase.phase}</p>
                <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight text-white">{phase.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/40">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Swords size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/80">Challenges</p>
                <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white">What The Market Still Misses</h2>
              </div>
            </div>

            <div className="space-y-3">
              {challengePoints.map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.06] bg-[#0d0d14]/75 p-4">
                  <p className="text-sm leading-relaxed text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Target size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/80">Opportunity</p>
                <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white">Where The Right Partner Can Win</h2>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/42">
              The opportunity is not only visibility. It is entering Egypt's gaming space with community access,
              event presence, branded content, and measurable campaign activity through a team that already understands
              the audience.
            </p>

            <div className="mt-6 space-y-3">
              {opportunityPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-[#0d0d14]/75 p-4">
                  <div className="mt-0.5 text-primary">
                    <ShieldCheck size={15} />
                  </div>
                  <p className="text-sm leading-relaxed text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-card/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Current Partners"
            title="Existing Market Relationships and Active Brand Trust"
            description="These are the current partners already featured across the NG website. For potential partners, this section acts as visible proof that NG is already building real-world relationships inside the market."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {partners.map((partner, index) => (
              <PartnerCard key={partner.id} {...partner} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-card/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8 md:p-12"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-primary/80">Why Support NG?</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              NG Is Not Starting From Zero
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/44">
              The proposal is clear: NG has already built presence, achievements, audience access, and event participation organically and without financial backing. With the right partner, that foundation can scale faster and create stronger business-facing impact.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d14]/80 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/75">Organic Proof</p>
                <p className="mt-3 text-sm leading-relaxed text-white/78">
                  The proposal states that NG reached this stage organically, without financial backing.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d14]/80 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/75">Audience Access</p>
                <p className="mt-3 text-sm leading-relaxed text-white/78">
                  NG already operates inside competitive titles, creator content, and event environments where gaming audiences are active.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d14]/80 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/75">Scale Potential</p>
                <p className="mt-3 text-sm leading-relaxed text-white/78">
                  A capable partner can help convert that organic traction into wider reach, stronger visibility, and measurable campaign value.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-primary/20 bg-primary/10 p-6">
              <p className="font-display text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl">
                If we achieved this organically, imagine what we can build with the right partner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8 text-center md:p-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.16),transparent_58%)]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-primary/80">Final Call</p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              Let's Build The Next Gaming Partnership Together
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/44">
              If your brand wants a smarter entry into gaming culture, NG can help build a partnership that is visible,
              community-led, and measurable.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/links"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(124,58,237,0.45)]"
              >
                Contact Us
                <Mail size={16} />
              </Link>
              <a
                href={proposalDownload}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-transparent px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:border-primary hover:bg-primary/10"
              >
                Download Proposal
                <Download size={16} />
              </a>
              <a
                href={socialLinks.email}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.14] bg-white/[0.03] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:border-white/30 hover:bg-white/[0.06]"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
