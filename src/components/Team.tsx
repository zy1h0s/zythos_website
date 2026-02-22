"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    tags: ["Strategy", "Product", "Growth"],
    quote: "I believe the best companies are built by the best people. Full stop.",
    color: "from-amber-500 to-orange-600",
    initials: "AC",
  },
  {
    name: "Sarah Okafor",
    role: "CTO & Co-Founder",
    tags: ["Architecture", "AI/ML", "Cloud"],
    quote: "Code is craft. Every system we build should be something we're proud of.",
    color: "from-violet-500 to-purple-600",
    initials: "SO",
  },
  {
    name: "James Reeves",
    role: "VP of Talent",
    tags: ["Recruiting", "Culture", "Operations"],
    quote: "A great hire doesn't just fill a seat — they raise the ceiling for everyone.",
    color: "from-emerald-500 to-teal-600",
    initials: "JR",
  },
  {
    name: "Maya Patel",
    role: "Head of Engineering",
    tags: ["Full-Stack", "DevOps", "Systems"],
    quote: "Ship fast, but never ship broken. Speed and quality aren't enemies.",
    color: "from-rose-500 to-pink-600",
    initials: "MP",
  },
  {
    name: "David Kim",
    role: "Head of Design",
    tags: ["UX", "Product Design", "Research"],
    quote: "Design isn't decoration. It's how things work, feel, and connect.",
    color: "from-sky-500 to-blue-600",
    initials: "DK",
  },
  {
    name: "Elena Volkov",
    role: "Head of Consulting",
    tags: ["Enterprise", "Staffing", "Advisory"],
    quote: "We don't just place talent. We build partnerships that last.",
    color: "from-amber-500 to-yellow-600",
    initials: "EV",
  },
];

export default function Team() {
  const sectionRef = useScrollReveal();

  return (
    <section id="team" className="relative py-16 sm:py-24 lg:py-32 bg-bg-secondary">
      <div ref={sectionRef} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">The Minds</span>
          <h2 className="mt-4 font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1]">
            The people behind{" "}
            <span className="text-gradient">the power.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-xl mx-auto">
            Operators, builders, and advisors who&apos;ve done it before — and do it differently every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-primary/50 hover:border-accent/20 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Avatar */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <span className="font-display font-bold text-white text-sm sm:text-lg">{member.initials}</span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg">{member.name}</h3>
                <p className="text-sm text-accent mt-0.5">{member.role}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {member.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] bg-bg-tertiary text-text-muted border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 sm:mt-6 text-sm text-text-secondary italic leading-relaxed">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
