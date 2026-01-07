import Link from "next/link"
import { useLang } from "@/context/LangContext"

export const RegionCard = ({ region }) => {
    const { t, lang } = useLang()
    return (
        <Link href={`/destinations/${region.id}`}>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] bg-white border border-gray-200">
                <div className="relative h-64 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${region.images[0]})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2.5c-4.418 0-8 3.382-8 7.55 0 5.28 7.19 10.17 7.66 10.45a.5.5 0 00.68 0c.47-.28 7.66-5.17 7.66-10.45 0-4.168-3.582-7.55-8-7.55z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white text-sm font-medium">{region.countries.length} {t("destinations.regions.card.countries")}</span>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {region.name[lang]}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-500">{region.best_time[lang]}</span>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {region.description[lang]}
                    </p>
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">{t("destinations.regions.card.highlights")}</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {region.highlights[lang].slice(0, 2).map((highlight, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 truncate max-w-[40%]"
                                >
                                    {highlight}
                                </span>
                            ))}
                      
                            {region.highlights[lang].length > 2 && (
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                    +{region.highlights[lang].length - 2}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="mb-5">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">{t("destinations.regions.card.popularCities")}</h4>
                        <div className="flex items-center gap-2">
                            {region.popular_cities.slice(0, 3).map((city, idx) => (
                                <div key={idx} className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    <span className="text-sm text-gray-600">{city.name[lang]}</span>
                                </div>
                            ))}
                            {region.popular_cities.length > 3 && (
                                <span className="text-sm text-gray-500 ml-1">
                                    +{region.popular_cities.length - 3} {t("destinations.regions.card.more")}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group-hover:w-32 group-hover:px-4 overflow-hidden">
                            <span className="hidden group-hover:inline mr-1 text-sm font-medium">{t("destinations.regions.card.explore")}</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}