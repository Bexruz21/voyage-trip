import { useLang } from '@/context/LangContext';
import { Globe, Users, Star, Shield } from 'lucide-react';


const stats = [
  { icon: Globe, index: 0 },
  { icon: Users, index: 1 },
  { icon: Star, index: 2 },
  { icon: Shield, index: 3 }
];


export function StatsSection() {
  const { t } = useLang();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
          >
            <stat.icon className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
            <div className="text-sm sm:text-2xl font-bold text-gray-900 mb-1">{t(`contacts.stats.items.${stat.index}.value`)}</div>
            <div className="text-gray-600 text-sm">{t(`contacts.stats.items.${stat.index}.label`)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}