"use client";

import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";
import BlogCTA from "@/components/BlogCTA";

export default function BlogPage() {
  return (
    <main className="flex flex-col w-full relative bg-bg-subtle min-h-screen overflow-x-hidden">
      {/* Hero Section - Service Insights */}
      <BlogHero
        title="Insights That Power Digital Growth"
        description="Discover the strategies, technologies, and innovative solutions that drive measurable success in the digital era."
      />

      {/* Service-Based Insight Grid */}
      <BlogGrid />

      {/* Collaboration CTA */}
      <BlogCTA />
    </main>
  );
}
