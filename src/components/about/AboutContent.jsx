'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '../HeroSection';
import { StatsSection } from './StatsSection';
import { MissionGoalsSection } from './MissionGoalsSection';
import { ValuesSection } from './ValuesSection';
import { TeamSection } from './TeamSection';
import { CTASection } from './CTASection';
import { LicenseCompact } from './LicenseCompact';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <LicenseCompact isClient={isClient} />
        </div>
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