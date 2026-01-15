'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, TrendingUp } from 'lucide-react';

export default function ShopTraffic() {
  // Real Google Maps with API Key
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const shopName = 'Lavalab Lavandería Autoservicio';
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(shopName)}`;

  console.log('Google Maps API Key:', googleMapsApiKey ? 'Key found' : 'No key found');

  if (!googleMapsApiKey) {
    return (
      <Card className="border-2 shadow-lg border-orange-300">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-orange-600" />
            <CardTitle className="text-xl">Tráfico de la tienda en tiempo real</CardTitle>
          </div>
          <p className="text-sm text-orange-600">
            <Clock className="w-4 h-4 inline mr-1" />
            No se encontró la clave de API de Google Maps
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-900 mb-3">Para activar esta función:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-orange-800">
              <li>En local: Asegúrate de que <code className="bg-orange-100 px-1 py-0.5 rounded text-xs font-mono">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> tiene valor en <code className="bg-orange-100 px-1 py-0.5 rounded text-xs font-mono">.env.local</code></li>
              <li>En producción: Necesitas configurar la variable de entorno en tu plataforma de hosting (Vercel, Netlify, etc.)</li>
              <li>Ve a <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Google Cloud Console
              </a></li>
              <li>Crea un proyecto y activa "Maps Embed API"</li>
              <li>Crea una clave de API con restricciones de referencia HTTP</li>
              <li>Asegúrate de copiar correctamente la clave</li>
              <li>Guarda el archivo y recarga la página</li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Buenas noticias:</strong> Maps Embed API es GRATIS con 200k cargas diarias!
            </p>
          </div>

          <a
            href="https://developers.google.com/maps/documentation/embed/get-api-key"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            Documentación completa
          </a>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <CardTitle className="text-xl">Tráfico de la tienda en tiempo real</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground opacity-70">
          <Clock className="w-4 h-4 inline mr-1" />
          Haz click en Lavalab en el mapa para ver la afluencia en tiempo real y en que horas hay menos ocupación
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Real Google Maps Embed */}
        <div className="map-wrapper w-full aspect-video rounded-lg overflow-hidden border-2 border-gray-200">
          <iframe
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            src={mapEmbedUrl}
            title="Google Maps - Lavalab Location"
            className="w-full h-full border-0"
          />
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-white rounded-lg border-2 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-1">20</div>
            <p className="text-xs text-gray-600">kg</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border-2 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-1">7-23</div>
            <p className="text-xs text-gray-600">horario</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border-2 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-1">8</div>
            <p className="text-xs text-gray-600">máquinas</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
