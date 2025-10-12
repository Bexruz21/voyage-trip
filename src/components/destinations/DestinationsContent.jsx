'use client';

import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { HeroSection } from './HeroSection';
import { Breadcrumbs } from './Breadcrumbs';
import { LoadingOverlay } from './LoadingOverlay';
import { RegionsGrid } from './RegionsGrid';
import { CountriesGrid } from './CountriesGrid';
import { CitiesGrid } from './CitiesGrid';
import { CityDetail } from './CityDetail';
import { regions } from './data/regionsData';

function DestinationsContent({ searchParams }) {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const unwrappedSearchParams = use(searchParams);

  useEffect(() => {
    const regionId = unwrappedSearchParams?.region;
    if (regionId) {
      const region = regions.find(r => r.id === parseInt(regionId));
      if (region) {
        setSelectedRegion(region);
      }
    }
  }, [unwrappedSearchParams]);

  useEffect(() => {
    if (selectedRegion || selectedCountry || selectedCity) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [selectedRegion, selectedCountry, selectedCity]);

  const resetSelection = () => {
    setSelectedRegion(null);
    setSelectedCountry(null);
    setSelectedCity(null);
    router.push('/destinations');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100">
      <HeroSection
        selectedRegion={selectedRegion}
        selectedCountry={selectedCountry}
        selectedCity={selectedCity}
      />


      <LoadingOverlay isLoading={isLoading} />

      <div className="container mx-auto px-4 sm:px-16 py-16">
        <Breadcrumbs
          selectedRegion={selectedRegion}
          selectedCountry={selectedCountry}
          selectedCity={selectedCity}
          onReset={resetSelection}
          onRegionClick={() => {
            setSelectedCountry(null);
            setSelectedCity(null);
          }}
          onCountryClick={() => setSelectedCity(null)}
        />
        <AnimatePresence mode="wait">
          {!selectedRegion ? (
            <RegionsGrid
              regions={regions}
              onRegionSelect={setSelectedRegion}
            />
          ) : !selectedCountry ? (
            <CountriesGrid
              region={selectedRegion}
              onCountrySelect={setSelectedCountry}
            />
          ) : !selectedCity ? (
            <CitiesGrid
              country={selectedCountry}
              onCitySelect={setSelectedCity}
            />
          ) : (
            <CityDetail city={selectedCity} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DestinationsContent;