"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe,
  Cpu,
  Database,
  Layers,
  Layout,
  Zap,
  Star,
  Award,
  Globe2
} from "lucide-react";

const techStacks = [
  {
    category: "Mobile Game",
    technologies: ["Poker Game", "Chess Game", "Unity"],
    icon: Code2,
  },
  {
    category: "Custom App",
    technologies: ["React Native", "Flutter", "Android"],
    icon: Smartphone,
  },
  {
    category: "Web Apps",
    technologies: ["AngularJS", "E-Commerce", "Custom CMS"],
    icon: Globe,
  },
  {
    category: "Emerging Tech",
    technologies: ["AI & ML", "Blockchain", "AR / VR"],
    icon: Cpu,
  },
];

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 bg-slate-light overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-dark leading-[1.1] tracking-tight mb-8"
          >
            Future-Ready <br />
            <span className="text-primary italic">Tech Stack</span>
          </motion.h2>
          <p className="text-slate-500 text-lg leading-relaxed mx-auto max-w-2xl">
            We leverage the most advanced and reliable technologies to build scalable, high-performance digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <stack.icon size={28} />
              </div>
              <h4 className="text-dark font-black text-xl mb-6 tracking-tight">{stack.category}</h4>
              <ul className="space-y-4">
                {stack.technologies.map(tech => (
                  <li key={tech} className="flex items-center gap-3 text-slate-500 font-bold text-sm group-hover:text-dark transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 z-0 opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
