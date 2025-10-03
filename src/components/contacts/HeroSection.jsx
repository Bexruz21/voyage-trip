import { motion } from 'framer-motion';

export function HeroSection({ isClient }) {
  const content = (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Свяжитесь с <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">нами</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Мы создаем путешествия мечты. Давайте обсудим ваше идеальное приключение!
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
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Свяжитесь с <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">нами</span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Мы создаем путешествия мечты. Давайте обсудим ваше идеальное приключение!
        </motion.p>
      </div>
    </motion.div>
  );
}