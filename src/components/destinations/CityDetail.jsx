'use client'

import { useLang } from "@/context/LangContext"
import {
  ArrowLeft,
  MapPin,
  Star,
  Calendar,
  Clock,
  Navigation,
  Info,
  Award,
  Landmark,
  Shield,
  Plane,
  CheckCircle
} from 'lucide-react'

export const CityDetail = ({ city, countries, setSelectedCity }) => {
  const { t, lang } = useLang()

  const renderRatingStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
        )
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-gray-300 fill-current" />
        )
      }
    }
    return stars
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-8">
        <button
          onClick={() => setSelectedCity(null)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="font-medium text-sm">{t('destinations.cityDetail.back')}</span>
        </button>
      </div>
      <div className="container mx-auto px-6 py-8">
        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <div className="aspect-[21/9] relative">
            <img
              src={city.image}
              alt={city.name[lang]}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span className="text-sm">{city.country.name[lang]}</span>
                </div>
                <div className="flex items-center gap-1">
                  {renderRatingStars(city.rating)}
                  <span className="ml-1 font-medium">{city.rating}</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold mb-2">{city.name[lang]}</h1>
              <p className="text-gray-200">{city.tagline?.[lang] || t('destinations.cityDetail.defaultTagline')}</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Info className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{t('destinations.cityDetail.about')}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {city.description[lang]}
              </p>
            </div>

            {/* Highlights */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{t('destinations.cityDetail.highlights')}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {city.highlights[lang].map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                      <span className="font-medium text-gray-900">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{highlight}</h4>
                      <p className="text-sm text-gray-500">{t('destinations.cityDetail.mustSee')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attractions */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Landmark className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{t('destinations.cityDetail.attractions')}</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {city.attractions[lang].map((attraction, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    {attraction}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white border border-gray-200 text-gray-800 rounded-xl p-6 ">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2 text-gray-900">${city.price}</div>
                <div className="text-gray-600 mb-6">{t('destinations.cityDetail.perPerson')}, {city.duration} {t('destinations.cityDetail.days')}</div>

                <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-center gap-2">
                    <Plane className="w-5 h-5" />
                    {t('destinations.cityDetail.bookNow')}
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4 text-gray-400" />
                {t('destinations.cityDetail.freeCancellation')} • {t('destinations.cityDetail.bestPrice')}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
                <Navigation className="w-5 h-5 text-sky-600" />
                {t('destinations.cityDetail.essentials')}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-rose-500" />
                    <span className="text-gray-600">{t('destinations.cityDetail.bestTime')}</span>
                  </div>
                  <span className="font-medium text-gray-900">{city.best_time[lang]}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-violet-500" />
                    <span className="text-gray-600">{t('destinations.cityDetail.duration')}</span>
                  </div>
                  <span className="font-medium text-gray-900">{city.duration} {t('destinations.cityDetail.days')}</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-gray-600">{t('destinations.cityDetail.rating')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderRatingStars(city.rating)}</div>
                    <span className="font-medium text-gray-900">{city.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Tips */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                {t('destinations.cityDetail.tips.title')}
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">{t('destinations.cityDetail.tips.items.item-1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">{t('destinations.cityDetail.tips.items.item-2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">{t('destinations.cityDetail.tips.items.item-3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}