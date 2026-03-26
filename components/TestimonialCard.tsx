"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card p-8 relative overflow-hidden group border border-blue-100 hover:border-primary/20 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-6 text-primary/5 group-hover:text-primary/10 transition-colors">
        <Quote size={80} />
      </div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <p className="text-slate-600 text-lg italic mb-8 leading-relaxed font-normal">
          "{quote}"
        </p>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-tr from-primary to-secondary flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-blue-500/20">
            {author.charAt(0)}
          </div>
          <div>
            <h4 className="text-slate-900 font-bold">{author}</h4>
            <p className="text-sm text-slate-500 font-medium">{role}, <span className="text-primary">{company}</span></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
