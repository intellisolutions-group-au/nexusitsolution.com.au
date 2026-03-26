"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogs } from "@/data/blogs";
import BlogCard from "./BlogCard";
import { Calendar, ChevronRight, ChevronLeft, MoreHorizontal } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  const displayedBlogs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return blogs.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setIsLoading(true);
    setCurrentPage(page);
    
    // Smooth scroll to top of grid
    const gridElement = document.getElementById("blog-grid");
    if (gridElement) {
      const offset = gridElement.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <section className="py-24 bg-bg-subtle relative overflow-hidden" id="blog-grid">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden text-linear-to-b opacity-20">
         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {isLoading ? (
            // Shimmer Loaders
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[550px] rounded-[2.5rem] bg-white/50 border border-black/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
                <div className="p-10 space-y-6">
                   <div className="h-56 bg-white rounded-3xl mb-8 shadow-sm" />
                   <div className="h-4 w-1/4 bg-slate-100 rounded-full" />
                   <div className="h-10 w-3/4 bg-slate-100 rounded-xl" />
                   <div className="h-24 w-full bg-slate-100 rounded-xl" />
                </div>
              </div>
            ))
          ) : (
            <AnimatePresence mode="popLayout">
              {displayedBlogs.map((post, idx) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <BlogCard post={post} index={idx} isLarge={false} />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Pagination System */}
        {totalPages > 1 && (
          <div className="mt-24 flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              {/* Previous Button */}
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                  currentPage === 1 
                    ? "opacity-30 cursor-not-allowed border-black/5" 
                    : "bg-white hover:bg-dark hover:text-white border-black/5 hover:border-dark shadow-lg shadow-dark/5"
                }`}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const page = i + 1;
                  // Dynamic page number logic (show current, adjacent, first, and last)
                  if (
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-14 h-14 rounded-2xl font-sans font-bold text-sm transition-all duration-500 border ${
                          currentPage === page
                            ? "bg-dark text-white border-dark shadow-xl shadow-dark/20 scale-110 z-10"
                            : "bg-white/60 backdrop-blur-md text-slate-500 hover:text-dark hover:bg-white border-black/5"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                  if (
                    (page === 2 && currentPage > 3) || 
                    (page === totalPages - 1 && currentPage < totalPages - 2)
                  ) {
                    return (
                      <div key={page} className="w-10 h-10 flex items-center justify-center text-slate-400">
                        <MoreHorizontal size={20} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Next Button */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                  currentPage === totalPages 
                    ? "opacity-30 cursor-not-allowed border-black/5" 
                    : "bg-white hover:bg-dark hover:text-white border-black/5 hover:border-dark shadow-lg shadow-dark/5"
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <p className="text-slate-400 text-xs font-bold tracking-widest uppercase px-6 py-2 bg-slate-100 rounded-full">
              Page <span className="text-dark">{currentPage}</span> of <span className="text-dark">{totalPages}</span>
            </p>
          </div>
        )}

        {blogs.length === 0 && (
          <div className="py-24 text-center">
            <div className="inline-flex p-8 rounded-full bg-white/50 border border-black/5 mb-8">
              <Calendar size={48} className="text-muted" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-dark mb-4">No insights found yet.</h3>
            <p className="text-muted text-lg">Check back soon for latest updates.</p>
          </div>
        )}
      </div>
    </section>
  );
}
