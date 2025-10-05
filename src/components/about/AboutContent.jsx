'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '../HeroSection';
import { StatsSection } from './StatsSection';
import { MissionGoalsSection } from './MissionGoalsSection';
import { ValuesSection } from './ValuesSection';
import { TeamSection } from './TeamSection';
import { CTASection } from './CTASection';

function AboutContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="relative z-10">
        <HeroSection isClient={isClient} page="about" />
        <StatsSection isClient={isClient} />
        <MissionGoalsSection isClient={isClient} />
        <ValuesSection isClient={isClient} />
        <TeamSection
          isClient={isClient}
        />
        <CTASection isClient={isClient} />
      </div>
    </div>
  );
}

export default AboutContent;