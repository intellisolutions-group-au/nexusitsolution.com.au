"use client";

import { Rocket, Store, Building2, Factory, ArrowRight } from "lucide-react";
import Link from "next/link";

const focusCards = [
  {
    number: "01",
    label: "Startups",
    title: "Agile & Dynamic",
    desc: "Fast-paced solutions designed to help new ventures scale quickly and efficiently.",
    icon: <Rocket size={24} />,
    color: "indigo",
    animation: "animate-bounce-hover",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    number: "02",
    label: "Small Business",
    title: "Tailored Strategies",
    desc: "Customized digital paths to meet unique needs and foster sustainable growth.",
    icon: <Store size={24} />,
    color: "sky",
    animation: "animate-spin-hover",
    gradient: "from-sky-400 to-blue-500"
  },
  {
    number: "03",
    label: "Mid Enterprises",
    title: "Scalable Operations",
    desc: "Advanced infrastructure and software to streamline complex business processes.",
    icon: <Building2 size={24} />,
    color: "green",
    animation: "animate-tada-hover",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    number: "04",
    label: "Large Enterprises",
    title: "Future-Proof Tech",
    desc: "Enterprise-grade applications to maintain market leadership and robust security.",
    icon: <Factory size={24} />,
    color: "amber",
    animation: "animate-rubberband-hover",
    gradient: "from-amber-500 to-orange-600"
  }
];

export default function ClientFocusSection() {
  return (
    <section className="w-full py-24 bg-bg-subtle relative overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-bold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1]">
            Our <span className="text-premium-gradient">Services</span> Cater To
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium px-2">
            We provide specialized IT consultancy and development across various business scales, ensuring the right technology for the right goal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-none">
            {focusCards.map((card, idx) => (
              <div
                key={idx}
                className="group relative glass-card-premium p-6 md:p-8 overflow-hidden"
              >
                {/* 3px Gradient Top Border on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Card Number */}
                <span className="absolute top-6 right-8 text-slate-200 text-4xl font-display font-black leading-none group-hover:text-slate-300 transition-colors duration-300 select-none">
                  {card.number}
                </span>

                <div className="relative z-10 space-y-6">
                  {/* Icon Container with CSS Animation */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30`}>
                    <div className={`${card.animation} flex items-center justify-center`}>
                      {card.icon}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                      {card.label}
                    </span>
                    <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* <Link 
                    href="/services" 
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest group/link transition-all"
                  >
                    Explore <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link> */}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Stacked Images */}
          <div className="space-y-8 relative">
            {/* Top Image */}
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.03]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                alt="Enterprise Ready"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex items-center gap-2 border border-white/50">
                <Building2 size={18} className="text-slate-800" />
                <span className="font-bold text-slate-800 text-sm">Enterprise Ready</span>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent group-hover:from-slate-900/20 transition-all duration-500" />
            </div>

            {/* Bottom Image */}
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.03] md:ml-[10%]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Startup Focused"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex items-center gap-2 border border-white/50">
                <Rocket size={18} className="text-slate-800" />
                <span className="font-bold text-slate-800 text-sm">Startup Focused</span>
              </div>
              <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 to-transparent group-hover:from-slate-900/20 transition-all duration-500" />
            </div>

            {/* Background Decorative Shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
