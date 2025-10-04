'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { IntroSection } from './IntroSection';
import { StatsSection } from './StatsSection';
import { TargetAudienceSection } from './TargetAudienceSection';
import { CardFeaturesSection } from './CardFeaturesSection';
import { MembershipCardsSection } from './MembershipCardsSection';
import { WhyProfitableSection } from './WhyProfitableSection';
import { CTASection } from './CTASection';

function ClubContent() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isJoining, setIsJoining] = useState(false);
  const [joinStatus, setJoinStatus] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleJoinClub = async (planId) => {
    setIsJoining(true);
    setSelectedPlan(planId);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setJoinStatus('success');
    setIsJoining(false);

    setTimeout(() => setJoinStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-orange-50 relative overflow-hidden">
      
      <div className="relative z-10">
        <HeroSection isClient={isClient} />
        <IntroSection />
        <StatsSection isClient={isClient} />
        <TargetAudienceSection isClient={isClient} />
        <CardFeaturesSection isClient={isClient} />
        <MembershipCardsSection 
          isClient={isClient}
          isJoining={isJoining}
          selectedPlan={selectedPlan}
          joinStatus={joinStatus}
          onJoinClick={handleJoinClub}
        />
        <WhyProfitableSection />
        <CTASection isClient={isClient} />
      </div>
    </div>
  );
}

export default ClubContent;