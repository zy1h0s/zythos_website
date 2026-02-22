"use client";
import { useScrollReveal, useCountUp } from "@/lib/useScrollReveal";

const stats = [
  { value: 237, suffix: "", label: "Placements in 2024" },
  { value: 94, suffix: "%", label: "Retention Rate" },
  { value: 47, prefix: "$", suffix: "M", label: "In Products Shipped" },
  { value: 12, suffix: "", label: "Countries, 1 Standard" },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.02] blur-[100px]" />

      <div ref={sectionRef} className="reveal max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">The Fusion</span>
          <h2 className="mt-4 font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1]">
            Not just staffing.{" "}
            <br className="hidden md:block" />
            Not just software.{" "}
            <span className="text-gradient">The alchemy of both.</span>
          </h2>
          <p className="mt-6 text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
            Most companies do one or the other. We fused consulting and
            engineering into a single entity — because the teams that build great
            products need to be great themselves. Zythos is where exceptional
            talent meets technical mastery.
          </p>
        </div>

        {/* Fusion visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16 lg:mb-20">
          <FusionCard
            label="Talent"
            title="Zythos Talent"
            description="We find, vet, and place engineers, architects, and technical leaders. Not resumes — real operators who ship."
            icon={<TalentIcon />}
          />
          <div className="hidden md:flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center animate-pulse-glow">
              <span className="text-accent font-display font-bold text-2xl">+</span>
            </div>
          </div>
          <FusionCard
            label="Technology"
            title="Zythos Labs"
            description="We design, build, and ship software products. From MVPs to enterprise platforms — we write the code."
            icon={<LabsIcon />}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FusionCard({ label, title, description, icon }: { label: string; title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="group p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,184,0,0.08)]">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        {icon}
      </div>
      <span className="text-xs uppercase tracking-[0.15em] text-accent font-semibold">{label}</span>
      <h3 className="mt-2 font-display font-bold text-xl">{title}</h3>
      <p className="mt-3 text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ value, prefix = "", suffix, label }: { value: number; prefix?: string; suffix: string; label: string }) {
  const countRef = useCountUp(value, 2000, prefix, suffix);

  return (
    <div className="text-center">
      <span
        ref={countRef}
        className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-gradient"
      >
        {prefix}0{suffix}
      </span>
      <p className="mt-1 text-sm text-text-secondary">{label}</p>
    </div>
  );
}

function TalentIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function LabsIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
