import { useLang } from '@/context/LangContext';
import { Search } from 'lucide-react';

export function SearchSection({ searchQuery, onSearchChange }) {
  const { t } = useLang()
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-2xl border border-gray-100">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={t('faq.search.placeholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}