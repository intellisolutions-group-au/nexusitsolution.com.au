"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@nexusitsolution.com",
    href: "mailto:hello@nexusitsolution.com",
    color: "blue",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (800) NEXUS-IT",
    href: "tel:+18006398748",
    color: "indigo",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "India · Australia · Dubai",
    href: "/contact",
    color: "sky",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPreview() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-50/80 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-5 leading-tight">
              Have a Project <span className="text-blue-600">in Mind?</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Partner with Nexus IT Solution and bring your ideas to life. Our experienced team is ready to discuss your project and provide the best-fit solution for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5"
            >
              Contact Us Today
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-4"
          >
            {contactItems.map((item) => {
              const IconComp = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={cardVariants}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-slate-800 font-semibold text-sm">{item.value}</div>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
