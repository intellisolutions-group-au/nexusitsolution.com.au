import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexus IT Solutions",
  description: "Learn how Nexus IT Solutions collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to Nexus IT Solutions. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services."
    },
    {
      title: "Information We Collect",
      content: "We may collect personal information such as your name, email address, phone number, and company details when you contact us or subscribe to our newsletter. We also collect non-personal information like IP addresses and browsing behavior through cookies to improve our services."
    },
    {
      title: "How We Use Information",
      content: "The information we collect is used to provide and maintain our services, respond to your inquiries, send updates and newsletters, and improve the user experience on our website. We do not sell your personal information to third parties."
    },
    {
      title: "Data Protection",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in secure networks and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential."
    },
    {
      title: "Contact Information",
      content: "If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@nexus-it.com or through our contact form."
    }
  ];

  return (
    <main className="min-h-screen bg-bg-subtle">
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-white/40 border-b border-black/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-dark tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono font-bold text-primary uppercase tracking-[0.3em]">
            Last updated: March 18, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <h2 className="text-2xl font-sans font-extrabold text-dark mb-6 flex items-center gap-5 tracking-tight">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-[10px] font-mono font-bold shadow-lg shadow-primary/5">
                    0{index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="h-px w-full bg-linear-to-r from-black/5 to-transparent mb-6 ml-12" />
                <p className="text-lg text-muted leading-relaxed pl-12 font-medium">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 rounded-[32px] bg-white/60 border border-black/5 glass-card-premium text-center">
            <p className="text-dark font-sans font-extrabold text-lg tracking-tight">
              By using our website, you hereby <span className="text-primary italic">consent</span> to our Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
