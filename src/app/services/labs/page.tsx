import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Zythos Labs — Custom Software Development",
  description: "Full-stack product development. Design, build, and ship software that matters.",
};

const engagementModels = [
  {
    title: "MVP Sprint",
    timeline: "8-14 weeks",
    desc: "Validate your idea with a production-ready minimum viable product. Design, build, deploy.",
    best: "Startups with funding and a clear vision",
  },
  {
    title: "Product Build",
    timeline: "3-9 months",
    desc: "Full product development from architecture to launch. Iterative, collaborative, shipped.",
    best: "Companies building their core product",
  },
  {
    title: "Modernization",
    timeline: "Varies",
    desc: "Rebuild or migrate legacy systems to modern architecture. Zero downtime, zero data loss.",
    best: "Enterprises with technical debt slowing them down",
  },
  {
    title: "Ongoing Partnership",
    timeline: "Continuous",
    desc: "Dedicated development team as an extension of your organization. Scales up or down.",
    best: "Companies needing sustained development capacity",
  },
];

const capabilities = [
  { title: "Web Applications", desc: "React, Next.js, Vue — full-stack web platforms built for scale." },
  { title: "Mobile Apps", desc: "Native iOS/Android and cross-platform with React Native and Flutter." },
  { title: "API & Backend", desc: "Node.js, Python, Go — microservices, REST, GraphQL, event-driven." },
  { title: "Cloud Infrastructure", desc: "AWS, GCP, Azure — IaC, CI/CD, monitoring, cost optimization." },
  { title: "AI & ML Integration", desc: "LLM integration, ML pipelines, computer vision, NLP systems." },
  { title: "Data Engineering", desc: "ETL pipelines, data lakes, real-time analytics, BI dashboards." },
];

export default function LabsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Zythos Labs"
          title="We build software"
          accent="that ships."
          description="Design, architecture, development, and deployment — all under one roof. No handoffs, no gaps, no excuses."
        />

        {/* Capabilities */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">What we build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap) => (
                <div key={cap.title} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/50 hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-lg mb-2">{cap.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement models */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Engagement models</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Pick the structure that fits. Every engagement is tailored, but these are our starting frameworks.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engagementModels.map((model) => (
                <div key={model.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-xl">{model.title}</h3>
                    <span className="text-xs text-accent font-mono bg-accent/10 px-3 py-1 rounded-full">{model.timeline}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{model.desc}</p>
                  <p className="text-xs text-text-muted">
                    <span className="font-semibold text-text-secondary">Best for: </span>
                    {model.best}
                  </p>
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
