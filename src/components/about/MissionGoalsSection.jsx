import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, CheckCircle, MapPin, Zap, Star, Globe, Shield, Clock, TrendingUp, Lightbulb } from 'lucide-react';

const tabs = [
  { id: 'mission', label: 'Миссия' },
  { id: 'goals', label: 'Цели' },
  { id: 'advantages', label: 'Преимущества' }
];

const goals = [
  {
    year: "2024",
    title: "Расширение географии",
    description: "Запуск 10 новых эксклюзивных направлений в Азии и Южной Америке",
    icon: MapPin
  },
  {
    year: "2024",
    title: "Цифровизация сервиса",
    description: "Внедрение мобильного приложения и онлайн-платформы для бронирования",
    icon: Zap
  },
  {
    year: "2025",
    title: "Премиум направление",
    description: "Запуск VIP-туров с индивидуальным подходом и эксклюзивными условиями",
    icon: Star
  },
  {
    year: "2025",
    title: "Устойчивый туризм",
    description: "Развитие экологичных и социально ответственных туров",
    icon: Globe
  }
];

const features = [
  {
    icon: Shield,
    title: "Полная безопасность",
    description: "Все партнеры проверены, предоставляем страховку и поддержку 24/7"
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description: "Полный сервис от подбора тура до возвращения домой"
  },
  {
    icon: TrendingUp,
    title: "Лучшие цены",
    description: "Прямые контракты с отелями и авиакомпаниями"
  },
  {
    icon: Lightbulb,
    title: "Индивидуальный подход",
    description: "Создаем маршруты с учетом ваших интересов и предпочтений"
  }
];

export function MissionGoalsSection({ isClient }) {
  const [activeTab, setActiveTab] = useState('mission');

  const renderMissionContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">Наша миссия</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 lg:mb-6 leading-relaxed">
          Мы верим, что путешествия должны быть доступными, безопасными и незабываемыми.
          Наша цель - открывать для вас самые удивительные уголки планеты, создавая
          уникальные маршруты и обеспечивая высочайший уровень сервиса.
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 leading-relaxed">
          Наша команда - это опытные путешественники и профессионалы туристической
          индустрии, которые знают каждое направление изнутри и готовы поделиться
          своими знаниями с вами.
        </p>
        <div className="flex items-center space-x-3 lg:space-x-4">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm lg:text-base">Наша философия</div>
            <div className="text-gray-600 text-xs lg:text-sm">Каждое путешествие должно быть уникальным и запоминающимся</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          alt="Наша команда"
          className="rounded-2xl shadow-lg w-full"
        />
        <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-green-100 rounded-lg lg:rounded-xl flex items-center justify-center">
              <CheckCircle className="w-4 h-4 lg:w-6 lg:h-6 text-green-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm lg:text-base">100%</div>
              <div className="text-gray-600 text-xs lg:text-sm">Гарантия поддержки</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGoalsContent = () => (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Наши цели и планы</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {goals.map((goal, index) => (
          isClient ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                  <goal.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-block bg-blue-100 text-blue-800 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold mb-2">
                    {goal.year}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base">{goal.description}</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div
              key={index}
              className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                  <goal.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-block bg-blue-100 text-blue-800 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold mb-2">
                    {goal.year}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base">{goal.description}</p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );

  const renderAdvantagesContent = () => (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">Наши преимущества</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {features.map((feature, index) => (
          isClient ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-3 lg:space-x-4"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base">{feature.description}</p>
              </div>
            </motion.div>
          ) : (
            <div
              key={index}
              className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-3 lg:space-x-4"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base">{feature.description}</p>
              </div>
            </div>
          )
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
    <section className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-0 px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4 lg:p-8">
            {isClient ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            ) : (
              renderContent()
            )}
          </div>
        </div>
      </div>
    </section>
  );
}