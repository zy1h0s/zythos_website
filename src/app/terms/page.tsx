import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Service | Zytheq",
  description: "Terms and conditions governing the use of Zytheq's website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Legal"
          title="Terms of"
          accent="Service."
          description="Terms and conditions governing the use of Zytheq's website and services. Last updated: February 2026."
        />

        <section className="py-20 bg-bg-secondary">
          <div className="max-w-3xl mx-auto px-6 space-y-10">
            <div>
              <h2 className="font-display font-bold text-2xl mb-4">1. Agreement to Terms</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                By accessing or using the Zytheq website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of Zytheq.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">2. Services Description</h2>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>Zytheq provides the following services:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" /><strong className="text-text-primary">Zytheq Talent:</strong> IT staff augmentation, executive search, contract engineering, team scaling, and technical recruiting advisory services.</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" /><strong className="text-text-primary">Zytheq Labs:</strong> Custom software development, product design, cloud infrastructure, AI/data engineering, and software architecture consulting.</li>
                </ul>
                <p>Specific service terms, deliverables, timelines, and pricing are defined in individual Statements of Work (SOWs) or service agreements executed between Zytheq and each client.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">3. Intellectual Property</h2>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p><strong className="text-text-primary">Zytheq IP:</strong> All content on this website, including text, graphics, logos, and software, is the property of Zytheq and protected by intellectual property laws.</p>
                <p><strong className="text-text-primary">Client IP:</strong> For Zytheq Labs engagements, all custom software, code, and deliverables produced under a SOW are assigned to the client upon full payment, unless otherwise specified in the agreement.</p>
                <p><strong className="text-text-primary">Pre-Existing IP:</strong> Zytheq retains ownership of pre-existing tools, frameworks, and methodologies used in service delivery. Clients receive a perpetual, non-exclusive license to use such components as part of their deliverables.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">4. Confidentiality</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes technical documentation, business strategies, client data, candidate information, and financial terms. Confidentiality obligations survive the termination of any agreement for a period of 3 years.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">5. Payment Terms</h2>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>Payment terms are specified in individual SOWs and service agreements. General terms include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />Invoices are due within 30 days of issuance unless otherwise agreed</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />Late payments may incur interest at 1.5% per month</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />All fees are in USD unless otherwise specified</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">6. Limitation of Liability</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                To the maximum extent permitted by law, Zytheq&apos;s total liability for any claim arising from our services shall not exceed the fees paid by the client in the 12 months preceding the claim. Zytheq shall not be liable for indirect, incidental, special, consequential, or punitive damages.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">7. Termination</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Either party may terminate a service engagement with written notice as specified in the applicable SOW. For staff augmentation placements, a minimum 2-week notice period applies. Upon termination, the client is responsible for payment of all services rendered through the termination date.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">8. Governing Law</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                These Terms of Service are governed by the laws of the State of Delaware, United States, without regard to its conflict of laws provisions. Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">9. Changes to Terms</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Zytheq reserves the right to modify these terms at any time. Material changes will be communicated via email to registered users and posted on this page. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">10. Contact</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                For questions about these Terms of Service, please contact us at <span className="text-accent">legal@zytheq.com</span> or through our contact page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
