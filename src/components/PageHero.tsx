"use client";

export default function PageHero({
  tag,
  title,
  accent,
  description,
}: {
  tag: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,184,0,0.04)_0%,transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{tag}</span>
        <h1 className="mt-4 font-display font-bold text-[clamp(2rem,6vw,5rem)] leading-[1.05]">
          {title} <span className="text-gradient">{accent}</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
