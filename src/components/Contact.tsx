"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useState } from "react";

type Path = "talent" | "product" | null;

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [path, setPath] = useState<Path>(null);
  const [step, setStep] = useState(0);

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />

      <div ref={sectionRef} className="reveal max-w-4xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Get a Free Consultation</span>
          <h2 className="mt-4 font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1]">
            Ready to Hire Developers or Build{" "}
            <span className="text-gradient">Custom Software?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-xl mx-auto">
            Tell us what you need - staff augmentation, custom software development, or both. We&apos;ll tell you how we&apos;d approach it. No fluff, no generic proposals.
          </p>
        </div>

        {/* Path selection */}
        {path === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => { setPath("talent"); setStep(1); }}
              className="group p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/30 transition-all duration-500 text-left hover:shadow-[0_0_60px_rgba(255,184,0,0.08)]"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg mb-2">I Need Staff Augmentation</h3>
              <p className="text-xs sm:text-sm text-text-secondary">Scale your engineering team with vetted software engineers, architects, and technical leaders through IT staff augmentation.</p>
            </button>

            <button
              onClick={() => { setPath("product"); setStep(1); }}
              className="group p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/30 transition-all duration-500 text-left hover:shadow-[0_0_60px_rgba(255,184,0,0.08)]"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg mb-2">I Need Custom Software Built</h3>
              <p className="text-xs sm:text-sm text-text-secondary">Custom software development from MVP to enterprise platform. Product design through deployment by a dedicated development team.</p>
            </button>
          </div>
        ) : (
          <div className="max-w-xl mx-auto">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                    step >= s ? "bg-accent text-bg-primary" : "bg-bg-tertiary text-text-muted"
                  }`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`flex-1 h-[1px] transition-colors ${step > s ? "bg-accent" : "bg-border-subtle"}`} />}
                </div>
              ))}
            </div>

            {/* Form */}
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              {step === 1 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div>
                    <label className="text-sm text-text-secondary mb-2 block">Your name</label>
                    <input type="text" className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-2 block">Work email</label>
                    <input type="email" className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-2 block">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors" placeholder="Acme Corp" />
                  </div>
                </div>
              )}

              {step === 2 && path === "talent" && (
                <div className="space-y-4 animate-fade-in-up">
                  <div>
                    <label className="text-sm text-text-secondary mb-2 block">How many developers do you need to hire?</label>
                    <select className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-base text-text-primary focus:outline-none focus:border-accent transition-colors">
                      <option>1-3</option>
                      <option>4-10</option>
                      <option>11-25</option>
                      <option>25+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-2 block">Key technical skills needed</label>
                    <input type="text" className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors" placeholder="React, Node.js, AWS..." />
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-2 block">Timeline</label>
                    <select className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-base text-text-primary focus:outline-none focus:border-accent transition-colors">
                      <option>Immediately</option>
                      <option>Within 2 weeks</option>
                      <option>Within a month</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && path === "product" && (
                <div className="space-y-4 animate-fade-in-up">
                  <div>
                    <label className="text-sm text-text-secondary mb-2 block">Project stage</label>
                    <select className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-base text-text-primary focus:outline-none focus:border-accent transition-colors">
                      <option>Idea / Concept</option>
                      <option>MVP in progress</option>
                      <option>Existing product - needs improvement</option>
                      <option>Legacy system - needs rebuild</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-2 block">What are you building?</label>
                    <textarea rows={3} className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Brief description of your product..." />
                  </div>
                  <div>
                    <label className="text-sm text-text-secondary mb-2 block">Budget range</label>
                    <select className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-base text-text-primary focus:outline-none focus:border-accent transition-colors">
                      <option>$25K - $50K</option>
                      <option>$50K - $150K</option>
                      <option>$150K - $500K</option>
                      <option>$500K+</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl">Your consultation request is submitted.</h3>
                  <p className="text-sm sm:text-base text-text-secondary">Expect a response within 24 hours from a real person - not an auto-responder. Whether you need staff augmentation or custom software development, we&apos;ve read your brief.</p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => {
                    if (step === 1) { setPath(null); setStep(0); }
                    else setStep(step - 1);
                  }}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center"
                >
                  &larr; Back
                </button>

                {step < 3 && (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-6 sm:px-8 py-3 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)] min-h-[44px]"
                  >
                    {step === 2 ? "Submit" : "Next"}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
