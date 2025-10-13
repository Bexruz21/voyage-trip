import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { MembershipCard } from './MembershipCard';

const membershipCards = [
    {
        id: 'silver',
        name: "Silver Membership",
        duration: "5 месяцев",
        tours: "До 3 туров",
        price: "$500",
        description: "Оптимальный старт для тех, кто хочет путешествовать честно и со статусом клуба.",
        features: [
            "Доступ к оригинальным ценам туроператоров",
            "Приоритет в обработке заявок",
            "Доступ в личный кабинет Voyage Trip (история, статусы, баланс)",
            "Возможность участия в сезонных акциях Voyage Trip",
            "Разовый бонус $25 Voyage Balance при активации карты"
        ],
        buttonText: "Выбрать Silver",
        popular: false,
        color: "from-gray-400 to-gray-600"
    },
    {
        id: 'gold',
        name: "Gold Membership",
        duration: "12 месяцев",
        tours: "До 5 туров",
        price: "$1000",
        description: "Комфорт и статус для уверенных путешественников, где престиж становится стандартом.",
        features: [
            "Всё, что в Silver",
            "Один трансфер до аэропорта (для 2 человек)",
            "Ваучер $100 (на Fast Track, VIP-зал, апгрейд номера или экскурсию)",
            "Доступ в закрытую Telegram-группу Voyage Club",
            "Приоритетное обслуживание",
            "Участие в бонусных розыгрышах 2 раза в год"
        ],
        buttonText: "Выбрать Gold",
        popular: true,
        color: "from-yellow-400 to-amber-400"
    },
    {
        id: 'platinum',
        name: "Platinum Membership",
        duration: "12 месяцев",
        tours: "До 8 туров",
        price: "$2000",
        limit: "30 карт в год",
        description: "Уровень доверия и привилегий. Программа для тех, кто ценит личный сервис, комфорт и престиж.",
        features: [
            "Всё, что в Gold",
            "Личный консьерж Voyage Manager",
            "Ваучер $200 (Fast Track, Lounge, апгрейд отеля, частный трансфер и т.д.)",
            "Приоритетное бронирование и гарантированная поддержка 24/7",
            "Эксклюзивная Platinum-группа с персональным куратором",
            "Участие в ежегодных розыгрышах (часы, техника, путешествия)",
            "Приглашения на закрытые встречи Voyage Trip Club"
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