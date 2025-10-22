'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { HeroSection } from './HeroSection';
import { Breadcrumbs } from './Breadcrumbs';
import { LoadingOverlay } from './LoadingOverlay';
import { RegionsGrid } from './RegionsGrid';
import { CountriesGrid } from './CountriesGrid';
import { CitiesGrid } from './CitiesGrid';
import { CityDetail } from './CityDetail';
import axios from 'axios';
import { API } from '@/config/api';

const regionConfig = {
  "Европа": { color: "from-blue-500 to-cyan-500", icon: "Globe" },
  "Азия": { color: "from-emerald-500 to-teal-500", icon: "Sparkles" },
  "Африка": { color: "from-amber-500 to-orange-500", icon: "MapPin" },
  "Ближний Восток": { color: "from-purple-500 to-pink-500", icon: "Star" },
  "Океания": { color: "from-cyan-500 to-blue-500", icon: "Sparkles" },
  "Австралия и Океания": { color: "from-green-500 to-emerald-500", icon: "Globe" },
  "Турция": { color: "from-red-500 to-orange-500", icon: "MapPin" },
};

function DestinationsContent({ searchParams }) {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const fetchData = async (url, transform = (data) => data) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(url);
      return transform(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRegions = () =>
    fetchData(API.REGIONS.LIST, data => data.map(region => ({
      ...region,
      color: regionConfig[region.name]?.color || "from-blue-500 to-cyan-500",
      icon: regionConfig[region.name]?.icon || "Globe",
      stats: { rating: parseFloat(region.rating) || 4.5 },
      region: region.name,
      bestTime: region.best_time,
      countries: region.countries_names || []
    }))).then(setRegions);

  const fetchCountries = (regionId) =>
    fetchData(API.REGIONS.COUNTRIES(regionId), data => data.map(c => ({ ...c, cities: [] })))
      .then(setCountries);

  const fetchCities = (countryId) =>
    fetchData(API.COUNTRIES.CITIES(countryId), data => data.map(c => ({
      ...c,
      bestTime: c.best_time,
      country: selectedCountry?.name || '',
      population: 'Не указано'
    }))).then(setCities);

  const fetchCountryDetails = (countryId) =>
    fetchData(API.COUNTRIES.DETAIL(countryId), c => ({ ...c, bestTime: c.best_time, cities: c.cities || [] }));

  const fetchCityDetails = (cityId) =>
    fetchData(API.CITIES.DETAIL(cityId), c => ({
      ...c,
      bestTime: c.best_time,
      country: selectedCountry?.name || '',
      population: 'Не указано',
      detailedDescription: c.description
    }));

  useEffect(() => {
    fetchRegions();
  }, []);

  useEffect(() => {
    const restoreSelection = async () => {
      const { region: regionId, country: countryId, city: cityId } = searchParams || {};
      if (!regions.length || !regionId) return;

      const region = regions.find(r => r.id === parseInt(regionId));
      if (!region) return;

      setSelectedRegion(region);
      await fetchCountries(regionId);

      if (countryId) {
        const country = await fetchCountryDetails(countryId);
        if (!country) return;
        setSelectedCountry(country);
        await fetchCities(countryId);

        if (cityId) {
          const city = await fetchCityDetails(cityId);
          city && setSelectedCity(city);
        }
      }
    };
    restoreSelection();
  }, [searchParams, regions]);

  const resetSelection = () => {
    setSelectedRegion(null);
    setSelectedCountry(null);
    setSelectedCity(null);
    setCountries([]);
    setCities([]);
    router.push('/destinations');
  };

  const handleSelectRegion = async (region) => {
    setSelectedRegion(region);
    setSelectedCountry(null);
    setSelectedCity(null);
    setCities([]);
    await fetchCountries(region.id);
    router.push(`/destinations?region=${region.id}`);
  };

  const handleSelectCountry = async (country) => {
    const countryDetails = await fetchCountryDetails(country.id);
    if (!countryDetails) return;
    setSelectedCountry(countryDetails);
    setSelectedCity(null);
    await fetchCities(country.id);
    router.push(`/destinations?region=${selectedRegion.id}&country=${country.id}`);
  };

  const handleSelectCity = async (city) => {
    const cityDetails = await fetchCityDetails(city.id);
    if (!cityDetails) return;
    setSelectedCity(cityDetails);
    router.push(`/destinations?region=${selectedRegion.id}&country=${selectedCountry.id}&city=${city.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100">
      <HeroSection selectedRegion={selectedRegion} selectedCountry={selectedCountry} selectedCity={selectedCity} />
      <LoadingOverlay isLoading={isLoading} />
      <div className="container mx-auto px-4 sm:px-16 py-16">
        <Breadcrumbs
          selectedRegion={selectedRegion}
          selectedCountry={selectedCountry}
          selectedCity={selectedCity}
          onReset={resetSelection}
          onRegionClick={() => handleSelectRegion(selectedRegion)}
          onCountryClick={() => handleSelectCountry(selectedCountry)}
        />

        <AnimatePresence mode="wait">
          {!selectedRegion ? (
            <RegionsGrid regions={regions} onRegionSelect={handleSelectRegion} />
          ) : !selectedCountry ? (
            <CountriesGrid region={{ ...selectedRegion, countriesData: countries }} onCountrySelect={handleSelectCountry} />
          ) : !selectedCity ? (
            <CitiesGrid country={{ ...selectedCountry, cities }} onCitySelect={handleSelectCity} />
          ) : (
            <CityDetail city={selectedCity} country={selectedCountry} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DestinationsContent;
