import { motion } from 'framer-motion';
import { Building, Users, Language, Currency, MapPin, Clock, Star } from './icons/Icons';

const Mountain = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
);

const PalmTree = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const Landmark = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

export function CountryInfo({ country }) {
    return (
        <div className="pt-8 pb-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Левая часть - изображение с эффектами */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 relative"
                    >
                        <div className="relative group">
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                                <img
                                    src={country.image}
                                    alt={country.name}
                                    className="w-full h-[300px] sm:h-[350px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 mix-blend-overlay" />
                            </div>

                            {/* Лучшее время для посещения */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg sm:shadow-xl"
                            >
                                <div className="flex items-center gap-1 sm:gap-2 text-white text-xs sm:text-sm font-bold whitespace-nowrap">
                                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                    <span className="hidden xs:inline">Лучшее время:</span>
                                    <span>{country.bestTime}</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Правая часть - информация */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Заголовок и описание */}
                        <div className="text-center lg:text-left space-y-3 sm:space-y-4">
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent leading-tight sm:leading-tight lg:leading-tight px-2 sm:px-0"
                            >
                                {country.name}
                            </motion.h1>

                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-base sm:text-lg text-gray-600 leading-relaxed sm:leading-relaxed font-medium px-2 sm:px-0"
                            >
                                {country.description}
                            </motion.p>
                        </div>

                        {/* Основная статистика */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                        >
                            <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-blue-200 group hover:bg-blue-100 transition-all duration-300">
                                <div className="text-blue-600 flex items-center gap-1">
                                    <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Столица</div>
                                    <div className="text-sm sm:text-base font-bold text-blue-700">{country.capital}</div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 sm:gap-3 bg-green-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-green-200 group hover:bg-green-100 transition-all duration-300">
                                <div className="text-green-600 flex items-center gap-1">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-green-500 uppercase tracking-wide">Население</div>
                                    <div className="text-sm sm:text-base font-bold text-green-700">{country.population}</div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 sm:gap-3 bg-amber-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-amber-200 group hover:bg-amber-100 transition-all duration-300">
                                <div className="text-amber-600 flex items-center gap-1">
                                    <Language className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Язык</div>
                                    <div className="text-sm sm:text-base font-bold text-amber-700">{country.language}</div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 sm:gap-3 bg-purple-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-purple-200 group hover:bg-purple-100 transition-all duration-300">
                                <div className="text-purple-600 flex items-center gap-1">
                                    <Currency className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-purple-500 uppercase tracking-wide">Валюта</div>
                                    <div className="text-sm sm:text-base font-bold text-purple-700">{country.currency}</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Особенности с иконками */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-3"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 text-amber-600 rounded-lg flex items-center justify-center">
                                    <Star className="w-3 h-3" />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Ключевые особенности</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {country.highlights?.slice(0, 4).map((highlight, index) => (
                                    <div
                                        key={index}
                                        className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-xl border border-cyan-200 hover:bg-cyan-100 transition-all duration-300 group cursor-default"
                                    >
                                        <div className="text-cyan-600">
                                            {index === 0 && <Mountain className="w-4 h-4" />}
                                            {index === 1 && <PalmTree className="w-4 h-4" />}
                                            {index === 2 && <Landmark className="w-4 h-4" />}
                                            {index === 3 && <Star className="w-4 h-4" />}
                                        </div>
                                        <span className="text-cyan-700 font-medium text-sm whitespace-nowrap">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}