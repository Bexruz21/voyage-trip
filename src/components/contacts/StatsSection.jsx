import { Globe, Users, Star, Shield } from 'lucide-react';

const stats = [
  { icon: Globe, value: "150+", label: "Направлений по всему миру" },
  { icon: Users, value: "Персональный", label: "Подход к каждому клиенту" },
  { icon: Star, value: "Премиум", label: "Качество сервиса" },
  { icon: Shield, value: "Гарантия", label: "Надёжности и поддержки" }
];

export function StatsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
          >
            <stat.icon className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}