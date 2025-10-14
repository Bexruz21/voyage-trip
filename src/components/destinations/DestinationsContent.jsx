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

  // --- 🧭 Читаем параметры из URL и восстанавливаем выбор ---
  useEffect(() => {
    const regionId = unwrappedSearchParams?.region;
    const countryId = unwrappedSearchParams?.country;
    const cityId = unwrappedSearchParams?.city;

    if (regionId) {
      const region = regions.find(r => r.id === parseInt(regionId));
      if (region) {
        setSelectedRegion(region);

        if (countryId) {
          const country = region.countries.find(c => c.id === parseInt(countryId));
          if (country) {
            setSelectedCountry(country);

            if (cityId) {
              const city = country.cities.find(ct => ct.id === parseInt(cityId));
              if (city) {
                setSelectedCity(city);
              }
            }
          }
        }
      }
    }
  }, [unwrappedSearchParams]);

  // --- ⚡ Эффект загрузки при смене выбора ---
  useEffect(() => {
    if (selectedRegion || selectedCountry || selectedCity) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [selectedRegion, selectedCountry, selectedCity]);

  // --- 🧹 Сброс выбора ---
  const resetSelection = () => {
    setSelectedRegion(null);
    setSelectedCountry(null);
    setSelectedCity(null);
    router.push('/destinations');
  };

  // --- 🗺️ Обработчики выбора ---
  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
    setSelectedCountry(null);
    setSelectedCity(null);
    router.push(`/destinations?region=${region.id}`);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setSelectedCity(null);
    router.push(`/destinations?region=${selectedRegion.id}&country=${country.id}`);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    router.push(
      `/destinations?region=${selectedRegion.id}&country=${selectedCountry.id}&city=${city.id}`
    );
  };

  const handleExploreAll = () => {
    resetSelection();
    router.push('/destinations');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100">
      {/* Hero Section */}
      <HeroSection
        selectedRegion={selectedRegion}
        selectedCountry={selectedCountry}
        selectedCity={selectedCity}
      />

      {/* Overlay Loading */}
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
            router.push(`/destinations?region=${selectedRegion?.id}`);
          }}
          onCountryClick={() => {
            setSelectedCity(null);
            router.push(
              `/destinations?region=${selectedRegion?.id}&country=${selectedCountry?.id}`
            );
          }}
        />

        <AnimatePresence mode="wait">
          {!selectedRegion ? (
            <RegionsGrid
              regions={regions}
              onRegionSelect={handleSelectRegion}
            />
          ) : !selectedCountry ? (
            <CountriesGrid
              region={selectedRegion}
              onCountrySelect={handleSelectCountry}
            />
          ) : !selectedCity ? (
            <CitiesGrid
              country={selectedCountry}
              onCitySelect={handleSelectCity}
            />
          ) : (
            <CityDetail city={selectedCity} country={selectedCountry} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DestinationsContent;
