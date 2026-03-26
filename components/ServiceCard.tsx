import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  index: string;
  title: string;
  description: string;
  slug: string;
  icon: any;
}

export default function ServiceCard({ index, title, description, slug, icon: Icon }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={`/services/${slug}`}
        className="group relative h-full flex flex-col p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
      >
        {/* Animated Gradient Background on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-br from-dark via-dark/95 to-[#0F172A]" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[60px] rounded-full -translate-y-12 translate-x-12" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full translate-y-12 -translate-x-12" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-10">
            {/* Service Icon with soft background circle */}
            <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-white/10 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Icon size={34} strokeWidth={1.5} />
            </div>

            {/* Index Sticker */}
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-muted/40 uppercase group-hover:text-primary transition-colors">
              {index}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-sans font-extrabold text-dark tracking-tight leading-tight group-hover:text-white transition-colors duration-500">
              {title}
            </h3>

            <p className="text-muted text-base leading-relaxed group-hover:text-white/70 transition-colors duration-500 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Bottom Action */}
          <div className="mt-auto pt-10 flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-widest text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
              LEARN MORE
            </span>
            <div className="w-12 h-12 rounded-2xl border border-black/5 flex items-center justify-center bg-white group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:scale-110 shadow-sm">
              <ArrowRight size={20} className="text-dark group-hover:text-white transition-all duration-500 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
