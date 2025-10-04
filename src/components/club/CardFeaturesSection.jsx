import { motion } from 'framer-motion';
import { Key, Zap, Car, Ticket, Award, Heart } from 'lucide-react';

const cardFeatures = [
  {
    icon: Key,
    title: "Личный ключ к особым условиям",
    description: "Эксклюзивный формат участия в туристическом клубе",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Прозрачность и комфорт",
    description: "Доступ к оригинальным ценам туроператоров без наценок",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Car,
    title: "Трансферные услуги",
    description: "Комфортные поездки из дома в аэропорт и обратно",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Ticket,
    title: "Закрытые предложения",
    description: "Ранний доступ к горящим турам и эксклюзивным предложениям",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "Личный кабинет",
    description: "Отслеживание оставшихся туров, срока действия и бонусов",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Heart,
    title: "Для семьи и друзей",
    description: "Возможность оформлять туры для близких людей",
    gradient: "from-rose-500 to-pink-500"
  }
];

export function CardFeaturesSection({ isClient }) {
  return (
    <section className="py-16 bg-white/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Что даёт <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">карта</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Полный спектр преимуществ для владельцев клубных карт
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardFeatures.map((feature, index) => (
            isClient ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ) : (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}