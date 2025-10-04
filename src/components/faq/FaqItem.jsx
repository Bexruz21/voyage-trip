import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Все вопросы', count: 12, icon: HelpCircle },
  { id: 'booking', name: 'Бронирование', count: 4, icon: HelpCircle },
  { id: 'documents', name: 'Документы', count: 3, icon: HelpCircle },
  { id: 'travel', name: 'Путешествие', count: 3, icon: HelpCircle },
  { id: 'payments', name: 'Оплата', count: 2, icon: HelpCircle }
];

export function FaqItem({ item, isOpen, onToggle, isClient }) {
  const categoryName = categories.find(cat => cat.id === item.category)?.name;

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div
        onClick={() => onToggle(item.id)}
        className="w-full p-5 sm:p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group cursor-pointer select-none"
      >
        <div className="flex items-start space-x-4">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {item.question}
            </h3>
            <div className="flex items-center space-x-4 mt-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {categoryName}
              </span>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, type: "tween" }}
          className="flex-shrink-0"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
            <ChevronDown className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
      
      {isClient ? (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ 
                opacity: 0, 
                height: 0,
                marginBottom: 0
              }}
              animate={{ 
                opacity: 1, 
                height: "auto",
                marginBottom: 24
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                marginBottom: 0
              }}
              transition={{ 
                duration: 0.25,
                ease: "easeInOut",
                height: { duration: 0.25 },
                opacity: { duration: 0.2 }
              }}
              className="overflow-hidden"
              style={{ willChange: "transform, opacity, height" }}
            >
              <div className="px-5 sm:px-8 pb-2">
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed text-sm sm:text-base">
                    {item.answer}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        isOpen && (
          <div className="px-5 sm:px-8 pb-6">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}