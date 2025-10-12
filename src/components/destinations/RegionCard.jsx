import { motion } from 'framer-motion';
import { Globe, Star, Calendar } from './icons/Icons';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function RegionCard({ region, onSelect }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={() => onSelect(region)}
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-cyan-200">
        <div className="relative overflow-hidden">
          <img
            src={region.image}
            alt={region.name}
            className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{region.name}</h3>
            <p className="opacity-90 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed line-clamp-2">{region.description}</p>
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm">
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center gap-1">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                {region.countries.length} стран
              </span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                {region.stats.rating}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Лучшее время: {region.bestTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {region.highlights.slice(0, 2).map((highlight, idx) => (
              <span key={idx} className="bg-cyan-50 text-cyan-700 px-2 sm:px-3 py-1 rounded-full text-xs border border-cyan-200">
                {highlight}
              </span>
            ))}
          </div>

          <motion.div
            whileHover={{ x: 3 }}
            className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg sm:rounded-xl border border-cyan-100 cursor-pointer group"
          >
            <span className="text-cyan-700 font-semibold text-xs sm:text-sm">Исследовать регион</span>
            <div className="flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}