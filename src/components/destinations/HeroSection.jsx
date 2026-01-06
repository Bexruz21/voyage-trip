'use client'

import { useLang } from "@/context/LangContext";

export const HeroSection = () => {
    const scrollToRegions = () => {
        document.getElementById('regions').scrollIntoView({ behavior: 'smooth' })
    }
    const { t } = useLang();

    return (
        <div className="relative overflow-hidden min-h-screen flex items-center pt-16 sm:pt-0">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Tropical beach"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent sm:bg-gradient-to-t sm:from-black/70 sm:via-black/30 sm:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 sm:from-black/40 sm:via-transparent sm:to-black/40" />
            </div>

            {/* Основной контент */}
            <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Декоративная линия */}
                    <div className="flex justify-center mb-6 sm:mb-8">
                        <div className="w-16 h-0.5 sm:w-24 sm:h-1 bg-white/80 rounded-full" />
                    </div>

                    {/* Заголовок */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white px-2 sm:px-0 leading-tight sm:leading-normal">
                        {t("destinations.hero.title")}
                    </h1>

                    {/* Подзаголовок */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
                        {t("destinations.hero.subtitle")}
                    </p>

                    {/* Кнопка */}
                    <div className="mb-12 sm:mb-0">
                        <button
                            onClick={scrollToRegions}
                            className="group px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-bold text-base sm:text-lg hover:shadow-xl sm:hover:shadow-2xl transform active:scale-[0.98] sm:hover:-translate-y-1 transition-all duration-300 hover:from-emerald-600 hover:to-cyan-600 relative overflow-hidden min-h-[48px] sm:min-h-[56px]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {t("destinations.hero.button")}
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>

                    {/* Статистика */}
                    <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto px-2 sm:px-0">
                        <div className="text-center p-3 sm:p-0">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-300">150+</div>
                            <div className="text-emerald-100 text-xs sm:text-sm md:text-base mt-1">{t("destinations.hero.stats.destinations")}</div>
                        </div>
                        <div className="text-center p-3 sm:p-0">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300">24/7</div>
                            <div className="text-cyan-100 text-xs sm:text-sm md:text-base mt-1">{t("destinations.hero.stats.support")}</div>
                        </div>
                        <div className="text-center p-3 sm:p-0">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-300">1000+</div>
                            <div className="text-teal-100 text-xs sm:text-sm md:text-base mt-1">{t("destinations.hero.stats.travelers")}</div>
                        </div>
                        <div className="text-center p-3 sm:p-0">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-300">50+</div>
                            <div className="text-emerald-100 text-xs sm:text-sm md:text-base mt-1">{t("destinations.hero.stats.countries")}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Индикатор прокрутки для мобилок */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}