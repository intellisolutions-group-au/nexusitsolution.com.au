"use client";

import { motion } from "framer-motion";
import ValueStack from "./ValueStack";


export default function VisionSection() {
  return (
    <section className="py-24 bg-bg-subtle border-b border-black/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Text & Image */}
          <div className="w-full lg:w-1/2 flex flex-col items-start mb-10 lg:mb-0">
            {/* Laptop Image Constraint Fix */}
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl mb-10">
              <img
                src="/nexus_innovation_workspace.png"
                alt="Our Company Vision"
                className="w-full h-full object-cover object-center max-h-[420px]"
              />
            </div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary font-semibold text-sm tracking-wide">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
              Our <span className="text-gradient">Company Vision.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Your vision deserves to be realized. At Nexus IT Solution, we aim to amplify your ideas within the digital realm. When you partner with us, you also embrace:
            </p>
          </div>
          {/* Right: Feature Cards (Interactive Stack) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center min-h-0 lg:min-h-[800px]">
            <ValueStack />
          </div>
        </div>
      </div>
    </section>
  );
}
