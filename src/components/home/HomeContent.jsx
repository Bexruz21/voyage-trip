'use client';

import { useState, useEffect } from 'react';
import { HeroSlider } from './HeroSlider';
import { FeaturesSection } from './FeaturesSection';
import { CategoriesSection } from './CategoriesSection';
import { ToursSection } from './ToursSection';
import { AdvantagesSection } from './AdvantagesSection';
import { AboutSection } from './AboutSection';
import { CTASection } from './CTASection';

function HomeContent() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [favoriteTours, setFavoriteTours] = useState(new Set());
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">            
            <div className="relative z-10">
                <HeroSlider isClient={isClient} />
                <FeaturesSection isClient={isClient} />
                <CategoriesSection 
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />
                <ToursSection 
                    isClient={isClient}
                    selectedCategory={selectedCategory}
                    favoriteTours={favoriteTours}
                    onToggleFavorite={toggleFavorite}
                />
                <AdvantagesSection />
                <AboutSection />
                <CTASection />
            </div>
        </div>
    );
}

export default HomeContent;