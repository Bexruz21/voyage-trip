// components/ClubContent.js
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, 
  Gift, 
  Users, 
  Star, 
  Shield, 
  Clock, 
  MapPin, 
  MessageCircle,
  CheckCircle,
  Award,
  Zap,
  Heart,
  Calendar,
  Coffee,
  Plane
} from 'lucide-react';

function ClubContent() {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [isJoining, setIsJoining] = useState(false);
  const [joinStatus, setJoinStatus] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const benefits = [
    {
      icon: Crown,
      title: "Эксклюзивные туры",
      description: "Доступ к уникальным маршрутам, недоступным обычным туристам",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Gift,
      title: "Скидки до 25%",
      description: "Специальные цены на все туры и дополнительные услуги",
      color: "from-green-400 to-cyan-400"
    },
    {
      icon: Users,
      title: "Закрытые мероприятия",
      description: "Встречи с путешественниками и экспертами по туризму",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: Shield,
      title: "Приоритетная поддержка",
      description: "Персональный менеджер и круглосуточная поддержка",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const membershipPlans = [
    {
      id: 'basic',
      name: "Базовый",
      price: "5 000 ₽",
      period: "в год",
      description: "Для начинающих путешественников",
      features: [
        "Скидка 10% на все туры",
        "Доступ к базовым мероприятиям",
        "Email рассылка с акциями",
        "Стандартная поддержка"
      ],
      buttonText: "Начать базовый",
      popular: false
    },
    {
      id: 'premium',
      name: "Премиум",
      price: "15 000 ₽",
      period: "в год",
      description: "Для настоящих ценителей путешествий",
      features: [
        "Скидка 20% на все туры",
        "Все мероприятия клуба",
        "Персональный менеджер",
        "Ранний доступ к турам",
        "Приоритетное бронирование",
        "Подарочный набор"
      ],
      buttonText: "Стать премиум",
      popular: true
    },
    {
      id: 'vip',
      name: "VIP",
      price: "30 000 ₽",
      period: "в год",
      description: "Максимум преимуществ для взыскательных",
      features: [
        "Скидка 25% на все туры",
        "Эксклюзивные VIP туры",
        "Индивидуальные программы",
        "Приоритетное бронирование 24/7",
        "Личный travel-консьерж",
        "Подарки и сувениры"
      ],
      buttonText: "Стать VIP",
      popular: false
    }
  ];

  const events = [
    {
      id: 1,
      title: "Встреча с известным тревел-блогером",
      date: "15 декабря 2024",
      time: "19:00",
      location: "Москва, ул. Тверская, 10",
      type: "meetup",
      seats: 24,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Мастер-класс по travel-фотографии",
      date: "22 декабря 2024",
      time: "11:00",
      location: "Онлайн",
      type: "workshop",
      seats: 50,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Закрытый показ фильма о путешествиях",
      date: "28 декабря 2024",
      time: "20:00",
      location: "Кинотеатр 'Формула Кино'",
      type: "screening",
      seats: 40,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Анна Иванова",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      location: "Участник с 2022",
      text: "Благодаря клубу открыла для себя удивительные места, о которых даже не подозревала!",
      rating: 5
    },
    {
      name: "Максим Петров",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      location: "Участник с 2021",
      text: "VIP статус полностью оправдал ожидания. Персональный подход и эксклюзивные предложения!",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      location: "Участник с 2023",
      text: "Мероприятия клуба - это всегда море вдохновения и новых знакомств с единомышленниками!",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "5,000+", label: "Участников клуба" },
    { icon: MapPin, value: "80+", label: "Стран посещений" },
    { icon: Calendar, value: "120+", label: "Мероприятий в год" },
    { icon: Star, value: "4.9/5", label: "Рейтинг клуба" }
  ];

  const handleJoinClub = async (planId) => {
    setIsJoining(true);
    // Имитация процесса вступления
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsJoining(false);
    setJoinStatus('success');
    setTimeout(() => setJoinStatus(null), 5000);
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'meetup': return <Users className="w-5 h-5" />;
      case 'workshop': return <Zap className="w-5 h-5" />;
      case 'screening': return <Award className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'meetup': return 'bg-blue-100 text-blue-600';
      case 'workshop': return 'bg-green-100 text-green-600';
      case 'screening': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Декоративные элементы - только на клиенте */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full blur-3xl opacity-40"></div>
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
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl mb-6"
              >
                <Crown className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Клуб <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">путешественников</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Присоединяйтесь к сообществу единомышленников и откройте мир по-новому с эксклюзивными привилегиями
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <div className="pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl mb-6">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Клуб <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">путешественников</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Присоединяйтесь к сообществу единомышленников и откройте мир по-новому с эксклюзивными привилегиями
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
                  <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ) : (
                <div
                  key={index}
                  className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Привилегии <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">членства</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Станьте частью эксклюзивного сообщества и получите уникальные возможности
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                isClient ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-4`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ) : (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-4`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Выберите свой <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">тариф</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Подберите оптимальный вариант членства для вашего стиля путешествий
            </p>

            {/* Success Message - только на клиенте */}
            {isClient && (
              <AnimatePresence>
                {joinStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-center"
                  >
                    <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-lg font-semibold">Поздравляем! Вы успешно вступили в клуб!</div>
                    <p>Наш менеджер свяжется с вами в течение часа для оформления</p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {membershipPlans.map((plan, index) => (
                isClient ? (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                      plan.popular 
                        ? 'border-amber-400 scale-105 shadow-2xl' 
                        : 'border-gray-100 hover:border-amber-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          🏆 ПОПУЛЯРНЫЙ ВЫБОР
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600 ml-2">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <motion.button
                        onClick={() => handleJoinClub(plan.id)}
                        disabled={isJoining}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/25'
                            : 'bg-gradient-to-r from-gray-500 to-gray-700 text-white hover:shadow-lg'
                        } disabled:opacity-50`}
                      >
                        {isJoining ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Оформление...</span>
                          </div>
                        ) : (
                          plan.buttonText
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <div
                    key={plan.id}
                    className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                      plan.popular 
                        ? 'border-amber-400 scale-105 shadow-2xl' 
                        : 'border-gray-100'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          🏆 ПОПУЛЯРНЫЙ ВЫБОР
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600 ml-2">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className={`w-full py-4 rounded-xl font-bold text-lg ${
                          plan.popular
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                            : 'bg-gradient-to-r from-gray-500 to-gray-700 text-white'
                        }`}
                      >
                        {plan.buttonText}
                      </button>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Ближайшие <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">мероприятия</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Эксклюзивные события только для членов клуба
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                isClient ? (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${getEventColor(event.type)}`}>
                          {getEventIcon(event.type)}
                          <span className="capitalize">{event.type}</span>
                        </div>
                        <div className="ml-auto flex items-center text-gray-500 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {event.seats} мест
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date} в {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                        Записаться
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div
                    key={event.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${getEventColor(event.type)}`}>
                          {getEventIcon(event.type)}
                          <span className="capitalize">{event.type}</span>
                        </div>
                        <div className="ml-auto flex items-center text-gray-500 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {event.seats} мест
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date} в {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-semibold">
                        Записаться
                      </button>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Отзывы участников клуба
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                isClient ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-amber-100 text-sm">{testimonial.location}</div>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <p className="text-amber-50 italic">"{testimonial.text}"</p>
                  </motion.div>
                ) : (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-amber-100 text-sm">{testimonial.location}</div>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <p className="text-amber-50 italic">"{testimonial.text}"</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        {isClient ? (
          <motion.section 
            className="py-20 bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="max-w-4xl mx-auto text-center px-4">
              <Plane className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Готовы стать частью нашего клуба?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к 5,000+ путешественников, которые уже открыли для себя преимущества клуба
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
                  Вступить в клуб
                </button>
                <button className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all duration-300">
                  Получить консультацию
                </button>
              </div>
            </div>
          </motion.section>
        ) : (
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto text-center px-4">
              <Plane className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Готовы стать частью нашего клуба?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к 5,000+ путешественников, которые уже открыли для себя преимущества клуба
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg">
                  Вступить в клуб
                </button>
                <button className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-xl font-bold text-lg">
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

export default ClubContent;