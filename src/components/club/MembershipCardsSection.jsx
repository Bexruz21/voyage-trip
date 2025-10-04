import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { MembershipCard } from './MembershipCard';

const membershipCards = [
    {
        id: 'silver',
        name: "Silver",
        duration: "3 месяца",
        tours: "2 тура",
        price: "$300",
        description: "Идеальна для частых путешественников",
        features: [
            "Оригинальные цены туроператоров",
            "Доступ в закрытую Telegram-группу",
            "Базовые привилегии клуба"
        ],
        buttonText: "Выбрать Silver",
        popular: false,
        color: "from-gray-400 to-gray-600"
    },
    {
        id: 'gold',
        name: "Gold",
        duration: "6 месяцев",
        tours: "4 тура",
        price: "$500",
        description: "Для тех, кто хочет максимум удобства",
        features: [
            "Трансфер в аэропорт",
            "Telegram-группа Gold уровня",
            "Все привилегии Silver",
            "Приоритетное бронирование",
            "Персональный менеджер"
        ],
        buttonText: "Выбрать Gold",
        popular: true,
        color: "from-yellow-400 to-amber-400"
    },
    {
        id: 'platinum',
        name: "Platinum",
        duration: "12 месяцев",
        tours: "6 туров",
        price: "$700",
        description: "Максимум привилегий для взыскательных",
        features: [
            "Трансфер туда-обратно",
            "1 бесплатная экскурсия",
            "Участие в розыгрышах",
            "Все привилегии Gold",
            "Эксклюзивные предложения",
            "VIP поддержка 24/7"
        ],
        buttonText: "Выбрать Platinum",
        popular: false,
        color: "from-cyan-400 to-blue-400"
    }
];

export function MembershipCardsSection({ isClient, isJoining, selectedPlan, joinStatus, onJoinClick }) {
    return (
        <section className="py-16 bg-white/50" id='membership-cards-section'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                    Выберите свою <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">карту</span>
                </h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Подберите оптимальный уровень членства для вашего стиля путешествий
                </p>

                {/* Success Message - только на клиенте */}
                {isClient && (
                    <AnimatePresence>
                        {joinStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-center"
                            >
                                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                                <div className="text-lg font-semibold">Поздравляем! Вы успешно оформили клубную карту!</div>
                                <p>Наш менеджер свяжется с вами в течение часа для активации</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {membershipCards.map((card, index) => (
                        <MembershipCard
                            key={card.id}
                            card={card}
                            index={index}
                            isClient={isClient}
                            isJoining={isJoining}
                            selectedPlan={selectedPlan}
                            joinStatus={joinStatus}
                            onJoinClick={onJoinClick}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}