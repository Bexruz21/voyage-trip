import { motion } from 'framer-motion';
import { Building, Users, Language, Currency, Star } from './icons/Icons';

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export function CountryCard({ country, onSelect }) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group cursor-pointer"
            onClick={() => onSelect(country)}
        >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-200/50 relative">
                {/* Бейдж с рейтингом */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-amber-500 flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4  fill-current" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">{country.rating || '4.8'}</span>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Градиент с градиентной анимацией */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/40 transition-all duration-500" />

                    {/* Декоративные элементы */}
                    <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/10 rounded-full -translate-x-8 -translate-y-8 sm:-translate-x-10 sm:-translate-y-10 group-hover:scale-150 transition-transform duration-1000" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-teal-500/10 rounded-full translate-x-6 translate-y-6 sm:translate-x-8 sm:translate-y-8 group-hover:scale-150 transition-transform duration-1000 delay-200" />

                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 text-white">
                        <div className="flex items-start justify-between mb-1 sm:mb-2">
                            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                {country.name}
                            </h3>
                        </div>
                        <p className="opacity-90 mb-2 sm:mb-3 leading-relaxed text-xs sm:text-sm line-clamp-2 py-1 sm:py-2">
                            {country.description}
                        </p>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm">
                            <span className="bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center gap-1 border border-white/30 hover:bg-white/30 transition-all duration-300">
                                <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                                {country.cities.length} городов
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:p-6 bg-gradient-to-br from-white via-blue-50/30 to-white">
                    {/* Статистика в стиле иконок */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg sm:rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors duration-300 group/item">
                            <div className="p-1 sm:p-2 bg-blue-100 rounded-md text-sky-600 sm:rounded-lg group-hover/item:bg-blue-200 transition-colors duration-300">
                                <Building className="w-3 h-3 sm:w-4 sm:h-4 " />
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-gray-500">Столица</div>
                                <div className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{country.capital}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg sm:rounded-xl bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-300 group/item">
                            <div className="p-1 sm:p-2 bg-emerald-100 rounded-md sm:rounded-lg text-emerald-600 group-hover/item:bg-emerald-200 transition-colors duration-300">
                                <Users className="w-3 h-3 sm:w-4 sm:h-4 " />
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-gray-500">Население</div>
                                <div className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{country.population}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg sm:rounded-xl bg-amber-50/50 hover:bg-amber-50 transition-colors duration-300 group/item">
                            <div className="p-1 sm:p-2 bg-amber-100 rounded-md sm:rounded-lg text-amber-600 group-hover/item:bg-amber-200 transition-colors duration-300">
                                <Language className="w-3 h-3 sm:w-4 sm:h-4 " />
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-gray-500">Язык</div>
                                <div className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{country.language}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg sm:rounded-xl bg-rose-50/50 hover:bg-rose-50 transition-colors duration-300 group/item">
                            <div className="p-1 sm:p-2 bg-rose-100 rounded-md sm:rounded-lg text-rose-600 group-hover/item:bg-rose-200 transition-colors duration-300">
                                <Currency className="w-3 h-3 sm:w-4 sm:h-4 " />
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-gray-500">Валюта</div>
                                <div className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{country.currency}</div>
                            </div>
                        </div>
                    </div>

                    {/* Хайлайты с анимацией */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                        {country.highlights.slice(0, 3).map((highlight, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gradient-to-br from-cyan-50 to-blue-100 border border-cyan-200 text-cyan-700 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium hover:from-cyan-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 cursor-default shadow-sm"
                            >
                                {highlight}
                            </motion.span>
                        ))}
                    </div>


                    {/* Кнопка действия */}
                    <motion.div
                        whileHover={{ x: 3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-between p-3 sm:p-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl cursor-pointer group/btn hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25"
                    >
                        <span className="text-white font-semibold text-xs sm:text-sm">Смотреть города</span>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white transform group-hover/btn:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}