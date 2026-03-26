"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Zap, 
  Globe, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Lightbulb, 
  Target, 
  Users, 
  Smartphone, 
  Layers, 
  MessagesSquare 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Components
import ModernTestimonials from "@/components/ModernTestimonials";
import CTASection from "@/components/CTASection";

// Data
import { whyUsMainPoints, stats, workflowSteps } from "@/data/whyChooseUs";





function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={countRef} className="text-5xl md:text-7xl font-sans font-black text-slate-900 mb-2">
      <span className="text-premium-gradient">{count}</span>
      <span className="text-primary">{suffix}</span>
    </div>
  );
}

export default function WhyChooseUsPage() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yTranslate = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* 🚀 Hero Section - Light Glassmorphism */}
      <section 
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-100/40 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            style={{ opacity, y: yTranslate }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white shadow-sm mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary font-bold">
                Excellence in Technology
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-sans font-extrabold text-slate-900 mb-10 tracking-tight leading-[0.9]">
              Why Choose <br />
              <span className="text-premium-gradient">Nexus IT?</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-12 leading-relaxed font-medium"
            >
              We combine futuristic thinking with technical mastery to deliver 
              award-winning digital solutions that propel your business forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-linear-to-r from-purple-600 to-cyan-500 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 flex items-center gap-2"
              >
                <span>Get Started Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 💡 Features Section - Soft Glass Cards */}
      <section className="py-24 md:py-32 relative bg-linear-to-b from-white to-blue-50/50">
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold tracking-[0.2em] uppercase inline-block mb-4"
            >
              Our Core Strengths
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold text-slate-900 mb-6 tracking-tight">
              A Partner Dedicated to <br />
              <span className="text-premium-gradient">Your Success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsMainPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 40px 80px -20px rgba(0,0,0,0.05)" }}
                className="group p-10 rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-black/2 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${point.color} flex items-center justify-center ${point.iconColor} mb-8 transition-transform duration-500 group-hover:scale-110`}>
                  <point.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{point.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {point.description}
                </p>
                
                {/* Subtle accent border on hover */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/5 rounded-[3rem] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Stats Section - Clean Gradient Style */}
      <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/20 via-white to-purple-50/20" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center lg:items-start"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <div className="h-1 w-12 bg-linear-to-r from-primary/60 to-secondary/60 rounded-full mb-4" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500 font-bold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧠 Workflow Section - Step Cards */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-20">
             <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary mb-6 block font-bold"
            >
              How We Work
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold text-slate-900 mb-6 tracking-tight">
              Our Systematic <br />
              <span className="text-premium-gradient">Workflow</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflowSteps.map((step, i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="relative group p-8 rounded-4xl bg-white border border-slate-100 hover:border-primary/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="text-4xl font-black text-slate-100 absolute top-4 right-6 group-hover:text-primary transition-colors duration-500 group-hover:opacity-10 opacity-100">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <step.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ModernTestimonials />
      <CTASection />
      
    </main>
  );
}
