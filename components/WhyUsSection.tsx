"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Globe, Lightbulb, Handshake } from "lucide-react";

const whyUsPoints = [
  {
    icon: Zap,
    title: "Flexible Architecture",
    description: "Consistent coding and optimised techniques for fast, reliable, maintainable products.",
  },
  {
    icon: Globe,
    title: "Global Presence",
    description: "Offices spanning India, Australia and Dubai — local expertise with global delivery capability.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "We transform your vision into feature-rich applications that stay ahead of the curve.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "We build trust, value, and long-term success — not just software deliverables.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-dark leading-[1.1] tracking-tight mb-6">
              We Help Businesses <br />
              <span className="text-primary italic">Scale to New Heights</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg">
              Your startup's growth catalyst — seamless app development for both startups and enterprise, delivering real results.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {whyUsPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-5 p-6 bg-slate-light rounded-2xl border border-slate-100 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    <point.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-dark font-bold text-lg mb-1">{point.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] border border-blue-100 shadow-2xl overflow-hidden relative">
              <Image
                src="/images/way-choose-us.jpg"
                alt="Why Choose Us"
                fill
                unoptimized
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
