"use client";
import Link from "next/link";
import Image from "next/image";

const tickerItems = [
  "Fintech Platform",
  "AI Data Pipeline",
  "Healthcare SaaS",
  "E-Commerce Rebuild",
  "DevOps Migration",
  "Mobile App MVP",
  "Team Scaling (12 Engineers)",
  "Cloud Architecture",
  "ML Model Deployment",
  "React Native App",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle">
      {/* Currently building ticker */}
      <div className="overflow-hidden py-4 border-b border-border-subtle">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-4 sm:mx-8 text-xs sm:text-sm text-text-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Currently building: {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Zythos" width={32} height={32} className="w-7 h-7 sm:w-8 sm:h-8" />
              <span className="font-display font-bold text-xl">ZYTHOS</span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              We transform raw potential into refined power. The fusion of elite talent and technical mastery.
            </p>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-accent mb-4">Services</h4>
            <ul className="space-y-3">
              {["Staff Augmentation", "Executive Search", "Custom Software", "Product Design", "AI & Data", "Cloud & DevOps"].map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center sm:text-left">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-accent mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "The Fusion", href: "/#about" },
                { label: "Our Work", href: "/#work" },
                { label: "The Minds", href: "/#team" },
                { label: "Insights", href: "/#" },
                { label: "Careers", href: "/#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-accent mb-4">Stay Sharp</h4>
            <p className="text-sm text-text-secondary mb-4">
              Insights on tech, talent, and building things that matter. No spam. Ever.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-bg-tertiary border border-border-subtle rounded-lg text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-accent text-bg-primary text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                &rarr;
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col items-center text-center gap-4 md:flex-row md:justify-between md:text-left">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Zythos. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-text-muted hover:text-accent transition-colors duration-200 py-1"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
