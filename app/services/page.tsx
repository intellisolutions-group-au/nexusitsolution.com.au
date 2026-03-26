"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ServiceCardFlip from "@/components/ServiceCardFlip";
import ClientFocusSection from "@/components/ClientFocusSection";
import { services } from "@/data/services";

const servicesTitle = "Our Service";

export default function ServicesPage() {
  const featuredServices = services.filter(s => s.isFeatured);
  const remainingServices = services.filter(s => !s.isFeatured);

  return (
    <main className="bg-bg-subtle">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-center border-b border-black/5">
        {/* Text-Free Reference Style Illustration */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/service_hero.png"
            alt="Service Hero Illustration"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Soft Glassmorphism Overlay */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-white/20" />
          <div className="absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-white/10 opacity-80" />
        </div>

        <div className="container-custom relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-mono font-bold tracking-[0.3em] uppercase backdrop-blur-sm">
              Our Expertise
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-extrabold text-dark mb-8 tracking-tight leading-[1.1]">
            {servicesTitle.split(" ").map((word, i) => (
              <span key={i} className="inline-block whitespace-nowrap mr-[0.3em]">
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, y: 50, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: (i * 0.1) + (j * 0.03),
                      ease: [0.2, 1, 0.3, 1]
                    }}
                    className={`inline-block ${word === "Service" ? "text-premium-gradient" : ""}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted max-w-2xl text-lg md:text-xl leading-relaxed font-medium mb-12"
          >
            Partner with Nexus IT Solution to bring your unique ideas to life. Our experienced team excels in delivering innovative, user-centric solutions that redefine industries.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Heading - New Special Heading Section */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container-custom flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary">
              Catalyst for Change
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-extrabold text-dark mb-6 tracking-tight"
          >
            Our <span className="text-premium-gradient">Special</span> Services
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-primary/20 rounded-full mb-8"
          />
        </div>
      </section>

      {/* Unified Services Grid */}
      <section className="w-full pb-24 relative z-10 bg-white border-b border-black/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <ServiceCardFlip key={service.id} {...service} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-bg-subtle">
        <ClientFocusSection />
      </div>
    </main>
  );
}
