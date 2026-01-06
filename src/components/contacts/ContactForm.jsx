import { memo, useCallback } from 'react';
import { useLang } from '@/context/LangContext';
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
  { icon: CheckCircle, text: "Персональный менеджер", key: 'manager'},
  { icon: CheckCircle, text: "Подбор тура за 15 минут", key: 'fast'},
  { icon: CheckCircle, text: "Лучшие цены гарантированы", key: 'price' },
  { icon: CheckCircle, text: "Поддержка 24/7", key: 'support' }
];

// Кэшируем мапу для быстрого поиска лейблов
const contactMethodsMap = new Map(contactMethods.map(m => [m.value, m.label]));
const travelTypesMap = new Map(travelTypes.map(t => [t.value, t.label]));
const budgetsMap = new Map(budgets.map(b => [b.value, b.label]));

const sendToTelegram = async (formData) => {
  const BOT_TOKEN = '8040202032:AAGCUG-b-Gykt-YOa3O122z0rVFGzL-rB3E';
  const CHAT_ID = '-1003127772145';

  const message = `
🎯 *Новая заявка на тур*

👤 *Имя:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Телефон:* ${formData.phone || 'Не указан'}
📞 *Способ связи:* ${contactMethodsMap.get(formData.contactMethod) || formData.contactMethod}

🌍 *Тип путешествия:* ${travelTypesMap.get(formData.travelType) || formData.travelType}
💰 *Бюджет:* ${budgetsMap.get(formData.budget) || formData.budget}

💬 *Сообщение:*
${formData.message}

⏰ *Время отправки:* ${new Date().toLocaleString('ru-RU')}
  `;

  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    })
  });

  if (!response.ok) throw new Error('Ошибка отправки в Telegram');
  return true;
};

// Мемоизированный компонент модального окна
const SuccessModal = memo(({ isOpen, onClose, formData }) => {
  if (!formData) return null;
  const { t } = useLang()
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t('contacts.form.success_title')}</h3>
                    <p className="text-sm text-gray-600">{t('contacts.form.success_subtitle')}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">{t('contacts.form.fields.data')}:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('contacts.form.fields.name')}:</span>
                    <span className="font-medium text-gray-900">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-gray-900">{formData.email}</span>
                  </div>
                  {formData.phone && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('contacts.form.fields.phone')}:</span>
                      <span className="font-medium text-gray-900">{formData.phone}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('contacts.form.fields.contact_method')}:</span>
                    <span className="font-medium text-gray-900">{contactMethodsMap.get(formData.contactMethod)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('contacts.form.fields.travel_type')}:</span>
                    <span className="font-medium text-gray-900">{travelTypesMap.get(formData.travelType)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('contacts.form.fields.budget')}:</span>
                    <span className="font-medium text-gray-900">{budgetsMap.get(formData.budget)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                {t('contacts.form.ok')}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

// Мемоизированный компонент селекта
const SelectField = memo(
  ({ label, name, value, options, onChange, required = false, helperText }) => {
    const {t} = useLang()
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && '*'}
        </label>

        {helperText && (
          <p className="text-xs text-gray-500 mb-2">{helperText}</p>
        )}

        <div className="relative">
          <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-base leading-relaxed focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 pr-10"
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {t(`contacts.form.${name}.${opt.value}`)}
              </option>
            ))}
          </select>

          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    );
  }
);


// Мемоизированный компонент преимуществ
const BenefitsGrid = memo(() => {
  const { t } = useLang()
  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <div className="grid grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-2">
            <benefit.icon className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">
              {t(`contacts.form.benefits.${benefit.key}`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})

export function ContactForm({ isClient, formData, onFormChange, onSubmit, isSubmitting, submitStatus, submittedData, onCloseSuccess }) {

  const { t } = useLang()
  const handleChange = useCallback((e) => {
    onFormChange({
      ...formData,
      [e.target.name]: e.target.value
    });
  }, [formData, onFormChange]);

  const handlePhoneChange = useCallback((e) => {
    let value = e.target.value.replace(/[^+\d]/g, '').replace(/(?!^)\+/g, '');
    if (value && !value.startsWith('+')) value = '+' + value;
    onFormChange({ ...formData, phone: value });
  }, [formData, onFormChange]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      await sendToTelegram(formData);
      onSubmit();
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  }, [formData, onSubmit]);

  // Общий класс для инпутов
  const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300";

  return (
    <>
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="sm:hidden">
              <h2 className="text-xl font-bold text-gray-900">{t('contacts.form.title')}</h2>
              <p className="text-sm text-gray-600">{t('contacts.form.subtitle')}</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t('contacts.form.title')}</h2>
            <p className="text-sm text-gray-600">{t('contacts.form.subtitle')}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contacts.form.fields.name')} *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('contacts.form.fields.phone')}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                className={inputClass}
              />
            </div>
          </div>

          <SelectField
            label={t('contacts.form.fields.contact_method')}
            name="contactMethod"
            value={formData.contactMethod}
            options={contactMethods}
            onChange={handleChange}
            required
          />

          <SelectField
            label={t('contacts.form.fields.travel_type')}
            name="travelType"
            value={formData.travelType}
            options={travelTypes}
            onChange={handleChange}
            required
          />

          <SelectField
            label={t('contacts.form.fields.budget')}
            helperText={t('contacts.form.fields.helper_budget')}
            name="budget"
            value={formData.budget}
            options={budgets}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contacts.form.fields.message')} *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`${inputClass} resize-none`}
              placeholder={t('contacts.form.fields.message_helper')}
            />
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
                  <span>{t('contacts.form.sending')}</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>{t('contacts.form.submit')}</span>
                </>
              )}
            </motion.button>
          ) : (
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>{t('contacts.form.submit')}</span>
            </button>
          )}
        </form>

        <BenefitsGrid />
      </div>

      <SuccessModal
        isOpen={submitStatus === 'success'}
        onClose={onCloseSuccess}
        formData={submittedData}
      />
    </>
  );
}