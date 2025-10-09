import { motion } from 'framer-motion';

const destinations = [
  {
    id: 1,
    name: 'Турция',
    description: 'Мост между Европой и Азией с богатой историей, потрясающими пляжами и гостеприимными людьми. Идеальное сочетание восточной экзотики и европейского комфорта.',
    image: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXN0YW5idWx8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
    flag: '🇹🇷',
    bestTime: 'Апрель - Октябрь',
    price: 'от $450',
    cities: ['Стамбул', 'Анталия', 'Бодрум', 'Каппадокия', 'Измир'],
    highlights: ['Голубые воды Средиземного моря', 'Древние исторические памятники', 'Знаменитые базары и спа'],
    stats: {
      tours: 45,
      hotels: 1200,
      rating: 4.8
    }
  },
  {
    id: 2,
    name: 'Испания',
    description: 'Страна страсти, фламенко и архитектурных шедевров. От солнечных пляжей Коста-Брава до величественных соборов и музеев мирового уровня.',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
    flag: '🇪🇸',
    bestTime: 'Май - Июнь, Сентябрь - Октябрь',
    price: 'от $520',
    cities: ['Барселона', 'Мадрид', 'Севилья', 'Валенсия', 'Майорка'],
    highlights: ['Архитектура Гауди', 'Пляжи Коста-дель-Соль', 'Вкуснейшая паэлья и тапас'],
    stats: {
      tours: 38,
      hotels: 980,
      rating: 4.9
    }
  },
  {
    id: 3,
    name: 'Греция',
    description: 'Колыбель западной цивилизации с божественными пейзажами и кристально чистыми водами. Острова с белоснежными домами и древние руины, говорящие о великом прошлом.',
    image: 'https://avatars.mds.yandex.net/get-vertis-journal/4212087/1_glavnoe_foto.jpg_1694099669516/orig',
    flag: '🇬🇷',
    bestTime: 'Апрель - Июнь, Сентябрь - Октябрь',
    price: 'от $580',
    cities: ['Санторини', 'Афины', 'Крит', 'Миконос', 'Родос'],
    highlights: ['Легендарные закаты Санторини', 'Акрополь и древние храмы', 'Кристальные воды Эгейского моря'],
    stats: {
      tours: 42,
      hotels: 1100,
      rating: 4.7
    }
  },
  {
    id: 4,
    name: 'Италия',
    description: 'Страна искусства, моды и самой вкусной кухни в мире. От романтических каналов Венеции до величественного Колизея и живописных тосканских пейзажей.',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600',
    flag: '🇮🇹',
    bestTime: 'Апрель - Июнь, Сентябрь - Октябрь',
    price: 'от $620',
    cities: ['Рим', 'Венеция', 'Флоренция', 'Милан', 'Неаполь'],
    highlights: ['Колизей и римские руины', 'Венецианские каналы', 'Сицилийская кухня и вина'],
    stats: {
      tours: 51,
      hotels: 1350,
      rating: 4.8
    }
  },
  {
    id: 5,
    name: 'Франция',
    description: 'Страна романтики, изысканной кухни и высокой моды. От сияющих огней Парижа до солнечных виноградников Прованса и заснеженных вершин Альп.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWlmZmVsfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
    flag: '🇫🇷',
    bestTime: 'Апрель - Июнь, Сентябрь - Октябрь',
    price: 'от $680',
    cities: ['Париж', 'Ницца', 'Марсель', 'Лион', 'Бордо'],
    highlights: ['Эйфелева башня и Лувр', 'Лазурный берег', 'Шампань и бургундские вина'],
    stats: {
      tours: 36,
      hotels: 920,
      rating: 4.9
    }
  },
  {
    id: 6,
    name: 'ОАЭ',
    description: 'Современное чудо в сердце пустыни. Футуристические небоскребы, роскошные торговые центры и традиционные восточные базары в уникальном сочетании.',
    image: 'https://a.travelcdn.mts.ru/travel-media/OAE_Zaglavnaya_c0b03a8f5b.webp',
    flag: '🇦🇪',
    bestTime: 'Октябрь - Апрель',
    price: 'от $720',
    cities: ['Дубай', 'Абу-Даби', 'Шарджа', 'Аджман'],
    highlights: ['Бурдж-Халифа - самое высокое здание', 'Роскошные пляжи Персидского залива', 'Экскурсии по пустыне на джипах'],
    stats: {
      tours: 28,
      hotels: 850,
      rating: 4.8
    }
  }
];

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

export function ToursSection({ onExploreAll }) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">направления</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Откройте для себя самые захватывающие уголки планеты. Каждая страна - это уникальная история, 
            наполненная культурой, природными красотами и незабываемыми впечатлениями.
          </p>
        </motion.div>

        {/* Список направлений */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Текстовая информация */}
              <div className="flex-1 space-y-6">
                {/* Заголовок и флаг */}
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-4xl font-bold text-gray-900">{destination.name}</h3>
                </div>

                {/* Описание */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {destination.description}
                </p>

                {/* Основные моменты */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-gray-900">Что вас ждет:</h4>
                  <ul className="space-y-2">
                    {destination.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Популярные города */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-gray-900">Популярные города:</h4>
                  <div className="flex flex-wrap gap-3">
                    {destination.cities.map((city, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:border-cyan-300 hover:shadow-md transition-all duration-300"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Статистика и цена */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">{destination.stats.tours}</div>
                    <div className="text-sm text-gray-500">Туров</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{destination.stats.hotels}+</div>
                    <div className="text-sm text-gray-500">Отелей</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">{destination.stats.rating}</div>
                    <div className="text-sm text-gray-500">Рейтинг</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold  text-green-600">{destination.price}</div>
                    <div className="text-sm text-gray-500">Стоимость</div>
                  </div>
                </div>

                {/* Лучшее время для посещения */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-4 border border-cyan-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-cyan-600">📅</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Лучшее время для посещения</div>
                      <div className="text-cyan-700">{destination.bestTime}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Изображение */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl group"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-[550px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Эффект наведения */}
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                      <div className="text-lg font-semibold">Идеальный тур в {destination.name}</div>
                      <div className="text-sm opacity-90">Подберем индивидуальную программу</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Готовы к незабываемому путешествию?</h3>
            <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
              Наша команда экспертов поможет подобрать идеальный тур именно для вас. 
              Откройте мир с комфортом и уверенностью.
            </p>
            <button
              onClick={onExploreAll}
              className="bg-white text-cyan-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Исследовать все направления
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}