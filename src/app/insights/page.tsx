import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Insights - Tech & Talent Blog | Zytheq",
  description:
    "Insights on IT staff augmentation, custom software development, engineering team scaling, and tech hiring. Practical guides from engineers who've been there.",
  keywords: [
    "tech blog",
    "staff augmentation insights",
    "software development blog",
    "engineering hiring",
    "tech talent",
    "engineering management",
  ],
};

const featuredPost = {
  category: "Staff Augmentation",
  title: "The Real Cost of a Bad Engineering Hire (And How Staff Augmentation Reduces It)",
  excerpt: "A single bad engineering hire can cost $150K-$300K when you factor in recruiting fees, onboarding time, lost productivity, and team morale impact. Here's how staff augmentation changes the equation.",
  author: "Alex Chen",
  role: "CEO & Co-Founder",
  date: "Feb 2026",
  readTime: "8 min read",
};

const posts = [
  {
    category: "Engineering Leadership",
    title: "How to Scale from 10 to 50 Engineers Without Breaking Your Culture",
    excerpt: "The playbook we've used to help 30+ companies triple their engineering teams while maintaining velocity and retention above 90%.",
    author: "James Reeves",
    role: "VP of Talent",
    date: "Feb 2026",
    readTime: "12 min read",
  },
  {
    category: "Custom Software",
    title: "Build vs Buy in 2026: A Framework for Technical Decision Making",
    excerpt: "When does it make sense to build custom software vs. buying off-the-shelf? A decision framework based on 50+ product engagements.",
    author: "Sarah Okafor",
    role: "CTO & Co-Founder",
    date: "Jan 2026",
    readTime: "10 min read",
  },
  {
    category: "AI & Data",
    title: "RAG Architecture Patterns: What Actually Works in Production",
    excerpt: "After deploying 15+ RAG systems in production, here are the architecture patterns that deliver accurate results at scale - and the ones that don't.",
    author: "Maya Patel",
    role: "Head of Engineering",
    date: "Jan 2026",
    readTime: "14 min read",
  },
  {
    category: "DevOps",
    title: "From 2-Week Deploys to 20 Deploys Per Day: A CI/CD Transformation Story",
    excerpt: "How we helped a fintech company go from fortnightly manual deployments to continuous delivery with zero-downtime releases.",
    author: "Maya Patel",
    role: "Head of Engineering",
    date: "Dec 2025",
    readTime: "9 min read",
  },
  {
    category: "Recruiting",
    title: "Technical Interview Anti-Patterns That Drive Away Senior Engineers",
    excerpt: "Senior engineers have options. If your interview process includes any of these 7 anti-patterns, you're losing top talent to competitors.",
    author: "James Reeves",
    role: "VP of Talent",
    date: "Dec 2025",
    readTime: "7 min read",
  },
  {
    category: "Architecture",
    title: "Microservices vs Monolith in 2026: The Honest Answer",
    excerpt: "The industry has swung from monolith-everything to microservices-everything and back. Here's a pragmatic framework for making the right call.",
    author: "Sarah Okafor",
    role: "CTO & Co-Founder",
    date: "Nov 2025",
    readTime: "11 min read",
  },
  {
    category: "Staff Augmentation",
    title: "Nearshore vs Offshore vs Onshore: A Comprehensive Comparison for 2026",
    excerpt: "Timezone overlap, cost, communication quality, and retention rates across 12 countries. Real data from 237 engineering placements.",
    author: "Elena Volkov",
    role: "Head of Consulting",
    date: "Nov 2025",
    readTime: "13 min read",
  },
  {
    category: "Product Design",
    title: "Design Systems That Actually Get Adopted: Lessons from 10 Implementations",
    excerpt: "Most design systems fail not because of bad design, but because of bad adoption strategy. Here's what works.",
    author: "David Kim",
    role: "Head of Design",
    date: "Oct 2025",
    readTime: "8 min read",
  },
];

const categories = ["All", "Staff Augmentation", "Custom Software", "AI & Data", "DevOps", "Engineering Leadership", "Recruiting", "Architecture", "Product Design"];

export default function InsightsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Insights"
          title="Tech & Talent"
          accent="Insights."
          description="Practical guides on staff augmentation, software development, engineering team scaling, and technical hiring. Written by engineers and recruiting leaders who've been in the trenches."
        />

        {/* Categories */}
        <section className="py-8 border-b border-border-subtle">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    i === 0
                      ? "bg-accent text-bg-primary"
                      : "border border-border-subtle text-text-secondary hover:border-accent/30 hover:text-text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <div className="p-8 md:p-12 rounded-3xl border border-border-subtle bg-bg-primary/50 hover:border-accent/20 transition-all duration-300">
              <span className="text-xs uppercase tracking-[0.15em] text-accent font-semibold">{featuredPost.category}</span>
              <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl leading-tight">{featuredPost.title}</h2>
              <p className="mt-4 text-text-secondary leading-relaxed">{featuredPost.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                    {featuredPost.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{featuredPost.author}</p>
                    <p className="text-xs text-text-muted">{featuredPost.role}</p>
                  </div>
                </div>
                <div className="text-xs text-text-muted">
                  {featuredPost.date} &middot; {featuredPost.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-2xl mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.title} className="p-6 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300 flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-accent font-semibold">{post.category}</span>
                  <h3 className="mt-2 font-display font-bold text-base leading-snug">{post.title}</h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-5 pt-4 border-t border-border-subtle flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center text-[10px] font-bold text-accent">
                        {post.author.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-xs text-text-muted">{post.author}</span>
                    </div>
                    <span className="text-xs text-text-muted">{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Stay in the Loop</h2>
            <p className="text-text-secondary mb-8">Get our latest insights on staff augmentation, software development, and engineering leadership. No spam. Unsubscribe anytime.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 bg-bg-tertiary border border-border-subtle rounded-full text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
