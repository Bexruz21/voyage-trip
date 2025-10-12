import { motion } from 'framer-motion';
import { Star, Calendar, Sparkles, MapPin, Users } from './icons/Icons';
import { useState } from 'react';

// Создаем недостающие иконки
const Landmark = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function CityDetail({ city }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    travelers: '',
    budget: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Формируем сообщение для Telegram
    const message = `📋 Новая заявка на путешествие в ${city.name}:
    
👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email}
📅 Дата путешествия: ${formData.travelDate}
👥 Количество путешественников: ${formData.travelers}
💰 Бюджет: ${formData.budget}

🏙️ Город: ${city.name}
⭐ Рейтинг: ${city.rating}
📅 Лучшее время: ${city.bestTime}`;

    // Здесь должна быть логика отправки в Telegram
    // Например, через Telegram Bot API
    console.log('Отправляем в Telegram:', message);
    
    // Показываем уведомление
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    
    // Сбрасываем форму
    setFormData({
      name: '',
      phone: '',
      email: '',
      travelDate: '',
      travelers: '',
      budget: ''
    });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      key="city-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero секция */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8 shadow-2xl">
        <div className="relative h-60 sm:h-80 lg:h-96">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-white/20 backdrop-blur-lg rounded-full px-3 py-1.5 border border-white/30">
                <div className="flex items-center gap-1 text-white text-sm font-semibold">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-300" />
                  <span>{city.rating}</span>
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 drop-shadow-2xl">
              {city.name}
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl opacity-95 max-w-2xl leading-relaxed">
              {city.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Основной контент */}
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          {/* Информация о городе */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">О городе</h2>
                <p className="text-gray-600 text-sm sm:text-base">Основная информация и интересные факты</p>
              </div>
            </div>
            
            <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                {city.detailedDescription || `${city.name} - это уникальное место, сочетающее в себе богатую историю, 
                современную инфраструктуру и неповторимую атмосферу. Город привлекает туристов со всего мира 
                своими культурными достопримечательностями, гастрономическими изысками и гостеприимством местных жителей.`}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-blue-700">Население</div>
                    <div className="text-blue-800">{city.population}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-green-700">Лучшее время</div>
                    <div className="text-green-800">{city.bestTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Популярные места */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Знаковые места</h2>
                <p className="text-gray-600 text-sm sm:text-base">Самые посещаемые достопримечательности</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {city.attractions.map((attraction, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-blue-300 transition-colors duration-300 flex-shrink-0">
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{attraction}</h3>
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <MapPin className="w-3 h-3" />
                          <span>Топ локация</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Боковая панель */}
        <div className="space-y-4 sm:space-y-6">
          {!showForm ? (
            <>
              {/* Кнопка бронирования */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 sm:p-6 shadow-xl"
              >
                <div className="text-center text-white mb-3">
                  <div className="text-lg sm:text-xl font-bold mb-1">Готовы к путешествию?</div>
                  <div className="text-green-100 text-sm">Забронируйте свою поездку</div>
                </div>
                
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-green-600 font-bold py-3 sm:py-4 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="text-sm sm:text-base">Начать планирование</span>
                </motion.button>
              </motion.div>

              {/* Советы */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 sm:p-6 text-white shadow-xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h4 className="font-bold text-sm sm:text-base">Совет путешественникам</h4>
                </div>
                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed">
                  {city.travelTip || "Лучшее время для фото — утренние часы, когда туристов еще немного и свет идеален для съемки."}
                </p>
              </motion.div>
            </>
          ) : (
            /* Форма заявки */
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Заявка на путешествие</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Количество путешественников</option>
                  <option value="1">1 человек</option>
                  <option value="2">2 человека</option>
                  <option value="3-4">3-4 человека</option>
                  <option value="5+">5+ человек</option>
                </select>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Бюджет на поездку</option>
                  <option value="эконом">Эконом (до 50,000 ₽)</option>
                  <option value="стандарт">Стандарт (50,000-100,000 ₽)</option>
                  <option value="премиум">Премиум (от 100,000 ₽)</option>
                </select>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                >
                  Отправить заявку
                </motion.button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}