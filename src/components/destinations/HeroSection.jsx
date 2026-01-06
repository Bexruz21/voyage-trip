'use client'

import { useLang } from "@/context/LangContext";

export const HeroSection = () => {
    const scrollToRegions = () => {
        document.getElementById('regions').scrollIntoView({ behavior: 'smooth' })
    }
    const { t } = useLang();

    return (
        <div className="relative overflow-hidden min-h-screen flex items-center">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Tropical beach"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            </div>

            {/* Основной контент */}
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-1 bg-white rounded-full" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                        {t("destinations.hero.title")}
                    </h1>

                    <p className="text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                        {t("destinations.hero.subtitle")}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={scrollToRegions}
                            className="group px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:from-emerald-600 hover:to-cyan-600 relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {t("destinations.hero.button")}
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>

                    {/* Статистика */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-300">150+</div>
                            <div className="text-emerald-100">{t("destinations.hero.stats.destinations")}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-cyan-300">24/7</div>
                            <div className="text-cyan-100">{t("destinations.hero.stats.support")}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-300">1000+</div>
                            <div className="text-teal-100">{t("destinations.hero.stats.travelers")}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-300">50+</div>
                            <div className="text-emerald-100">{t("destinations.hero.stats.countries")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}