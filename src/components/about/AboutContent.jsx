'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '../HeroSection';
import { StatsSection } from './StatsSection';
import { ValuesSection } from './ValuesSection';
import { TeamSection } from './TeamSection';
import { CTASection } from './CTASection';
import { LicenseCompact } from './LicenseCompact';
import MissionGoalsSection from './MissionGoalsSection';

function AboutContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      <HeroSection page="about" />
      <StatsSection />
      <MissionGoalsSection isClient={isClient} />
      <LicenseCompact />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}

export default AboutContent;