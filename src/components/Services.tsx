"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useState } from "react";

const talentServices = [
  { title: "IT Staff Augmentation", desc: "Embed senior software engineers directly into your team through our staff augmentation services. They ship code on day one.", icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" },
  { title: "CTO & VP Engineering Recruitment", desc: "CTO recruitment, VP of Engineering search, and Tech Lead placement. We find the technical executives who transform engineering organizations.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { title: "Contract Software Engineers", desc: "Hire contract software engineers for defined engagements. Flexible IT staffing without compromising quality or delivery speed.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { title: "Scale Your Engineering Team", desc: "Going from 5 to 50 developers? Our software engineer staffing team architects the hiring plan and executes it - fast.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { title: "Technical Recruiting Advisory", desc: "Compensation benchmarks, engineering org design, and developer retention strategies. Technical recruiting advisory that goes beyond the hire.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
];

const labsServices = [
  { title: "Custom Software Development", desc: "Full-stack custom software development from API to interface. We build the entire product, not just features.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { title: "Product Design & UX", desc: "UX research, wireframes, prototypes, and pixel-perfect UI for web and mobile applications. Design that converts users into customers.", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
  { title: "Cloud Infrastructure & DevOps", desc: "AWS, GCP, Azure - infrastructure as code, CI/CD pipelines, and monitoring. Enterprise-grade cloud architecture that scales with your product.", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
  { title: "AI & Data Engineering Services", desc: "ML pipelines, LLM integrations, and data platform engineering. AI-powered software development baked into your product from the ground up.", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Software Architecture Consulting", desc: "Architecture reviews, tech debt audits, and cloud migration strategies for enterprise software. We diagnose before we prescribe.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
];

export default function Services() {
  const sectionRef = useScrollReveal();
  const [activeTrack, setActiveTrack] = useState<"talent" | "labs">("talent");
  const services = activeTrack === "talent" ? talentServices : labsServices;

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 bg-bg-secondary">
      <div ref={sectionRef} className="reveal max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Staff Augmentation & Software Development Services</span>
          <h2 className="mt-4 font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1]">
            IT Staff Augmentation Services &{" "}
            <span className="text-gradient">Custom Software Development.</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Whether you need to hire developers to scale your engineering team or build custom software from scratch - Zytheq delivers with precision.
          </p>
        </div>

        {/* Track Switcher */}
        <div className="flex justify-center mb-10 sm:mb-16">
          <div className="inline-flex p-1 rounded-full bg-bg-tertiary border border-border-subtle">
            <button
              onClick={() => setActiveTrack("talent")}
              className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTrack === "talent"
                  ? "bg-accent text-bg-primary shadow-[0_0_30px_rgba(255,184,0,0.2)]"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              IT Staff Augmentation
            </button>
            <button
              onClick={() => setActiveTrack("labs")}
              className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTrack === "labs"
                  ? "bg-accent text-bg-primary shadow-[0_0_30px_rgba(255,184,0,0.2)]"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Custom Software Development
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-primary/50 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,184,0,0.06)] overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-accent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hybrid CTA */}
        <div className="mt-16 text-center">
          <div className="flex sm:inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full border border-accent/20 bg-accent/5">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
            <span className="text-xs sm:text-sm text-text-secondary">
              Need both? Our <span className="text-accent font-semibold">hybrid engagements</span> combine staff augmentation and custom software development - we scale your team while building your product.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
