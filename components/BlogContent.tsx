"use client";

import { motion } from "framer-motion";
import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const parseContent = (text: string) => {
    return text.split("\n\n").map((block, idx) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-3xl font-display font-black text-dark mt-16 mb-8 first:mt-0">
            {block.replace("## ", "")}
          </h2>
        );
      }
      
      if (block.includes("\n- ")) {
        const lines = block.split("\n");
        const listItems = lines.filter(l => l.startsWith("- ")).map(l => l.replace("- ", ""));
        return (
          <ul key={idx} className="space-y-4 my-10">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
      }

      if (idx === 0) {
        return (
          <p key={idx} className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-10 border-l-4 border-primary pl-8 italic">
            {block.replace("## Introduction\n", "").replace("Introduction\n", "")}
          </p>
        );
      }

      return (
        <p key={idx} className="text-slate-600 mb-6 leading-relaxed text-lg">
          {block}
        </p>
      );
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grow max-w-4xl"
          >
            <div className="prose prose-lg lg:prose-xl prose-slate max-w-none">
              {parseContent(content)}

              <div className="my-16 p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 italic relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                 <p className="text-2xl font-display font-bold text-dark leading-tight relative z-10">
                   "Innovation distinguishes between a leader and a follower. Our mission is to build the tools that lead."
                 </p>
                 <span className="block mt-4 font-mono text-xs uppercase tracking-widest text-primary">— Nexus Engineering Ethos</span>
              </div>
            </div>
          </motion.div>

          {/* Sticky Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-12">
              {/* Share Component */}
              <div className="p-8 rounded-4xl border border-slate-100 bg-slate-50/50">
                <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-6">Share Article</h4>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin, LinkIcon].map((Icon, idx) => (
                    <button 
                      key={idx}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-sm"
                    >
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact CTA Widget */}
              <div className="p-8 rounded-4xl bg-dark text-white relative overflow-hidden shadow-xl shadow-black/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]" />
                <h4 className="text-xl font-bold mb-4 relative z-10">Need Expert Guidance?</h4>
                <p className="text-white/60 text-sm mb-6 relative z-10">Our specialists are ready to help you with your next big project.</p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-4 bg-primary rounded-xl text-white font-bold text-sm hover:bg-white hover:text-dark transition-all duration-300 group relative z-10"
                >
                  Contact Us
                  <Share2 size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
