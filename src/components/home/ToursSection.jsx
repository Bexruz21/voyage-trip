import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Calendar, Globe, Sparkles, } from 'lucide-react';
import { API } from '@/api/api';
import { useLang } from '@/context/LangContext';

const regionConfig = {
  "Европа": {
    color: "from-blue-500 to-cyan-500",
    icon: Globe
  },
  "Азия": {
    color: "from-emerald-500 to-teal-500",
    icon: Sparkles
  },
  "Африка": {
    color: "from-amber-500 to-orange-500",
    icon: MapPin
  },
  "Ближний Восток": {
    color: "from-purple-500 to-pink-500",
    icon: Star
  },
  "Океания": {
    color: "from-cyan-500 to-blue-500",
    icon: Sparkles
  },
  "Австралия и Океания": {
    color: "from-green-500 to-emerald-500",
    icon: Globe
  },
  "Турция": {
    color: "from-red-500 to-orange-500",
    icon: MapPin
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};

export function ToursSection() {
  const router = useRouter();
  const [regions, setRegions] = useState([]);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const intervalRefs = useRef({});
  const { t, lang } = useLang();

  useEffect(() => {
    axios.get(API.REGIONS.LIST)
      .then(res => {
        console.log(res.data)
        const regionsWithConfig = res.data.map(region => ({
          ...region,
          color: regionConfig[region.name[lang]]?.color || "from-blue-500 to-cyan-500",
          icon: regionConfig[region.name[lang]]?.icon || Globe
        }));

        const initialIndexes = {};
        regionsWithConfig.forEach(region => {
          if (region.images && region.images.length > 0) {
            initialIndexes[region.id] = 0;
          }
        });
        setCurrentImageIndexes(initialIndexes);
        setRegions(regionsWithConfig);
      })
  }, []);

  useEffect(() => {
    regions.forEach(region => {
      if (region.images && region.images.length > 1) {
        startAutoSlide(region.id, region.images.length);
      }
    });

    return () => {
      Object.values(intervalRefs.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, [regions]);

  const startAutoSlide = (regionId, imageCount) => {
    if (intervalRefs.current[regionId]) {
      clearInterval(intervalRefs.current[regionId]);
    }

    intervalRefs.current[regionId] = setInterval(() => {
      setCurrentImageIndexes(prev => ({
        ...prev,
        [regionId]: (prev[regionId] + 1) % imageCount
      }));
    }, 5000);
  };


  const handleSelectRegion = (region) => {
    router.push(`/destinations/${region.id}`);
  };

  const handleExploreAll = () => {
    router.push('/destinations');
  };

  const getCountriesNames = (countries) => {
    if (!countries || !Array.isArray(countries)) return [];
    return countries.map(country => country.name[lang]);
  };

  if (!regions.length) return <></>

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {t('home.tours.title').split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('home.tours.title').split(' ')[1]}</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {t('home.tours.subtitle')}
          </p>
        </motion.div>

        {/* Список регионов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 lg:space-y-24"
        >
          {regions.map((region, index) => {
            const RegionIcon = region.icon;
            const countriesNames = getCountriesNames(region.countries);
            const hasImages = region.images && region.images.length > 0;
            const currentIndex = currentImageIndexes[region.id] || 0;

            return (
              <motion.div
                key={region.id}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-12 items-center`}
              >
                {/* Текстовая информация */}
                <div className="flex-1 space-y-6 order-2 lg:order-1">
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-3">
                      <RegionIcon size={16} />
                      {region.name[lang]}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{region.display_name[lang]}</h3>
                    <div className={`w-20 h-1 bg-gradient-to-r ${region.color} rounded-full`}></div>
                  </div>

                  {/* Описание */}
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {region.description[lang]}
                  </p>

                  {/* Основные моменты */}
                  <div className="space-y-3">
                    <h4 className="text-lg lg:text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Sparkles size={20} />
                      {t('home.tours.highlights')}
                    </h4>
                    <ul className="space-y-2">
                      {region.highlights[lang]?.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 group">
                          <div className={`w-2 h-2 bg-gradient-to-r ${region.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                          <span className="text-sm lg:text-base group-hover:text-gray-900 transition-colors duration-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Страны региона */}
                  {countriesNames && countriesNames.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-lg lg:text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <MapPin size={20} />
                        {t('home.tours.countries')}
                      </h4>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {countriesNames.map((country, idx) => (
                          <span
                            key={idx}
                            className="px-3 lg:px-4 py-1 lg:py-2 bg-white border border-gray-200 rounded-lg lg:rounded-xl text-gray-700 font-medium hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-sm lg:text-base"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Статистика и цена */}
                  <div className="flex flex-wrap items-center gap-3 lg:gap-4 pt-4">
                    <div className="inline-flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-200">
                      <div className="text-base lg:text-lg font-bold text-yellow-600 flex items-center gap-1">
                        {region.rating}
                        <Star size={16} />
                      </div>
                      <div className="text-xs text-yellow-500">{t('home.tours.rating')}</div>
                    </div>

                    <div className="inline-flex items-center gap-1 bg-cyan-50 px-3 py-1 rounded-lg border border-cyan-200">
                      <div className="text-base lg:text-lg font-bold text-cyan-600">{t('home.tours.price_start') != 'home.tours.price_start' ? t('home.tours.price_start') : ''} ${region.price} {t('home.tours.priceAfter') != 'home.tours.priceAfter' ? t('home.tours.priceAfter') : ''}</div>
                      <div className="text-xs text-cyan-500">{t('home.tours.price')}</div>
                    </div>
                  </div>

                  {/* Информация о туре */}
                  <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl lg:rounded-2xl p-4 lg:p-4 border border-blue-200`}>
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-xl lg:rounded-2xl flex items-center justify-center">
                        <Calendar size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-sm lg:text-base leading-tight">{t('home.tours.bestTime')}</div>
                        <div className="text-blue-700 font-medium text-sm lg:text-base mt-1 break-words leading-tight">
                          {region.best_time[lang]}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Кнопка выбора региона */}
                  <motion.button
                    onClick={() => handleSelectRegion(region)}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full bg-gradient-to-r ${region.color} text-white px-6 py-3 rounded-xl font-bold text-base hover:shadow-xl transition-all duration-300`}
                  >
                    {t('home.tours.selectTour')} {region.name[lang]}
                  </motion.button>
                </div>

                {/* Медиа контейнер с каруселью */}
                <div className="flex-1 w-full order-1 lg:order-2" onClick={() => handleSelectRegion(region)}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl group cursor-pointer"
                  >
                    <div className="relative w-full h-64 lg:h-[700px] overflow-hidden">
                      <AnimatePresence mode="sync">
                        {hasImages ? (
                          <motion.img
                            key={currentIndex}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            src={region.images[currentIndex]}
                            alt={`${region.display_name[lang]} - изображение ${currentIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <motion.div
                            key="no-image"
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                          >
                            <div className="text-gray-500 text-lg font-medium">
                              {t('home.tours.noImage')}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all z-10">
                        <div className="bg-white/20 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/30">
                          <div className="text-base lg:text-lg font-semibold">{t('home.tours.idealTour')} {region.name[lang]}</div>
                          <div className="text-xs lg:text-sm opacity-90 mt-1">{t('home.tours.customProgram')}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 lg:w-32 lg:h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 lg:w-48 lg:h-48 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

            <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 relative z-10">
              {t('home.tours.ctaTitle')}
            </h3>
            <p className="text-gray-300 text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed relative z-10 px-4">
              {t('home.tours.ctaText')}
            </p>
            <motion.button
              onClick={handleExploreAll}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg hover:shadow-2xl relative z-10 shadow-lg"
            >
              {t('home.tours.exploreAll')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}