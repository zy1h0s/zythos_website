import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Services - Zytheq",
  description: "Staff your team or build your product. Two verticals, one standard of excellence.",
};

const verticals = [
  {
    tag: "Zytheq Talent",
    title: "Scale Your Team",
    description: "Elite engineers, architects, and technical leaders - vetted, placed, and performing. Not resumes. Real operators.",
    href: "/services/talent",
    services: ["Staff Augmentation", "Executive Search", "Contract Staffing", "Team Scaling", "Talent Advisory"],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    tag: "Zytheq Labs",
    title: "Build Your Product",
    description: "Full-stack product development from concept to deployment. We write the code, design the experience, and ship it.",
    href: "/services/labs",
    services: ["Custom Software", "Product Design", "Cloud & DevOps", "AI & Data Engineering", "Technical Consulting"],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="What We Build"
          title="Two verticals."
          accent="One standard."
          description="Whether you need to scale your engineering team or build a product from scratch - or both - we deliver with precision."
        />

        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {verticals.map((v) => (
              <Link
                key={v.tag}
                href={v.href}
                className="group relative p-10 rounded-3xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-bg-primary/80" />

                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{v.tag}</span>
                  <h2 className="mt-3 font-display font-bold text-3xl">{v.title}</h2>
                  <p className="mt-3 text-text-secondary leading-relaxed">{v.description}</p>

                  <ul className="mt-8 space-y-3">
                    {v.services.map((s) => (
                      <li key={s} className="flex items-center gap-3 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
