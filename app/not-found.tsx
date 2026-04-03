"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative blurred background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          {/* Icon/Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-24 h-24 rounded-3xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-primary mb-10"
          >
            <SearchX size={48} strokeWidth={1.5} />
          </motion.div>

          {/* 404 Text */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[8rem] md:text-[12rem] font-sans font-black leading-none text-slate-900 tracking-tighter mb-4"
          >
            404
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight"
          >
            Page Not Found
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-slate-500 mb-12 max-w-lg leading-relaxed"
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/"
              className="group relative px-8 py-4 bg-primary rounded-xl text-white font-bold text-base transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Home size={18} />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/contact"
              className="group px-8 py-4 bg-white border-2 border-slate-200 rounded-xl text-slate-700 font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-slate-900 shadow-sm hover:shadow-md flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>Contact Support</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-slate-600" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}