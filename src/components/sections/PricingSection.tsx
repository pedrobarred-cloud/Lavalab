'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplets, Wind, Timer } from 'lucide-react';

interface PricingTier {
  name: string;
  minutes: number;
  price: string;
  features: string[];
  badge?: string;
}

export default function PricingSection() {
  const washerTiers: PricingTier[] = [
    {
      name: 'Pack Básico de lavado',
      minutes: 20,
      price: '3€',
      features: [
        'Detergente incluido',
        'Suavizante incluido',
        'Ideal para 1-2 prendas',
        'Capacidad hasta 5kg'
      ]
    },
    {
      name: 'Pack Estándar de lavado',
      minutes: 35,
      price: '5€',
      features: [
        'Detergente incluido',
        'Suavizante incluido',
        'Ideal para carga completa',
        'Capacidad hasta 15kg'
      ],
      badge: 'Más Popular'
    },
    {
      name: 'Pack Jumbo de lavado',
      minutes: 60,
      price: '8€',
      features: [
        'Detergente incluido',
        'Suavizante incluido',
        'Programa intensivo',
        'Capacidad máxima 20kg'
      ],
      badge: 'Mejor Valor'
    }
  ];

  const dryerTiers: PricingTier[] = [
    {
      name: 'Pack Básico de secado',
      minutes: 15,
      price: '3€',
      features: [
        'Secado suave',
        'Protección de tejidos',
        'Ideal para 1-2 prendas',
        'Capacidad hasta 5kg'
      ]
    },
    {
      name: 'Pack Estándar de secado',
      minutes: 30,
      price: '5€',
      features: [
        'Secado inteligente',
        'Protección de tejidos',
        'Ideal para carga completa',
        'Capacidad hasta 15kg'
      ],
      badge: 'Más Popular'
    },
    {
      name: 'Pack Jumbo de secado',
      minutes: 50,
      price: '8€',
      features: [
        'Secado turbo',
        'Anti-arrugas',
        'Máxima eficiencia',
        'Capacidad máxima 20kg'
      ],
      badge: 'Mejor Valor'
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Precios Transparentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el pack de minutos que mejor se adapte a tus necesidades. Paga solo por el tiempo que uses.
          </p>
        </div>

        {/* Washer Pricing */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Droplets className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Lavadoras Superwash</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {washerTiers.map((tier, index) => (
              <Card
                key={`washer-${index}`}
                className={`relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 ${
                  tier.badge ? 'border-primary shadow-lg' : 'border-gray-200'
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary hover:bg-primary/90">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-gray-900 mb-1">
                      {tier.price}
                    </p>
                    <p className="text-sm text-muted-foreground">por {tier.minutes} minutos</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Timer className="w-5 h-5" />
                    <span className="font-semibold">{tier.minutes} minutos de lavado</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dryer Pricing */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Wind className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Secadoras Superdry</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dryerTiers.map((tier, index) => (
              <Card
                key={`dryer-${index}`}
                className={`relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 ${
                  tier.badge ? 'border-primary shadow-lg' : 'border-gray-200'
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary hover:bg-primary/90">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-gray-900 mb-1">
                      {tier.price}
                    </p>
                    <p className="text-sm text-muted-foreground">por {tier.minutes} minutos</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Timer className="w-5 h-5" />
                    <span className="font-semibold">{tier.minutes} minutos de secado</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>Nota:</strong> El tiempo se detiene automáticamente al finalizar el ciclo.
                Puedes añadir más minutos si lo necesitas durante el proceso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
