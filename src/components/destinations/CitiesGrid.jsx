import { motion } from 'framer-motion';
import { CityCard } from './CityCard';
import { CountryInfo } from './CountryInfo';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function CitiesGrid({ country, onCitySelect }) {
  return (
    <motion.div
      key="cities"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CountryInfo country={country} />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {country.cities.map((city, index) => (
          <CityCard
            key={index}
            city={city}
            onSelect={onCitySelect}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}