import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Software Architecture Consulting - Tech Debt Audits & Migration | Zytheq",
  description:
    "Architecture reviews, tech debt audits, cloud migration strategies, and system design consulting. We diagnose before we prescribe.",
  keywords: [
    "software architecture consulting",
    "tech debt audit",
    "cloud migration",
    "architecture review",
    "system design",
    "microservices architecture",
    "legacy modernization",
  ],
};

const services = [
  {
    title: "Architecture Review & Audit",
    desc: "A comprehensive assessment of your current system architecture. We analyze scalability bottlenecks, security vulnerabilities, performance issues, and maintainability concerns. You get a prioritized action plan.",
    deliverables: ["Architecture assessment report", "Risk matrix with severity ratings", "Scalability analysis", "Security vulnerability scan", "Prioritized remediation roadmap"],
    duration: "1-3 weeks",
  },
  {
    title: "Tech Debt Quantification",
    desc: "We don't just identify tech debt - we quantify it in engineering hours, risk exposure, and business impact. This gives your leadership team the data they need to prioritize refactoring investment.",
    deliverables: ["Tech debt inventory with cost estimates", "Risk-weighted priority matrix", "Refactoring effort estimates", "ROI analysis for debt reduction", "Quarterly reduction roadmap"],
    duration: "2-4 weeks",
  },
  {
    title: "Cloud Migration Strategy",
    desc: "Plan your migration from on-premises or legacy cloud to modern infrastructure. Lift-and-shift, re-platform, or re-architect - we recommend the right strategy for each workload.",
    deliverables: ["Migration assessment (6R analysis)", "Target architecture design", "Migration sequence plan", "Cost comparison (current vs. target)", "Risk mitigation playbook"],
    duration: "2-6 weeks",
  },
  {
    title: "Microservices Architecture Design",
    desc: "Break down monoliths into well-bounded microservices. Domain-driven design, service boundaries, data ownership, inter-service communication, and deployment strategies.",
    deliverables: ["Domain model & bounded contexts", "Service decomposition blueprint", "API contract definitions", "Data ownership mapping", "Migration sequence (strangler fig pattern)"],
    duration: "3-8 weeks",
  },
  {
    title: "Performance Engineering",
    desc: "Identify and resolve performance bottlenecks across your stack. Load testing, database query optimization, caching strategies, CDN configuration, and application profiling.",
    deliverables: ["Load test results & analysis", "Performance bottleneck report", "Database query optimization plan", "Caching architecture design", "Performance monitoring dashboard"],
    duration: "2-6 weeks",
  },
  {
    title: "System Design for Scale",
    desc: "Design systems built to handle 10x-100x growth. Horizontal scaling strategies, database sharding, event-driven architecture, CQRS, and eventual consistency patterns.",
    deliverables: ["System design document", "Capacity planning model", "Scaling strategy blueprint", "Failover & disaster recovery plan", "Cost projection at scale"],
    duration: "2-4 weeks",
  },
];

const architecturePatterns = [
  { name: "Microservices", desc: "Independently deployable services with clear domain boundaries" },
  { name: "Event-Driven Architecture", desc: "Asynchronous communication via events, queues, and streaming" },
  { name: "CQRS & Event Sourcing", desc: "Separate read/write models for complex domain logic" },
  { name: "Domain-Driven Design", desc: "Bounded contexts, aggregates, and ubiquitous language" },
  { name: "API Gateway Pattern", desc: "Centralized API management, authentication, and rate limiting" },
  { name: "Strangler Fig Migration", desc: "Incremental migration from monolith to microservices" },
  { name: "Saga Pattern", desc: "Distributed transaction management across services" },
  { name: "Circuit Breaker", desc: "Fault isolation and graceful degradation" },
  { name: "Sidecar / Service Mesh", desc: "Infrastructure concerns abstracted from application code" },
  { name: "Data Mesh", desc: "Domain-oriented, self-serve data platform architecture" },
  { name: "Hexagonal Architecture", desc: "Ports and adapters for testable, framework-agnostic code" },
  { name: "Serverless Architecture", desc: "Event-driven compute with zero server management" },
];

const tools = [
  { category: "Diagramming & Documentation", items: ["Mermaid", "draw.io", "Excalidraw", "Arc42", "C4 Model", "Structurizr"] },
  { category: "Load Testing & Profiling", items: ["k6", "Artillery", "JMeter", "py-spy", "pprof", "Clinic.js"] },
  { category: "Code Quality & Analysis", items: ["SonarQube", "CodeClimate", "Snyk", "Semgrep", "ESLint", "mypy"] },
  { category: "Observability", items: ["Datadog", "Grafana", "OpenTelemetry", "Jaeger", "Prometheus", "Sentry"] },
];

export default function ArchitectureConsultingPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Software Architecture Consulting"
          title="We Diagnose Before We"
          accent="Prescribe."
          description="Architecture reviews, tech debt audits, cloud migration strategies, and system design for scale. Our architects have designed systems serving millions of users across fintech, healthcare, and e-commerce."
        />

        {/* Services */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Consulting Services</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Six focused consulting engagements, each with clear deliverables and timelines. No open-ended advisory - just actionable outcomes.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((svc) => (
                <div key={svc.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-primary/50 hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-xl">{svc.title}</h3>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full shrink-0 ml-2">{svc.duration}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{svc.desc}</p>
                  <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Deliverables</h4>
                  <ul className="space-y-1.5">
                    {svc.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Patterns */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Architecture Patterns We Implement</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Battle-tested patterns for distributed systems, data-intensive applications, and high-availability platforms.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {architecturePatterns.map((p) => (
                <div key={p.name} className="p-5 rounded-xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-display font-semibold text-sm mb-1">{p.name}</h3>
                  <p className="text-xs text-text-muted">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">Tools We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((cat) => (
                <div key={cat.category} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30">
                  <h3 className="font-display font-bold text-base text-accent mb-4">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 text-xs rounded-lg border border-border-subtle bg-bg-secondary/50 text-text-secondary">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Need an Architecture Review?</h2>
            <p className="text-text-secondary mb-8">Book a free 30-minute consultation. We&apos;ll discuss your architecture challenges and recommend next steps.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Book an Architecture Review
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
