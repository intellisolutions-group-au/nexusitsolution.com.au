"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  imageUrl?: string;
  isReversed?: boolean;
  progressValue?: number; // Target progress value where this step gets activated
  scrollYProgress?: MotionValue<number>; // Inherited scroll progress from parent section
}

export default function ProcessStep({ step, title, description, imageUrl, isReversed = false, progressValue = 0, scrollYProgress }: ProcessStepProps) {
  
  // Create transforms based on scroll progress intersecting with this specific item's expected activation point
  // We use a small window (e.g., progressValue - 0.1 to progressValue) to crossfade when the dot reaches it.
  
  // Fallback defaults to ensure it doesn't break if not passed
  // We use scrollYProgress when available, but useTransform must receive a valid MotionValue.
  // Instead of creating a new motion.MotionValue() (which is invalid class usage),
  // we just use the passed value and assume it exists in Next.js CSR environment since it's injected.
  
  const opacityTransform = useTransform(
    scrollYProgress!, 
    [progressValue - 0.1, progressValue], 
    [0.4, 1]
  );
  
  const yTransform = useTransform(
    scrollYProgress!,
    [progressValue - 0.1, progressValue],
    [30, 0]
  );

  const glowShadowTransform = useTransform(
    scrollYProgress!,
    [progressValue - 0.05, progressValue],
    ["0px 0px 0px rgba(124,58,237,0)", "0px 0px 40px rgba(124,58,237,0.2)"]
  );

  const borderColorTransform = useTransform(
    scrollYProgress!,
    [progressValue - 0.05, progressValue],
    ["rgba(226,232,240,1)", "rgba(124,58,237,1)"] // Slate-200 to Primary
  );

  return (
    <motion.div
      style={{ opacity: opacityTransform, y: yTransform }}
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 md:gap-16 w-full group relative`}
    >
      <div className={`w-full md:w-1/2 flex justify-center ${isReversed ? "md:justify-start" : "md:justify-end"}`}>
        <div className="relative">
          {/* Ambient background glow */}
          <motion.div 
            style={{ opacity: opacityTransform }}
            className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transition-opacity duration-300 pointer-events-none" 
          />
          
          <motion.div 
            style={{ boxShadow: glowShadowTransform, borderColor: borderColorTransform }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 flex items-center justify-center relative z-10 bg-white overflow-hidden transition-all duration-350 cubic-bezier(0.34,1.4,0.64,1) group-hover:scale-[1.09] group-hover:shadow-[0_8px_28px_rgba(124,58,237,0.22)]"
          >
            {imageUrl ? (
              <>
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-full object-cover object-center block rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.style.background = 'linear-gradient(135deg,#BFDBFE,#93C5FD)';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-blue-100/12 pointer-events-none z-10" />
              </>
            ) : (
              <span className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-linear-to-br from-primary to-secondary">
                {step}
              </span>
            )}
          </motion.div>
        </div>
      </div>

      <div className={`w-full md:w-1/2 text-center ${isReversed ? "md:text-right" : "md:text-left"}`}>
        <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
