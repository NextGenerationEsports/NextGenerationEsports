import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Careers() {
  const jobs = [
    { id: "job-1", title: "Social Media Manager", department: "Content", location: "Cairo, EG (Hybrid)", type: "Full-time" },
    { id: "job-2", title: "Video Editor", department: "Production", location: "Remote", type: "Contract" },
    { id: "job-3", title: "Performance Coach (Valorant)", department: "Esports", location: "Cairo, EG", type: "Full-time" },
    { id: "job-4", title: "Partnerships Manager", department: "Commercial", location: "Remote", type: "Full-time" },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight mb-4">
            Join the <span className="text-primary">Squad</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We're always looking for passionate, driven individuals to help build the future of esports in MENA.
          </p>
        </motion.div>

        <div className="grid gap-4 max-w-4xl">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 border border-card-border p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/50 transition-colors group"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">{job.department}</span>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wider">{job.type}</span>
                </div>
                <h3 className="font-display font-bold text-2xl group-hover:text-primary transition-colors">{job.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{job.location}</p>
              </div>
              <button className="px-6 py-3 bg-card-border text-white rounded-lg font-bold uppercase tracking-wider hover:bg-primary hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all md:w-auto w-full text-center flex items-center justify-center gap-2">
                <Briefcase size={16} /> Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
