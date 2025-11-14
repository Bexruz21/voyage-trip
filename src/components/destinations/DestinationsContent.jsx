'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { HeroSection } from './HeroSection';
import { Breadcrumbs } from './Breadcrumbs';
import { LoadingOverlay } from './LoadingOverlay';
import { RegionsGrid } from './regions/RegionsGrid';
import { CountriesGrid } from './countries/CountriesGrid';
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
  const [isInitialized, setIsInitialized] = useState(false);

  const fetchData = async (url, transform = (data) => data) => {
    try {
      setIsLoading(true);
      console.log('Fetching from:', url);
      const { data } = await axios.get(url);
      console.log('Raw response:', data);
      
      const resultData = Array.isArray(data) ? data : (data.results || data);
      return Array.isArray(resultData) ? resultData.map(transform) : [transform(resultData)];
    } catch (error) {
      console.error('Error fetching data from:', url, error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRegions = () =>
    fetchData(API.REGIONS.LIST, region => ({
      ...region,
      color: regionConfig[region.name]?.color || "from-blue-500 to-cyan-500",
      icon: regionConfig[region.name]?.icon || "Globe",
      stats: { rating: parseFloat(region.rating) || 4.5 },
      region: region.display_name || region.name,
      bestTime: region.best_time,
      countries: region.countries || [],
      countries_names: region.countries?.map(c => c.name) || []
    }));

  const fetchCountries = (regionId) =>
    fetchData(API.REGIONS.COUNTRIES(regionId), country => ({ 
      ...country, 
      cities: [] 
    }));

  const fetchCities = (countryId) =>
    fetchData(API.COUNTRIES.CITIES(countryId), city => ({
      ...city,
      bestTime: city.best_time,
      country: selectedCountry?.name || '',
      population: 'Не указано'
    }));

  const fetchCountryDetails = async (countryId) => {
    const data = await fetchData(API.COUNTRIES.DETAIL(countryId), country => ({
      ...country,
      bestTime: country.best_time,
      cities: country.cities || []
    }));
    return data && data.length > 0 ? data[0] : null;
  };

  const fetchCityDetails = async (cityId) => {
    const data = await fetchData(API.CITIES.DETAIL(cityId), city => ({
      ...city,
      bestTime: city.best_time,
      country: selectedCountry?.name || '',
      population: 'Не указано',
      detailedDescription: city.description
    }));
    return data && data.length > 0 ? data[0] : null;
  };

  // Восстановление состояния из URL параметров
  useEffect(() => {
    const restoreStateFromURL = async () => {
      const { region: regionId, country: countryId, city: cityId } = searchParams || {};
      console.log('Restoring from URL:', { regionId, countryId, cityId });

      if (!regionId) {
        // Если нет параметров - показываем список регионов
        setIsInitialized(true);
        return;
      }

      setIsLoading(true);

      try {
        // 1. Загружаем регионы если еще не загружены
        if (regions.length === 0) {
          const regionsData = await fetchRegions();
          setRegions(regionsData);
        }

        // 2. Восстанавливаем регион
        let region;
        if (regions.length > 0) {
          region = regions.find(r => r.id === parseInt(regionId));
        } else {
          // Если регионы еще не загружены, загружаем конкретный регион
          const regionData = await fetchData(`${API.REGIONS.LIST}?id=${regionId}`, region => ({
            ...region,
            color: regionConfig[region.name]?.color || "from-blue-500 to-cyan-500",
            icon: regionConfig[region.name]?.icon || "Globe",
            stats: { rating: parseFloat(region.rating) || 4.5 },
            region: region.display_name || region.name,
            bestTime: region.best_time,
            countries: region.countries || [],
            countries_names: region.countries?.map(c => c.name) || []
          }));
          region = regionData && regionData.length > 0 ? regionData[0] : null;
        }

        if (!region) {
          console.error('Region not found:', regionId);
          setIsInitialized(true);
          return;
        }

        setSelectedRegion(region);

        // 3. Загружаем страны региона
        const countriesData = await fetchCountries(regionId);
        setCountries(countriesData);

        if (!countryId) {
          // Если есть только регион - показываем страны
          setIsInitialized(true);
          return;
        }

        // 4. Восстанавливаем страну
        const country = await fetchCountryDetails(countryId);
        if (!country) {
          console.error('Country not found:', countryId);
          setIsInitialized(true);
          return;
        }

        setSelectedCountry(country);

        // 5. Загружаем города страны
        const citiesData = await fetchCities(countryId);
        setCities(citiesData);

        if (!cityId) {
          // Если есть регион и страна - показываем города
          setIsInitialized(true);
          return;
        }

        // 6. Восстанавливаем город
        const city = await fetchCityDetails(cityId);
        if (!city) {
          console.error('City not found:', cityId);
          setIsInitialized(true);
          return;
        }

        setSelectedCity(city);
        
      } catch (error) {
        console.error('Error restoring state from URL:', error);
      } finally {
        setIsInitialized(true);
        setIsLoading(false);
      }
    };

    if (!isInitialized) {
      restoreStateFromURL();
    }
  }, [searchParams, isInitialized, regions]);

  // Первоначальная загрузка регионов
  useEffect(() => {
    if (!isInitialized && regions.length === 0) {
      fetchRegions().then(data => {
        setRegions(data);
        setIsInitialized(true);
      });
    }
  }, [isInitialized, regions.length]);

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
    const countriesData = await fetchCountries(region.id);
    setCountries(countriesData);
    router.push(`/destinations?region=${region.id}`);
  };

  const handleSelectCountry = async (country) => {
    const countryDetails = await fetchCountryDetails(country.id);
    if (!countryDetails) return;
    setSelectedCountry(countryDetails);
    setSelectedCity(null);
    const citiesData = await fetchCities(country.id);
    setCities(citiesData);
    router.push(`/destinations?region=${selectedRegion.id}&country=${country.id}`);
  };

  const handleSelectCity = async (city) => {
    const cityDetails = await fetchCityDetails(city.id);
    if (!cityDetails) return;
    setSelectedCity(cityDetails);
    router.push(`/destinations?region=${selectedRegion.id}&country=${selectedCountry.id}&city=${city.id}`);
  };

  // Показываем loading пока не инициализированы
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100">
        <LoadingOverlay isLoading={true} />
      </div>
    );
  }

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
          onRegionClick={() => handleSelectRegion(selectedRegion)}
          onCountryClick={() => handleSelectCountry(selectedCountry)}
        />

        <AnimatePresence mode="wait">
          {!selectedRegion ? (
            <RegionsGrid regions={regions} onRegionSelect={handleSelectRegion} />
          ) : !selectedCountry ? (
            <CountriesGrid 
              region={{ ...selectedRegion, countriesData: countries }} 
              onCountrySelect={handleSelectCountry} 
            />
          ) : !selectedCity ? (
            <CitiesGrid 
              country={{ ...selectedCountry, cities }} 
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