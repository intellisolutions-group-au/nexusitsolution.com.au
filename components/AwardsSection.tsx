"use client";

import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { Users2, TrendingUp, Target, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Boost in Response Times", value: 35, color: "text-primary" },
  { label: "On-Time Project Delivery", value: 90, color: "text-primary" },
  { label: "Client Retention Rate", value: 98, color: "text-primary" },
];

const floatingCards = [
  { icon: <Users2 size={32} />, label: "Client Satisfied" },
  { icon: <TrendingUp size={32} />, label: "Growth Result" },
  { icon: <Target size={32} />, label: "Success Mission" },
];

function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function AwardsSection() {
  return (
    <section className="w-full py-24 bg-bg-subtle relative overflow-hidden border-t border-black/5">
      {/* Background Decorative Pattern (Subtle grid/dots like the ref) */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] md:bg-size-[40px_40px] opacity-40 -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content & Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  Empowering Your Business
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1]">
                We Achieved <span className="text-primary">Success</span> <br />
                Awards & Reward
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
                At Nexus IT Solution, your growth is our priority. We go the extra mile to ensure customer satisfaction and deliver superior digital solutions.
              </p>
            </div>

            {/* Stats Card */}
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 shadow-sm space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                   <TrendingUp size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Your Growth</h4>
              </div>
              
              <div className="space-y-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-4 border-b border-primary/10 last:border-0 last:pb-0">
                    <span className="text-slate-700 font-bold">{stat.label}</span>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center text-secondary/60">
                        <ArrowRight size={20} className="mr-[-8px]" />
                        <ArrowRight size={20} />
                      </div>
                      <span className={`text-3xl font-display font-bold ${stat.color}`}>
                        <Counter value={stat.value} />%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Floating Cards & Background Shape */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Abstract Blue Shape Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary rounded-[4rem] rotate-45 transform-gpu -z-10" />

            <div className="flex flex-col gap-6 relative z-10 w-full max-w-md">
              {floatingCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`group bg-white rounded-2xl p-6 shadow-xl border border-primary/10 flex items-center gap-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.05] hover:shadow-2xl ${
                    idx === 1 ? 'lg:ml-12' : idx === 2 ? 'lg:ml-6' : ''
                  }`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-500 animate-glow-premium group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/40">
                    <div className="animate-icon-premium">
                      {card.icon}
                    </div>
                  </div>
                  <span className="text-xl font-display font-bold text-slate-800">{card.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
