"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thorne",
    content: "The custom ERP Nexus built for us has streamlined our entire supply chain. Their technical depth and architectural precision are unmatched.",
    image: "/nexus_team_collaboration.png",
    rating: 5,
  },
  {
    name: "Elena Vance",
    content: "Our new e-commerce platform's conversion rate jumped by 50% after the Nexus redesign. It's clean, lightning-fast, and visually stunning.",
    image: "/nexus_innovation_workspace.png",
    rating: 5,
  },
  {
    name: "Julian Koda",
    content: "Security was our top priority, and Nexus delivered a bulletproof smart contract architecture that our auditors praised for its clean logic.",
    image: "/nexus_tech_collaboration_premium.png",
    rating: 5,
  },
  {
    name: "Sonia G.",
    content: "Since Nexus took over our app maintenance, our uptime has been a solid 99.9%. They are incredibly proactive and reliable partners.",
    image: "/nexus_team_collaboration.png",
    rating: 5,
  },
  {
    name: "David Wu",
    content: "Deploying to both iOS and Android with a single codebase was seamless with Nexus. The performance is indistinguishable from native apps.",
    image: "/nexus_innovation_workspace.png",
    rating: 5,
  },
  {
    name: "Dr. Aris Thorne",
    content: "The immersive VR training module Nexus created has transformed how we onboard our engineers. It's the future of technical education.",
    image: "/nexus_tech_collaboration_premium.png",
    rating: 5,
  },
  {
    name: "Garry V.",
    content: "Nexus built a chess engine interface that is both powerful and intuitive. Our users are absolutely hooked on the new multiplayer features.",
    image: "/nexus_team_collaboration.png",
    rating: 5,
  },
  {
    name: "Sita Sharma",
    content: "Our mobile app's user retention skyrocketed thanks to the intuitive UX and smooth performance optimizations Nexus implemented.",
    image: "/nexus_innovation_workspace.png",
    rating: 5,
  },
  {
    name: "Robert Ford",
    content: "The predictive analytics model Nexus developed has allowed us to forecast demand with incredible accuracy. A total game changer.",
    image: "/nexus_tech_collaboration_premium.png",
    rating: 5,
  },
];

export default function ModernTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-white overflow-hidden relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Testimonials
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-dark leading-[1.1] tracking-tight"
          >
            What Our <br />
            <span className="text-primary italic">Partners Say</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[550px] md:min-h-[450px] flex items-center justify-center">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,87,255,0.03),transparent_70%)] pointer-events-none" />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="w-full bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-slate-100 flex flex-col items-center text-center glass-premium relative"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-primary">
                   <Quote size={32} />
                </div>

                <div className="flex gap-1 mb-10 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" strokeWidth={0} />)}
                  <span className="ml-2 text-slate-400 font-black text-sm">5.0</span>
                </div>

                <p className="text-xl md:text-3xl font-display font-medium text-dark leading-relaxed mb-12 italic">
                  "{testimonials[index].content}"
                </p>

                <div className="flex flex-col items-center">
                   <div className="font-black text-dark text-xl tracking-tight">{testimonials[index].name}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 md:-left-20 md:-right-20 flex justify-between pointer-events-none z-20">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 pointer-events-auto"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 pointer-events-auto"
              >
                <ChevronRight size={24} />
              </button>
            </div>
        </div>

        {/* Dynamic Dots */}
        <div className="flex justify-center gap-4 mt-16">
           {testimonials.map((_, i) => (
             <button
               key={i}
               onClick={() => {
                 setDirection(i > index ? 1 : -1);
                 setIndex(i);
               }}
               className={`h-2 transition-all duration-500 rounded-full ${
                 i === index ? "w-12 bg-primary shadow-lg shadow-primary/20" : "w-2 bg-slate-200 hover:bg-slate-300"
               }`}
             />
           ))}
        </div>
      </div>
    </section>
  );
}
