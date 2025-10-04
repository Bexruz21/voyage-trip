import { motion } from 'framer-motion';
import { Award, CheckCircle, Crown } from 'lucide-react';

export function MembershipCard({ card, index, isClient }) {
    const openTelegram = (planName) => {
        const message = `Здравствуйте! Я хочу оформить карту: ${planName}`;
        const telegramUrl = `https://t.me/voyagetrip?text=${encodeURIComponent(message)}`;
        window.open(telegramUrl, '_blank');
    };
    const cardContent = (
        <div className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 ${card.popular
            ? 'border-amber-400 shadow-2xl'
            : 'border-gray-100 hover:border-amber-200'
            }`}>
            {card.popular && (
                <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white p-3 rounded-full shadow-lg">
                        <Crown className="w-6 h-6" />
                    </div>
                </div>
            )}

            <div className="p-8">
                <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl mb-4`}>
                        <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.name}</h3>
                    <p className="text-gray-600 mb-2 italic">{card.description}</p>
                    <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-bold text-gray-900">{card.price}</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                        <div>Срок действия: {card.duration}</div>
                        <div>Количество туров: {card.tours}</div>
                    </div>
                </div>

                <ul className="space-y-4 mb-8">
                    {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>

                {isClient ? (
                    <motion.button
                        onClick={() => openTelegram(card.name)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${card.popular
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/25'
                                : 'bg-gradient-to-r from-gray-500 to-gray-700 text-white hover:shadow-lg'
                            }`}
                    >
                        {card.buttonText}
                    </motion.button>
                ) : (
                    <button
                        className={`w-full py-4 rounded-xl font-bold text-lg ${card.popular
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                            : 'bg-gradient-to-r from-gray-500 to-gray-700 text-white'
                            }`}
                    >
                        {card.buttonText}
                    </button>
                )}
            </div>
        </div>
    );

    if (!isClient) return cardContent;

    return (
        <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
        >
            {cardContent}
        </motion.div>
    );
}