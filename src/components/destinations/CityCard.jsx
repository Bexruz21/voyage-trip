import { motion } from 'framer-motion';
import { Star, MapPin } from './icons/Icons';

// Создаем иконку компаса если ее нет
const Compass = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

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

export function CityCard({ city, onSelect }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={() => onSelect(city)}
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl border border-gray-100/60 hover:border-cyan-300/50">
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 sm:from-black/70 via-black/20 sm:via-black/30 to-transparent" />
          
          {/* Рейтинг в углу */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 border border-white/30">
              <div className="flex items-center gap-1 sm:gap-2 text-white font-semibold">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-300" />
                <span className="text-xs sm:text-sm">{city.rating}</span>
              </div>
            </div>
          </div>
          
          {/* Заголовок города */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 drop-shadow-2xl">{city.name}</h3>
            <div className="flex items-center gap-1 sm:gap-2 text-white/90 sm:text-white/95 text-sm sm:text-base">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300" />
              <span className="font-medium">{city.country}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50/80">
          <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed font-medium line-clamp-2">
            {city.description}
          </p>
          
          {/* Достопримечательности */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
            <div className="flex items-center gap-2 text-gray-600">
              <Compass className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500" />
              <span className="text-xs sm:text-sm font-semibold">Главные достопримечательности</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {city.attractions?.slice(0, 2).map((attraction, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-700 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs font-semibold border border-cyan-200/50 hover:border-cyan-300 hover:scale-105 transition-all duration-300 cursor-default flex-1 min-w-0 text-center sm:text-left"
                >
                  <span className="truncate block">{attraction}</span>
                </motion.span>
              ))}
            </div>
          </div>

          {/* Кнопка подробнее */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl cursor-pointer group/btn hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl"
          >
            <span className="text-white font-semibold text-xs sm:text-sm">Подробнее</span>
            <div className="flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}