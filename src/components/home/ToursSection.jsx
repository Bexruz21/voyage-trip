import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, Globe, Sparkles } from 'lucide-react';

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

export function ToursSection() {
  const router = useRouter();
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    axios.get('https://voyage-trip-api.onrender.com/api/user/regions/')
      .then(res => {
        const regionsWithConfig = res.data.map(region => ({
          ...region,
          color: regionConfig[region.name]?.color || "from-blue-500 to-cyan-500",
          icon: regionConfig[region.name]?.icon || Globe
        }));
        setRegions(regionsWithConfig);
      })
  }, []);

  const handleSelectRegion = (region) => {
    router.push(`/destinations?region=${region.id}`);
  };

  const handleExploreAll = () => {
    router.push('/destinations');
  };

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
            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">направления</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Откройте для себя самые захватывающие регионы планеты. Каждое направление - это уникальная история,
            наполненная культурой, природными красотами и незабываемыми впечатлениями.
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
            
            return (
              <motion.div
                key={region.id}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-12 items-center`}
                onClick={() => handleSelectRegion(region)}
              >
                {/* Текстовая информация */}
                <div className="flex-1 space-y-6 order-2 lg:order-1">
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-3">
                      <RegionIcon size={16} />
                      {region.name}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{region.display_name}</h3>
                    <div className={`w-20 h-1 bg-gradient-to-r ${region.color} rounded-full`}></div>
                  </div>

                  {/* Описание */}
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {region.description}
                  </p>

                  {/* Основные моменты */}
                  <div className="space-y-3">
                    <h4 className="text-lg lg:text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Sparkles size={20} />
                      Ключевые впечатления:
                    </h4>
                    <ul className="space-y-2">
                      {region.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 group">
                          <div className={`w-2 h-2 bg-gradient-to-r ${region.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                          <span className="text-sm lg:text-base group-hover:text-gray-900 transition-colors duration-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Страны региона */}
                  {region.countries_names && region.countries_names.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-lg lg:text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <MapPin size={20} />
                        Страны региона:
                      </h4>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {region.countries_names.map((country, idx) => (
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
                        {region.stats?.rating || region.rating}
                        <Star size={16} />
                      </div>
                      <div className="text-xs text-yellow-500">рейтинг</div>
                    </div>

                    <div className="inline-flex items-center gap-1 bg-cyan-50 px-3 py-1 rounded-lg border border-cyan-200">
                      <div className="text-base lg:text-lg font-bold text-cyan-600">от ${region.price}</div>
                      <div className="text-xs text-cyan-500">цена</div>
                    </div>
                  </div>

                  {/* Информация о туре */}
                  <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl lg:rounded-2xl p-4 lg:p-4 border border-blue-200`}>
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-xl lg:rounded-2xl flex items-center justify-center">
                        <Calendar size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-sm lg:text-base leading-tight">Лучшее время</div>
                        <div className="text-blue-700 font-medium text-sm lg:text-base mt-1 break-words leading-tight">
                          {region.best_time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Медиа контейнер */}
                <div className="flex-1 w-full order-1 lg:order-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl group cursor-pointer"
                  >
                    {/* Изображение */}
                    <img
                      src={region.image}
                      alt={region.display_name}
                      className="w-full h-64 lg:h-[700px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Градиентный оверлей */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Эффект наведения */}
                    <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="bg-white/20 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/30">
                        <div className="text-base lg:text-lg font-semibold">Идеальный тур в {region.name}</div>
                        <div className="text-xs lg:text-sm opacity-90 mt-1">Подберем индивидуальную программу</div>
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
              Готовы к незабываемому путешествию?
            </h3>
            <p className="text-gray-300 text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed relative z-10 px-4">
              Наша команда экспертов поможет подобрать идеальный тур именно для вас.
              Откройте мир с комфортом и уверенностью.
            </p>
            <motion.button
              onClick={handleExploreAll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg hover:shadow-2xl transition-all duration-300 relative z-10 shadow-lg"
            >
              Исследовать все направления
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}