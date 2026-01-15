import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lavalab</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu lavandería autoservicio en Madrid. Maquinaria profesional de 20kg.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  C. del Cañaveral 94,<br />
                  28028 Madrid, España
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300">+34 912 345 678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300">info@lavalab.es</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Lunes - Domingo</span>
                <span className="text-gray-300">7:00 - 23:00</span>
              </div>
              <div className="mt-4 text-green-400 font-medium">
                Abierto todos los días
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Lavalab. Todos los derechos reservados.</p>
          <p className="mt-2">Lavandería Autoservicio en Madrid | Superwash & Superdry</p>
        </div>
      </div>
    </footer>
  );
}
