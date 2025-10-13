'use client';

import { HeroSlider } from './HeroSlider';
import { FeaturesSection } from './FeaturesSection';
import { ToursSection } from './ToursSection';
import { AdvantagesSection } from './AdvantagesSection';
import { AboutSection } from './AboutSection';
import { CTASection } from './CTASection';

function HomeContent() {
    return (
        <>
            <HeroSlider />
            <FeaturesSection />
            <ToursSection />
            <AdvantagesSection />
            <AboutSection />
            <CTASection />
        </>
    );
}

export default HomeContent;