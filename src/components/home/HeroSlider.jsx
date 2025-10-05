import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        title: "Премиум сервис",
        subtitle: "Все заботы о путешествии мы берем на себя"
    }
];


export function HeroSlider({ isClient }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!isClient) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isClient]);

    const scrollToTours = () => {
        const element = document.getElementById('tours');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!isClient) {
        return (
            <div className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={slides[0].image}
                        alt={slides[0].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">

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
            </div>
        );
    }

    return (
        <div className="relative h-screen overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl px-4">
                            <motion.h1
                                key={`title-${currentSlide}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] 
             [text-shadow:_0_0_20px_rgba(255,255,255,0.2)]"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>

                            <motion.p
                                key={`subtitle-${currentSlide}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="text-xl md:text-2xl mb-8 text-gray-100 
             drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] 
             [text-shadow:_0_0_10px_rgba(255,255,255,0.15)]"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.p>

                            <motion.button
                                key={`button-${currentSlide}`}
                                onClick={scrollToTours}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-shadow duration-300"
                            >
                                Найти свое путешествие
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}