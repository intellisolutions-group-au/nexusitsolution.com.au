export const metadata = {
  title: "Privacy Policy | Nexus IT Solution",
  description: "Privacy Policy for Nexus IT Solution. Learn how we handle and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-black text-slate-900 tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-slate-500">Last Updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-primary">
          <p>
            At Nexus IT Solution ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Nexus IT Solution.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly to us, such as when you request information, sign up for a newsletter, contact customer support, or otherwise interact with us. The types of personal information we may collect include:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not share, sell, rent, or trade your personal information with third parties for their commercial purposes without your consent, except as described in this Privacy Policy.
          </p>

          <h2>4. Security</h2>
          <p>
            We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, please be aware that no security measures are perfect or impenetrable.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us using the information provided below.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
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