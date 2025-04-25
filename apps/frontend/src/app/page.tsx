import { Button } from "./components/ui/button";
import Image from "next/image";
import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import CTASection from "./components/cta-section";
import Footer from "./components/footer";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
