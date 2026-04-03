export const metadata = {
  title: "Terms of Service | Nexus IT Solution",
  description: "Terms of Service for Nexus IT Solution. Read our rules and guidelines for using our services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-black text-slate-900 tracking-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-slate-500">Last Updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-primary">
          <p>
            Please read these Terms of Service carefully before using the nexusitsolution.com.au website and any services operated by Nexus IT Solution.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>

          <h2>2. Services</h2>
          <p>
            Nexus IT Solution provides IT consulting, custom software development, mobile application development, cloud infrastructure, and related digital services. We reserve the right to withdraw or amend our services without notice.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of Nexus IT Solution and its licensors. The website is protected by copyright, trademark, and other laws of Australia and foreign countries.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>
            You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall Nexus IT Solution, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of New South Wales, Australia, without regard to its conflict of law provisions.
          </p>

          <h2>7. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-6 not-prose">
            <p className="font-semibold text-slate-900 mb-1">Nexus IT Solution</p>
            <p className="text-slate-600 mb-1">Unit 12/8 Hampstead Rd,</p>
            <p className="text-slate-600 mb-4">Homebush West, NSW 2140, Australia</p>
            <p className="text-slate-600"><strong>Email:</strong> info@nexusitsolution.com.au</p>
            <p className="text-slate-600"><strong>Phone:</strong> 0459 472 474</p>
          </div>
        </article>
      </div>
    </main>
  );
}