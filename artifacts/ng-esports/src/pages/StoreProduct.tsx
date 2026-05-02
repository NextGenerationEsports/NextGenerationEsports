import { useState } from "react";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Package2, Ruler, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { storeItems, type StoreItem, type StoreOption } from "@/data";
import NotFound from "@/pages/not-found";

function ProductOptionPill({
  option,
  kind,
}: {
  option: StoreOption;
  kind: "size" | "color";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3 transition-colors",
        option.available
          ? "border-primary/25 bg-primary/8 text-white"
          : "border-white/10 bg-background/55 text-white/45",
      )}
    >
      <div className="flex items-center gap-2">
        {kind === "color" && option.swatch ? (
          <span
            className="h-3.5 w-3.5 rounded-full border border-white/15"
            style={{ backgroundColor: option.swatch }}
          />
        ) : null}
        <span className="font-display text-lg font-bold uppercase tracking-wide">
          {option.label}
        </span>
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
        {option.note ?? (option.available ? "Preview" : "Unavailable")}
      </p>
    </div>
  );
}

function DetailFeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Sparkles;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="rounded-[1.5rem] border border-card-border/60 bg-card/55 p-5 backdrop-blur-sm"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
        <Icon size={18} />
      </div>
      <h3 className="font-display text-xl font-black uppercase tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </motion.div>
  );
}

export default function StoreProduct() {
  const params = useParams<{ slug: string }>();
  const product = storeItems.find((entry) => entry.slug === params.slug) as StoreItem | undefined;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [focusPoint, setFocusPoint] = useState({ x: 50, y: 50 });

  if (!product) {
    return <NotFound />;
  }

  const currentImage = product.gallery[activeIndex] ?? product.gallery[0];

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.08),transparent_22%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <Link
          href="/store"
          className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-white"
        >
          <ArrowLeft size={12} /> Back To Store
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div
              className="group relative overflow-hidden rounded-[2rem] border border-card-border/60 bg-card/50 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => {
                setIsZoomed(false);
                setFocusPoint({ x: 50, y: 50 });
              }}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;
                setFocusPoint({ x, y });
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_55%)]" />
              <motion.img
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                initial={{ opacity: 0.4, scale: 0.96 }}
                animate={{ opacity: 1, scale: isZoomed ? 2.05 : 1.02 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                style={{ transformOrigin: `${focusPoint.x}% ${focusPoint.y}%` }}
                className="aspect-[4/4.6] w-full object-cover will-change-transform"
              />

              <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-primary backdrop-blur-sm">
                Hover To Inspect
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.gallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "overflow-hidden rounded-[1.15rem] border bg-card/50 transition-all",
                    activeIndex === index
                      ? "border-primary shadow-[0_0_0_1px_rgba(124,58,237,0.5)]"
                      : "border-card-border/60 hover:border-primary/30",
                  )}
                >
                  <img src={image.src} alt={image.alt} className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="lg:sticky lg:top-28"
          >
            <div className="rounded-[2rem] border border-card-border/60 bg-card/55 p-6 backdrop-blur-sm md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-primary">
                  {product.badge}
                </span>
                <span className="rounded-full border border-white/10 bg-background/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                  {product.category}
                </span>
              </div>

              <h1 className="mt-5 font-display text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap items-end gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                    Price
                  </p>
                  <p className="font-display text-5xl font-black text-white">
                    {product.priceEgp}
                    <span className="ml-2 text-lg font-bold text-white/65">EGP</span>
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-background/55 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-primary">
                    Status
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/80">{product.status}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-card-border/60 bg-background/45 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-primary">Category</p>
                  <p className="mt-2 text-sm font-semibold text-white/80">{product.category}</p>
                </div>
                <div className="rounded-2xl border border-card-border/60 bg-background/45 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-primary">Details</p>
                  <p className="mt-2 text-sm font-semibold text-white/80">
                    {product.materials ? product.materials.join(" + ") : "Surface-focused accessory"}
                  </p>
                </div>
                <div className="rounded-2xl border border-card-border/60 bg-background/45 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-primary">Finish</p>
                  <p className="mt-2 text-sm font-semibold text-white/80">
                    {product.printMethod ?? "Built for precision and tracking"}
                  </p>
                </div>
              </div>

              {product.sizes?.length ? (
                <div className="mt-8">
                  <div className="mb-4 flex items-center gap-2">
                    <Ruler size={16} className="text-primary" />
                    <h2 className="font-display text-xl font-black uppercase tracking-tight text-white">
                      Sizes
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {product.sizes.map((size) => (
                      <ProductOptionPill key={`${product.id}-${size.label}`} option={size} kind="size" />
                    ))}
                  </div>
                  {product.availabilityNote ? (
                    <p className="mt-3 text-sm text-white/45">{product.availabilityNote}</p>
                  ) : null}
                </div>
              ) : null}

              {product.colors?.length ? (
                <div className="mt-8">
                  <div className="mb-4 flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    <h2 className="font-display text-xl font-black uppercase tracking-tight text-white">
                      Colors
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {product.colors.map((color) => (
                      <ProductOptionPill key={`${product.id}-${color.label}`} option={color} kind="color" />
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8">
                <div className="mb-4 flex items-center gap-2">
                  <Package2 size={16} className="text-primary" />
                  <h2 className="font-display text-xl font-black uppercase tracking-tight text-white">
                    Product Specs
                  </h2>
                </div>
                <div className="space-y-3">
                  {product.specs.map((spec) => (
                    <div
                      key={`${product.id}-${spec}`}
                      className="flex items-start gap-3 rounded-2xl border border-card-border/55 bg-background/45 px-4 py-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Check size={14} />
                      </span>
                      <p className="text-sm text-white/80">{spec}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/links"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-white transition-all hover:bg-primary/85"
                >
                  Contact NG <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/store"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Keep Browsing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <DetailFeatureCard
            icon={Sparkles}
            title="Design Language"
            body={product.summary}
          />
          <DetailFeatureCard
            icon={Package2}
            title="What You Get"
            body={product.featureBullets[0] ?? product.description}
          />
          <DetailFeatureCard
            icon={Ruler}
            title="Availability Notes"
            body={product.availabilityNote ?? product.featureBullets[1] ?? product.description}
          />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {product.featureBullets.map((bullet, index) => (
            <motion.div
              key={`${product.id}-bullet-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-card-border/60 bg-background/40 p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-primary">
                Highlight 0{index + 1}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{bullet}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
