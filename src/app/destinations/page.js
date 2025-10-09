'use client'

// pages/directions.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { countriesData } from './mock';

const DirectionsPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedCountry || selectedCity) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [selectedCountry, selectedCity]);

  const filteredCountries = countriesData.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.cities.some(city =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const resetSelection = () => {
    setSelectedCountry(null);
    setSelectedCity(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 overflow-hidden">
        {/* Морской фон с волнами */}
        <div className="absolute inset-0">
          {/* Верхние волны */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-200/30 to-transparent"></div>

          {/* Морские акценты */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-sky-200/25 rounded-full blur-3xl"></div>

          {/* Нижние волны */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Главный заголовок */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Путешествия
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-700 via-gray-600 to-slate-800 bg-clip-text text-transparent">
                Премиум Класса
              </span>
            </motion.h1>

            {/* Описание */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Бронируйте эксклюзивные туры по всему миру
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              От индивидуальных маршрутов до готовых путешествий — ваш идеальный отдых начинается с бронирования
            </motion.p>
          </motion.div>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute bottom-10 left-10 w-8 h-8 bg-cyan-300/30 rounded-full"></div>
        <div className="absolute top-20 right-16 w-12 h-12 bg-blue-200/40 rounded-full"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-sky-300/50 rounded-full"></div>
      </section>


      {/* Breadcrumbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4 sm:px-16 mt-16"
      >
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={resetSelection}
            className="hover:text-blue-600 transition-colors font-medium"
          >
            Все страны
          </motion.button>
          {selectedCountry && (
            <>
              <span className="text-blue-400">›</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCity(null)}
                className="hover:text-blue-600 transition-colors font-medium"
              >
                {selectedCountry.name}
              </motion.button>
            </>
          )}
          {selectedCity && (
            <>
              <span className="text-blue-400">›</span>
              <span className="text-blue-600 font-semibold">{selectedCity.name}</span>
            </>
          )}
        </div>
      </motion.div>

      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium">Загружаем направления...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-16 py-16">
        <AnimatePresence mode="wait">
          {!selectedCountry ? (
            // Countries Grid
            <motion.div
              key="countries"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredCountries.map((country) => (
                <motion.div
                  key={country.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCountry(country)}
                >
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-cyan-100">
                    <div className="relative overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white font-semibold border border-white/30">
                        {country.flag}
                      </div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                        <p className="opacity-90 text-sm mb-3 max-w-md leading-relaxed">{country.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{country.cities.length} городов</span>
                          </div>
                          <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                            <span>{country.currency}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-xs">Лучшее время: {country.bestTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span className="text-xs">{country.visa}</span>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="mt-6 flex items-center justify-between p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 cursor-pointer group"
                      >
                        <span className="text-cyan-700 font-semibold text-sm">Исследовать направления</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-cyan-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : !selectedCity ? (
            // Cities Grid
            <motion.div
              key="cities"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Города {selectedCountry.name}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Откройте для себя уникальные города этой удивительной страны
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {selectedCountry.cities.map((city) => (
                  <motion.div
                    key={city.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedCity(city)}
                  >
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-cyan-100">
                      <div className="relative overflow-hidden">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                          <p className="opacity-90 mb-3 max-w-md leading-relaxed">{city.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span>{city.population}</span>
                            </div>
                            <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              <span>{city.hotels.length} отелей</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Основные достопримечательности:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {city.highlights.map((highlight, index) => (
                              <span
                                key={index}
                                className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-3 py-2 rounded-xl text-sm border border-cyan-100 font-medium"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100 cursor-pointer group"
                        >
                          <span className="text-emerald-700 font-semibold text-sm">Смотреть отели</span>
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4 text-emerald-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            // Hotels List
            <motion.div
              key="hotels"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Лучшие отели в {selectedCity.name}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Подберите идеальное место для вашего отдыха
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-8"
              >
                {selectedCity.hotels.map((hotel) => (
                  <motion.div
                    key={hotel.id}
                    variants={itemVariants}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-gray-100 group"
                  >
                    <div className="flex flex-col xl:flex-row h-full">
                      {/* Изображение отеля - контейнер с фиксированной высотой */}
                      <div className="xl:w-2/5 relative flex-shrink-0">
                        <div className="relative h-80 xl:h-full xl:min-h-96 overflow-hidden">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                      </div>

                      {/* Информация об отеле */}
                      <div className="xl:w-3/5 p-6 md:p-8 flex flex-col">
                        {/* Заголовок и рейтинг */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                          <div className="mb-4 md:mb-0 flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                              {hotel.name}
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                              {hotel.description}
                            </p>

                            {/* Рейтинг для мобильных */}
                            <div className="flex items-center md:hidden bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl px-4 py-3">
                              <div className="flex items-center space-x-2">
                                <div className="text-amber-600 font-bold text-xl flex items-center">
                                  {hotel.rating}
                                  <svg className="w-5 h-5 ml-1 fill-current text-amber-500" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Рейтинг для десктопа */}
                          <div className="hidden md:flex flex-col items-end bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl px-6 py-4">
                            <div className="text-amber-600 font-bold text-2xl flex items-center">
                              {hotel.rating}
                              <svg className="w-6 h-6 ml-1 fill-current text-amber-500" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Расположение и удобства */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              Расположение
                            </h4>
                            <p className="text-gray-700 text-sm md:text-base mb-2 font-medium">{hotel.location}</p>
                            <p className="text-blue-600 text-sm font-semibold">{hotel.distance}</p>
                          </div>

                          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                              </svg>
                              Удобства
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {hotel.amenities.slice(0, 4).map((amenity, index) => (
                                <span
                                  key={index}
                                  className="bg-white/80 text-emerald-700 px-3 py-2 rounded-xl text-sm border border-emerald-200 font-medium backdrop-blur-sm"
                                >
                                  {amenity}
                                </span>
                              ))}
                              {hotel.amenities.length > 4 && (
                                <span className="bg-white/80 text-gray-600 px-3 py-2 rounded-xl text-sm border border-gray-200 font-medium backdrop-blur-sm">
                                  +{hotel.amenities.length - 4}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Цена и кнопка бронирования - прижимаем к низу */}
                        <div className="mt-auto pt-6 border-t border-gray-200">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                            <div className="text-center sm:text-left">
                              <div className="flex items-baseline justify-center sm:justify-start space-x-2">
                                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                  ${hotel.price}
                                </span>
                                <span className="text-gray-500 text-lg">/ ночь</span>
                              </div>
                              <div className="text-green-600 text-sm font-semibold flex items-center justify-center sm:justify-start mt-2">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Бесплатная отмена • Бесплатный WiFi
                              </div>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ duration: 0.3 }}
                              className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white rounded-2xl shadow-xl transition-all
             bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl group"
                            >
                              <span className="flex items-center justify-center gap-2">
                                Забронировать
                                <svg
                                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5m5-5H6" />
                                </svg>
                              </span>
                            </motion.button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredCountries.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 text-8xl mb-6">🌍</div>
            <h3 className="text-3xl font-bold text-gray-600 mb-4">Ничего не найдено</h3>
            <p className="text-gray-500 text-lg mb-8">
              Попробуйте изменить поисковый запрос или выберите другое направление
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setSearchTerm('')}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold"
            >
              Сбросить поиск
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DirectionsPage;