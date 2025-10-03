import { TourCard } from './TourCard';

const tours = [
  {
    id: 1,
    name: "Райские пляжи Бали",
    location: "Бали, Индонезия",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: "85 000 ₽",
    days: "10 дней",
    rating: 4.9,
    reviews: 1247,
    category: "beach",
    features: ["Все включено", "SPA", "Экскурсии"],
    isHot: true
  },
  {
    id: 2,
    name: "Загадочная Япония",
    location: "Токио, Киото, Осака",
    image: "https://resize.tripster.ru/M7GlFVf7e3k6cE15M-Nfjg1bhEw=/fit-in/800x600/filters:no_upscale()/https://cdn.tripster.ru/photos/500cdf6f-f42a-49f9-a9a1-d46f80a560f1.jpg",
    price: "120 000 ₽",
    days: "12 дней",
    rating: 4.8,
    reviews: 892,
    category: "city",
    features: ["Виза включена", "Гид", "Трансферы"]
  },
  {
    id: 3,
    name: "Альпийские вершины",
    location: "Швейцария",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: "95 000 ₽",
    days: "8 дней",
    rating: 4.7,
    reviews: 567,
    category: "mountain",
    features: ["Горные лыжи", "SPA", "Экскурсии"]
  },
  {
    id: 4,
    name: "Сафари в Кении",
    location: "Найроби, Кения",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: "145 000 ₽",
    days: "14 дней",
    rating: 4.9,
    reviews: 321,
    category: "exotic",
    features: ["Сафари", "Фототур", "Полный пансион"]
  }
];

export function ToursSection({ isClient, selectedCategory, favoriteTours, onToggleFavorite }) {
  const filteredTours = tours.filter(tour => {
    return selectedCategory === 'all' || tour.category === selectedCategory;
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Популярные <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">туры</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              isClient={isClient}
              isFavorite={favoriteTours.has(tour.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}