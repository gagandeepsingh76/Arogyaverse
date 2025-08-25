
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import WellnessSection from '@/components/WellnessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <WellnessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
