"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Settings, BarChart3, Users, Zap } from "lucide-react";
import ScrollRevealImage from "./ScrollRevealImage";

export default function SuccessStory() {
  const badgeVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="relative py-8 md:py-10 overflow-hidden bg-white">
      {/* Light tech pattern background */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #E2E8F0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image Card */}
          <div className="relative lg:order-1 order-2 mt-12 lg:mt-0">
            <div className="relative aspect-4/3 max-w-lg mx-auto lg:ml-0">
              {/* Main Image Card */}
              <ScrollRevealImage className="rounded-2xl overflow-hidden glass-card border border-blue-100 shadow-xl p-2 aspect-4/5 w-full">
                <div className="relative w-full h-full rounded-xl overflow-hidden transition-all duration-700">
                  <Image
                    src="/nexus_team_collaboration.png"
                    alt="Team Collaboration and Office Meeting"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </ScrollRevealImage>

              {/* Floating Badges */}
              <motion.div
                variants={badgeVariants}
                initial="initial"
                animate="animate"
                className="absolute top-1/4 -left-4 md:-left-8 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/40 p-2 md:p-3"
              >
                <BarChart3 size={24} />
              </motion.div>

              <motion.div
                variants={badgeVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1 }}
                className="absolute top-1/2 -right-4 md:-right-12 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/40 p-3 md:p-4"
              >
                <Settings size={28} />
              </motion.div>

              <motion.div
                variants={badgeVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 2 }}
                className="absolute -bottom-4 left-1/4 z-40 w-12 h-12 rounded-full bg-white border border-blue-100 shadow-lg flex items-center justify-center text-primary"
              >
                <Users size={20} />
              </motion.div>
            </div>
          </div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:order-2 order-1"
          >
            <div className="mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 border border-blue-100 text-primary inline-flex items-center gap-2">
                About Our Company
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Our <span className="text-gradient">Success</span> as a Trusted Technology Partner
            </h2>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                At Nexus IT Solution, we specialize in delivering cutting-edge mobile and software development solutions tailored to your business needs. Our innovative approach, technical expertise, and commitment to excellence set us apart from other development agencies.
              </p>
              <p>
                Our partners choose us for our extensive industry experience and versatility in delivering high-quality applications. With a strong foundation in advanced technologies and digital transformation, we are a leading partner in shaping the future of software and app development.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: <Zap className="text-primary" />, title: "Agile Approach" },
                { icon: <Settings className="text-secondary" />, title: "Custom Solutions" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-50 shadow-sm">
                  {feature.icon}
                  <span className="text-slate-800 font-semibold">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
