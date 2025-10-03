import { Phone } from 'lucide-react';

export function CTASection() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Готовы к приключениям?
        </h2>
        <p className="text-xl text-cyan-100 mb-8">
          Позвоните нам прямо сейчас и получите персональную консультацию
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+998771228880"
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 hover:shadow-2xl transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Позвонить сейчас</span>
          </a>
        </div>
      </div>
    </div>
  );
}