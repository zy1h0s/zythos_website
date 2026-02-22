"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useState } from "react";

const categories = {
  Frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "TypeScript", level: 94 },
    { name: "Vue.js", level: 85 },
    { name: "React Native", level: 88 },
    { name: "Tailwind CSS", level: 96 },
  ],
  Backend: [
    { name: "Node.js", level: 94 },
    { name: "Python", level: 91 },
    { name: "Go", level: 86 },
    { name: "Rust", level: 78 },
    { name: "Java", level: 84 },
    { name: "GraphQL", level: 90 },
  ],
  "Cloud & DevOps": [
    { name: "AWS", level: 95 },
    { name: "GCP", level: 88 },
    { name: "Docker", level: 93 },
    { name: "Kubernetes", level: 87 },
    { name: "Terraform", level: 89 },
    { name: "CI/CD", level: 94 },
  ],
  "AI & Data": [
    { name: "PyTorch", level: 86 },
    { name: "TensorFlow", level: 83 },
    { name: "LLM/RAG", level: 90 },
    { name: "PostgreSQL", level: 92 },
    { name: "Redis", level: 88 },
    { name: "Kafka", level: 82 },
  ],
};

const categoryKeys = Object.keys(categories) as (keyof typeof categories)[];

export default function TechStack() {
  const sectionRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Frontend");

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div ref={sectionRef} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Expertise</span>
          <h2 className="mt-4 font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1]">
            Our technical{" "}
            <span className="text-gradient">arsenal.</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Deep expertise across the modern stack. Not logos — real, production-grade proficiency.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent/10 text-accent border border-accent/30"
                  : "bg-bg-secondary border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-medium"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {categories[activeCategory].map((tech, i) => (
            <div
              key={tech.name}
              className="group p-4 sm:p-5 rounded-xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-semibold text-sm">{tech.name}</span>
                <span className="text-xs text-accent font-mono">{tech.level}%</span>
              </div>
              <div className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-[#FF8C00] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
