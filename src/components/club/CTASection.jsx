import Link from 'next/link';
import { Key } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <Key className="w-16 h-16 text-amber-600 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Готовы получить свою карту?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Клубная карта Voyage Trip — это ваш способ путешествовать умнее, комфортнее и с привилегиями.
          Присоединяйтесь к сообществу путешественников нового поколения.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacts">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
              Получить карту
            </button>
          </Link>
          <Link href="/contacts">
            <button className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all duration-300">
              Получить консультацию
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}