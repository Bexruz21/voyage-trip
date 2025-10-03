import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

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
  { value: 'low', label: 'Эконом (до 50 тыс. руб.)' },
  { value: 'medium', label: 'Стандарт (50-100 тыс. руб.)' },
  { value: 'high', label: 'Премиум (от 100 тыс. руб.)' },
  { value: 'luxury', label: 'Люкс (от 200 тыс. руб.)' }
];

const benefits = [
  { icon: CheckCircle, text: "Персональный менеджер" },
  { icon: CheckCircle, text: "Подбор тура за 15 минут" },
  { icon: CheckCircle, text: "Лучшие цены гарантированы" },
  { icon: CheckCircle, text: "Поддержка 24/7" }
];

export function ContactForm({ isClient, formData, onFormChange, onSubmit, isSubmitting, submitStatus }) {
  const handleChange = (e) => {
    onFormChange({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
          <Send className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Начните свое путешествие</h2>
          <p className="text-gray-600">Расскажите о ваших планах, и мы создадим идеальный тур</p>
        </div>
      </div>

      {isClient && (
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Сообщение отправлено! Мы свяжемся с вами в течение 15 минут.
            </motion.div>
          )}
        </AnimatePresence>
      )}

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
            placeholder="Иван Иванов"
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
              placeholder="ivan@example.com"
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
              placeholder="+7 (999) 999-99-99"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Удобный способ связи *
          </label>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
          >
            {contactMethods.map((method) => (
              <option key={method.value} value={method.value}>
                {method.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Тип путешествия *
          </label>
          <select
            name="travelType"
            value={formData.travelType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
          >
            {travelTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Бюджет поездки *
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
          >
            {budgets.map((budget) => (
              <option key={budget.value} value={budget.value}>
                {budget.label}
              </option>
            ))}
          </select>
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
  );
}