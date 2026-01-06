import { useState, memo } from 'react';
import { Target, CheckCircle, MapPin, Zap, Star, Globe, Shield, Clock, TrendingUp, Lightbulb, FileCheck } from 'lucide-react';
import { useLang } from '@/context/LangContext';

const tabs = [
  { id: 'mission', label: 'Миссия' },
  { id: 'goals', label: 'Цели' },
  { id: 'advantages', label: 'Преимущества' }
];

const goals = [
  {
    year: "2024",
    title: {
      ru: "Расширение географии",
      en: "Geographic Expansion",
      uz: "Geografiyani kengaytirish"
    },
    description: {
      ru: "Запуск 10 новых эксклюзивных направлений в Азии и Южной Америке",
      en: "Launching 10 new exclusive destinations in Asia and South America",
      uz: "Osiyo va Janubiy Amerikada 10 ta yangi eksklyuziv yo‘nalishni ishga tushirish"
    },
    icon: MapPin
  },
  {
    year: "2024",
    title: {
      ru: "Цифровизация сервиса",
      en: "Service Digitalization",
      uz: "Xizmatlarni raqamlashtirish"
    },
    description: {
      ru: "Внедрение мобильного приложения и онлайн-платформы для бронирования",
      en: "Implementation of a mobile application and an online booking platform",
      uz: "Mobil ilova va onlayn bronlash platformasini joriy etish"
    },
    icon: Zap
  },
  {
    year: "2025",
    title: {
      ru: "Премиум направление",
      en: "Premium Direction",
      uz: "Premium yo‘nalish"
    },
    description: {
      ru: "Запуск VIP-туров с индивидуальным подходом и эксклюзивными условиями",
      en: "Launching VIP tours with a personalized approach and exclusive conditions",
      uz: "Individual yondashuv va eksklyuziv shartlarga ega VIP-turlarni ishga tushirish"
    },
    icon: Star
  },
  {
    year: "2025",
    title: {
      ru: "Устойчивый туризм",
      en: "Sustainable Tourism",
      uz: "Barqaror turizm"
    },
    description: {
      ru: "Развитие экологичных и социально ответственных туров",
      en: "Development of environmentally friendly and socially responsible tours",
      uz: "Ekologik va ijtimoiy mas’uliyatli turlarni rivojlantirish"
    },
    icon: Globe
  }
];
const features = [
  {
    icon: Shield,
    title: {
      ru: "Полная безопасность",
      en: "Complete Safety",
      uz: "To‘liq xavfsizlik"
    },
    description: {
      ru: "Все партнеры проверены, предоставляем страховку и поддержку 24/7",
      en: "All partners are verified, we provide insurance and 24/7 support",
      uz: "Barcha hamkorlar tekshirilgan, sug‘urta va 24/7 qo‘llab-quvvatlashni ta’minlaymiz"
    }
  },
  {
    icon: Clock,
    title: {
      ru: "Экономия времени",
      en: "Time Saving",
      uz: "Vaqtni tejash"
    },
    description: {
      ru: "Полный сервис от подбора тура до возвращения домой",
      en: "Full service from tour selection to returning home",
      uz: "Sayohat tanlashdan uyga qaytguningizgacha to‘liq xizmat"
    }
  },
  {
    icon: TrendingUp,
    title: {
      ru: "Лучшие цены",
      en: "Best Prices",
      uz: "Eng yaxshi narxlar"
    },
    description: {
      ru: "Прямые контракты с отелями и авиакомпаниями",
      en: "Direct contracts with hotels and airlines",
      uz: "Mehmonxonalar va aviakompaniyalar bilan to‘g‘ridan-to‘g‘ri shartnomalar"
    }
  },
  {
    icon: Lightbulb,
    title: {
      ru: "Индивидуальный подход",
      en: "Personalized Approach",
      uz: "Individual yondashuv"
    },
    description: {
      ru: "Создаем маршруты с учетом ваших интересов и предпочтений",
      en: "We create routes based on your interests and preferences",
      uz: "Qiziqishlaringiz va xohishlaringizga mos marshrutlar yaratamiz"
    }
  },
  {
    icon: FileCheck,
    title: {
      ru: "Официальная лицензия",
      en: "Official License",
      uz: "Rasmiy litsenziya"
    },
    description: {
      ru: "VOYAGE TRIP имеет государственную лицензию на туроператорскую деятельность",
      en: "VOYAGE TRIP holds an official government license for tour operator activities",
      uz: "VOYAGE TRIP turizm faoliyati uchun davlat litsenziyasiga ega"
    }
  }
];

const GoalCard = memo(({ goal }) => {
  const { lang } = useLang()
  return (
    <div className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100">
      <div className="flex items-start space-x-3 lg:space-x-4">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
          <goal.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="inline-block bg-blue-100 text-blue-800 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold mb-2">
            {goal.year}
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{goal.title[lang]}</h3>
          <p className="text-gray-600 text-sm lg:text-base">{goal.description[lang]}</p>
        </div>
      </div>
    </div>
  )
});

const FeatureCard = memo(({ feature }) => {
  const { lang } = useLang()
  return (
    <div className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-3 lg:space-x-4">
      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
        <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{feature.title[lang]}</h3>
        <p className="text-gray-600 text-sm lg:text-base">{feature.description[lang]}</p>
      </div>
    </div>
  )
});

export default function MissionGoalsSection() {
  const [activeTab, setActiveTab] = useState('mission');
  const { t } = useLang();

  const renderMissionContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">{t("about.mission.title")}</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 lg:mb-6 leading-relaxed">
          {t("about.mission.description1")}
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 leading-relaxed">
          {t("about.mission.description2")}
        </p>
        <div className="flex items-center space-x-3 lg:space-x-4">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm lg:text-base">{t("about.mission.philosophy.title")}</div>
            <div className="text-gray-600 text-xs lg:text-sm">{t("about.mission.philosophy.subtitle")}</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          alt="Наша команда"
          className="rounded-2xl shadow-lg w-full"
        />
        <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-green-100 rounded-lg lg:rounded-xl flex items-center justify-center">
              <CheckCircle className="w-4 h-4 lg:w-6 lg:h-6 text-green-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm lg:text-base">100%</div>
              <div className="text-gray-600 text-xs lg:text-sm">{t("about.mission.support.label")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGoalsContent = () => (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">{t("about.goals.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {goals.map((goal, index) => (
          <GoalCard key={index} goal={goal} />
        ))}
      </div>
    </div>
  );

  const renderAdvantagesContent = () => (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">{t("about.advantages.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'mission':
        return renderMissionContent();
      case 'goals':
        return renderGoalsContent();
      case 'advantages':
        return renderAdvantagesContent();
      default:
        return renderMissionContent();
    }
  };

  return (
    <section className="py-8 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-0 px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-lg font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                >
                  {t(`about.mission.tabs.${tab.id}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4 lg:p-8">
            <div className="transition-opacity duration-300 ease-in-out">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}