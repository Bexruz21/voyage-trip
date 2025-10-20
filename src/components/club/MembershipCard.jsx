import { motion } from 'framer-motion';
import { CheckCircle, Crown, Star, Gem, Calendar, Plane, ArrowRight } from 'lucide-react';

export function MembershipCard({ card }) {

    const openTelegram = (planName) => {
        const message = `Здравствуйте! Я хочу оформить карту: ${planName}`;
        const telegramUrl = `https://t.me/voyagetrip?text=${encodeURIComponent(message)}`;
        window.open(telegramUrl, '_blank');
    };

    const cardConfig = {
        silver: {
            icon: Star,
            color: '#4b5563',
        },
        gold: {
            icon: Crown,
            color: '#f59e0b',
        },
        platinum: {
            icon: Gem,
            color: '#6366f1',
        }
    };


    const config = cardConfig[card.code] || cardConfig.silver;
    const IconComponent = config.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div
                className="relative h-full bg-white rounded-2xl border-2 hover:shadow-xl transition-all duration-300 flex flex-col"
                style={{ borderColor: config.color }}
            >
                {card.popular && (
                    <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: config.color }}
                    >
                        ПОПУЛЯРНО
                    </div>
                )}

                <div className="p-8 flex flex-col h-full">
                    {/* Иконка и название */}
                    <div className="flex flex-col items-center mb-6">
                        <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                            style={{ backgroundColor: config.color }}
                        >
                            <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>

                        <h3
                            className="text-2xl font-bold mb-2"
                            style={{ color: config.color }}
                        >
                            {card.name}
                        </h3>

                        <p className="text-gray-600 text-sm text-center leading-relaxed">
                            {card.description}
                        </p>
                    </div>

                    {/* Цена */}
                    <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-gray-900 mb-4">
                            ${card.price}
                        </div>

                        <div className="flex items-center justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="w-4 h-4" style={{ color: config.color }} />
                                <span>{card.duration_months} мес</span>
                            </div>

                            <div className="w-px h-4 bg-gray-300"></div>

                            <div className="flex items-center gap-2 text-gray-600">
                                <Plane className="w-4 h-4" style={{ color: config.color }} />
                                <span>{card.max_tours} туров</span>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="flex-grow mb-6 min-h-[280px]">
                        <div className="space-y-3">
                            {card.features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle
                                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                                        style={{ color: config.color }}
                                        strokeWidth={2}
                                    />
                                    <span className="text-gray-700 text-sm leading-relaxed">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Кнопка */}
                    <motion.button
                        onClick={() => openTelegram(card.name)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                        style={{ backgroundColor: config.color }}
                    >
                        <span>Выбрать</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}