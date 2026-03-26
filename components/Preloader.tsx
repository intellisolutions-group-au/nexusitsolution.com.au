"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Handle Initial Page Load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Handle Route Changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-slate-950 overflow-hidden"
          >
            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative flex flex-col items-center">
              {/* Animated Brand Name */}
              <motion.div
                className="flex items-center gap-1 overflow-hidden"
                initial="hidden"
                animate="visible"
              >
                {"NEXUS".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { y: 100, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.1
                        }
                      }
                    }}
                    className="text-6xl md:text-8xl font-black tracking-tighter text-white"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              {/* Futuristic Progress Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
                className="h-[2px] bg-linear-to-r from-transparent via-blue-500 to-transparent mt-4 w-full relative"
              >
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 w-20 bg-white blur-sm"
                />
              </motion.div>

              {/* Subtle Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-6 text-blue-200 text-sm tracking-[0.3em] font-medium uppercase"
              >
                Next-Gen Solutions
              </motion.p>
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={loading ? "hidden" : "contents"}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Preloader;
