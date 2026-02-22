"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useState } from "react";

const testimonials = [
  {
    quote: "Zythos didn't just fill seats. They understood our architecture, our culture, and found engineers who elevated both. Three of our tech leads came through them.",
    name: "Marcus Thompson",
    title: "CTO",
    company: "Meridian Finance",
    initials: "MT",
  },
  {
    quote: "We came to Zythos for a mobile app. We left with a mobile app, a web platform, and a data pipeline we didn't know we needed. They think bigger than the brief.",
    name: "Lisa Park",
    title: "CEO",
    company: "HealthBridge",
    initials: "LP",
  },
  {
    quote: "Fourteen engineers in six weeks, all senior, all shipping code by week two. I've never seen a staffing firm operate at this speed with this quality.",
    name: "Raj Mehta",
    title: "VP of Engineering",
    company: "CartStack",
    initials: "RM",
  },
];

export default function Testimonials() {
  const sectionRef = useScrollReveal();
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-bg-secondary">
      <div ref={sectionRef} className="reveal max-w-5xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Proof</span>
          <h2 className="mt-4 font-display font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.1]">
            Don&apos;t take our word.{" "}
            <span className="text-gradient">Take theirs.</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="relative">
          <div className="text-center">
            {/* Quote mark */}
            <div className="inline-block mb-5 sm:mb-8">
              <svg className="w-8 h-8 sm:w-12 sm:h-12 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-text-primary leading-relaxed max-w-3xl mx-auto font-light">
              {testimonials[active].quote}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="font-display font-bold text-accent text-sm">{testimonials[active].initials}</span>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-display font-semibold text-sm">{testimonials[active].name}</p>
                <p className="text-xs text-text-muted">
                  {testimonials[active].title}, {testimonials[active].company}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={`Testimonial ${i + 1}`}
              >
                <span
                  className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-accent" : "bg-border-medium hover:bg-text-muted"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
