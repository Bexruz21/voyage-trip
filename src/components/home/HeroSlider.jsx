import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80",
        title: "Откройте мир с VOYAGE TRIP",
        subtitle: "Путешествия, которые меняют жизнь"
    },
    {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Экзотические направления",
        subtitle: "От тропических пляжей до заснеженных вершин"
    },
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Премиум сервис",
        subtitle: "Все заботы о путешествии мы берем на себя"
    },
    {
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Незабываемые впечатления",
        subtitle: "Создаем моменты, которые останутся с вами навсегда"
    }
];

export function HeroSlider({ isClient }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        if (!isClient || !isAutoPlaying) return;

        const interval = setInterval(nextSlide, 7000);
        return () => clearInterval(interval);
    }, [isClient, isAutoPlaying, nextSlide]);

    const scrollToTours = () => {
        const element = document.getElementById('tours');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Вариант для серверного рендеринга
    if (!isClient) {
        return (
            <div className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={slides[0].image}
                        alt={slides[0].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl px-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                                {slides[0].title}
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-200 max-w-2xl mx-auto">
                                {slides[0].subtitle}
                            </p>
                            <button
                                onClick={scrollToTours}
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                            >
                                Найти свое путешествие
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="relative h-screen overflow-hidden"
        >
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover"
                    />

                    {/* Градиентный оверлей - более светлый */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl px-4 sm:px-6">
                            <motion.h1
                                key={`title-${currentSlide}`}
                                initial={{ opacity: 0, y: 40, filter: "blur(1px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -40, filter: "blur(1px)" }}
                                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-white drop-shadow-2xl"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>

                            <motion.p
                                key={`subtitle-${currentSlide}`}
                                initial={{ opacity: 0, y: 30, filter: "blur(1px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -30, filter: "blur(1px)" }}
                                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 drop-shadow-xl max-w-2xl mx-auto leading-relaxed"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.p>

                            <motion.div
                                key={`button-${currentSlide}`}
                                initial={{ opacity: 0, y: 30, filter: "blur(1px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -30, filter: "blur(1px)" }}
                                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                                className="flex justify-center"
                            >
                                <button
                                    onClick={scrollToTours}
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border-2 border-white/20"
                                >
                                    <span>Найти свое путешествие</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}