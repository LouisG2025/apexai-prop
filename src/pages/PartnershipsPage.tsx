import Navbar from '../components/partnerships/Navbar';
import HeroSection from '../components/partnerships/HeroSection';
import VslSection from '../components/partnerships/VslSection';
import HowWeThinkSection from '../components/partnerships/HowWeThinkSection';
import ComparisonSection from '../components/partnerships/ComparisonSection';
import GapSection from '../components/partnerships/CaseSection';
import DisruptionSection from '../components/partnerships/DisruptionSection';
import ServicesSection from '../components/partnerships/ServicesSection';
import WhyReferralSection from '../components/partnerships/WhyReferralSection';
import After5Section from '../components/partnerships/After5Section';
import ProcessSection from '../components/partnerships/ProcessSection';
import FinalCtaSection from '../components/partnerships/FinalCtaSection';
import Footer from '../components/partnerships/Footer';

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <HeroSection />
      <VslSection />
      <HowWeThinkSection />
      <ComparisonSection />
      <GapSection />
      <DisruptionSection />
      <ServicesSection />
      <WhyReferralSection />
      <After5Section />
      <ProcessSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
