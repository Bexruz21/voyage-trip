// components/AboutContent.js
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Shield,
  Clock,
  Star,
  Mail,
  Calendar,
  Plane,
  Compass,
  Trophy,
  CheckCircle
} from 'lucide-react';

function AboutContent() {
  const [activeTab, setActiveTab] = useState('mission');
  const [selectedMember, setSelectedMember] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stats = [
    { icon: Users, value: "50,000+", label: "Довольных клиентов" },
    { icon: Globe, value: "150+", label: "Направлений" },
    { icon: Trophy, value: "15 лет", label: "Опыта работы" },
    { icon: Star, value: "4.9/5", label: "Рейтинг Trustpilot" }
  ];

  const values = [
    {
      icon: Target,
      title: "Качество",
      description: "Мы тщательно отбираем каждый отель и маршрут, чтобы обеспечить высочайший уровень сервиса",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Heart,
      title: "Забота",
      description: "Ваш комфорт и безопасность - наш приоритет. Мы сопровождаем вас на всех этапах путешествия",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: Globe,
      title: "Устойчивость",
      description: "Поддерживаем ответственный туризм и заботимся о сохранении культурного наследия",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Award,
      title: "Инновации",
      description: "Постоянно развиваемся и внедряем новые технологии для улучшения сервиса",
      color: "from-purple-400 to-indigo-400"
    }
  ];

  const team = [
    {
      id: 1,
      name: "Анна Петрова",
      position: "Основатель компании",
      experience: "15 лет в туризме",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Создала VOYAGE TRIP с целью показать людям настоящую красоту мира. Посетила 67 стран.",
      specialties: ["Стратегическое планирование", "Разработка маршрутов", "Международные отношения"],
      contact: "anna@voyagetrip.ru"
    },
    {
      id: 2,
      name: "Максим Иванов",
      position: "Гид-эксперт",
      experience: "Посетил 40 стран",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Профессиональный гид с лингвистическим образованием. Знает каждый уголок планеты как свои пять пальцев.",
      specialties: ["Экскурсионные программы", "Культурология", "Языки: английский, испанский"],
      contact: "maxim@voyagetrip.ru"
    },
    {
      id: 3,
      name: "Елена Смирнова",
      position: "Менеджер по туризму",
      experience: "10 лет опыта",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Специалист по индивидуальному подбору туров. Помогла осуществить мечты тысячам путешественников.",
      specialties: ["Подбор туров", "Визовая поддержка", "Клиентский сервис"],
      contact: "elena@voyagetrip.ru"
    },
    {
      id: 4,
      name: "Дмитрий Козлов",
      position: "Директор по развитию",
      experience: "12 лет в индустрии",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Отвечает за новые направления и партнерства. Создатель эксклюзивных маршрутов по всему миру.",
      specialties: ["Бизнес-развитие", "Международные переговоры", "Анализ рынка"],
      contact: "dmitry@voyagetrip.ru"
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Основание компании",
      description: "Открытие первого офиса в Москве и запуск первых групповых туров"
    },
    {
      year: "2012",
      title: "Расширение географии",
      description: "Добавление 50 новых направлений и открытие направления индивидуальных туров"
    },
    {
      year: "2015",
      title: "Премия 'Лучший туроператор'",
      description: "Получение национальной премии в сфере туризма"
    },
    {
      year: "2018",
      title: "Запуск клуба путешественников",
      description: "Создание эксклюзивного сообщества для постоянных клиентов"
    },
    {
      year: "2023",
      title: "50,000 клиентов",
      description: "Достигнута отметка в 50,000 довольных путешественников"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Лучший туроператор 2023",
      description: "Национальная премия в сфере туризма"
    },
    {
      icon: Shield,
      title: "ISO 9001 Certified",
      description: "Международный сертификат качества услуг"
    },
    {
      icon: Star,
      title: "Trustpilot Excellence",
      description: "Высший рейтинг на платформе отзывов"
    },
    {
      icon: Users,
      title: "Travelers' Choice",
      description: "Премия по выбору путешественников"
    }
  ];

  const tabs = [
    { id: 'mission', label: 'Наша миссия' },
    { id: 'history', label: 'История' },
    { id: 'achievements', label: 'Достижения' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Декоративные элементы - только на клиенте */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full blur-3xl opacity-40"></div>
        </div>
      )}

      <div className="relative z-10">
        {/* Hero Section */}
        {isClient ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-20 pb-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6"
              >
                <Compass className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                О <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">компании</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                15 лет создаем незабываемые путешествия, открывая для наших клиентов самые удивительные уголки планеты
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <div className="pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
                <Compass className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                О <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">компании</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                15 лет создаем незабываемые путешествия, открывая для наших клиентов самые удивительные уголки планеты
              </p>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              isClient ? (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ) : (
                <div
                  key={index}
                  className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Mission & Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-6 py-4 text-lg font-semibold transition-all duration-300 ${
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
              <div className="p-8">
                {isClient ? (
                  <AnimatePresence mode="wait">
                    {activeTab === 'mission' && (
                      <motion.div
                        key="mission"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                      >
                        <div>
                          <h2 className="text-4xl font-bold text-gray-900 mb-6">Наша миссия</h2>
                          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Мы верим, что путешествия должны быть доступными, безопасными и незабываемыми. 
                            С 2008 года мы помогаем людям открывать мир, создавая уникальные маршруты 
                            и обеспечивая высочайший уровень сервиса.
                          </p>
                          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Наша команда - это опытные путешественники и профессионалы туристической 
                            индустрии, которые знают каждое направление изнутри и готовы поделиться 
                            своими знаниями с вами.
                          </p>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                              <Target className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Цель на 2025</div>
                              <div className="text-gray-600">Открыть 25 новых эксклюзивных направлений</div>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            alt="Наша команда"
                            className="rounded-2xl shadow-lg"
                          />
                          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                              </div>
                              <div>
                                <div className="font-bold text-gray-900">100%</div>
                                <div className="text-gray-600 text-sm">Гарантия лучшей цены</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'history' && (
                      <motion.div
                        key="history"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">Наша история</h2>
                        <div className="relative">
                          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                          <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                              <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex items-center"
                              >
                                <div className="absolute left-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                                  {milestone.year}
                                </div>
                                <div className="ml-24 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex-1">
                                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                  <p className="text-gray-600">{milestone.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'achievements' && (
                      <motion.div
                        key="achievements"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">Наши достижения</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {achievements.map((achievement, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-4"
                            >
                              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <achievement.icon className="w-8 h-8 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                                <p className="text-gray-600">{achievement.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ) : (
                  // Статичный контент для серверного рендеринга
                  activeTab === 'mission' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Наша миссия</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          Мы верим, что путешествия должны быть доступными, безопасными и незабываемыми. 
                          С 2008 года мы помогаем людям открывать мир, создавая уникальные маршруты 
                          и обеспечивая высочайший уровень сервиса.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                          Наша команда - это опытные путешественники и профессионалы туристической 
                          индустрии, которые знают каждое направление изнутри и готовы поделиться 
                          своими знаниями с вами.
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Цель на 2025</div>
                            <div className="text-gray-600">Открыть 25 новых эксклюзивных направлений</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                          alt="Наша команда"
                          className="rounded-2xl shadow-lg"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                              <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">100%</div>
                              <div className="text-gray-600 text-sm">Гарантия лучшей цены</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">ценности</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Принципы, которые направляют нашу работу и отношения с клиентами
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                isClient ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-4`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                ) : (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-4`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Наша <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">команда</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Профессионалы с огромным опытом, которые сделают ваше путешествие идеальным
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                isClient ? (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setSelectedMember(member)}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-4">
                        <span className="text-white font-semibold">Подробнее</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Mail className="w-4 h-4 mr-1" />
                        {member.contact}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div
                    key={member.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Mail className="w-4 h-4 mr-1" />
                        {member.contact}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Member Modal - только на клиенте */}
        {isClient && (
          <AnimatePresence>
            {selectedMember && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedMember(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
                    >
                      ×
                    </button>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
                    <p className="text-blue-600 font-semibold text-lg mb-4">{selectedMember.position}</p>
                    <p className="text-gray-600 mb-6">{selectedMember.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Специализация:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {selectedMember.contact}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {selectedMember.experience}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Final CTA */}
        {isClient ? (
          <motion.section 
            className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="max-w-4xl mx-auto text-center px-4">
              <Plane className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Готовы отправиться в путешествие?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Доверьте свою мечту профессионалам с 15-летним опытом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
                  Найти тур
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Получить консультацию
                </button>
              </div>
            </div>
          </motion.section>
        ) : (
          <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500">
            <div className="max-w-4xl mx-auto text-center px-4">
              <Plane className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Готовы отправиться в путешествие?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Доверьте свою мечту профессионалам с 15-летним опытом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg">
                  Найти тур
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg">
                  Получить консультацию
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default AboutContent;