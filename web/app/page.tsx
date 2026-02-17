import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import EngineeringTruth from "@/components/EngineeringTruth";
import TechnologySection from "@/components/TechnologySection";
import ValidationSection from "@/components/ValidationSection";
import PartnershipSection from "@/components/PartnershipSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <MissionSection />
      <EngineeringTruth />
      <TechnologySection />
      <ValidationSection />
      <PartnershipSection />
      <Footer />
    </main>
  );
}
