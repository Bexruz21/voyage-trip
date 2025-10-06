import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, X } from 'lucide-react';

const contactMethods = [
  { value: 'phone', label: 'Телефон' },
  { value: 'email', label: 'Email' },
  { value: 'telegram', label: 'Telegram' },
  { value: 'whatsapp', label: 'WhatsApp' }
];

const travelTypes = [
  { value: 'beach', label: 'Пляжный отдых' },
  { value: 'mountain', label: 'Горный туризм' },
  { value: 'city', label: 'Городские туры' },
  { value: 'exotic', label: 'Экзотика' },
  { value: 'cruise', label: 'Круизы' },
  { value: 'other', label: 'Другое' }
];

const budgets = [
  { value: 'low', label: 'Эконом (до $500)' },
  { value: 'medium', label: 'Стандарт ($500–$1000)' },
  { value: 'high', label: 'Премиум (от $1000)' },
  { value: 'luxury', label: 'Люкс (от $2000)' }
];

const benefits = [
  { icon: CheckCircle, text: "Персональный менеджер" },
  { icon: CheckCircle, text: "Подбор тура за 15 минут" },
  { icon: CheckCircle, text: "Лучшие цены гарантированы" },
  { icon: CheckCircle, text: "Поддержка 24/7" }
];

// Функция для отправки в Telegram
const sendToTelegram = async (formData) => {
  const BOT_TOKEN = '8040202032:AAGCUG-b-Gykt-YOa3O122z0rVFGzL-rB3E'; // Замените на ваш токен
  const CHAT_ID = '-1003127772145'; // Замените на ваш chat ID

  const contactMethodLabel = contactMethods.find(m => m.value === formData.contactMethod)?.label || formData.contactMethod;
  const travelTypeLabel = travelTypes.find(t => t.value === formData.travelType)?.label || formData.travelType;
  const budgetLabel = budgets.find(b => b.value === formData.budget)?.label || formData.budget;

  const message = `
🎯 *Новая заявка на тур*

👤 *Имя:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Телефон:* ${formData.phone || 'Не указан'}
📞 *Способ связи:* ${contactMethodLabel}

🌍 *Тип путешествия:* ${travelTypeLabel}
💰 *Бюджет:* ${budgetLabel}

💬 *Сообщение:*
${formData.message}

⏰ *Время отправки:* ${new Date().toLocaleString('ru-RU')}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    if (!response.ok) {
      throw new Error('Ошибка отправки в Telegram');
    }

    return true;
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    throw error;
  }
};

// Компонент модального окна успеха
function SuccessModal({ isOpen, onClose, formData }) {
  const contactMethodLabel = contactMethods.find(m => m.value === formData.contactMethod)?.label || formData.contactMethod;
  const travelTypeLabel = travelTypes.find(t => t.value === formData.travelType)?.label || formData.travelType;
  const budgetLabel = budgets.find(b => b.value === formData.budget)?.label || formData.budget;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Затемненный фон */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Модальное окно */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50"
          >
            <div className="p-6 sm:p-8">
              {/* Заголовок */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Заявка отправлена!</h3>
                    <p className="text-sm text-gray-600">Мы свяжемся с вами в течение 15 минут</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Данные формы */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Ваши данные:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Имя:</span>
                    <span className="font-medium text-gray-900">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-gray-900">{formData.email}</span>
                  </div>
                  {formData.phone && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Телефон:</span>
                      <span className="font-medium text-gray-900">{formData.phone}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Способ связи:</span>
                    <span className="font-medium text-gray-900">{contactMethodLabel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Тип путешествия:</span>
                    <span className="font-medium text-gray-900">{travelTypeLabel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Бюджет:</span>
                    <span className="font-medium text-gray-900">{budgetLabel}</span>
                  </div>
                </div>
              </div>

              {/* Кнопка закрытия */}
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Понятно
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ContactForm({ isClient, formData, onFormChange, onSubmit, isSubmitting, submitStatus, onCloseSuccess }) {
  const handleChange = (e) => {
    onFormChange({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Отправляем данные в Telegram
      await sendToTelegram(formData);
      
      // Вызываем onSubmit для обновления состояния
      onSubmit();
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      // Здесь можно добавить обработку ошибок
    }
  };

  return (
    <>
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="sm:hidden">
              <h2 className="text-xl font-bold text-gray-900">Начните свое путешествие</h2>
              <p className="text-sm text-gray-600">Расскажите о ваших планах, и мы создадим идеальный тур</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Начните свое путешествие</h2>
            <p className="text-sm text-gray-600">Расскажите о ваших планах, и мы создадим идеальный тур</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ваше имя *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              placeholder=""
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Телефон
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="+998 (xx) xxx-xx-xx"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Удобный способ связи *
            </label>
            <div className="relative">
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                required
                className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                   text-gray-900 text-base leading-relaxed 
                   focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                   transition-all duration-300 pr-10"
              >
                {contactMethods.map((method) => (
                  <option key={method.value} value={method.value}>
                    {method.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Тип путешествия *
            </label>
            <div className="relative">
              <select
                name="travelType"
                value={formData.travelType}
                onChange={handleChange}
                required
                className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                   text-gray-900 text-base leading-relaxed 
                   focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                   transition-all duration-300 pr-10"
              >
                {travelTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Бюджет поездки *
            </label>
            <div className="relative">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                   text-gray-900 text-base leading-relaxed 
                   focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                   transition-all duration-300 pr-10"
              >
                {budgets.map((budget) => (
                  <option key={budget.value} value={budget.value}>
                    {budget.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Сообщение *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Опишите ваше идеальное путешествие, пожелания по датам, количеству человек..."
            ></textarea>
          </div>

          {isClient ? (
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Отправка...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Отправить заявку</span>
                </>
              )}
            </motion.button>
          ) : (
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Отправить заявку</span>
            </button>
          )}
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <benefit.icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Модальное окно успеха */}
      <SuccessModal 
        isOpen={submitStatus === 'success'} 
        onClose={onCloseSuccess}
        formData={formData}
      />
    </>
  );
}