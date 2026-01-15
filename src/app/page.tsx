import HeroSection from '@/components/sections/HeroSection';
import ShopTraffic from '@/components/sections/ShopTraffic';
import MachineShowcase from '@/components/sections/MachineShowcase';
import PricingSection from '@/components/sections/PricingSection';
import PrivacyCam from '@/components/sections/PrivacyCam';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <ShopTraffic />
        <MachineShowcase />
        <PricingSection />
        <PrivacyCam />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
