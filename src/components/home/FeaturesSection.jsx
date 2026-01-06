import { Shield, Award, Globe, CheckCircle } from 'lucide-react';
import { useLang } from '@/context/LangContext';

const features = [
  {
    icon: Shield,
    title: 'home.features.items.security.title',
    description: 'home.features.items.security.description',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Award,
    title: 'home.features.items.quality.title',
    description: 'home.features.items.quality.description',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Globe,
    title: 'home.features.items.expertise.title',
    description: 'home.features.items.expertise.description',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    icon: CheckCircle,
    title: 'home.features.items.reliability.title',
    description: 'home.features.items.reliability.description',
    color: 'from-pink-400 to-rose-500'
  }
];

export function FeaturesSection() {
  const { t } = useLang();
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
          {t('home.features.title')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            VOYAGE TRIP
          </span>
        </h2>
        <p className="text-base sm:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          {t('home.features.subtitle')}
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                {t(feature.title)}
              </h3>
              <p className="text-gray-600 text-sm leading-snug">
                {t(feature.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
