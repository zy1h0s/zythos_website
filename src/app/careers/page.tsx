import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Careers at Zytheq - Join Our Team",
  description:
    "Join Zytheq. We're hiring engineers, recruiters, designers, and operators who want to build the future of staff augmentation and software development.",
  keywords: [
    "careers",
    "jobs at Zytheq",
    "engineering jobs",
    "tech careers",
    "remote jobs",
    "recruiting careers",
  ],
};

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US/LATAM)",
    type: "Full-time",
    desc: "Build and ship client products across our Zytheq Labs engagements. React, Next.js, Node.js, PostgreSQL. Minimum 5 years of production experience.",
  },
  {
    title: "Staff Backend Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    desc: "Lead backend architecture for complex client projects. Python, Go, or Node.js. System design expertise required. 7+ years experience.",
  },
  {
    title: "DevOps / SRE Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    desc: "Build and manage cloud infrastructure for client deployments. AWS/GCP, Terraform, Kubernetes, CI/CD. 4+ years of production DevOps experience.",
  },
  {
    title: "Senior Technical Recruiter",
    department: "Talent",
    location: "Remote (US)",
    type: "Full-time",
    desc: "Source, vet, and place senior software engineers for our Zytheq Talent clients. 3+ years of technical recruiting experience. Must understand code.",
  },
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote (US/EU)",
    type: "Full-time",
    desc: "Lead product design for Zytheq Labs client engagements. Figma, user research, design systems. 5+ years of product design experience.",
  },
  {
    title: "Account Executive",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    desc: "Sell Zytheq Talent and Labs services to mid-market and enterprise clients. Technical sales background preferred. $120K+ OTE.",
  },
  {
    title: "ML / AI Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    desc: "Build ML pipelines, LLM integrations, and AI features for client products. PyTorch, LangChain, production ML experience required. 4+ years.",
  },
  {
    title: "Engineering Manager",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    desc: "Manage a squad of 6-8 engineers across Zytheq Labs projects. Strong technical background with 2+ years of people management. Delivery-focused.",
  },
];

const perks = [
  { title: "Fully Remote", desc: "Work from anywhere. We have team members across 12 countries. No mandatory office days." },
  { title: "Competitive Compensation", desc: "Top-of-market salaries benchmarked quarterly. Equity for all full-time employees." },
  { title: "Unlimited PTO", desc: "Take the time you need. We track outcomes, not hours. Minimum 3 weeks encouraged." },
  { title: "Learning Budget", desc: "$2,500/year for conferences, courses, certifications, and books. Invest in yourself." },
  { title: "Latest Hardware", desc: "MacBook Pro M-series, 4K monitor, and $500 home office setup stipend on day one." },
  { title: "Health & Wellness", desc: "Comprehensive health, dental, and vision insurance. Mental health support included." },
];

const values = [
  { title: "Ship Over Perfection", desc: "We value working software over perfect plans. Iterate fast, learn faster." },
  { title: "Radical Transparency", desc: "Open salaries, open roadmaps, open feedback. No politics, no hidden agendas." },
  { title: "Engineers First", desc: "Built by engineers, for engineers. We understand the craft because we practice it." },
  { title: "Quality Compounds", desc: "We'd rather do fewer things exceptionally than many things adequately." },
];

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Careers at Zytheq"
          title="Build the Future of Staff Augmentation &"
          accent="Software Development."
          description="We're a team of engineers, recruiters, designers, and operators who believe great software starts with great people. Join us in building something meaningful."
        />

        {/* Values */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30">
                  <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Open Positions</h2>
            <p className="text-text-secondary mb-12">All positions are remote-first. We hire across the US, LATAM, and Europe.</p>
            <div className="space-y-4">
              {openings.map((job) => (
                <div key={job.title} className="p-6 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg">{job.title}</h3>
                      <p className="mt-1 text-sm text-text-secondary">{job.desc}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <span className="px-3 py-1 text-xs rounded-full border border-border-subtle text-text-muted">{job.department}</span>
                      <span className="px-3 py-1 text-xs rounded-full border border-border-subtle text-text-muted">{job.location}</span>
                      <span className="px-3 py-1 text-xs rounded-full border border-accent/30 text-accent">{job.type}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="text-sm text-accent hover:text-accent-hover transition-colors font-semibold"
                    >
                      Apply Now &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">Perks & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk) => (
                <div key={perk.title} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30">
                  <h3 className="font-display font-bold text-base mb-2">{perk.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Don&apos;t See Your Role?</h2>
            <p className="text-text-secondary mb-8">We&apos;re always looking for exceptional people. Send us a note and tell us what you&apos;d bring to Zytheq.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
