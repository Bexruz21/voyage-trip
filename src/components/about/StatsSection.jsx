import { motion } from 'framer-motion';
import { Users, Globe, MapPin, Zap } from 'lucide-react';

const stats = [
  { 
    icon: Users, 
    value: "500+", 
    label: "Довольных клиентов",
    gradient: "from-purple-500 to-pink-500",
    color: "text-purple-600"
  },
  { 
    icon: Globe, 
    value: "25+", 
    label: "Направлений",
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-600"
  },
  { 
    icon: MapPin, 
    value: "10+", 
    label: "Стран партнеров",
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-600"
  },
  { 
    icon: Zap, 
    value: "24/7", 
    label: "Поддержка",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-600"
  }
];

export function StatsSection({ isClient }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((stat, index) => (
          isClient ? (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`
              }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-100 group-hover:opacity-0 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ) : (
            <div
              key={index}
              className="text-center p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-100`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}