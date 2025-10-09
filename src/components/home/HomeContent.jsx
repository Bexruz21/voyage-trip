'use client';

import { useState, useEffect } from 'react';
import { HeroSlider } from './HeroSlider';
import { FeaturesSection } from './FeaturesSection';
import { ToursSection } from './ToursSection';
import { AdvantagesSection } from './AdvantagesSection';
import { AboutSection } from './AboutSection';
import { CTASection } from './CTASection';

function HomeContent() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
            <div className="relative z-10">
                <HeroSlider isClient={isClient} />
                <FeaturesSection isClient={isClient} />
                <ToursSection
                    isClient={isClient}
                />
                <AdvantagesSection />
                <AboutSection />
                <CTASection />
            </div>
        </div>
    );
}

export default HomeContent;