import { motion } from 'framer-motion';
import { Key } from 'lucide-react';

export function HeroSection({ isClient }) {
  const content = (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl mb-6">
          <Key className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Клубные карты <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Voyage Trip</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Ваш личный ключ к особым условиям путешествий
        </p>
      </div>
    </div>
  );

  if (!isClient) return content;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl mb-6"
        >
          <Key className="w-10 h-10 text-white" />
        </motion.div>
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Клубные карты <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Voyage Trip</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Ваш личный ключ к особым условиям путешествий
        </motion.p>
      </div>
    </motion.div>
  );
}