"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Users, Globe, Zap, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { icon: Zap, value: "200+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Expert Developers" },
  { icon: Globe, value: "3", label: "Global Offices" },
  { icon: Award, value: "98%", label: "Satisfaction Rate" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CompanyIntro() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: Image Composite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              {/* Main image with premium frame */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/10 rounded-[3rem] -rotate-3 transition-transform duration-700 hover:rotate-0" />
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white shadow-2xl glass-premium">
                <Image
                  src="/nexus_team_collaboration.png"
                  alt="Nexus IT Solutions Team"
                  fill
                  className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                />
              </div>

              {/* Floating feature card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 glass-premium p-8 rounded-3xl shadow-2xl max-w-[240px] border border-white"
              >
                <div className="text-4xl mb-4 bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center">
                  🏆
                </div>
                <div className="text-dark font-black text-xl mb-1 leading-tight">Trusted Technology Partner</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-2">India · Australia · Dubai</div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 self-start"
            >
              About Our Company
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-black text-dark mb-8 leading-[1.1] tracking-tight"
            >
              Our Success as a <br />
              <span className="text-primary italic">Trusted Partner</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 mb-12">
              <p className="text-slate-500 text-lg leading-relaxed">
                At Nexus IT Solution, we specialise in delivering cutting-edge mobile and software development solutions tailored to your business needs. Our innovative approach, technical expertise, and commitment to excellence set us apart.
              </p>

              <p className="text-slate-500 text-lg leading-relaxed">
                With a strong foundation in digital transformation, we are a leading partner in shaping the future of software and app development.
              </p>

              <ul className="space-y-4">
                {["Commitment to transparency & innovation", "Expert team across diverse industries", "World-class tech with cost-effective pricing"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-dark font-bold text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <ArrowRight size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats Grid - Refined */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat) => {
                const IconComp = stat.icon;
                return (
                  <div key={stat.label} className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-light border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <IconComp size={22} />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-dark leading-none mb-1 tracking-tighter">{stat.value}</div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-600 to-cyan-500 rounded-2xl text-white font-bold text-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                Learn More About Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
