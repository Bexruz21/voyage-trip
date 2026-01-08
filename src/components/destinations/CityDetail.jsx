'use client'

import { useState } from "react"
import { useLang } from "@/context/LangContext"
import { ArrowLeft, MapPin, Star, Calendar, Clock, Navigation, Info, Award, Landmark, Shield, Plane, CheckCircle, X } from 'lucide-react'

export const CityDetail = ({ city, setSelectedCity }) => {
  const { t, lang } = useLang()
  const [openBooking, setOpenBooking] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: city.name[lang],
    price: city.price,
    message: ''
  });

  const renderRatingStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-current" />
        )
      } else {
        stars.push(
          <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300 fill-current" />
        )
      }
    }
    return stars
  }

  const sendToTelegram = async (formData) => {
    const BOT_TOKEN = '8040202032:AAGCUG-b-Gykt-YOa3O122z0rVFGzL-rB3E';
    const CHAT_ID = '-1003127772145';

    const message = `
🎯 *Новая заявка на тур*

👤 *Имя:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Телефон:* ${formData.phone || 'Не указан'}

🌍 *Город:* ${formData.city}
💰 *Цена:* $${formData.price}

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setOpenBooking(false)
    setSuccess(true)
    await sendToTelegram(formData)
    setFormData(prev => ({
      ...prev,
      name: '',
      email: '',
      phone: '',
      message: ''
    }))
  }


  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-friendly Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 sm:px-6 sm:static sm:border-0 sm:pt-8">
        <button
          onClick={() => setSelectedCity(null)}
          className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="font-medium">{t('destinations.cityDetail.back')}</span>
        </button>
      </div>

      <div className="px-4 py-4 sm:px-6 sm:py-8">
        {/* Hero Image - Mobile optimized */}
        <div className="relative rounded-xl overflow-hidden mb-6 sm:rounded-2xl sm:mb-8">
          <div className="aspect-[4/3] sm:aspect-[21/9] relative">
            <img
              src={city.image}
              alt={city.name[lang]}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
              <div className="flex items-center gap-2 mb-3 sm:gap-3 sm:mb-3 flex-wrap">
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full text-xs sm:text-sm">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-rose-400" />
                  <span>{city.country.name[lang]}</span>
                </div>
                <div className="flex items-center gap-1">
                  {renderRatingStars(city.rating)}
                  <span className="ml-1 font-medium text-sm sm:text-base">{city.rating}</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold mb-1 sm:text-4xl sm:mb-2">{city.name[lang]}</h1>
              <p className="text-gray-200 text-sm sm:text-base">{city.tagline?.[lang] || t('destinations.cityDetail.defaultTagline')}</p>
            </div>
          </div>
        </div>

        {/* Content Grid - Mobile stack, desktop grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* About Section */}
            <div className="border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 bg-blue-50 rounded-lg">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{t('destinations.cityDetail.about')}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {city.description[lang]}
              </p>
            </div>

            {/* Highlights */}
            <div className="border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 bg-amber-50 rounded-lg">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{t('destinations.cityDetail.highlights')}</h2>
              </div>

              <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4">
                {city.highlights[lang].map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                      <span className="font-medium text-gray-900 text-sm sm:text-base">{idx + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base truncate">{highlight}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{t('destinations.cityDetail.mustSee')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attractions */}
            <div className="border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 bg-emerald-50 rounded-lg">
                  <Landmark className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{t('destinations.cityDetail.attractions')}</h2>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {city.attractions[lang].map((attraction, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer text-xs sm:text-sm"
                  >
                    {attraction}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Mobile: below left column */}
          <div className="space-y-6 sm:space-y-6">
            {/* Price Card */}
            <div className="bg-white border border-gray-200 text-gray-800 rounded-xl p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-gray-900">${city.price}</div>
                <div className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{t('destinations.cityDetail.perPerson')}, {city.duration} {t('destinations.cityDetail.days')}</div>

                <button
                  onClick={() => setOpenBooking(true)}
                  className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
                    {t('destinations.cityDetail.bookNow')}
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 text-center">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                <span>{t('destinations.cityDetail.freeCancellation')} • {t('destinations.cityDetail.bestPrice')}</span>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="border border-gray-200 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
                {t('destinations.cityDetail.essentials')}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500" />
                    <span className="text-gray-600 text-sm">{t('destinations.cityDetail.bestTime')}</span>
                  </div>
                  <span className="font-medium text-gray-900 text-sm sm:text-base text-right ml-2">{city.best_time[lang]}</span>
                </div>

                <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-500" />
                    <span className="text-gray-600 text-sm">{t('destinations.cityDetail.duration')}</span>
                  </div>
                  <span className="font-medium text-gray-900 text-sm sm:text-base">{city.duration} {t('destinations.cityDetail.days')}</span>
                </div>

                <div className="flex items-center justify-between py-2 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                    <span className="text-gray-600 text-sm">{t('destinations.cityDetail.rating')}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="flex">{renderRatingStars(city.rating)}</div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">{city.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Tips */}
            <div className="border border-gray-200 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                {t('destinations.cityDetail.tips.title')}
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-xs sm:text-sm">{t('destinations.cityDetail.tips.items.item-1')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-xs sm:text-sm">{t('destinations.cityDetail.tips.items.item-2')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-1.5 sm:mt-2"></div>
                  <span className="text-gray-600 text-xs sm:text-sm">{t('destinations.cityDetail.tips.items.item-3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {openBooking && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md sm:max-w-md p-4 sm:p-6 relative max-h-[100vh] sm:max-h-[90vh]">
            <div className="sticky top-0 bg-white pb-2 sm:static sm:pb-0">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {t('destinations.booking.title').replace("{{city}}", city.name[lang])}

                </h3>
                <button
                  onClick={() => setOpenBooking(false)}
                  className="text-gray-400 hover:text-gray-600 text-xl p-1"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-xs sm:text-sm text-gray-600">{t('destinations.booking.name')}</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  placeholder=""
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm text-gray-600">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm text-gray-600">{t('destinations.booking.phone')}</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  placeholder="+998 90 123 45 67"
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm text-gray-600">{t('destinations.booking.message.label')}</label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none text-sm sm:text-base"
                  placeholder={t('destinations.booking.message.placeholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 sm:mt-4 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                {t('destinations.booking.submit')}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal - Mobile optimized */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-sm p-6 text-center max-h-[90vh] overflow-y-auto sm:max-h-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              {t('destinations.successModal.title')}
            </h3>

            <p className="text-gray-600 text-xs sm:text-sm mb-6">
              {t('destinations.successModal.description')}
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              {t('destinations.successModal.button')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}