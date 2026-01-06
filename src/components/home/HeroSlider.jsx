'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const SLIDE_DURATION = 7000;
const SLIDE_IMAGES = [
    'https://images.unsplash.com/photo-1589561454226-796a8aa89b05',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4'
];

export function HeroSlider() {
    const { t } = useLang();
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % SLIDE_IMAGES.length);
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, SLIDE_DURATION);
        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [nextSlide]);

    useEffect(() => {
        const nextIndex = (currentSlide + 1) % SLIDE_IMAGES.length;
        const img = new Image();
        img.src = SLIDE_IMAGES[nextIndex];
    }, [currentSlide]);

    const currentImage = SLIDE_IMAGES[currentSlide];

    return (
        <div className="relative h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                    className="absolute inset-0"
                >
                    <img
                        src={currentImage}
                        alt={t(`home.hero.slides.${currentSlide}.title`)}
                        className="w-full h-full object-cover"
                        loading="eager"
                        draggable={false}
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl px-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="text-4xl sm:text-6xl font-bold mb-4"
                            >
                                {t(`home.hero.slides.${currentSlide}.title`)}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-lg sm:text-2xl mb-8 text-gray-200"
                            >
                                {t(`home.hero.slides.${currentSlide}.subtitle`)}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <Link
                                    href="/destinations"
                                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
                                >
                                    {t('home.hero.button')}
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}