"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function StaggeredServices() {
  return (
    <section id="services" className="py-24 bg-bg-subtle border-t border-black/5">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-6 block">Our Expertise</span>
            <h2 className="text-5xl lg:text-7xl font-sans font-extrabold text-dark leading-none tracking-tighter">
              Transforming Ideas <br /> Into <span className="text-muted/40">Digital Reality</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted text-lg max-w-sm lg:text-right"
          >
            We combine strategic thinking with technical excellence to build products that matter.
          </motion.p>
        </div>

        {/* Updated Grid Layout with Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {services.slice(0, 12).map((service, i) => (
            <ServiceCard
              key={service.slug}
              index={(i + 1).toString().padStart(2, '0')}
              title={service.title}
              description={service.shortDesc}
              slug={service.slug}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
