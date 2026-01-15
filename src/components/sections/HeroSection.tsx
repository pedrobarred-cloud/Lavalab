'use client';

import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleGetDirections = () => {
    const address = 'Calle Cañaveral 94, Madrid';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Hero Image */}
      <div className="relative w-full h-screen">
        <img
          src="https://xmtqaakrlplknmhcmiha.supabase.co/storage/v1/object/public/lavalab/tienda%20lavalab.webp"
          alt="Tienda Lavalab"
          className="w-full h-screen object-cover"
        />

        {/* Text Card Overlay - Close to Bottom of Image */}
        <div className="absolute bottom-0 right-0 w-full px-4 pb-8">
          <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6">
            {/* Location Icon */}
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-8 h-8 text-primary" />
            </div>

            {/* Address Text */}
            <p className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
              C. del Cañaveral 94, Madrid
            </p>

            {/* Spacer */}
            <div className="h-4"></div>

            {/* Black Button */}
            <div className="flex items-center justify-center">
              <Button
                onClick={handleGetDirections}
                size="lg"
                className="bg-black hover:bg-gray-800 text-white text-base md:text-lg px-8 py-3 rounded-full shadow-2xl transition-all duration-300 font-semibold flex items-center gap-3"
              >
                <Navigation className="w-5 h-5 md:w-6 md:h-6" />
                Cómo llegar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
