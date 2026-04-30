import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ProposalMetricCardProps {
  label: string;
  description: string;
  value: number;
  format?: "number" | "million";
  plus?: boolean;
  source?: string;
}

function formatMetricValue(value: number, format: "number" | "million", plus: boolean) {
  const formatted =
    format === "million"
      ? `${Math.round(value)}M`
      : new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(value));

  return plus ? `${formatted}+` : formatted;
}

export function ProposalMetricCard({
  label,
  description,
  value,
  format = "number",
  plus = false,
  source,
}: ProposalMetricCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let frame = 0;
    let startTime = 0;
    const duration = 1200;

    const tick = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.14),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">{label}</p>
        <p className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          {formatMetricValue(displayValue, format, plus)}
        </p>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/38">{description}</p>
        {source ? (
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/80">{source}</p>
        ) : null}
      </div>
    </motion.div>
  );
}
