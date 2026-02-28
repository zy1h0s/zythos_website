"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useState } from "react";

const caseStudies = [
  {
    industry: "Fintech Software Development",
    title: "Custom Payment Platform Development",
    type: "hybrid" as const,
    challenge: "Legacy payment platform couldn't scale past 10K daily transactions. The in-house engineering team of 3 was stretched thin and needed staff augmentation fast.",
    approach: "Placed 8 senior software engineers via IT staff augmentation while our custom software development team rebuilt the core processing engine from scratch.",
    metrics: [
      { value: "40%", label: "Faster Transaction Processing" },
      { value: "8", label: "Engineers Placed via Staff Augmentation" },
      { value: "$2.1M", label: "in Annual Infrastructure Savings" },
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    industry: "Healthcare Software Development",
    title: "HIPAA-Compliant Telehealth MVP Development",
    type: "labs" as const,
    challenge: "Healthcare startup needed a HIPAA-compliant telehealth platform built and launched in 4 months. Zero existing tech team - needed a dedicated development team.",
    approach: "Full custom software development: product design, cloud architecture, development, and deployment - all Zytheq Labs. Software development for startups, done right.",
    metrics: [
      { value: "14wks", label: "From Concept to Launch" },
      { value: "50K+", label: "Users in Month One" },
      { value: "99.9%", label: "Uptime" },
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    industry: "E-Commerce Engineering",
    title: "Scaled Engineering Team 5x with Staff Augmentation",
    type: "talent" as const,
    challenge: "Series B e-commerce startup growing fast. Needed to scale their engineering team from 10 to 50 developers in 6 months without breaking culture - a massive IT staffing challenge.",
    approach: "Our embedded technical recruiting team handled sourcing, vetting, and onboarding. We placed 42 software engineers across 6 product squads through dedicated staff augmentation services.",
    metrics: [
      { value: "42", label: "Developers Placed" },
      { value: "94%", label: "Retention at 12 Months" },
      { value: "3x", label: "Revenue Growth Post-Scaling" },
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

const filters = ["All", "Talent", "Labs", "Hybrid"] as const;

export default function CaseStudies() {
  const sectionRef = useScrollReveal();
  const [filter, setFilter] = useState<typeof filters[number]>("All");

  const filtered = filter === "All"
    ? caseStudies
    : caseStudies.filter((c) => c.type === filter.toLowerCase());

  return (
    <section id="work" className="relative py-16 sm:py-24 lg:py-32">
      <div ref={sectionRef} className="reveal max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Case Studies</span>
            <h2 className="mt-4 font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1]">
              Staff Augmentation & Software Development Results That{" "}
              <span className="text-gradient">Speak.</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? "bg-accent text-bg-primary"
                    : "border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-medium"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((study) => (
            <article
              key={study.title}
              className="group relative rounded-2xl border border-border-subtle overflow-hidden bg-bg-secondary hover:border-accent/20 transition-all duration-500"
            >
              {/* Visual header */}
              <div className={`relative h-36 sm:h-48 bg-gradient-to-br ${study.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-bg-primary/60" />
                {/* Abstract shapes */}
                <div className="absolute w-32 h-32 rounded-full bg-accent/10 -top-10 -right-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute w-24 h-24 rounded-full bg-accent/5 bottom-4 left-4 group-hover:scale-125 transition-transform duration-700 delay-100" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold ${
                    study.type === "hybrid" ? "bg-accent/10 text-accent" :
                    study.type === "labs" ? "bg-emerald-500/10 text-emerald-400" :
                    "bg-violet-500/10 text-violet-400"
                  }`}>
                    {study.type}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{study.title}</h3>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-text-muted font-semibold">Challenge</span>
                    <p className="mt-1 text-xs sm:text-sm text-text-secondary">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-text-muted font-semibold">Approach</span>
                    <p className="mt-1 text-xs sm:text-sm text-text-secondary">{study.approach}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-border-subtle">
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="font-display font-bold text-base sm:text-lg text-accent">{m.value}</span>
                      <p className="text-[11px] text-text-muted mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
