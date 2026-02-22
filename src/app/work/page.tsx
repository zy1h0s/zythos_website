import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CaseStudies from "@/components/CaseStudies";

export const metadata = {
  title: "Our Work — Zythos",
  description: "Case studies and proof. Real projects, real metrics, real impact.",
};

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Our Work"
          title="Proof over"
          accent="promises."
          description="Every project tells a story. Here are some of ours — with real numbers and real outcomes."
        />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
