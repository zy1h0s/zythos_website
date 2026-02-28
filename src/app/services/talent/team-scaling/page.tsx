import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Scale Your Engineering Team - Rapid Team Building | Zytheq",
  description:
    "Go from 5 to 50 developers in months, not years. We architect the hiring plan, source the talent, and manage the ramp. Engineering team scaling done right.",
  keywords: [
    "scale engineering team",
    "rapid hiring",
    "team scaling",
    "engineering team building",
    "developer hiring at scale",
    "nearshore team scaling",
  ],
};

const phases = [
  {
    phase: "Phase 1",
    title: "Engineering Org Assessment",
    duration: "Week 1-2",
    tasks: [
      "Audit current team structure, skill distribution, and delivery velocity",
      "Map technical debt and infrastructure readiness for scale",
      "Define squad topology and ownership boundaries",
      "Create role requirements matrix with seniority mix ratios",
      "Establish compensation benchmarks by role, level, and geography",
    ],
  },
  {
    phase: "Phase 2",
    title: "Hiring Architecture",
    duration: "Week 2-3",
    tasks: [
      "Design the org chart with clear reporting lines and squad ownership",
      "Build a phased hiring roadmap with monthly headcount targets",
      "Define interview processes calibrated per role and seniority",
      "Set up ATS workflows, scorecards, and feedback templates",
      "Establish onboarding playbooks with 30/60/90 day milestones",
    ],
  },
  {
    phase: "Phase 3",
    title: "Sourcing & Pipeline Activation",
    duration: "Weeks 3-8",
    tasks: [
      "Activate our network of 15,000+ vetted engineers across 12 countries",
      "Run targeted outreach campaigns on LinkedIn, GitHub, and Stack Overflow",
      "Screen 200+ candidates per month through technical assessments",
      "Present 3-5 qualified candidates per open role weekly",
      "Manage interview scheduling, feedback loops, and offer negotiations",
    ],
  },
  {
    phase: "Phase 4",
    title: "Ramp & Integration",
    duration: "Months 2-6",
    tasks: [
      "Onboard engineers in cohorts with structured buddy systems",
      "Set up pair programming sessions with existing team members",
      "Track velocity metrics, PR cycle times, and code quality scores",
      "Run monthly retrospectives on hiring quality and team health",
      "Adjust hiring pace based on absorption capacity and delivery metrics",
    ],
  },
];

const caseStudy = {
  company: "Series B E-Commerce Platform",
  challenge: "Scale from 10 to 52 engineers in 6 months to support international expansion across 4 new markets.",
  results: [
    { metric: "42", label: "Engineers placed in 6 months" },
    { metric: "94%", label: "Retention at 12 months" },
    { metric: "3x", label: "Revenue growth post-scaling" },
    { metric: "6", label: "Autonomous squads created" },
  ],
  squads: [
    { name: "Payments Squad", size: 8, stack: "Node.js, Stripe, PostgreSQL" },
    { name: "Marketplace Squad", size: 7, stack: "React, Next.js, Elasticsearch" },
    { name: "Logistics Squad", size: 6, stack: "Python, Kafka, Redis" },
    { name: "Mobile Squad", size: 8, stack: "React Native, Firebase, GraphQL" },
    { name: "Platform/Infra Squad", size: 7, stack: "AWS, Terraform, Kubernetes" },
    { name: "Data Squad", size: 6, stack: "Python, Spark, Airflow, dbt" },
  ],
};

const models = [
  {
    title: "Sprint Scale (5-15 Engineers)",
    timeline: "4-8 weeks",
    desc: "Rapid augmentation for a product launch, funding round, or seasonal demand spike. We source, vet, and place engineers in parallel to compress timelines.",
    includes: ["Dedicated sourcing team", "Accelerated vetting process", "Cohort onboarding"],
  },
  {
    title: "Growth Scale (15-50 Engineers)",
    timeline: "2-6 months",
    desc: "Building multiple squads from scratch or expanding existing teams. Includes org design, hiring architecture, and a dedicated Zytheq delivery manager.",
    includes: ["Org design consulting", "Squad topology planning", "Phased hiring roadmap", "Monthly health checks"],
  },
  {
    title: "Enterprise Scale (50+ Engineers)",
    timeline: "6-12 months",
    desc: "Full engineering department buildout or offshore development center establishment. Executive-level partnership with your CTO and VP of Engineering.",
    includes: ["Executive partnership", "ODC setup support", "Culture & process design", "Leadership placement", "Quarterly business reviews"],
  },
];

export default function TeamScalingPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Engineering Team Scaling"
          title="Go From 5 to 50 Developers Without Losing"
          accent="Velocity."
          description="Scaling an engineering team isn't just hiring. It's org design, culture preservation, process adaptation, and absorption capacity management. We've done it 30+ times."
        />

        {/* Phased Process */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Our Team Scaling Framework</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">A battle-tested framework for scaling engineering teams without sacrificing quality, velocity, or culture.</p>
            <div className="space-y-8">
              {phases.map((phase) => (
                <div key={phase.phase} className="p-8 rounded-2xl border border-border-subtle bg-bg-primary/30 hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">{phase.phase}</span>
                    <h3 className="font-display font-bold text-xl">{phase.title}</h3>
                    <span className="text-xs text-text-muted ml-auto">{phase.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Team Scaling in Action</h2>
            <p className="text-text-secondary mb-8">{caseStudy.company}: {caseStudy.challenge}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {caseStudy.results.map((r) => (
                <div key={r.label} className="text-center p-6 rounded-2xl border border-border-subtle bg-bg-secondary/50">
                  <div className="text-3xl font-display font-bold text-accent">{r.metric}</div>
                  <div className="mt-2 text-xs text-text-secondary">{r.label}</div>
                </div>
              ))}
            </div>
            <h3 className="font-display font-bold text-xl mb-6">Squad Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.squads.map((squad) => (
                <div key={squad.name} className="p-5 rounded-xl border border-border-subtle bg-bg-secondary/30">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display font-semibold text-sm">{squad.name}</h4>
                    <span className="text-xs text-accent">{squad.size} engineers</span>
                  </div>
                  <p className="text-xs text-text-muted">{squad.stack}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scaling Models */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">Scaling Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {models.map((model) => (
                <div key={model.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-primary/30 hover:border-accent/20 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-lg">{model.title}</h3>
                  </div>
                  <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full self-start mb-4">{model.timeline}</span>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">{model.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {model.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-text-muted">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Ready to Scale Your Team?</h2>
            <p className="text-text-secondary mb-8">Let&apos;s build your scaling roadmap. Free consultation with our team scaling experts.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Plan Your Team Scale-Up
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
