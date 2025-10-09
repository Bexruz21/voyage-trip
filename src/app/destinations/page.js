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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Мир Вашей Мечты
            </h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Откройте для себя самые захватывающие направления планеты. 
              От древних городов до райских пляжей — ваше идеальное путешествие начинается здесь.
            </p>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-150"></div>
      </section>

      {/* Search Section */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="container mx-auto px-4 -mt-12 relative z-20"
      >
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-white/20">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
              <input
                type="text"
                placeholder="Поиск стран, городов или достопримечательностей..."
                className="w-full pl-12 pr-6 py-4 border-0 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {(selectedCountry || selectedCity) && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetSelection}
                className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Сбросить выбор
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Breadcrumbs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4 mt-8"
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
      <div className="container mx-auto px-4 py-16">
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
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl border border-white/20">
                    <div className="relative overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white font-semibold">
                        {country.flag}
                      </div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold mb-2">{country.name}</h3>
                        <p className="opacity-90 text-sm mb-3 max-w-md">{country.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span>🏙️ {country.cities.length} городов</span>
                          <span>💰 {country.currency}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">📅</span>
                          <span>Лучшее время: {country.bestTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-500">🛂</span>
                          <span>{country.visa}</span>
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="mt-4 flex items-center text-blue-600 font-semibold cursor-pointer"
                      >
                        <span>Исследовать направления</span>
                        <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
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
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                      <div className="relative overflow-hidden">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                          <p className="opacity-90 mb-3 max-w-md">{city.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span>👥 {city.population}</span>
                            <span>🏨 {city.hotels.length} отелей</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Основные достопримечательности:</h4>
                          <div className="flex flex-wrap gap-2">
                            {city.highlights.map((highlight, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center text-blue-600 font-semibold cursor-pointer"
                        >
                          <span>Смотреть отели</span>
                          <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Лучшие отели в {selectedCity.name}
                </h2>
                <p className="text-xl text-gray-600">
                  Подберите идеальное место для вашего отдыха
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {selectedCity.hotels.map((hotel) => (
                  <motion.div
                    key={hotel.id}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-2/5 relative">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold flex items-center">
                          <span>{hotel.rating}</span>
                          <span className="ml-1">★</span>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-2xl">
                          <div className="text-sm">от</div>
                          <div className="text-2xl font-bold">${hotel.price}</div>
                          <div className="text-xs">за ночь</div>
                        </div>
                      </div>
                      
                      <div className="lg:w-3/5 p-8">
                        <div className="flex flex-col h-full">
                          <div className="flex-1">
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                              <div className="mb-4 lg:mb-0">
                                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                                  {hotel.name}
                                </h3>
                                <p className="text-gray-600 mb-4 text-lg">{hotel.description}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="text-right">
                                  <div className="text-yellow-600 font-bold text-xl">{hotel.rating}/5</div>
                                  <div className="text-gray-500 text-sm">{hotel.reviews} отзывов</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">📍 Расположение</h4>
                                <p className="text-gray-600">{hotel.location}</p>
                                <p className="text-blue-600 text-sm">{hotel.distance}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">⭐ Удобства</h4>
                                <div className="flex flex-wrap gap-2">
                                  {hotel.amenities.map((amenity, index) => (
                                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                      {amenity}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-200">
                            <div className="mb-4 sm:mb-0">
                              <span className="text-3xl font-bold text-blue-600">
                                ${hotel.price}
                              </span>
                              <span className="text-gray-600 text-lg"> / ночь</span>
                              <div className="text-green-600 text-sm font-medium">Бесплатная отмена</div>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              Забронировать
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