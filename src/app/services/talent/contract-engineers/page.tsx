import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Contract Software Engineers - Flexible IT Staffing | Zytheq",
  description:
    "Hire contract software engineers for defined engagements. SOW-based, time & materials, or retainer models. Flexible IT staffing without compromising quality.",
  keywords: [
    "contract software engineers",
    "contract developers",
    "flexible IT staffing",
    "SOW developers",
    "freelance engineers",
    "contract-to-hire developers",
  ],
};

const contractTypes = [
  {
    title: "Time & Materials",
    desc: "Pay for hours worked with full transparency. Ideal for ongoing projects with evolving scope. Weekly timesheets, monthly invoicing, and real-time budget tracking.",
    best: "Projects with flexible or evolving scope",
    terms: "Monthly rolling, 2-week notice",
  },
  {
    title: "Statement of Work (SOW)",
    desc: "Fixed-scope engagements with defined deliverables, timelines, and milestones. We scope the work, assign the right engineers, and deliver on schedule.",
    best: "Well-defined projects with clear deliverables",
    terms: "Project-based, milestone payments",
  },
  {
    title: "Retainer Model",
    desc: "Reserve dedicated engineering capacity on a monthly retainer. Guaranteed availability for critical projects, maintenance, and on-call support.",
    best: "Ongoing platform maintenance and feature development",
    terms: "3-month minimum, monthly billing",
  },
  {
    title: "Contract-to-Hire",
    desc: "Start with a contract engagement and convert to full-time after a trial period. De-risk your hiring process and ensure cultural fit before committing.",
    best: "Companies that want to evaluate before making permanent hires",
    terms: "3-6 month trial, conversion fee applies",
  },
];

const specializations = [
  {
    role: "Full-Stack Engineers",
    stack: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Redis", "Docker"],
    rate: "$75-150/hr",
  },
  {
    role: "Frontend Specialists",
    stack: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Storybook", "Cypress"],
    rate: "$70-140/hr",
  },
  {
    role: "Backend Engineers",
    stack: ["Node.js", "Python", "Go", "Java", "GraphQL", "gRPC", "Kafka"],
    rate: "$80-160/hr",
  },
  {
    role: "Mobile Developers",
    stack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    rate: "$80-155/hr",
  },
  {
    role: "DevOps / SRE Engineers",
    stack: ["AWS", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Datadog", "PagerDuty"],
    rate: "$85-170/hr",
  },
  {
    role: "Data / ML Engineers",
    stack: ["Python", "PyTorch", "Spark", "Airflow", "dbt", "Snowflake", "Databricks"],
    rate: "$90-180/hr",
  },
];

const advantages = [
  {
    title: "No Recruitment Fees",
    desc: "Unlike traditional staffing agencies that charge 15-25% placement fees, our contract model is simple: you pay the engineer's rate plus our transparent margin.",
  },
  {
    title: "IP Protection Built In",
    desc: "All contract engineers sign comprehensive NDAs and IP assignment agreements. Your code, your data, your intellectual property - protected from day one.",
  },
  {
    title: "Compliance & Payroll Handled",
    desc: "We handle contractor classification, tax compliance, payroll processing, and benefits administration across all 12 countries in our network. Zero compliance risk for you.",
  },
  {
    title: "Instant Replacement Guarantee",
    desc: "If a placed engineer isn't working out, we provide a replacement within 5 business days at no additional cost. No questions asked for the first 30 days.",
  },
];

export default function ContractEngineersPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Contract Software Engineers"
          title="Flexible Engineering Talent Without the"
          accent="Overhead."
          description="Not every project needs a full-time hire. Our contract software engineers deliver production-quality code on flexible terms - SOW, T&M, retainer, or contract-to-hire."
        />

        {/* Contract Types */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Engagement Models</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Choose the contract structure that fits your project. Every model includes a dedicated account manager and weekly status updates.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contractTypes.map((ct) => (
                <div key={ct.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-primary/50 hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-xl mb-3">{ct.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{ct.desc}</p>
                  <div className="space-y-2 text-xs">
                    <p><span className="font-semibold text-text-primary">Best for: </span><span className="text-text-muted">{ct.best}</span></p>
                    <p><span className="font-semibold text-text-primary">Terms: </span><span className="text-text-muted">{ct.terms}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations with Rates */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Contract Engineer Specializations</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Transparent rate ranges based on seniority and specialization. All rates are fully loaded - no hidden fees.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializations.map((spec) => (
                <div key={spec.role} className="p-6 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-lg">{spec.role}</h3>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">{spec.rate}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {spec.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs rounded-lg border border-border-subtle bg-bg-primary/50 text-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">The Zytheq Contract Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((a) => (
                <div key={a.title} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30">
                  <h3 className="font-display font-bold text-lg mb-2">{a.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Need Contract Engineers?</h2>
            <p className="text-text-secondary mb-8">Tell us about your project. We&apos;ll match you with the right contract talent within a week.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Hire Contract Engineers
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
