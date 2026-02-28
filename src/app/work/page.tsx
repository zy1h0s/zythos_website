import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CaseStudies from "@/components/CaseStudies";

export const metadata = {
  title: "Our Work - Zytheq",
  description: "Case studies and proof. Real projects, real metrics, real impact.",
};

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Our Work: Staff Augmentation & Development Case Studies"
          title="Staff Augmentation & Custom Software Development Results - Proof Over"
          accent="Promises."
          description="Every staff augmentation engagement and software development project tells a story. Here are ours - with real metrics and real business outcomes."
        />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
