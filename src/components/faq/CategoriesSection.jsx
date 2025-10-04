import { HelpCircle, CreditCard, Shield, Plane, CheckCircle } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Все вопросы', count: 12, icon: HelpCircle },
  { id: 'booking', name: 'Бронирование', count: 4, icon: CreditCard },
  { id: 'documents', name: 'Документы', count: 3, icon: Shield },
  { id: 'travel', name: 'Путешествие', count: 3, icon: Plane },
  { id: 'payments', name: 'Оплата', count: 2, icon: CheckCircle }
];

export function CategoriesSection({ activeCategory, onCategoryChange }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex overflow-x-auto pb-4 space-x-3 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center space-x-2 flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <category.icon className="w-4 h-4" />
            <span>{category.name}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}