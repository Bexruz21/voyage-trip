'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin,
    Clock,
    Star,
    Users,
    Plane,
    Shield,
    ChevronLeft,
    ChevronRight,
    Search,
    Filter,
    Heart
} from 'lucide-react';

function HomeContent() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [favoriteTours, setFavoriteTours] = useState(new Set());
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isClient, setIsClient] = useState(false);

    const slides = [
        {
            image: "https://happy-travel.kz/upload/images/86121_629275_16.jpg",
            title: "Откройте мир с VOYAGE TRIP",
            subtitle: "Путешествия, которые меняют жизнь"
        },
        {
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Экзотические направления",
            subtitle: "От тропических пляжей до заснеженных вершин"
        },
        {
            image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
            title: "Премиум сервис",
            subtitle: "Все заботы о путешествии мы берем на себя"
        }
    ];

    const categories = [
        { id: 'all', name: 'Все направления', count: 12 },
        { id: 'beach', name: 'Пляжный отдых', count: 4 },
        { id: 'mountain', name: 'Горный туризм', count: 3 },
        { id: 'city', name: 'Городские туры', count: 3 },
        { id: 'exotic', name: 'Экзотика', count: 2 }
    ];

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
            image: "https://images.unsplash.com/photo-1540959733332-8ab4aab0fcca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "120 000 ₽",
            days: "12 дней",
            rating: 4.8,
            reviews: 892,
            category: "city",
            features: ["Виза включена", "Гид", "Трансферы"]
        },
        // ... остальные туры
    ];

    const stats = [
        { icon: Users, value: "50,000+", label: "Довольных клиентов" },
        { icon: MapPin, value: "150+", label: "Направлений" },
        { icon: Star, value: "4.9/5", label: "Рейтинг Trustpilot" },
        { icon: Shield, value: "15 лет", label: "На рынке" }
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const toggleFavorite = (tourId) => {
        setFavoriteTours(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(tourId)) {
                newFavorites.delete(tourId);
            } else {
                newFavorites.add(tourId);
            }
            return newFavorites;
        });
    };

    const filteredTours = tours.filter(tour => {
        const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tour.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
            {/* Декоративные элементы - только на клиенте */}
            {isClient && (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
                </div>
            )}

            <div className="relative z-10">
                {/* Hero Slider */}
                <div className="relative h-screen overflow-hidden">
                    {/* Статический первый слайд для SEO */}
                    <div className="absolute inset-0">
                        <img
                            src={slides[0].image}
                            alt={slides[0].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <div className="text-center text-white max-w-4xl px-4">
                                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                    {slides[0].title}
                                </h1>
                                <p className="text-xl md:text-2xl mb-8">
                                    {slides[0].subtitle}
                                </p>
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold">
                                    Найти свое путешествие
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Анимированный слайдер - только на клиенте */}
                    {isClient && (
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                                    <div className="text-center text-white max-w-4xl px-4">
                                        <motion.h1
                                            className="text-5xl md:text-7xl font-bold mb-6"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {slides[currentSlide].title}
                                        </motion.h1>
                                        <motion.p
                                            className="text-xl md:text-2xl mb-8"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {slides[currentSlide].subtitle}
                                        </motion.p>
                                        <motion.button
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                                        >
                                            Найти свое путешествие
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}

                    {/* Slider Controls - только на клиенте */}
                    {isClient && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Slider Dots */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Search Section */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Куда хотите поехать?"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            <div className="flex gap-4">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                >
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name} ({category.count})
                                        </option>
                                    ))}
                                </select>

                                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2">
                                    <Filter className="w-5 h-5" />
                                    <span>Фильтры</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category.id
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

                {/* Tours Grid */}
                <section className="py-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                            Популярные <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">направления</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTours.map((tour, index) => (
                                <div
                                    key={tour.id}
                                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative">
                                        <img
                                            src={tour.image}
                                            alt={tour.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        {tour.isHot && (
                                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                🔥 Хит сезона
                                            </div>
                                        )}
                                        {isClient && (
                                            <button
                                                onClick={() => toggleFavorite(tour.id)}
                                                className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${favoriteTours.has(tour.id)
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-white/20 text-white hover:bg-white/30'
                                                    }`}
                                            >
                                                <Heart
                                                    className={`w-5 h-5 ${favoriteTours.has(tour.id) ? 'fill-current' : ''
                                                        }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-xl font-bold text-gray-900">{tour.name}</h3>
                                            <div className="text-2xl font-bold text-cyan-600">{tour.price}</div>
                                        </div>

                                        <div className="flex items-center text-gray-600 mb-4">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            <span className="text-sm">{tour.location}</span>
                                        </div>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {tour.days}
                                                </div>
                                                <div className="flex items-center">
                                                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                                                    {tour.rating} ({tour.reviews})
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {tour.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-full border border-cyan-200"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                                            Подробнее о туре
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-cyan-200" />
                                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-cyan-100">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <Plane className="w-16 h-16 text-cyan-600 mx-auto mb-6" />
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Готовы к незабываемому путешествию?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Наши эксперты подберут для вас идеальный тур с учетом всех пожеланий
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
                                Получить консультацию
                            </button>
                            <button className="border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300">
                                Смотреть все туры
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HomeContent;