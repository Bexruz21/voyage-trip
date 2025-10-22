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

// Конфигурация цветов для регионов
const regionConfig = {
  "Европа": {
    color: "from-blue-500 to-cyan-500",
    icon: "Globe"
  },
  "Азия": {
    color: "from-emerald-500 to-teal-500",
    icon: "Sparkles"
  },
  "Африка": {
    color: "from-amber-500 to-orange-500",
    icon: "MapPin"
  },
  "Ближний Восток": {
    color: "from-purple-500 to-pink-500",
    icon: "Star"
  },
  "Океания": {
    color: "from-cyan-500 to-blue-500",
    icon: "Sparkles"
  },
  "Австралия и Океания": {
    color: "from-green-500 to-emerald-500",
    icon: "Globe"
  },
  "Турция": {
    color: "from-red-500 to-orange-500",
    icon: "MapPin"
  }
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

  // Загрузка регионов при монтировании
  useEffect(() => {
    fetchRegions();
  }, []);

  // Загрузка регионов из API
  const fetchRegions = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API.REGIONS.LIST);
      const regionsWithConfig = response.data.map(region => ({
        ...region,
        color: regionConfig[region.name]?.color || "from-blue-500 to-cyan-500",
        icon: regionConfig[region.name]?.icon || "Globe",
        stats: { rating: parseFloat(region.rating) || 4.5 },
        // Добавляем поля для совместимости с компонентами
        region: region.name,
        bestTime: region.best_time,
        countries: region.countries_names || []
      }));
      setRegions(regionsWithConfig);
    } catch (error) {
      console.error('Error fetching regions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCountries = async (regionId) => {
    try {
      setIsLoading(true);
      const response = await axios.get(API.REGIONS.COUNTRIES(regionId));
      const countriesWithCompat = response.data.map(country => ({
        ...country,
        cities: []
      }));
      console.log(countriesWithCompat)
      setCountries(countriesWithCompat);
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCities = async (countryId) => {
    try {
      setIsLoading(true);
      const response = await axios.get(API.COUNTRIES.CITIES(countryId));
      const citiesWithCompat = response.data.map(city => ({
        ...city,
        bestTime: city.best_time,
        country: selectedCountry?.name || '',
        population: 'Не указано'
      }));
      setCities(citiesWithCompat);
    } catch (error) {
      console.error('Error fetching cities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCountryDetails = async (countryId) => {
    try {
      const response = await axios.get(API.COUNTRIES.DETAIL(countryId));
      const country = response.data;
      return {
        ...country,
        bestTime: country.best_time,
        cities: country.cities || []
      };
    } catch (error) {
      console.error('Error fetching country details:', error);
      return null;
    }
  };

  const fetchCityDetails = async (cityId) => {
    try {
      const response = await axios.get(API.CITIES.DETAIL(cityId));
      const city = response.data;
      return {
        ...city,
        bestTime: city.best_time,
        country: selectedCountry?.name || '',
        population: 'Не указано',
        detailedDescription: city.description
      };
    } catch (error) {
      console.error('Error fetching city details:', error);
      return null;
    }
  };

  useEffect(() => {
    const regionId = searchParams?.region;
    const countryId = searchParams?.country;
    const cityId = searchParams?.city;

    const restoreSelection = async () => {
      if (regionId && regions.length > 0) {
        const region = regions.find(r => r.id === parseInt(regionId));
        if (region) {
          setSelectedRegion(region);
          await fetchCountries(regionId);

          if (countryId) {
            const countryDetails = await fetchCountryDetails(countryId);
            if (countryDetails) {
              setSelectedCountry(countryDetails);
              await fetchCities(countryId);

              if (cityId) {
                const cityDetails = await fetchCityDetails(cityId);
                if (cityDetails) {
                  setSelectedCity(cityDetails);
                }
              }
            }
          }
        }
      }
    };

    restoreSelection();
  }, [searchParams, regions]);

  // --- 🧹 Сброс выбора ---
  const resetSelection = () => {
    setSelectedRegion(null);
    setSelectedCountry(null);
    setSelectedCity(null);
    setCountries([]);
    setCities([]);
    router.push('/destinations');
  };

  // --- 🗺️ Обработчики выбора ---
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
    if (countryDetails) {
      setSelectedCountry(countryDetails);
      setSelectedCity(null);
      await fetchCities(country.id);
      router.push(`/destinations?region=${selectedRegion.id}&country=${country.id}`);
    }
  };

  const handleSelectCity = async (city) => {
    const cityDetails = await fetchCityDetails(city.id);
    if (cityDetails) {
      setSelectedCity(cityDetails);
      router.push(
        `/destinations?region=${selectedRegion.id}&country=${selectedCountry.id}&city=${city.id}`
      );
    }
  };

  // Подготовка данных для CountriesGrid
  const getCountriesGridData = () => {
    if (!selectedRegion) return { region: null, countriesData: [] };

    return {
      region: {
        ...selectedRegion,
        countriesData: countries
      },
      countriesData: countries
    };
  };

  // Подготовка данных для CitiesGrid
  const getCitiesGridData = () => {
    if (!selectedCountry) return { country: null, cities: [] };

    return {
      country: {
        ...selectedCountry,
        cities: cities
      },
      cities: cities
    };
  };

  const countriesGridData = getCountriesGridData();
  const citiesGridData = getCitiesGridData();

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
            setCities([]);
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
              region={countriesGridData.region}
              onCountrySelect={handleSelectCountry}
            />
          ) : !selectedCity ? (
            <CitiesGrid
              country={citiesGridData.country}
              onCitySelect={handleSelectCity}
            />
          ) : (
            <CityDetail
              city={selectedCity}
              country={selectedCountry}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DestinationsContent;