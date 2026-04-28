import { motion } from "framer-motion";
import { Link } from "wouter";

interface NewsCardProps {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  index: number;
}

export function NewsCard({ id, title, date, category, excerpt, index }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-xl overflow-hidden bg-card/50 border border-card-border/50 hover:border-primary/50 transition-all flex flex-col"
      data-testid={`news-card-${id}`}
    >
      <div className="h-48 w-full bg-gradient-to-br from-primary/20 to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider">{category}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-primary text-xs font-semibold mb-2">{date}</span>
        <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow">{excerpt}</p>
        <Link href={`/news`} className="text-sm font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
          Read More →
        </Link>
      </div>
    </motion.div>
  );
}
