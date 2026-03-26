"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto rounded-[3rem] overflow-hidden group"
        >
          {/* Main Card */}
          <div className="relative z-10 p-12 md:p-24 text-center glass-premium border border-white shadow-2xl">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.1),transparent_50%)]" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8"
            >
              Start Your Transformation
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-dark mb-8 leading-[1.1] tracking-tight">
              Ready to Upgrade Your <br />
              <span className="text-premium-gradient">Digital Presence?</span>
            </h2>

            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Partner with Nexus IT Solutions and let us bring your visionary ideas to life with our cutting-edge development expertise.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-linear-to-r from-purple-600 to-cyan-500 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 flex items-center gap-2"
              >
                <span>Contact us </span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="group px-10 py-5 bg-white border border-slate-200 rounded-2xl text-dark font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-linear-to-r hover:from-purple-600 hover:to-cyan-500 hover:text-white hover:border-transparent"
              >
                Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
