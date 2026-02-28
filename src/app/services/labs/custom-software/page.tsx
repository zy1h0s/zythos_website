import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Custom Software Development Services - Full-Stack Product Engineering | Zytheq",
  description:
    "Full-stack custom software development from architecture to deployment. React, Node.js, Python, Go - we build web applications, APIs, and platforms that scale.",
  keywords: [
    "custom software development",
    "full-stack development",
    "software development company",
    "web application development",
    "product engineering",
    "software development services",
  ],
};

const techStack = [
  {
    layer: "Frontend",
    technologies: [
      { name: "React", detail: "Component libraries, server components, concurrent rendering" },
      { name: "Next.js", detail: "SSR, ISR, App Router, middleware, edge functions" },
      { name: "TypeScript", detail: "Strict mode, generics, type-safe API contracts" },
      { name: "Tailwind CSS", detail: "Design systems, responsive layouts, dark mode" },
      { name: "React Native", detail: "Cross-platform mobile with shared business logic" },
    ],
  },
  {
    layer: "Backend",
    technologies: [
      { name: "Node.js", detail: "Express, Fastify, NestJS, microservices architecture" },
      { name: "Python", detail: "FastAPI, Django, Flask, async processing" },
      { name: "Go", detail: "High-performance services, concurrent processing, gRPC" },
      { name: "GraphQL", detail: "Apollo Server, schema federation, real-time subscriptions" },
      { name: "REST APIs", detail: "OpenAPI spec, versioning, rate limiting, authentication" },
    ],
  },
  {
    layer: "Database & Storage",
    technologies: [
      { name: "PostgreSQL", detail: "JSONB, full-text search, partitioning, read replicas" },
      { name: "MongoDB", detail: "Document modeling, aggregation pipelines, Atlas Search" },
      { name: "Redis", detail: "Caching, pub/sub, session management, rate limiting" },
      { name: "Elasticsearch", detail: "Full-text search, log analytics, real-time indexing" },
      { name: "S3 / CloudStorage", detail: "Object storage, CDN integration, signed URLs" },
    ],
  },
  {
    layer: "Infrastructure",
    technologies: [
      { name: "AWS", detail: "ECS, Lambda, RDS, CloudFront, SQS, SNS, EventBridge" },
      { name: "Docker", detail: "Multi-stage builds, compose, container orchestration" },
      { name: "Kubernetes", detail: "Helm charts, autoscaling, service mesh, GitOps" },
      { name: "Terraform", detail: "Infrastructure as code, state management, modules" },
      { name: "GitHub Actions", detail: "CI/CD pipelines, automated testing, deployment gates" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Requirements Engineering",
    desc: "We start with your business problem, not your feature list. Two-week discovery sprint: stakeholder interviews, user research, technical feasibility assessment, and a detailed product requirements document (PRD).",
    deliverable: "PRD, Technical Architecture Document, Project Estimate",
  },
  {
    step: "02",
    title: "Architecture & Technical Design",
    desc: "System architecture design, database schema modeling, API contract definition, and infrastructure planning. We produce a technical blueprint that your team can review and validate before a single line of code is written.",
    deliverable: "Architecture diagrams, API specs, Database schema, Tech stack rationale",
  },
  {
    step: "03",
    title: "Sprint-Based Development",
    desc: "Two-week agile sprints with daily standups, sprint planning, and retrospectives. Every sprint produces deployable increments. You review working software, not slide decks.",
    deliverable: "Working software increments, Sprint demos, Velocity reports",
  },
  {
    step: "04",
    title: "Quality Assurance & Testing",
    desc: "Unit tests, integration tests, E2E tests with Playwright, performance testing with k6, and security scanning with Snyk. We target 80%+ code coverage on critical paths.",
    deliverable: "Test suite, Coverage reports, Performance benchmarks, Security audit",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    desc: "Zero-downtime deployment with blue-green or canary release strategies. Infrastructure provisioning, monitoring setup with Datadog, alerting configuration, and runbook documentation.",
    deliverable: "Production deployment, Monitoring dashboards, Runbooks, SLA documentation",
  },
  {
    step: "06",
    title: "Post-Launch Support & Iteration",
    desc: "30-day hypercare period with dedicated support. Bug fixes, performance optimization, user feedback incorporation, and feature iteration based on real usage data.",
    deliverable: "Bug fixes, Performance optimizations, Feature iteration backlog",
  },
];

const industries = [
  { name: "Fintech & Banking", examples: "Payment platforms, lending systems, compliance tools, trading dashboards" },
  { name: "Healthcare & Life Sciences", examples: "Telehealth platforms, EHR integrations, HIPAA-compliant SaaS, clinical trial management" },
  { name: "E-Commerce & Retail", examples: "Marketplace platforms, inventory management, recommendation engines, POS systems" },
  { name: "SaaS & B2B", examples: "Multi-tenant platforms, billing systems, analytics dashboards, workflow automation" },
  { name: "Logistics & Supply Chain", examples: "Fleet management, route optimization, warehouse management, real-time tracking" },
  { name: "Education & EdTech", examples: "Learning management systems, virtual classrooms, assessment platforms, content delivery" },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Custom Software Development Services"
          title="We Build the Entire Product, Not Just"
          accent="Features."
          description="From database schema to deployment pipeline - full-stack custom software development by senior engineers who've shipped $47M+ in production software. No outsourcing. No handoffs. One team, one codebase."
        />

        {/* Tech Stack */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Our Technology Stack</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">We pick the right tool for every layer. No dogma, no defaults - just engineering decisions backed by experience.</p>
            <div className="space-y-8">
              {techStack.map((layer) => (
                <div key={layer.layer} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30">
                  <h3 className="font-display font-bold text-lg text-accent mb-4">{layer.layer}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {layer.technologies.map((tech) => (
                      <div key={tech.name} className="p-3 rounded-xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300">
                        <h4 className="font-display font-semibold text-sm mb-1">{tech.name}</h4>
                        <p className="text-xs text-text-muted">{tech.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Our Development Process</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Six phases from discovery to production. Every phase produces tangible deliverables you can review and validate.</p>
            <div className="space-y-6">
              {process.map((p) => (
                <div key={p.step} className="flex gap-6 group p-6 rounded-2xl border border-border-subtle bg-bg-secondary/30 hover:border-accent/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center font-display font-bold text-accent group-hover:bg-accent group-hover:text-bg-primary transition-colors duration-300">
                    {p.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg mb-1">{p.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">{p.desc}</p>
                    <p className="text-xs text-text-muted"><span className="font-semibold text-accent">Deliverables: </span>{p.deliverable}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Industries We Build For</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Domain expertise that translates to faster delivery and fewer surprises.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30 hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-base mb-2">{ind.name}</h3>
                  <p className="text-xs text-text-muted">{ind.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Have a Product to Build?</h2>
            <p className="text-text-secondary mb-8">Tell us what you&apos;re building. We&apos;ll come back with a technical approach, timeline estimate, and team composition - free.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
