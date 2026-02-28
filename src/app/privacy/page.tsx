import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy | Zytheq",
  description: "How Zytheq collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Legal"
          title="Privacy"
          accent="Policy."
          description="How we collect, use, and protect your personal information. Last updated: February 2026."
        />

        <section className="py-20 bg-bg-secondary">
          <div className="max-w-3xl mx-auto px-6 space-y-10">
            <div>
              <h2 className="font-display font-bold text-2xl mb-4">1. Information We Collect</h2>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p><strong className="text-text-primary">Contact Information:</strong> When you fill out our consultation form or subscribe to our newsletter, we collect your name, email address, company name, and phone number.</p>
                <p><strong className="text-text-primary">Usage Data:</strong> We automatically collect information about how you interact with our website, including pages visited, time spent, and referral sources.</p>
                <p><strong className="text-text-primary">Technical Data:</strong> Browser type, device information, IP address, and operating system are collected automatically for analytics and security purposes.</p>
                <p><strong className="text-text-primary">Communication Data:</strong> Records of correspondence between you and Zytheq, including emails, form submissions, and support requests.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">2. How We Use Your Information</h2>
              <ul className="space-y-2 text-sm text-text-secondary leading-relaxed">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />To respond to your inquiries and provide requested services</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />To send newsletter content you&apos;ve subscribed to</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />To improve our website experience and service offerings</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />To comply with legal obligations and protect our rights</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />To analyze website traffic and user behavior for optimization</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">3. Data Sharing</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We do not sell your personal information to third parties. We may share data with trusted service providers who assist in operating our website and conducting our business, subject to confidentiality agreements. These include hosting providers, analytics services, and email delivery platforms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">4. Data Security</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption, secure data storage, access controls, and regular security audits. However, no method of electronic transmission or storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">5. Cookies</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Our website uses essential cookies for site functionality and analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may affect site functionality.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">6. Your Rights</h2>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />Access the personal data we hold about you</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />Request correction of inaccurate information</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />Request deletion of your personal data</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />Opt out of marketing communications at any time</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />Request data portability</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">7. Data Retention</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We retain personal information for as long as necessary to provide our services and fulfill the purposes described in this policy. Contact and communication data is retained for the duration of our business relationship plus 3 years. Analytics data is retained for 26 months.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">8. Contact Us</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                For privacy-related inquiries, data access requests, or to exercise your rights, please contact us at <span className="text-accent">privacy@zytheq.com</span> or through our contact page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
