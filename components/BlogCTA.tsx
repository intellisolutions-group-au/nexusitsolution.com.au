"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto rounded-[3.5rem] overflow-hidden"
        >
          <div className="relative z-10 p-12 md:p-24 text-center glass-premium border border-white shadow-2xl bg-white/70 backdrop-blur-3xl">
            <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.1),transparent_50%)]" />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-full bg-blue-50 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-10"
            >
              Collaborate With Us
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-dark mb-10 leading-[1.1] tracking-tight">
              Got an Idea? We’ll Turn It Into a <span className="text-premium-gradient">Powerful Digital Solution</span>
            </h2>

            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
              Ready to transform your vision into reality? Our team of experts is dedicated to building high-performance, scalable solutions tailored to your success.
            </p>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="group relative px-12 py-6 bg-linear-to-r from-purple-600 to-cyan-500 rounded-full text-white font-black text-xl shadow-[0_20px_50px_-12px_rgba(124,58,237,0.3)] hover:shadow-[0_25px_60px_-12px_rgba(124,58,237,0.5)] transition-all duration-500 overflow-hidden flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Start Your Project</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
