import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Product Design & UX Services - UI/UX Design Agency | Zytheq",
  description:
    "UX research, wireframes, prototypes, design systems, and pixel-perfect UI for web and mobile. Design that converts users into customers.",
  keywords: [
    "product design",
    "UX design",
    "UI design",
    "design system",
    "user research",
    "wireframing",
    "prototyping",
    "mobile app design",
  ],
};

const designStack = [
  {
    category: "Design Tools",
    tools: [
      { name: "Figma", use: "UI design, prototyping, design systems, component libraries" },
      { name: "Framer", use: "Interactive prototypes, micro-interactions, motion design" },
      { name: "Adobe Creative Suite", use: "Illustration, iconography, brand assets, print collateral" },
      { name: "Principle", use: "Advanced animation prototyping, transition design" },
    ],
  },
  {
    category: "Research & Testing",
    tools: [
      { name: "Maze", use: "Unmoderated usability testing, click tracking, heatmaps" },
      { name: "Hotjar", use: "Session recordings, heatmaps, user feedback surveys" },
      { name: "UserTesting", use: "Moderated user interviews, think-aloud protocols" },
      { name: "Mixpanel", use: "Product analytics, funnel analysis, cohort tracking" },
    ],
  },
  {
    category: "Design Systems",
    tools: [
      { name: "Storybook", use: "Component documentation, visual testing, design tokens" },
      { name: "Tailwind CSS", use: "Utility-first implementation, responsive design, theming" },
      { name: "Radix UI", use: "Accessible, unstyled component primitives" },
      { name: "Chromatic", use: "Visual regression testing, UI review workflows" },
    ],
  },
  {
    category: "Collaboration",
    tools: [
      { name: "FigJam", use: "Workshops, journey mapping, stakeholder alignment" },
      { name: "Loom", use: "Async design reviews, feedback recordings" },
      { name: "Linear", use: "Design task tracking, sprint planning, handoff management" },
      { name: "Notion", use: "Design documentation, research repositories, spec writing" },
    ],
  },
];

const services = [
  {
    title: "UX Research & Strategy",
    desc: "Understand your users before designing for them. We conduct user interviews, competitive audits, journey mapping, and persona development to ground every design decision in real user needs.",
    deliverables: ["User personas", "Journey maps", "Competitive analysis", "UX audit report", "Information architecture"],
  },
  {
    title: "UI Design & Visual Identity",
    desc: "Pixel-perfect interface design that aligns with your brand and delights users. From color palettes and typography to iconography and illustration - every visual element is intentional.",
    deliverables: ["High-fidelity mockups", "Visual style guide", "Icon library", "Color & typography system", "Responsive layouts"],
  },
  {
    title: "Interactive Prototyping",
    desc: "Clickable prototypes that simulate the real product experience. Test with users, align stakeholders, and validate assumptions before writing code.",
    deliverables: ["Interactive Figma prototypes", "Micro-interaction specs", "User flow animations", "Usability test results"],
  },
  {
    title: "Design System Development",
    desc: "Scalable component libraries that ensure consistency across your product. Tokens, components, patterns, and guidelines - all documented and developer-ready.",
    deliverables: ["Component library (Figma + code)", "Design tokens", "Pattern documentation", "Usage guidelines", "Storybook integration"],
  },
  {
    title: "Mobile App Design",
    desc: "Native iOS and Android design following Human Interface Guidelines and Material Design principles. Gesture-driven interfaces optimized for touch, one-handed use, and accessibility.",
    deliverables: ["iOS & Android mockups", "Gesture interaction specs", "App icon & splash screen", "App Store screenshot assets"],
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Data-driven design improvements for landing pages, onboarding flows, checkout processes, and key conversion funnels. A/B testing and iterative design powered by analytics.",
    deliverables: ["Funnel analysis report", "A/B test designs", "Optimized landing pages", "Onboarding flow redesign"],
  },
];

const process = [
  { step: "01", title: "Discover", desc: "Stakeholder workshops, user interviews, competitive analysis, and business goal alignment. We define the problem before proposing solutions.", duration: "1-2 weeks" },
  { step: "02", title: "Define", desc: "User personas, journey maps, information architecture, and feature prioritization. We create the strategic framework that guides every design decision.", duration: "1-2 weeks" },
  { step: "03", title: "Design", desc: "Wireframes, visual design, interactive prototypes, and usability testing. Iterative design cycles with stakeholder feedback at every checkpoint.", duration: "3-6 weeks" },
  { step: "04", title: "Deliver", desc: "Developer handoff with detailed specs, design tokens, responsive annotations, and Storybook components. We sit with your engineers during implementation.", duration: "1-2 weeks" },
];

export default function ProductDesignPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Product Design & UX Services"
          title="Design That Converts Users Into"
          accent="Customers."
          description="Research-driven UX, pixel-perfect UI, and scalable design systems. We don't just make things look good - we make them work. Every interaction, every pixel, every microanimation is intentional."
        />

        {/* Process */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">Our Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p) => (
                <div key={p.step} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30 hover:border-accent/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center font-display font-bold text-accent mb-4">
                    {p.step}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">{p.title}</h3>
                  <span className="text-xs font-mono text-accent">{p.duration}</span>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Design Services</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">End-to-end product design from research to developer handoff. Every service is delivered by senior designers with 7+ years of product experience.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <span key={d} className="px-2.5 py-1 text-[11px] rounded-lg border border-border-subtle bg-bg-primary/50 text-text-muted">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Stack */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Design Tools & Stack</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Industry-standard tools for every phase of the design process.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designStack.map((cat) => (
                <div key={cat.category} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30">
                  <h3 className="font-display font-bold text-lg text-accent mb-4">{cat.category}</h3>
                  <div className="space-y-3">
                    {cat.tools.map((tool) => (
                      <div key={tool.name} className="p-3 rounded-xl border border-border-subtle bg-bg-secondary/50">
                        <h4 className="font-display font-semibold text-sm">{tool.name}</h4>
                        <p className="text-xs text-text-muted mt-0.5">{tool.use}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Ready to Design Something Great?</h2>
            <p className="text-text-secondary mb-8">Tell us about your product. We&apos;ll show you how design can drive growth.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Start a Design Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
