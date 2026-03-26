"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Globe, Zap, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 200, suffix: "+", label: "Happy Clients", color: "text-blue-600" },
  { icon: Globe, value: 30, suffix: "+", label: "Countries", color: "text-indigo-600" },
  { icon: Zap, value: 500, suffix: "+", label: "Projects", color: "text-sky-600" },
  { icon: Award, value: 98, suffix: "%", label: "Retention", color: "text-blue-500" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function FloatingStats() {
  return (
    <section className="relative -mt-32 z-40 px-6">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_80px_rgba(37,99,235,0.1)] grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => {
            const IconComp = stat.icon;
            return (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center ${stat.color} mb-5 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm border border-slate-100`}>
                  <IconComp size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
