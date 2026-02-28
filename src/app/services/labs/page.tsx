import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Zytheq Labs - Custom Software Development",
  description: "Full-stack product development. Design, build, and ship software that matters.",
};

const engagementModels = [
  {
    title: "MVP Development Sprint",
    timeline: "8-14 weeks",
    desc: "Validate your idea with a production-ready MVP. Our dedicated development team handles design, build, and deployment - ideal software development for startups.",
    best: "Startups that need to build an MVP fast and hire developers later",
  },
  {
    title: "Full Product Development",
    timeline: "3-9 months",
    desc: "Full-stack custom software development from architecture to launch. Iterative, collaborative, and shipped on time by senior software engineers.",
    best: "Companies building core software products that need a dedicated development team",
  },
  {
    title: "Legacy Software Modernization",
    timeline: "Varies",
    desc: "Rebuild or migrate legacy enterprise software to modern cloud architecture. Zero downtime, zero data loss, full-stack modernization.",
    best: "Enterprises with legacy technical debt that need custom software modernization",
  },
  {
    title: "Dedicated Development Team",
    timeline: "Continuous",
    desc: "A dedicated software development team that operates as an extension of your organization. Scale your engineering team up or down as needed - the best of staff augmentation and custom development combined.",
    best: "Companies that want to hire developers and maintain a dedicated development team long-term",
  },
];

const capabilities = [
  { title: "Custom Web Application Development", desc: "React, Next.js, Vue - full-stack custom web applications built for enterprise scale by senior software engineers." },
  { title: "Mobile App Development", desc: "Native iOS and Android development plus cross-platform apps with React Native and Flutter. Hire mobile developers or let our team build it." },
  { title: "API & Backend Development", desc: "Node.js, Python, Go - microservices architecture, REST APIs, GraphQL, and event-driven backend systems built by senior software engineers." },
  { title: "Cloud Infrastructure & DevOps Engineering", desc: "AWS, GCP, Azure - infrastructure as code, CI/CD pipelines, monitoring, and cloud cost optimization for enterprise software." },
  { title: "AI & Machine Learning Development", desc: "LLM integration, ML pipeline development, computer vision, and NLP systems. AI-powered custom software development for modern products." },
  { title: "Data Engineering & Analytics", desc: "ETL pipelines, data lake architecture, real-time analytics, and BI dashboard development. Data engineering services from senior engineers." },
];

export default function LabsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Zytheq Labs - Custom Software Development"
          title="Custom Software Development Company That"
          accent="Ships."
          description="Product design, software architecture, full-stack development, and cloud deployment - all from one dedicated development team. No handoffs, no gaps, no excuses."
        />

        {/* Capabilities */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">Custom Software Development Capabilities</h2>
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
            <h2 className="font-display font-bold text-3xl mb-4">Software Development Engagement Models</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Pick the custom software development structure that fits your needs. Every engagement is tailored, but these are our proven starting frameworks.</p>
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
