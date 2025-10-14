import { motion, AnimatePresence } from 'framer-motion';
import { Star, Calendar, MapPin, Users, X, Send, Plane, Heart } from './icons/Icons';
import { useState, useRef, useEffect } from 'react';

const TELEGRAM_CONFIG = {
  botToken: '8040202032:AAGCUG-b-Gykt-YOa3O122z0rVFGzL-rB3E',
  chatId: -1003127772145
};

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
};


export const BookingModal = ({ isOpen, onClose, city, onSubmit }) => {
  const modalRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998',
    email: '',
    travelDate: '',
    travelers: '1',
    budget: 'standard',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useClickOutside(modalRef, onClose);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-[95vw] sm:max-w-md mx-auto my-auto overflow-hidden"
          >
            {/* Заголовок */}
            <div className="relative bg-gradient-to-r from-sky-500 to-cyan-500 p-4 sm:p-6 text-white rounded-t-xl sm:rounded-t-2xl">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <div className="flex items-center gap-3 pr-10 sm:pr-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Plane className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-xl font-bold truncate">
                    Путешествие в {city?.name}
                  </h2>
                  <p className="text-sky-100 text-xs sm:text-sm truncate">
                    Заполните форму для бронирования
                  </p>
                </div>
              </div>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4 max-h-[60vh] sm:max-h-none overflow-y-auto">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="+998 90 123 45 67"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Дата поездки *
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Путешественники *
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="1">1 человек</option>
                    <option value="2">2 человека</option>
                    <option value="3-4">3–4 человека</option>
                    <option value="5+">5+ человек</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Бюджет (в долларах США) *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="economy">Эконом (до $500)</option>
                  <option value="standard">Стандарт ($500–$1000)</option>
                  <option value="premium">Премиум (от $1000)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Дополнительные пожелания
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Расскажите о ваших предпочтениях..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold py-3 sm:py-4 rounded-lg hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Отправка...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Отправить заявку</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const SuccessNotification = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-4 right-4 z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-green-500 text-white p-4 rounded-2xl shadow-2xl max-w-sm"
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <div>
                <div className="font-bold">Заявка отправлена!</div>
                <div className="text-green-100 text-sm">Мы свяжемся с вами в ближайшее время</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ImageGallery = ({ city, country }) => (
  <div className="relative h-80 md:h-96 lg:h-[500px]">
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full overflow-hidden"
    >
      <img
        src={city.image}
        alt={city.name}
        className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
      />
    </motion.div>

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl md:rounded-3xl" />

    {/* Контент героя */}
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 border border-white/30"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-300">
                <Star className="w-4 h-4 " />
                <span className='text-white'>{city.rating}</span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-sky-400 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 border border-blue-300/30"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                <span className='text-white'>{country.name}</span>
              </div>
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-2xl">
            {city.name}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed drop-shadow-lg">
            {city.description}
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);


export function CityDetail({ city, country }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendToTelegram = async (formData) => {
    // --- Форматируем дату ---
    const formattedDate = new Date(formData.travelDate)
      .toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\./g, '-'); // 21-11-2025

    // --- Человеческие названия бюджетов ---
    const budgetMap = {
      economy: '💼 Эконом (до $500)',
      standard: '💳 Стандарт ($500–$1000)',
      premium: '💎 Премиум (от $1000)',
    };

    const budgetLabel = budgetMap[formData.budget] || 'Не указано';

    // --- Формируем красивое сообщение ---
    const message = `
🌍 *НОВАЯ ЗАЯВКА НА ПУТЕШЕСТВИЕ*

🏙 *Город:* ${city.name}
🏳 *Страна:* ${country.name}

👤 *Контактные данные:*
• *Имя:* ${formData.name}
• *Телефон:* ${formData.phone}
• *Email:* ${formData.email}

📅 *Дата поездки:* ${formattedDate}
👥 *Путешественников:* ${formData.travelers}
💰 *Бюджет:* ${budgetLabel}
${formData.message ? `📝 *Пожелания:* ${formData.message}` : ''}

🕒 *Отправлено:* ${new Date().toLocaleString('ru-RU')}
  `.trim();

    // --- Отправляем в Telegram ---
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error('Ошибка отправки в Telegram');
    }
  };

  const handleFormSubmit = async (formData) => {
    await sendToTelegram(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <>
      <div className="min-h-screen">
        <ImageGallery city={city} country={country} />

        <div className="sm:px-4">
          {/* Статистика - адаптивная сетка */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-6 sm:my-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white/80 text-xs sm:text-sm font-medium">Население</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold truncate">{city.population}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white/80 text-xs sm:text-sm font-medium">Лучшее время</div>
                  <div className="text-sm sm:text-base lg:text-lg font-bold leading-tight break-words">
                    {city.bestTime}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg sm:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white/80 text-xs sm:text-sm font-medium">Рейтинг</div>
                  <div className="flex items-center gap-2">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold">{city.rating}</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= Math.floor(parseFloat(city.rating))
                            ? "text-amber-300 fill-amber-300"
                            : "text-white/30"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Основной контент - адаптивная сетка */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Левая колонка - основной контент */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div className="space-y-6">
                <div className="space-y-6 sm:space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Карточка "О городе" - адаптивная */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden">
                      <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-4 sm:p-6 text-white">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold truncate">О городе</h3>
                            <p className="text-sky-100 text-xs sm:text-sm mt-1 truncate">Погрузитесь в атмосферу {city.name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                          {city.detailedDescription || `${city.name} - это уникальное место, сочетающее в себе богатую историю, современную инфраструктуру и неповторимую атмосферу.`}
                        </p>
                      </div>
                    </div>

                    {/* Карточка "Что вас ждет" - адаптивная */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-4 sm:p-6 text-white">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold truncate">Что вас ждет</h3>
                            <p className="text-emerald-100 text-xs sm:text-sm mt-1 truncate">Незабываемые впечатления</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {city.attractions?.slice(0, 6).map((attraction, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, x: 3 }}
                              className="flex items-center gap-3 p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 hover:border-sky-200 transition-all duration-300 group cursor-pointer"
                            >
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-800 font-medium text-xs sm:text-sm flex-1 min-w-0 truncate">
                                {attraction}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Правая колонка - форма бронирования */}
            <div className="lg:col-span-1">
              <div className="">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-6 sm:p-8 lg:p-10 text-white text-center">
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold sm:font-extrabold tracking-tight mb-2">
                        Готовы к путешествию?
                      </h3>
                      <p className="text-sky-100 text-xs sm:text-sm lg:text-base font-medium mb-4 sm:mb-6">
                        Забронируйте свою поездку прямо сейчас
                      </p>
                      <motion.button
                        whileHover={{
                          scale: 1.02,
                          boxShadow: '0 10px 15px -3px rgba(14, 165, 233, 0.3), 0 4px 6px -2px rgba(14, 165, 233, 0.15)',
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsModalOpen(true)}
                        className="w-full text-cyan-600 bg-white font-bold py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
                      >
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                        <span>Начать планирование</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Модальное окно */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        city={city}
        onSubmit={handleFormSubmit}
      />

      {/* Уведомление об успехе */}
      <SuccessNotification
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}