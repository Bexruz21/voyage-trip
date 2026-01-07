import { useLang } from "@/context/LangContext"
import { useState } from "react"

export const CityCard = ({ city, setSelectedCity }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const { t, lang } = useLang()
    return (
        <div
            className="group bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-lg overflow-hidden hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 cursor-pointer transform active:scale-[0.98] sm:hover:-translate-y-1"
            onClick={() => setSelectedCity(city)}
        >
            <div className="relative h-48 sm:h-64 overflow-hidden">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                )}
                <img
                    src={city.image}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sm:group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    alt={city.name[lang]}
                />

                {/* Price Tag - Mobile optimized */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
                    <div className="text-xs sm:text-sm text-gray-600">{t('destinations.cityCard.from')}</div>
                    <div className="text-lg sm:text-2xl font-bold text-blue-600">${city.price}</div>
                </div>

                {/* Rating Badge - Mobile optimized */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/80 text-white px-2.5 py-1 sm:px-3 sm:py-1 rounded-full flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-400 mr-1" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-sm sm:text-base">{city.rating}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">{city.name[lang]}</h3>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm sm:text-base">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="truncate">{city.country.name[lang]}</span>
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2 text-sm sm:text-base leading-relaxed">{city.description[lang]}</p>

                {/* Highlights */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">{t('destinations.cityCard.mustSee')}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {city.highlights[lang].slice(0, 2).map((highlight, idx) => (
                            <span
                                key={idx}
                                className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium border border-blue-100 truncate max-w-[40%]"
                                title={highlight}
                            >
                                {highlight}
                            </span>
                        ))}
                        {city.highlights[lang].length > 2 && (
                            <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 rounded-full text-xs sm:text-sm font-medium border border-gray-200">
                                +{city.highlights[lang].length - 2}
                            </span>
                        )}
                    </div>
                </div>

                {/* Quick Info - Stacked on mobile */}
                <div className="flex flex-col sm:flex-row sm:justify-between pt-4 border-t border-gray-100 gap-3 sm:gap-0">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="min-w-0">
                            <div className="text-xs text-gray-500 truncate">{t('destinations.cityCard.bestTime')}</div>
                            <div className="font-medium text-sm sm:text-base truncate" title={city.best_time[lang]}>
                                {city.best_time[lang]}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="min-w-0">
                            <div className="text-xs text-gray-500">{t('destinations.cityCard.duration')}</div>
                            <div className="font-medium text-sm sm:text-base">
                                {city.duration} {t('destinations.cityCard.days')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
