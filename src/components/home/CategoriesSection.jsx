const categories = [
  { id: 'all', name: 'Все направления', count: 12 },
  { id: 'beach', name: 'Пляжный отдых', count: 4 },
  { id: 'mountain', name: 'Горный туризм', count: 3 },
  { id: 'city', name: 'Городские туры', count: 3 },
  { id: 'exotic', name: 'Экзотика', count: 2 }
];

export function CategoriesSection({ selectedCategory, onCategoryChange }) {
  return (
    <section className="py-14 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">направления</span>
        </h2>
        <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}