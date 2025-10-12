import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Иконки
const MapPin = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const Star = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
const Calendar = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const Clock = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Globe = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Sparkles = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;

const regions = [
  {
    id: 1,
    region: "Европа",
    name: "Европейская классика",
    description: 'От романтических улочек Парижа до величественных альпийских пейзажей. Европа - это многовековая история, искусство и культура, воплощенные в самых красивых городах мира. Исследуйте старинные замки, наслаждайтесь изысканной кухней и погрузитесь в атмосферу настоящей европейской сказки.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['Франция', 'Италия', 'Испания', 'Германия', 'Австрия', 'Швейцария', 'Греция'],
    highlights: ['Париж - город любви и моды', 'Венеция - романтика на воде', 'Барселона - архитектура Гауди', 'Альпы - горнолыжные курорты'],
    stats: {
      rating: 4.9
    },
    price: 'от €550',
    bestTime: 'Апрель - Июнь, Сентябрь - Октябрь',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    region: "Азия",
    name: "Тайны Востока",
    description: 'Загадочные храмы, древние традиции и современные мегаполисы Азии. От сакур Японии до тропических пляжей Таиланда. Погрузитесь в мир контрастов, где ультрасовременные технологии соседствуют с тысячелетними традициями.',
    image: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
    countries: ['Япония', 'Таиланд', 'Вьетнам', 'Китай', 'Южная Корея', 'Сингапур', 'Малайзия'],
    highlights: ['Токио - город будущего', 'Бали - тропический рай', 'Великая Китайская стена', 'Храмы Ангкор-Ват'],
    stats: {
      rating: 4.8
    },
    price: 'от $780',
    bestTime: 'Октябрь - Апрель',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 3,
    region: "Африка",
    name: "Дикая и роскошная Африка",
    description: 'Сафари по бескрайним саваннам, закаты над пустыней Сахара и роскошные лоджи с видом на дикую природу. Африка - это адреналин сафари, пляжи Занзибара и уникальная культура племен. Незабываемые приключения ждут вас!',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    countries: ['Кения', 'Танзания', 'ЮАР', 'Марокко', 'Египет', 'Намибия', 'Сейшелы'],
    highlights: ['Сафари в Серенгети', 'Пирамиды Гизы', 'Мыс Доброй Надежды', 'Роскошные лоджи'],
    stats: {
      rating: 4.7
    },
    price: 'от $1200',
    bestTime: 'Июнь - Октябрь',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 4,
    region: "Ближний Восток",
    name: "Современные чудеса Востока",
    description: 'Футуристические небоскребы, золотые пустыни и восточная роскошь. Ближний Восток - это уникальное сочетание древних традиций и ультрасовременных технологий. От роскошных моллов Дубая до исторических памятников Иордании.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['ОАЭ', 'Катар', 'Оман', 'Иордания', 'Саудовская Аравия', 'Бахрейн'],
    highlights: ['Бурдж-Халифа в Дубае', 'Петра - розовый город', 'Пустынные сафари', 'Роскошные спа-курорты'],
    stats: {
      rating: 4.8
    },
    price: 'от $950',
    bestTime: 'Октябрь - Апрель',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    region: "Океания",
    name: "Рай на земле",
    description: 'Кристально чистые лагуны, белоснежные пляжи и пышные тропические джунгли. Острова Океании - это воплощение мечты о рае на земле. Идеальные места для романтического отдыха, дайвинга и полного релакса.',
    image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['Мальдивы', 'Бора-Бора', 'Фиджи', 'Бали', 'Пхукет', 'Маврикий', 'Сейшелы'],
    highlights: ['Оверуатер виллы на Мальдивах', 'Лагуны Бора-Бора', 'Дайвинг с мантами', 'Романтические ужины на пляже'],
    stats: {
      rating: 4.9
    },
    price: 'от $1500',
    bestTime: 'Круглый год',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 6,
    region: "Австралия и Океания",
    name: "Австралия и Новая Зеландия",
    description: 'От Большого Барьерного рифа до фьордов Южного острова. Уникальная природа, экзотические животные и приключения для настоящих искателей. Идеальное направление для любителей активного отдыха и природных чудес.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['Австралия', 'Новая Зеландия', 'Тасмания', 'Фиджи'],
    highlights: ['Сиднейский оперный театр', 'Большой Барьерный риф', 'Фьорды Милфорд-Саунд', 'Винодельни долины Баросса'],
    stats: {
      rating: 4.8
    },
    price: 'от $1800',
    bestTime: 'Сентябрь - Ноябрь, Март - Май',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 7,
    region: "Турция",
    name: "Турция",
    description: 'Уникальная страна на стыке Европы и Азии, где восточная экзотика встречается с европейским комфортом. От исторических памятников Стамбула до роскошных пляжей Анталии и волшебных пейзажей Каппадокии.',
    image: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['Стамбул', 'Анталия', 'Бодрум', 'Каппадокия', 'Измир', 'Мармарис', 'Кемер'],
    highlights: ['Стамбул - город на двух континентах', 'Полеты на воздушных шарах в Каппадокии', 'Роскошные курорты Средиземноморья', 'Древний город Эфес'],
    stats: {
      rating: 4.7
    },
    price: 'от $450',
    bestTime: 'Апрель - Октябрь',
    color: 'from-red-500 to-orange-500'
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



export function ToursSection() {

  const router = useRouter();

  const handleSelectRegion = (region) => {
    router.push(`/destinations?region=${region.id}`);
  };

  const handleExploreAll = () => {
    router.push('/destinations');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/10 to-indigo-50/20">
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
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              onClick={() => handleSelectRegion(region)}
            >
              {/* Текстовая информация */}
              <div className="flex-1 space-y-6 order-2 lg:order-1">
                {/* Заголовок с регионом */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-3">
                    <Globe />
                    {region.region}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{region.name}</h3>
                  <div className={`w-20 h-1 bg-gradient-to-r ${region.color} rounded-full`}></div>
                </div>

                {/* Описание */}
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  {region.description}
                </p>

                {/* Основные моменты */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Sparkles />
                    Ключевые впечатления:
                  </h4>
                  <ul className="space-y-2">
                    {region.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 group">
                        <div className={`w-2 h-2 bg-gradient-to-r ${region.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="text-sm lg:text-base group-hover:text-gray-900 transition-colors duration-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Страны региона */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <MapPin />
                    Страны региона:
                  </h4>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {region.countries.map((country, idx) => (
                      <span
                        key={idx}
                        className="px-3 lg:px-4 py-1 lg:py-2 bg-white border border-gray-200 rounded-lg lg:rounded-xl text-gray-700 font-medium hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-sm lg:text-base"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Статистика и цена */}
                <div className="flex flex-wrap items-center gap-3 lg:gap-4 pt-4">
                  <div className="inline-flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-200">
                    <div className="text-base lg:text-lg font-bold text-yellow-600 flex items-center gap-1">
                      {region.stats.rating}
                      <Star />
                    </div>
                    <div className="text-xs text-yellow-500">рейтинг</div>
                  </div>

                  <div className="inline-flex items-center gap-1 bg-cyan-50 px-3 py-1 rounded-lg border border-cyan-200">
                    <div className="text-base lg:text-lg font-bold text-cyan-600">{region.price}</div>
                    <div className="text-xs text-cyan-500">цена</div>
                  </div>
                </div>

                {/* Информация о туре */}
                <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl lg:rounded-2xl p-4 lg:p-4 border border-blue-200`}>
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-xl lg:rounded-2xl flex items-center justify-center">
                      <Calendar />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm lg:text-base leading-tight">Лучшее время</div>
                      <div className="text-blue-700 font-medium text-sm lg:text-base mt-1 break-words leading-tight">
                        {region.bestTime}
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
                  className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl group"
                >
                  {/* Fallback изображение */}
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-64 lg:h-[700px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Градиентный оверлей */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Эффект наведения */}
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/30">
                      <div className="text-base lg:text-lg font-semibold">Идеальный тур в {region.region}</div>
                      <div className="text-xs lg:text-sm opacity-90 mt-1">Подберем индивидуальную программу</div>
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
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Декоративные элементы */}
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
              onClick={() => handleExploreAll()}
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