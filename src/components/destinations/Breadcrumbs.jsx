import { motion } from 'framer-motion';
import { MapPin } from './icons/Icons';

export function Breadcrumbs({ selectedRegion, selectedCountry, selectedCity, onReset, onRegionClick, onCountryClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="container mx-auto mb-8"
    >
      <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-sm sm:text-base text-gray-600">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onReset}
          className="hover:text-blue-600 transition-colors font-medium flex items-center gap-1 sm:gap-2"
        >
          <MapPin className="w-4 h-4" />
          Все направления
        </motion.button>
        {selectedRegion && (
          <>
            <span className="text-blue-400">›</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onRegionClick}
              className="hover:text-blue-600 transition-colors font-medium truncate max-w-[120px] sm:max-w-none"
            >
              {selectedRegion.region}
            </motion.button>
          </>
        )}
        {selectedCountry && (
          <>
            <span className="text-blue-400">›</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onCountryClick}
              className="hover:text-blue-600 transition-colors font-medium truncate max-w-[100px] sm:max-w-none"
            >
              {selectedCountry.name}
            </motion.button>
          </>
        )}
        {selectedCity && (
          <>
            <span className="text-blue-400">›</span>
            <span className="text-blue-600 font-semibold truncate max-w-[80px] sm:max-w-none">{selectedCity.name}</span>
          </>
        )}
      </div>
    </motion.div>
  );
}