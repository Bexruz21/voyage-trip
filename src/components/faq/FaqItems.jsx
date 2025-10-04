import { FaqItem } from './FaqItem';
import { HelpCircle } from 'lucide-react';

export function FaqItems({ isClient, filteredItems, openItems, onToggleItem }) {
    if (filteredItems.length === 0) {
        return (
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="text-center py-12">
                        <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Вопросы не найдены</h3>
                        <p className="text-gray-600">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {filteredItems.map((item) => (
                    <FaqItem
                        key={item.id}
                        item={item}
                        isOpen={openItems[item.id]}
                        onToggle={onToggleItem}
                        isClient={isClient}
                    />
                ))}
            </div>
        </section>
    );
}