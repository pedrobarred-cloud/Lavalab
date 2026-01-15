import { Check, X, Sparkles, AlertCircle } from 'lucide-react';
import * as React from 'react';

interface TipCardProps {
  number: number;
  text: string;
}

interface ErrorCardProps {
  number: number;
  text: string;
}

function TipCard({ number, text }: TipCardProps) {
  return (
    <div className="relative bg-white border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
      <div className="absolute top-0 left-0 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <Check className="w-4 h-4" strokeWidth={3} />
      </div>
      <p className="text-2xl font-bold text-gray-900 ml-10">{number}</p>
      <p className="text-gray-600 ml-10">{text}</p>
    </div>
  );
}

function ErrorCard({ number, text }: ErrorCardProps) {
  return (
    <div className="relative bg-white border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
      <div className="absolute -top-3 -left-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <AlertCircle className="w-4 h-4" />
      </div>
      <p className="text-2xl font-bold text-gray-900 ml-10">{number}</p>
      <p className="text-gray-600 ml-10">{text}</p>
    </div>
  );
}

export default function ContactSection() {
  const tips = [
    { number: 1, text: "Carga la máquina correctamente (no la sobrecargues)" },
    { number: 2, text: "Separa los colores y las prendas blancas" },
    { number: 3, text: "Vacía todos los bolsillos antes de lavar" },
    { number: 4, text: "Lee las etiquetas de cuidado de las prendas" },
    { number: 5, text: "Cierra los cremalleras y botones antes de lavar" },
  ];

  const errors = [
    { number: 1, text: "Sobrecargar la máquina reduce la calidad del lavado" },
    { number: 2, text: "Usar demasiado jabón daña las prendas" },
    { number: 3, text: "Mezclar colores incompatibles puede destiñir todo" },
    { number: 4, text: "No vaciar bolsillos puede dañar otras prendas" },
    { number: 5, text: "Ignorar etiquetas de cuidado daña las prendas" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Consejos y Errores Comunes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guía para un mejor lavado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Tips Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-700">5 Consejos Útiles</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {tips.map((tip, index) => (
                <TipCard key={`tip-${index}`} number={tip.number} text={tip.text} />
              ))}
            </div>
          </div>

          {/* Errors Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-700">5 Errores Comunes</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {errors.map((error, index) => (
                <ErrorCard key={`error-${index}`} number={error.number} text={error.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
