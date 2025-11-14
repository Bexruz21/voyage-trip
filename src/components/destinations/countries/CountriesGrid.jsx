import { motion } from 'framer-motion';
import { CountryCard } from './CountryCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function CountriesGrid({ region, onCountrySelect }) {

  return (
    <motion.div
      key="countries"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {region.countriesData.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
            onSelect={onCountrySelect}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}