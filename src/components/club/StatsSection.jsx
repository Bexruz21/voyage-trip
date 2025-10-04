import { motion } from 'framer-motion';
import { Users, Star, Gift, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: "5,000+", label: "Участников клуба" },
  { icon: Star, value: "98%", label: "Довольных клиентов" },
  { icon: Gift, value: "2,500+", label: "Выданных бонусов" },
  { icon: Shield, value: "24/7", label: "Поддержка" }
];

export function StatsSection({ isClient }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
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
  );
}