import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Let's Talk — Zythos",
  description: "Tell us what you need. We'll tell you how we'd approach it.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Let's Talk"
          title="Ready to start"
          accent="building?"
          description="No auto-responders. No generic proposals. Tell us what you need and a real person will respond within 24 hours."
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
