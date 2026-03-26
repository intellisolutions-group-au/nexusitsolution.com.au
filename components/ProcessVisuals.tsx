"use client";

import { motion } from "framer-motion";

interface ProcessVisualsProps {
  step: number;
}

export default function ProcessVisuals({ step }: ProcessVisualsProps) {
  switch (step) {
    case 0: // Plan & Strategy
      return (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 bg-primary/2 h-full w-full"></div>
          
          {/* Radar Scanner Effect */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <motion.div 
              className="absolute inset-0 rounded-full border border-primary/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute inset-0 rounded-full border border-primary/10"
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            {/* Spinning Scanner */}
            <motion.div 
              className="absolute w-1/2 h-px bg-linear-to-r from-primary to-transparent origin-left top-1/2 left-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Pulsating Nodes */}
            {[
              { top: "20%", left: "30%", d: 0 },
              { top: "60%", left: "70%", d: 1 },
              { top: "40%", left: "10%", d: 2 },
              { top: "80%", left: "40%", d: 3 },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary"
                style={{ top: p.top, left: p.left }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  boxShadow: ["0 0 0px var(--primary)", "0 0 10px var(--primary)", "0 0 0px var(--primary)"]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: p.d }}
              />
            ))}
            
            <div className="z-10 bg-white p-6 rounded-3xl shadow-2xl border border-primary/10">
              <div className="w-12 h-2 bg-primary/20 rounded-full mb-3" />
              <div className="w-20 h-2 bg-slate-100 rounded-full mb-3" />
              <div className="w-16 h-2 bg-slate-100 rounded-full" />
            </div>
          </div>
        </div>
      );

    case 1: // Design & Prototype
      return (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden bg-blue-50/10">
          <div className="relative w-full max-w-sm aspect-video bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            {/* Top Bar */}
            <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            
            {/* Content Drawing Animation */}
            <div className="p-6 space-y-4">
              <div className="flex gap-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  className="h-16 rounded-xl bg-primary/10 border border-primary/20 overflow-hidden relative"
                >
                  <motion.div 
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                <div className="space-y-3 flex-1">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className="h-3 bg-slate-100 rounded-full" 
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    className="h-3 bg-slate-100 rounded-full" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[1, 2].map(i => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="aspect-square rounded-2xl bg-white border border-slate-100 shadow-sm"
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Selection Tool Indicator */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-4 h-4 text-primary"
              animate={{ 
                x: [0, 50, -30, 0],
                y: [0, -20, 60, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2l12 11.2-5.8.8 3.5 6-2.1 1.2-3.4-6-4.2 4.8V2z" />
              </svg>
            </motion.div>
          </div>
        </div>
      );

    case 2: // Agile Development
      return (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden bg-slate-900/5">
          <div className="w-full max-w-sm aspect-video bg-slate-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden text-[10px] font-mono p-6 text-emerald-400">
            <div className="flex gap-1.5 mb-4">
               <div className="w-2 h-2 rounded-full bg-slate-700" />
               <div className="w-2 h-2 rounded-full bg-slate-700" />
               <div className="w-2 h-2 rounded-full bg-slate-700" />
            </div>
            
            <div className="space-y-2 overflow-hidden">
               <div className="flex gap-2">
                 <span className="opacity-40">01</span>
                 <motion.span 
                   animate={{ opacity: [1, 0, 1] }} 
                   transition={{ duration: 0.8, repeat: Infinity }}
                   className="text-primary italic"
                 >class</motion.span>
                 <span className="text-white">NexusSolution</span>
                 <span className="text-amber-400">{"{"}</span>
               </div>
               <div className="flex gap-2 pl-4">
                 <span className="opacity-40">02</span>
                 <span className="text-primary italic">constructor</span>
                 <span className="text-amber-400">()</span>
                 <span className="text-amber-400">{"{"}</span>
               </div>
               <div className="flex gap-2 pl-8">
                 <span className="opacity-40">03</span>
                 <span className="text-primary italic">this</span>
                 <span className="text-white">.quality = </span>
                 <span className="text-blue-400">100</span>
                 <span className="text-white">;</span>
               </div>
               <div className="flex gap-2 pl-8">
                 <span className="opacity-40">04</span>
                 <span className="text-emerald-500">{"// Building future..."}</span>
               </div>
               
               <motion.div 
                 className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-6"
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 2 }}
               >
                 <motion.div 
                   className="h-full bg-primary"
                   animate={{ width: ["0%", "85%"] }}
                   transition={{ duration: 4, repeat: Infinity }}
                 />
               </motion.div>
            </div>
          </div>
          
          {/* Floating Cog */}
          <motion.div 
            className="absolute -top-4 -right-4 w-24 h-24 text-primary/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
             <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
             </svg>
          </motion.div>
        </div>
      );

    case 3: // Launch & Scale
      return (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
             <svg width="600" height="600" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
             </svg>
          </div>
          
          <div className="relative z-10">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col items-center"
            >
               <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 shadow-sm shadow-emerald-100">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                 </svg>
               </div>
               <div className="h-4 w-32 bg-slate-50 rounded-full mb-3" />
               <div className="h-4 w-24 bg-slate-50 rounded-full" />
            </motion.div>
            
            {/* Speed Lines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
              <motion.div
                key={angle}
                className="absolute top-1/2 left-1/2 w-48 h-px bg-linear-to-r from-primary/40 to-transparent origin-left"
                style={{ rotate: angle }}
                animate={{ 
                  scaleX: [0, 1.5, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 1, repeat: Infinity, delay: angle / 360, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
