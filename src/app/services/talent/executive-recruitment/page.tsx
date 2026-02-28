import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "CTO & VP Engineering Recruitment - Executive Tech Search | Zytheq",
  description:
    "Executive technical recruiting for CTO, VP Engineering, Head of Engineering, and Principal Engineer roles. We find the leaders who transform engineering organizations.",
  keywords: [
    "CTO recruitment",
    "VP Engineering search",
    "technical executive recruiting",
    "engineering leadership hiring",
    "Head of Engineering placement",
  ],
};

const roles = [
  {
    title: "Chief Technology Officer (CTO)",
    desc: "Visionary technical leaders who align engineering strategy with business objectives. We source CTOs from Series A startups to Fortune 500 enterprises.",
    skills: ["Engineering Strategy", "Board Communication", "Technical Vision", "Team Building", "Architecture Decisions"],
  },
  {
    title: "VP of Engineering",
    desc: "Operational leaders who scale engineering organizations from 10 to 200+. Process builders, culture setters, and delivery machines.",
    skills: ["Org Design", "Delivery Management", "Process Optimization", "Hiring at Scale", "Cross-Functional Leadership"],
  },
  {
    title: "Head of Engineering",
    desc: "Hands-on leaders who bridge the gap between individual contribution and team management. Technical depth with management breadth.",
    skills: ["Technical Leadership", "Sprint Planning", "Code Reviews", "Mentorship", "Architecture Reviews"],
  },
  {
    title: "Principal / Staff Engineer",
    desc: "Deep technical experts who set architectural direction and raise the bar for the entire engineering organization. The technical backbone.",
    skills: ["System Design", "Tech Debt Strategy", "RFC Authorship", "Cross-Team Influence", "Performance Engineering"],
  },
  {
    title: "Engineering Manager",
    desc: "People-first managers who grow engineers, unblock teams, and create the conditions for high performance. Career development experts.",
    skills: ["1:1 Coaching", "Performance Reviews", "Team Health", "Roadmap Planning", "Stakeholder Management"],
  },
  {
    title: "Director of Engineering",
    desc: "Multi-team leaders who own entire product verticals. They translate company strategy into engineering execution across squads.",
    skills: ["Multi-Team Management", "Budget Ownership", "Strategic Planning", "Vendor Management", "Technical Roadmaps"],
  },
];

const process = [
  {
    step: "01",
    title: "Executive Briefing",
    desc: "A deep-dive session with your CEO, board members, or hiring committee. We map the role requirements, compensation expectations, equity structure, and cultural fit criteria specific to technical executives.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Market Mapping & Outreach",
    desc: "We identify 50-100 potential candidates through our executive network, LinkedIn Recruiter, industry events, and direct referrals. Every outreach is personalized and confidential.",
    duration: "Weeks 1-3",
  },
  {
    step: "03",
    title: "Technical & Leadership Assessment",
    desc: "Candidates complete a comprehensive evaluation: technical architecture review, leadership scenario assessment, and a 360-degree reference check with former direct reports, peers, and supervisors.",
    duration: "Weeks 3-5",
  },
  {
    step: "04",
    title: "Shortlist & Interview Coordination",
    desc: "We present 3-5 exceptional candidates with detailed profiles including technical depth assessment, leadership style analysis, compensation expectations, and availability timeline.",
    duration: "Week 5-6",
  },
  {
    step: "05",
    title: "Offer Negotiation & Closing",
    desc: "We manage the entire offer process: base salary benchmarking, equity package structuring, signing bonus negotiation, and start date coordination. Our close rate is 92%.",
    duration: "Weeks 6-8",
  },
  {
    step: "06",
    title: "90-Day Executive Onboarding",
    desc: "Post-placement support includes 30/60/90 day check-ins, stakeholder integration guidance, and quick-win identification to ensure your new executive hits the ground running.",
    duration: "First 90 days",
  },
];

const stats = [
  { value: "92%", label: "Offer acceptance rate" },
  { value: "45 days", label: "Average time to placement" },
  { value: "97%", label: "Retention at 12 months" },
  { value: "150+", label: "Executive placements completed" },
];

export default function ExecutiveRecruitmentPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="CTO & VP Engineering Recruitment"
          title="Technical Executives Who Transform"
          accent="Engineering Organizations."
          description="Finding a CTO isn't like finding a senior engineer. It requires understanding board dynamics, equity structures, technical vision, and organizational leadership. We specialize in exactly that."
        />

        {/* Stats */}
        <section className="py-16 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-6 rounded-2xl border border-border-subtle bg-bg-primary/30">
                  <div className="text-3xl font-display font-bold text-accent">{s.value}</div>
                  <div className="mt-2 text-xs text-text-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles We Fill */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Executive Technical Roles We Fill</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">From first-time CTO hires at seed-stage startups to VP of Engineering searches at public companies. Every search is bespoke.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="p-6 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-lg mb-2">{role.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{role.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-[11px] rounded-md border border-border-subtle bg-bg-primary/50 text-text-muted">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Our Executive Search Process</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">A rigorous, confidential process designed for senior technical leadership placements. Average time-to-fill: 45 days.</p>
            <div className="space-y-6">
              {process.map((p) => (
                <div key={p.step} className="flex gap-6 group p-6 rounded-2xl border border-border-subtle bg-bg-primary/30 hover:border-accent/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center font-display font-bold text-accent group-hover:bg-accent group-hover:text-bg-primary transition-colors duration-300">
                    {p.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-bold text-lg">{p.title}</h3>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">{p.duration}</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Searching for Your Next Technical Leader?</h2>
            <p className="text-text-secondary mb-8">Let&apos;s discuss your executive search requirements. Confidential, no obligation.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Start an Executive Search
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
