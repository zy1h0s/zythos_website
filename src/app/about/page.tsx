import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";

export const metadata = {
  title: "About - Zytheq",
  description: "The story behind Zytheq. Where talent meets technology.",
};

const values = [
  { title: "Precision Over Volume in Technical Recruiting", desc: "We'd rather place 5 perfect senior software engineers than 50 mediocre ones. Quality in staff augmentation compounds over time." },
  { title: "Ship Software, Then Polish", desc: "Working custom software beats perfect plans. Our development teams iterate fast and improve constantly." },
  { title: "Radical Transparency in Staffing & Development", desc: "No hidden fees, no bait-and-switch. Whether you're hiring developers or building a product, you know what you're getting - always." },
  { title: "Built by Engineers, for Engineers", desc: "Everyone at Zytheq has built software or scaled an engineering team. We understand staff augmentation and software development because we practice both." },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="About Zytheq"
          title="The Staff Augmentation & Software Development Company Where Talent Becomes"
          accent="Technology."
          description="Zytheq was born from a simple observation: companies that build great software need great engineering teams, and great teams need real products to build. So we became the staff augmentation and software development company that delivers both."
        />

        {/* Story */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-8">Why Zytheq Exists</h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                <strong className="text-text-primary">Zytheq</strong> - from the Ancient Greek <em>ζῦθος</em> - means fermented brew. It represents transformation: taking raw ingredients and, through craft and patience, creating something powerful.
              </p>
              <p>
                We started as software engineers frustrated by IT staffing agencies that didn&apos;t understand code, and as technical recruiters frustrated by dev shops that didn&apos;t value people. The answer was obvious: merge staff augmentation and custom software development under one roof.
              </p>
              <p>
                Today, Zytheq operates across 12 countries with a network of over 15,000 vetted software engineers and nearshore developers, plus a product engineering team that has shipped $47M+ in custom software. We&apos;re not the biggest IT staffing agency or software development company - we&apos;re the most precise.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">Our Values as a Staff Augmentation & Development Partner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-secondary/50">
                  <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Team />
      </main>
      <Footer />
    </>
  );
}
