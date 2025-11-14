import { motion } from 'framer-motion';
import { Building, Users, Star, Calendar, MapPin, Sparkles } from './icons/Icons';

export function HeroSection({ selectedRegion, selectedCountry, selectedCity }) {
    return (
        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                {!selectedRegion ? (
                    <div className="relative w-full h-full">
                        <img
                            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Путешествия по миру"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                ) : selectedRegion && !selectedCountry ? (
                    <div className="relative w-full h-full">
                        <img
                            src={selectedRegion.image}
                            alt={selectedRegion.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
                    </div>
                ) : selectedCountry && !selectedCity ? (
                    <div className="relative w-full h-full">
                        <img
                            src={selectedCountry.image}
                            alt={selectedCountry.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
                    </div>
                ) : selectedCity && (
                    <div className="relative w-full h-full">
                        <img
                            src={selectedCity.image}
                            alt={selectedCity.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
                    </div>
                )}

                {/* Дополнительный градиент поверх изображений */}
                {(selectedRegion || selectedCountry || selectedCity) && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />
                )}
            </div>

            {/* Контент */}
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center max-w-4xl mx-auto text-white"
                >
                    {!selectedRegion ? (
                        // Главная страница направлений
                        <div className="space-y-6 sm:space-y-8">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="space-y-4"
                            >
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-4">
                                    <Sparkles className="w-4 h-4" />
                                    <span className="text-sm font-medium">Исследуйте мир с нами</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    Все{' '}
                                    <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                                        направления
                                    </span>
                                </h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
                                >
                                    Откройте для себя уникальные уголки планеты. Каждое направление - это новая история,
                                    наполненная культурой, природными красотами и незабываемыми впечатлениями.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4"
                            >
                                <div className="flex items-center gap-2 text-sm sm:text-base opacity-80">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>7 регионов мира</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm sm:text-base opacity-80">
                                    <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>50+ стран</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm sm:text-base opacity-80">
                                    <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>100+ городов</span>
                                </div>
                            </motion.div>
                        </div>
                    ) : !selectedCountry ? (
                        <div className="space-y-6 sm:space-y-8">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-medium">{selectedRegion.region}</span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    {selectedRegion.name}
                                </h1>

                                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
                                    {selectedRegion.description}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap justify-center gap-2 sm:gap-3"
                            >
                                {selectedRegion.highlights.slice(0, 3).map((highlight, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.7 + idx * 0.1 }}
                                        className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                                    >
                                        {highlight}
                                    </motion.span>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base opacity-90"
                            >
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Лучшее время: {selectedRegion.bestTime}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Star className="w-4 h-4" />
                                    Рейтинг: {selectedRegion.stats.rating}
                                </span>
                            </motion.div>
                        </div>
                    ) : !selectedCity ? (
                        <div className="space-y-6 sm:space-y-8">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-medium">{selectedRegion.name}</span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    {selectedCountry.name}
                                </h1>

                                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
                                    {selectedCountry.description}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap justify-center gap-3 sm:gap-4"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30 flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
                                >
                                    <Building className="w-4 h-4" />
                                    Столица: {selectedCountry.capital}
                                </motion.span>
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30 flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
                                >
                                    <Users className="w-4 h-4" />
                                    Население: {selectedCountry.population}
                                </motion.span>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2"
                            >
                                {selectedCountry.highlights.slice(0, 2).map((highlight, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/20"
                                    >
                                        {highlight}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    ) : (
                        // Страница города
                        <div className="space-y-6 sm:space-y-8">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-medium">{selectedCountry.name}</span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    {selectedCity.name}
                                </h1>

                                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
                                    {selectedCity.description}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap justify-center gap-3 sm:gap-4"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30 flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
                                >
                                    <Star className="w-4 h-4" />
                                    Рейтинг: {selectedCity.rating}
                                </motion.span>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2"
                            >
                                {selectedCity.highlights.slice(0, 3).map((highlight, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/20"
                                    >
                                        {highlight}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}