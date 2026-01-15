'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface Machine {
  type: 'washer' | 'dryer';
  title: string;
  subtitle: string;
  imageUrl: string;
  features: string[];
  alert?: boolean;
}

export default function MachineShowcase() {
  const machines: Machine[] = [
    {
      type: 'washer',
      title: 'Superwash',
      subtitle: 'Capacidad 20kg',
      imageUrl: 'https://xmtqaakrlplknmhcmiha.supabase.co/storage/v1/object/public/lavalab/lavadora.jpg',
      features: [
        'Detergente automático',
        'Suavizante incluido',
        'Oxígeno activo',
        'Programas ajustables'
      ],
      alert: true
    },
    {
      type: 'dryer',
      title: 'Superdry',
      subtitle: 'Capacidad 20kg',
      imageUrl: 'https://xmtqaakrlplknmhcmiha.supabase.co/storage/v1/object/public/lavalab/secadora.jpg',
      features: [
        'Secado inteligente',
        'Protección tejidos',
        'Anti-arrugas',
        'Temperatura controlada'
      ],
      alert: false
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Nuestra Maquinaria
          </h2>
          <p className="text-lg text-gray-600">
            4 lavadoras y 4 secadoras profesionales de 20kg
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {machines.map((machine) => (
            <Card
              key={machine.type}
              className="overflow-hidden border-2 border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <img
                  src={machine.imageUrl}
                  alt={machine.title}
                  className="w-full h-auto object-cover"
                />
                <div className="text-center mt-4">
                  <CardTitle className="text-2xl font-bold">
                    {machine.title}
                  </CardTitle>
                  <p className="text-gray-600">{machine.subtitle}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {machine.alert && (
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 animate-pulse">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">🛑</span>
                      <div>
                        <p className="font-bold text-red-700 text-sm uppercase tracking-wide">
                          NO NECESITAS AÑADIR JABÓN
                        </p>
                        <p className="text-red-600 text-sm mt-1">
                          La máquina dosifica automáticamente
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Características:</p>
                  <div className="space-y-2">
                    {machine.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Precios
          </Button>
        </div>
      </div>
    </section>
  );
}
