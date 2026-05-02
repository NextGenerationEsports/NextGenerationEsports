import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { StoreItem } from "@/data";

type StoreCardProps = {
  item: StoreItem;
  index: number;
};

export function StoreCard({ item, index }: StoreCardProps) {
  const [focusPoint, setFocusPoint] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={`/store/${item.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-card-border/60 bg-card/60 backdrop-blur-sm transition-colors hover:border-primary/40"
        data-testid={`store-card-${item.id}`}
      >
        <div
          className="relative aspect-[4/4.8] overflow-hidden border-b border-card-border/60 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.24),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            setFocusPoint({ x, y });
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            setFocusPoint({ x: 50, y: 50 });
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_65%)] opacity-80" />
          <motion.img
            src={hovered ? item.cardHoverImage : item.cardImage}
            alt={item.name}
            animate={{
              scale: hovered ? 1.22 : 1.04,
            }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            style={{
              transformOrigin: `${focusPoint.x}% ${focusPoint.y}%`,
            }}
            className="h-full w-full object-cover will-change-transform"
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <span className="rounded-full border border-primary/25 bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-primary backdrop-blur">
              {item.badge}
            </span>
            <span className="rounded-full border border-white/10 bg-background/75 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              {item.status}
            </span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
            <div className="rounded-2xl border border-white/10 bg-background/72 p-4 backdrop-blur-md">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                    {item.category}
                  </p>
                  <p className="font-display text-3xl font-black text-white">
                    {item.priceEgp}
                    <span className="ml-1 text-base font-bold text-white/65">EGP</span>
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">
            {item.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {item.summary}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-card-border/50 pt-4">
            <div className="flex flex-wrap gap-2">
              {item.colors?.slice(0, 2).map((color) => (
                <span
                  key={`${item.id}-${color.label}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/65 px-3 py-1 text-[11px] font-semibold text-white/70"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full border border-white/15"
                    style={{ backgroundColor: color.swatch ?? "#ffffff" }}
                  />
                  {color.label}
                </span>
              ))}
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              View Item
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
