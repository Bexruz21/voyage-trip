import { motion } from 'framer-motion';
import { Target, Heart, Globe, Award } from 'lucide-react';

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
    title: "Инновации",
    description: "Постоянно развиваемся и внедряем новые технологии для улучшения сервиса",
    color: "from-green-400 to-emerald-400"
  },
  {
    icon: Award,
    title: "Экспертиза",
    description: "Профессиональная команда с глубокими знаниями каждого направления",
    color: "from-purple-400 to-indigo-400"
  }
];

export function ValuesSection({ isClient }) {
  return (
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
  );
}