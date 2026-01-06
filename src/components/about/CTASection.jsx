import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { Plane } from 'lucide-react';

export function CTASection() {
  const { t } = useLang()
  return (
    <section
      className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <Plane className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-4">
          {t('about.cta.title')}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {t('about.cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            href={'/destinations'}
          >
            {t('about.cta.buttons.findTour')}
          </Link>
          <Link
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            href={'/contacts'}
          >
            {t('about.cta.buttons.consultation')}
          </Link>
        </div>
      </div>
    </section>
  );
}