import { CheckCircle } from 'lucide-react';
import { useLang } from '@/context/LangContext';

const advantages = [
  {
    title: 'home.advantages.items.personal.title',
    description: 'home.advantages.items.personal.description'
  },
  {
    title: 'home.advantages.items.prices.title',
    description: 'home.advantages.items.prices.description'
  },
  {
    title: 'home.advantages.items.service.title',
    description: 'home.advantages.items.service.description'
  },
  {
    title: 'home.advantages.items.support.title',
    description: 'home.advantages.items.support.description'
  }
];


export function AdvantagesSection() {
  const { t } = useLang();
  return (
    <section className="py-10 sm:py-20 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          {t('home.advantages.title')}
        </h2>
        <p className="text-xl text-cyan-100 text-center mb-12 max-w-2xl mx-auto">
          {t('home.advantages.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t(advantage.title)}</h3>
                <p className="text-cyan-100">{t(advantage.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}