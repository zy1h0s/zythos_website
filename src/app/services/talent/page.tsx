import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Zytheq Talent - IT Staff Augmentation & Technical Recruiting",
  description: "Elite engineers, technical leaders, and specialized contractors. Vetted talent that ships on day one.",
};

const process = [
  { step: "01", title: "Discovery & Requirements", desc: "We learn your tech stack, engineering culture, and specific hiring requirements. No generic job descriptions - just precision technical recruiting." },
  { step: "02", title: "Source & Vet Developers", desc: "Our network of 15,000+ software engineers and nearshore developers is filtered through rigorous technical interviews and culture alignment checks." },
  { step: "03", title: "Present Top Candidates", desc: "You see 3-5 developer candidates max. Every one is vetted and qualified. No resume spam - that's what separates real staff augmentation from generic IT staffing." },
  { step: "04", title: "Embed Engineers in Your Team", desc: "Placed software engineers integrate into your team, your processes, your codebase. Shipping production code by week one - the staff augmentation standard we set." },
  { step: "05", title: "Ongoing Retention Support", desc: "Ongoing check-ins, performance reviews, and developer retention support. Unlike other IT staffing agencies, we don't disappear after the placement." },
];

const specializations = [
  "React / Next.js", "Node.js / Python", "AWS / GCP / Azure", "iOS / Android",
  "Data Engineering", "Machine Learning", "DevOps / SRE", "Security Engineering",
  "Engineering Management", "Product Management", "UX/UI Design", "QA Automation",
];

export default function TalentPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Zytheq Talent - IT Staff Augmentation & Technical Recruiting"
          title="IT Staff Augmentation Services - Hire Developers Without the"
          accent="Noise."
          description="We don't send stacks of resumes like other IT staffing agencies. We send operators - senior software engineers and technical leaders who integrate fast and ship code immediately. Staff augmentation services, done right."
        />

        {/* Process */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">Our Staff Augmentation Process</h2>
            <div className="space-y-8">
              {process.map((p) => (
                <div key={p.step} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center font-display font-bold text-accent group-hover:bg-accent group-hover:text-bg-primary transition-colors duration-300">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">{p.title}</h3>
                    <p className="mt-1 text-text-secondary leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-8">Staff Augmentation Specializations</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Software engineer staffing roles we fill regularly through IT staff augmentation. If you don&apos;t see your niche, ask - our technical recruiting network runs deep.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {specializations.map((s) => (
                <div key={s} className="px-4 py-3 rounded-xl border border-border-subtle bg-bg-secondary/50 text-sm text-text-secondary hover:border-accent/30 hover:text-text-primary transition-all duration-300">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
