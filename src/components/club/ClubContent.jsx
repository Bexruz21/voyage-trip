"use client"

import { HeroSection } from '../HeroSection';
import { IntroSection } from './IntroSection';
import { StatsSection } from './StatsSection';
import { TargetAudienceSection } from './TargetAudienceSection';
import { CardFeaturesSection } from './CardFeaturesSection';
import { MembershipCardsSection } from './MembershipCardsSection';
import { WhyProfitableSection } from './WhyProfitableSection';
import { CTASection } from './CTASection';

function ClubContent() {
  return (
    <>
      <HeroSection page="club" />
      <IntroSection />
      <StatsSection />
      <TargetAudienceSection />
      <CardFeaturesSection />
      <MembershipCardsSection />
      <WhyProfitableSection />
      <CTASection />
    </ >
  );
}

export default ClubContent;