'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock } from 'lucide-react';

export default function PrivacyCam() {
  const liveCamUrl = 'https://xmtqaakrlplknmhcmiha.supabase.co/storage/v1/object/public/lavalab/livecam2.webp';

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Mira la ocupación en tiempo real
          </h2>
          <p className="text-lg text-gray-600">
            Verifica la disponibilidad sin comprometer la privacidad
          </p>
        </div>

        <Card className="border-2 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <CardTitle className="text-xl">
                  Privacidad Garantizada
                </CardTitle>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 animate-pulse" />
                <span className="font-semibold">En vivo</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-orange-900 mb-1">
                    Sistema de privacidad activo:
                  </p>
                  <p className="text-sm text-orange-800">
                    Las imágenes se muestran con desenfoque de identificación facial y
                    de caracteres para garantizar la privacidad de nuestros clientes.
                    Puedes ver la ocupación sin identificar a nadie.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden bg-gray-900 border-2 border-gray-800">
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  EN VIVO
                </div>
              </div>

              <img
                src={liveCamUrl}
                alt="Live cam - Lavalab interior"
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="text-xs text-muted-foreground space-y-2 pt-4 border-t">
              <p><strong>Sistema de privacidad:</strong> Desenfoque facial y de caracteres activo</p>
              <p><strong>Actualización:</strong> Tiempo real</p>
              <p><strong>Privacidad:</strong> Las imágenes se procesan para proteger la identidad</p>
              <p><strong>Horario:</strong> Cámara activa durante el horario de apertura (7:00 - 23:00)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
