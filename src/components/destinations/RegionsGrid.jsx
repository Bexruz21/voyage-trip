import { motion } from 'framer-motion';
import { RegionCard } from './RegionCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function RegionsGrid({ regions, onRegionSelect }) {
  return (
    <motion.div
      key="regions"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {regions.map((region) => (
        <RegionCard
          key={region.id}
          region={region}
          onSelect={onRegionSelect}
        />
      ))}
    </motion.div>
  );
}