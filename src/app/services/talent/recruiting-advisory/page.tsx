import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Technical Recruiting Advisory - Compensation & Org Design | Zytheq",
  description:
    "Compensation benchmarks, engineering org design, developer retention strategies, and technical hiring process optimization. Recruiting advisory that goes beyond the hire.",
  keywords: [
    "technical recruiting advisory",
    "engineering compensation benchmarks",
    "developer retention",
    "engineering org design",
    "hiring process optimization",
    "technical recruiting consulting",
  ],
};

const services = [
  {
    title: "Compensation Benchmarking",
    desc: "Real-time salary and equity data across 50+ engineering roles, 12 countries, and all seniority levels. Stop losing candidates to below-market offers.",
    deliverables: [
      "Custom compensation report by role, level, and geography",
      "Equity structure recommendations (options, RSUs, phantom equity)",
      "Benefits package competitive analysis",
      "Annual compensation review cadence setup",
    ],
  },
  {
    title: "Engineering Org Design",
    desc: "Squad topologies, reporting structures, career ladders, and span-of-control optimization. We design engineering organizations that ship fast and retain talent.",
    deliverables: [
      "Org structure blueprint with reporting lines",
      "Squad/tribe/chapter topology recommendation",
      "Engineering career ladder (IC and management tracks)",
      "Role definitions with leveling criteria (L3-L8)",
    ],
  },
  {
    title: "Hiring Process Optimization",
    desc: "Interview pipeline design, technical assessment creation, interviewer training, and candidate experience optimization. Reduce time-to-hire by 40%.",
    deliverables: [
      "End-to-end interview pipeline design",
      "Custom technical assessment creation (coding, system design, take-home)",
      "Interviewer training workshops (bias reduction, structured interviews)",
      "Candidate experience audit and improvement plan",
    ],
  },
  {
    title: "Developer Retention Strategy",
    desc: "Exit interview analysis, engagement surveys, career development programs, and culture audits. Understand why engineers leave and fix it before they do.",
    deliverables: [
      "Anonymous developer satisfaction survey + analysis",
      "Exit interview pattern analysis and recommendations",
      "Career development framework and growth plan templates",
      "Engineering culture health scorecard",
    ],
  },
  {
    title: "Employer Brand for Engineers",
    desc: "Technical blog strategy, open source contribution programs, conference sponsorship planning, and engineering team social presence. Attract top talent organically.",
    deliverables: [
      "Engineering blog content strategy and editorial calendar",
      "Open source contribution program design",
      "Tech talk and conference participation plan",
      "Developer-focused careers page audit and redesign recommendations",
    ],
  },
  {
    title: "Diversity & Inclusion in Engineering",
    desc: "Inclusive hiring practices, diverse sourcing strategies, bias-free assessment design, and ERG program development. Build engineering teams that reflect your users.",
    deliverables: [
      "Inclusive job description templates",
      "Diverse sourcing channel strategy",
      "Bias-free interview process design",
      "D&I metrics dashboard and quarterly reporting framework",
    ],
  },
];

const packages = [
  {
    name: "Diagnostic",
    price: "$5,000",
    duration: "1-2 weeks",
    desc: "A comprehensive audit of your current technical recruiting processes, compensation structure, and engineering org design. You get a detailed report with prioritized recommendations.",
    includes: ["Recruiting process audit", "Compensation gap analysis", "Org structure review", "Priority recommendations report"],
  },
  {
    name: "Strategic",
    price: "$15,000",
    duration: "4-6 weeks",
    desc: "Everything in Diagnostic plus hands-on implementation. We redesign your interview pipeline, build compensation bands, and create career ladders.",
    includes: ["Full diagnostic audit", "Interview pipeline redesign", "Compensation band creation", "Career ladder development", "Interviewer training (2 sessions)"],
  },
  {
    name: "Transformation",
    price: "$35,000+",
    duration: "3-6 months",
    desc: "A full embedded engagement. A Zytheq recruiting advisor works alongside your team to transform your entire talent acquisition and retention operation.",
    includes: ["Everything in Strategic", "Embedded advisor (20 hrs/week)", "ATS optimization", "Employer brand strategy", "Ongoing retention monitoring", "Quarterly business reviews"],
  },
];

export default function RecruitingAdvisoryPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Technical Recruiting Advisory"
          title="Stop Losing Engineers to Bad Process and Below-Market"
          accent="Offers."
          description="Compensation benchmarks, interview pipeline design, engineering org structure, and developer retention strategies. We fix the systems behind your hiring, not just the symptoms."
        />

        {/* Services */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Advisory Services</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Six core advisory services designed by engineers who&apos;ve built and scaled teams at startups and enterprises.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-primary/50 hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{s.desc}</p>
                  <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Deliverables</h4>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
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

        {/* Packages */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Advisory Packages</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Three engagement tiers designed for different stages of recruiting maturity. All packages include a dedicated Zytheq advisor.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className="p-8 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300 flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-2xl">{pkg.name}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-accent font-display font-bold text-lg">{pkg.price}</span>
                      <span className="text-xs text-text-muted">/ {pkg.duration}</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">{pkg.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {pkg.includes.map((item) => (
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
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Fix Your Recruiting Before Your Next Hire</h2>
            <p className="text-text-secondary mb-8">Start with a free 30-minute diagnostic call. We&apos;ll identify the biggest gaps in your technical recruiting process.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Book a Free Diagnostic Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
