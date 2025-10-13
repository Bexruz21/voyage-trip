import { motion } from 'framer-motion';
import { HelpCircle, Key, Compass, Phone, MapPin } from 'lucide-react';

const heroConfig = {
  contacts: {
    icon: Phone,
    title: "Свяжитесь с",
    highlighted: "нами",
    description: "Мы создаем путешествия мечты. Давайте обсудим ваше идеальное приключение!",
    gradient: "from-cyan-600 to-blue-600",
    iconGradient: "from-cyan-500 to-blue-500"
  },
  faq: {
    icon: HelpCircle,
    title: "Частые",
    highlighted: "вопросы",
    description: "Найдите ответы на самые популярные вопросы о наших турах и услугах",
    gradient: "from-blue-600 to-cyan-600",
    iconGradient: "from-blue-500 to-cyan-500"
  },
  club: {
    icon: Key,
    title: "Клубные карты",
    highlighted: "Voyage Trip",
    description: "Ваш личный ключ к особым условиям путешествий",
    gradient: "from-amber-600 to-orange-600",
    iconGradient: "from-amber-400 to-orange-400"
  },
  about: {
    icon: Compass,
    title: "О",
    highlighted: "компании",
    description: "Мы создаем уникальные путешествия, которые вдохновляют и открывают новые горизонты",
    gradient: "from-blue-600 to-cyan-600",
    iconGradient: "from-blue-500 to-cyan-500"
  },
  directions: {
    icon: MapPin,
    title: "Направления",
    highlighted: "путешествий",
    description: "Откройте для себя самые удивительные уголки мира с нашими эксклюзивными турами",
    gradient: "from-cyan-600 to-blue-600",
    iconGradient: "from-cyan-500 to-blue-500"
  }
};

export function HeroSection({ page = 'contacts' }) {
  const config = heroConfig[page] || heroConfig.contacts;
  const IconComponent = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${config.iconGradient} rounded-2xl mb-6 shadow-lg`}
        >
          <IconComponent className="w-10 h-10 text-white" />
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {config.title}{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${config.gradient}`}>
            {config.highlighted}
          </span>
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {config.description}
        </motion.p>
      </div>
    </motion.div>
  );
}