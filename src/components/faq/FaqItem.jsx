import { ChevronDown, HelpCircle } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Все вопросы', count: 12, icon: HelpCircle },
  { id: 'booking', name: 'Бронирование', count: 4, icon: HelpCircle },
  { id: 'documents', name: 'Документы', count: 3, icon: HelpCircle },
  { id: 'travel', name: 'Путешествие', count: 3, icon: HelpCircle },
  { id: 'payments', name: 'Оплата', count: 2, icon: HelpCircle }
];

export function FaqItem({ item, isOpen, onToggle }) {
  const categoryName = categories.find(cat => cat.id === item.category)?.id;

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => onToggle(item.id)}
        className="w-full p-5 sm:p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-start space-x-4 flex-1 min-w-0">
          <div className="text-left flex-1">
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
        <div className="flex-shrink-0 ml-4">
          <div 
            className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white transition-transform"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </button>
      
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? '1000px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="px-5 sm:px-8 pb-6">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed text-sm sm:text-base">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}