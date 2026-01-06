import { useLang } from '@/context/LangContext';
import { Users, Globe, MapPin, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "500+",
    label: {
      ru: "Довольных клиентов",
      en: "Happy clients",
      uz: "Mamnun mijozlar"
    },
    gradient: "from-purple-500 to-pink-500",
    color: "text-purple-600"
  },
  {
    icon: Globe,
    value: "25+",
    label: {
      ru: "Направлений",
      en: "Destinations",
      uz: "Yo‘nalishlar"
    },
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    value: "10+",
    label: {
      ru: "Стран партнёров",
      en: "Partner countries",
      uz: "Hamkor davlatlar"
    },
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-600"
  },
  {
    icon: Zap,
    value: "24/7",
    label: {
      ru: "Поддержка",
      en: "Support",
      uz: "Qo‘llab-quvvatlash"
    },
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-600"
  }
];

export function StatsSection() {
  const { lang } = useLang()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-2xl shadow-lg border-0 bg-white relative"
          >
            <div className="relative z-10 bg-white">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label[lang]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}