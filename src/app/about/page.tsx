import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";

export const metadata = {
  title: "About — Zythos",
  description: "The story behind Zythos. Where talent meets technology.",
};

const values = [
  { title: "Precision Over Volume", desc: "We'd rather place 5 perfect engineers than 50 mediocre ones. Quality compounds." },
  { title: "Ship, Then Polish", desc: "Working software beats perfect plans. We iterate fast and improve constantly." },
  { title: "Radical Transparency", desc: "No hidden fees, no bait-and-switch. You know what you're getting, always." },
  { title: "Builders First", desc: "Everyone at Zythos has built something. We understand the craft because we practice it." },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="The Fusion"
          title="Where talent becomes"
          accent="technology."
          description="Zythos was born from a simple observation: the companies that build great products need great teams, and vice versa. So we became both."
        />

        {/* Story */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-8">The origin</h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                <strong className="text-text-primary">Zythos</strong> — from the Ancient Greek <em>ζῦθος</em> — means fermented brew. It represents transformation: taking raw ingredients and, through craft and patience, creating something powerful.
              </p>
              <p>
                We started as engineers frustrated by staffing firms that didn&apos;t understand code, and as recruiters frustrated by dev shops that didn&apos;t value people. The answer was obvious: merge both disciplines under one roof.
              </p>
              <p>
                Today, Zythos operates across 12 countries with a network of over 15,000 vetted technologists and a product engineering team that has shipped $47M+ in software. We&apos;re not the biggest. We&apos;re the most precise.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">What we believe</h2>
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
