import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

export function CTASection({ isClient }) {
  const content = (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="max-w-4xl mx-auto text-center px-4">
        <Plane className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-4">
          Готовы отправиться в путешествие?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Доверьте свою мечту молодой и амбициозной команде профессионалов
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
            Найти тур
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );

  if (!isClient) return content;

  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <Plane className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-4">
          Готовы отправиться в путешествие?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Доверьте свою мечту молодой и амбициозной команде профессионалов
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
            Найти тур
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
            Получить консультацию
          </button>
        </div>
      </div>
    </motion.section>
  );
}