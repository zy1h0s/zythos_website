import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "IT Staff Augmentation Services - Hire Senior Developers | Zytheq",
  description:
    "Embed vetted senior software engineers into your team in under 2 weeks. React, Node.js, Python, Java, Go developers available for staff augmentation across 12 countries.",
  keywords: [
    "IT staff augmentation",
    "hire developers",
    "software engineer staffing",
    "staff augmentation services",
    "nearshore developers",
    "remote software engineers",
  ],
};

const benefits = [
  {
    title: "Ship Code by Week One",
    desc: "Our augmented engineers don't need a month of onboarding. They arrive with context on your stack, your codebase patterns, and your delivery cadence.",
    metric: "< 5 days",
    metricLabel: "Average onboarding time",
  },
  {
    title: "Vetted Through Live Coding",
    desc: "Every candidate completes a 90-minute live system design and pair programming session with our senior engineers. No take-home tests. No guesswork.",
    metric: "3.2%",
    metricLabel: "Candidate pass rate",
  },
  {
    title: "Timezone-Aligned Talent",
    desc: "Nearshore developers across LATAM, Eastern Europe, and Southeast Asia. 4+ hours of overlap with your core team guaranteed.",
    metric: "12",
    metricLabel: "Countries in our network",
  },
  {
    title: "Flexible Engagement Terms",
    desc: "Month-to-month contracts with 2-week notice. Scale up for a sprint, scale down after launch. No long-term lock-ins.",
    metric: "94%",
    metricLabel: "12-month retention rate",
  },
];

const techStacks = [
  {
    category: "Frontend Engineers",
    technologies: [
      "React", "Next.js", "TypeScript", "Vue.js", "Angular", "Svelte",
      "React Native", "Flutter", "Tailwind CSS", "Redux", "Zustand",
    ],
  },
  {
    category: "Backend Engineers",
    technologies: [
      "Node.js", "Python", "Go", "Java", "C#/.NET", "Rust",
      "Ruby on Rails", "Django", "FastAPI", "Spring Boot", "Express.js",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    technologies: [
      "AWS", "GCP", "Azure", "Terraform", "Pulumi", "Docker",
      "Kubernetes", "GitHub Actions", "CircleCI", "Datadog", "Grafana",
    ],
  },
  {
    category: "Data & AI Engineers",
    technologies: [
      "Python", "PyTorch", "TensorFlow", "Apache Spark", "Kafka",
      "Airflow", "dbt", "Snowflake", "Databricks", "PostgreSQL", "MongoDB",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Technical Discovery Call",
    desc: "We spend 45 minutes understanding your tech stack, engineering culture, team dynamics, and specific skill gaps. We map your requirements to our talent pool in real time.",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Candidate Sourcing & Vetting",
    desc: "Our technical recruiting team activates our network of 15,000+ pre-vetted software engineers. Each candidate goes through stack-specific coding assessments and behavioral interviews.",
    duration: "Days 2-5",
  },
  {
    step: "03",
    title: "Shortlist Presentation",
    desc: "You receive 3-5 curated profiles with detailed technical assessments, code samples, and culture fit scores. No resume dumps - every candidate is interview-ready.",
    duration: "Days 5-7",
  },
  {
    step: "04",
    title: "Client Interviews & Selection",
    desc: "Your team interviews the shortlisted candidates. We handle scheduling, collect feedback, and manage offers. Average time from interview to signed contract: 48 hours.",
    duration: "Days 7-10",
  },
  {
    step: "05",
    title: "Onboarding & Integration",
    desc: "We provide an onboarding playbook tailored to your team. The placed engineer gets access to your repos, joins standups, and starts contributing to real tickets.",
    duration: "Days 10-14",
  },
  {
    step: "06",
    title: "Ongoing Performance Support",
    desc: "Monthly check-ins with both the placed engineer and your team. We track velocity, code quality metrics, and satisfaction scores. Issues are resolved before they become problems.",
    duration: "Continuous",
  },
];

const engagementModels = [
  {
    title: "Individual Contributor Placement",
    desc: "Embed a single senior or mid-level engineer into an existing squad. Ideal for filling a specific skill gap or accelerating a feature track.",
    startingAt: "From $8,500/mo",
  },
  {
    title: "Pod Augmentation (3-5 Engineers)",
    desc: "Place a self-contained pod of engineers with complementary skills. Includes a tech lead. Best for owning a feature vertical or microservice domain.",
    startingAt: "From $22,000/mo",
  },
  {
    title: "Team Scale-Up (6+ Engineers)",
    desc: "Rapid team scaling with a dedicated Zytheq delivery manager. We architect the hiring plan, source the talent, and manage the ramp. Full engineering team augmentation.",
    startingAt: "Custom pricing",
  },
];

export default function StaffAugmentationPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="IT Staff Augmentation Services"
          title="Embed Senior Engineers Into Your Team in"
          accent="Under 2 Weeks."
          description="Not resumes. Not contractors who disappear. Production-ready software engineers who integrate into your team, your codebase, and your shipping cadence. Staff augmentation that actually works."
        />

        {/* Benefits Grid */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Why Companies Choose Zytheq for Staff Augmentation</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">We&apos;re not an IT staffing agency. We&apos;re an engineering talent partner that understands code, culture, and delivery velocity.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-primary/50 hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display font-bold text-xl">{b.title}</h3>
                    <div className="text-right shrink-0 ml-4">
                      <div className="text-2xl font-display font-bold text-accent">{b.metric}</div>
                      <div className="text-xs text-text-muted">{b.metricLabel}</div>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stacks */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Technology Stacks We Staff For</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Our engineers work across the full modern tech stack. If your stack isn&apos;t listed, ask - our network runs deep.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techStacks.map((stack) => (
                <div key={stack.category} className="p-6 rounded-2xl border border-border-subtle bg-bg-secondary/50">
                  <h3 className="font-display font-bold text-lg mb-4 text-accent">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-lg border border-border-subtle bg-bg-primary/50 text-text-secondary hover:border-accent/30 hover:text-text-primary transition-all duration-300">
                        {tech}
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
            <h2 className="font-display font-bold text-3xl mb-4">Our Staff Augmentation Process</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">From first call to first commit in under 14 days. Here&apos;s exactly how it works.</p>
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

        {/* Engagement Models */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Staff Augmentation Engagement Models</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Choose the model that fits your scale. Every engagement includes a dedicated account manager and monthly performance reviews.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model) => (
                <div key={model.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300 flex flex-col">
                  <h3 className="font-display font-bold text-xl mb-3">{model.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">{model.desc}</p>
                  <div className="mt-6 pt-4 border-t border-border-subtle">
                    <span className="text-accent font-display font-bold">{model.startingAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Ready to Scale Your Engineering Team?</h2>
            <p className="text-text-secondary mb-8">Tell us what you need. We&apos;ll have vetted candidates in your inbox within 5 business days.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Get Started - Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
