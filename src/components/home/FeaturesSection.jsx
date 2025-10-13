import { motion } from 'framer-motion';
import { Shield, Award, Globe, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Безопасность",
    description: "Все партнеры проверены, предоставляем страховку и поддержку 24/7",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Award,
    title: "Качество",
    description: "Тщательно отбираем отели и маршруты для вашего комфорта",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Globe,
    title: "Экспертиза",
    description: "Профессиональные гиды с глубокими знаниями каждого направления",
    color: "from-indigo-400 to-blue-500"
  },
  {
    icon: CheckCircle,
    title: "Надежность",
    description: "Полное сопровождение от бронирования до возвращения домой",
    color: "from-pink-400 to-rose-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Почему выбирают <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">VOYAGE TRIP</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Мы создаем путешествия, которые остаются в памяти навсегда
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}