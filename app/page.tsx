import CreativeHero from "@/components/CreativeHero";
import Marquee from "@/components/Marquee";
import CompanyIntro from "@/components/CompanyIntro";
import StaggeredServices from "@/components/StaggeredServices";
import StatsBelt from "@/components/StatsBelt";
import WhyUsSection from "@/components/WhyUsSection";
import TechStack from "@/components/TechStack";
import ProcessTimeline from "@/components/ProcessTimeline";
import ModernTestimonials from "@/components/ModernTestimonials";
import CTASection from "@/components/CTASection";
import HomeBlogSection from "@/components/HomeBlogSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative bg-bg-subtle overflow-x-hidden">
      <CreativeHero />
      {/* <Marquee /> */}
      <CompanyIntro />
      <StaggeredServices />
      {/* <StatsBelt /> */}
      <WhyUsSection />
      <TechStack />
      <ProcessTimeline />
      <ModernTestimonials />
      <HomeBlogSection />
      <CTASection />
    </main>
  );
}
