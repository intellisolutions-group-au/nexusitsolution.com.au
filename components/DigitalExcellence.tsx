"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Global Presence",
    description: "Nexus IT Solution is a premier web and mobile app development company with a global presence spanning India, Australia, and Dubai. We specialize in delivering cutting-edge mobility solutions."
  },
  {
    title: "Expert Team",
    description: "Our team of skilled and dynamic professionals is dedicated to transforming visionary ideas into powerful digital solutions. We help businesses optimize operations and achieve growth."
  },
  {
    title: "Built on Trust",
    description: "We go beyond just delivering solutions—we build trust, value, and long-term success for our clients. Transparency and innovation are at the core of everything we do."
  },
  {
    title: "Fast Delivery",
    description: "At Nexus IT Solution, we strive to redefine digital experiences with world-class technology, creativity, and strategic execution to architect the future of interaction."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const cardVariants: any = {
  hidden: {
    opacity: 0,
    x: 120,
    y: 0,
    boxShadow: "0 0 0px rgba(0,0,0,0)",
    borderColor: "rgba(0,0,0,0)"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function DigitalExcellence() {
  return (
    <section className="relative pt-2.5 pb-2.5 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 -left-20 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 px-2">
              Your Path to <span className="text-blue-600">Digital Excellence</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Vertical Zig-Zag Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl mx-auto relative"
        >
          {/* Central Connecting Path */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-blue-200/0 via-blue-200 to-blue-200/0 hidden md:block -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} relative md:py-8`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      className="w-5 h-5 rounded-full bg-white border-4 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    />
                  </div>

                  {/* Feature Card Area */}
                  <div className={`w-full md:w-[46%] ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      variants={cardVariants}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.15)",
                        borderColor: "rgba(37, 99, 235, 0.3)"
                      }}
                      className="glass-panel p-10 rounded-[24px] border border-slate-200/50 bg-white/70 backdrop-blur-2xl group relative shadow-2xl shadow-blue-900/5 transition-all duration-300"
                    >
                      {/* Interactive Blue Dot */}
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                          whileHover={{ scale: 1.5 }}
                        />
                        <h3 className="text-2xl font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium opacity-90">
                        {step.description}
                      </p>

                      {/* Card Gradient Ornament */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full" />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
