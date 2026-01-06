import Link from 'next/link';
import { Plane } from 'lucide-react';
import { useLang } from '@/context/LangContext';

export function CTASection() {
  const { t } = useLang();
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-4">
        <Plane className="w-16 h-16 text-cyan-600 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {t('home.cta.title')}
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('home.cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacts">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
              {t('home.cta.primary')}
            </button>
          </Link>
          <Link href="/destinations">
            <button className="border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300">
              {t('home.cta.secondary')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}