'use client';

import { useState, useEffect } from 'react';

export default function ProfilePage() {
    const [user, setUser] = useState({
        name: 'Александр Иванов',
        email: 'alex.ivanov@example.com',
        membershipCard: {
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
            color: "from-yellow-400 to-amber-400",
            bonusRate: 5,
            purchasedDate: "15.12.2024", // ← ДОБАВЬ ЭТО
            validUntil: "15.12.2025"     // ← ДОБАВЬ ЭТО
        },
        voyageBalance: 3200,
        referrals: {
            count: 3,
            earned: 3200,
            link: 'VT-7284916',
            bonusRate: 5 // ← ИЗМЕНИ НА 5 чтобы соответствовало Gold карте
        }
    });

    const [hasMembershipCard, setHasMembershipCard] = useState(false);

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
            color: "from-gray-400 to-gray-600",
            bonusRate: 3
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
            color: "from-yellow-400 to-amber-400",
            bonusRate: 5
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
            color: "from-cyan-400 to-blue-400",
            bonusRate: 8
        }
    ];

    const [bookingHistory, setBookingHistory] = useState([
        {
            id: 1,
            tourName: "Тур в Дубай, ОАЭ",
            date: "10.01.2025",
            price: 120000,
            status: "completed",
            referralBonus: 2400,
            friendName: "Мария Петрова",
            type: "referral"
        },
        {
            id: 2,
            tourName: "Отдых на Бали, Индонезия",
            date: "25.12.2024",
            price: 80000,
            status: "completed",
            referralBonus: 1600,
            friendName: "Иван Сидоров",
            type: "referral"
        },
        {
            id: 3,
            tourName: "Экскурсия по Европе",
            date: "15.02.2025",
            price: 150000,
            status: "upcoming",
            referralBonus: 0,
            type: "personal"
        },
        {
            id: 4,
            tourName: "Горнолыжный курорт в Швейцарии",
            date: "05.01.2025",
            price: 90000,
            status: "completed",
            cashback: 1800,
            type: "personal"
        }
    ]);

    const [copied, setCopied] = useState(false);

    const copyReferralLink = () => {
        navigator.clipboard.writeText(user.referrals.link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Иконки
    const UserIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );

    const WalletIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    );

    const ReferralIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    );

    const CopyIcon = () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
    );

    const InfoIcon = () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    const CardIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    );

    const HistoryIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    const CheckIcon = () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );

    const GiftIcon = () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
    );

    const EmailIcon = () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );

    const CashbackIcon = () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
    );

    const getStatusBadge = (status) => {
        const styles = {
            completed: "bg-green-100 text-green-800 border-green-200",
            upcoming: "bg-blue-100 text-blue-800 border-blue-200",
            cancelled: "bg-red-100 text-red-800 border-red-200"
        };
        const labels = {
            completed: "Завершен",
            upcoming: "Предстоящий",
            cancelled: "Отменен"
        };

        return (
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    const getBookingTypeBadge = (type) => {
        const styles = {
            personal: "bg-purple-100 text-purple-800 border-purple-200",
            referral: "bg-orange-100 text-orange-800 border-orange-200"
        };
        const labels = {
            personal: "Мой тур",
            referral: "Тур друга"
        };

        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[type]}`}>
                {labels[type]}
            </span>
        );
    };

    // Компонент для пользователей без клубной карты - Voyage Balance Guest
    const NoMembershipCard = () => (
        <div className="space-y-6">
            {/* Основной баннер */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GiftIcon />
                </div>
                <h3 className="text-2xl font-bold mb-3">Voyage Balance Guest</h3>
                <p className="text-blue-100 mb-6 max-w-md mx-auto text-lg">
                    "Даже если вы не член клуба, Voyage Trip благодарит вас за выбор — получайте 2% кешбэк на следующее путешествие!"
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                    Стать членом клуба
                </button>
            </div>

            {/* Привилегии гостя */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <CashbackIcon />
                    </div>
                    Привилегии Voyage Balance Guest
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-sm font-bold">2%</span>
                        </div>
                        <div>
                            <p className="font-semibold text-blue-800">Кешбэк на следующую покупку</p>
                            <p className="text-blue-700 text-sm">Используется только при следующем туре</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-sm">12</span>
                        </div>
                        <div>
                            <p className="font-semibold text-green-800">Накопление до 12 месяцев</p>
                            <p className="text-green-700 text-sm">Кешбэк действует целый год</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <EmailIcon />
                        </div>
                        <div>
                            <p className="font-semibold text-purple-800">E-mail рассылка и предложения</p>
                            <p className="text-purple-700 text-sm">Эксклюзивные предложения для подписчиков</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-sm font-bold">$10</span>
                        </div>
                        <div>
                            <p className="font-semibold text-orange-800">Бонус за приглашение друга</p>
                            <p className="text-orange-700 text-sm">За каждого приглашенного друга</p>
                        </div>
                    </div>
                </div>

                {/* Важное примечание */}
                <div className="mt-4 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">!</span>
                        </div>
                        <div>
                            <p className="font-semibold text-yellow-800">Важно</p>
                            <p className="text-yellow-700 text-sm">
                                Кешбэк используется только при следующем туре, не обменивается на деньги.
                                Для получения повышенных бонусов и привилегий станьте членом клуба.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Сравнение с клубными картами */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Что вы получите с клубной картой?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-2">3-8%</div>
                        <p className="text-gray-700 font-semibold">Бонусов с друзей</p>
                        <p className="text-gray-600 text-sm">Вместо 2%</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-2">5-12</div>
                        <p className="text-gray-700 font-semibold">Месяцев действия</p>
                        <p className="text-gray-600 text-sm">Карты</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-2">Эксклюзив</div>
                        <p className="text-gray-700 font-semibold">Привилегии</p>
                        <p className="text-gray-600 text-sm">И сервис</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // Проверяем наличие карты через user.membershipCard
    const hasCard = !!user.membershipCard;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                        <UserIcon />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Мой профиль</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {hasCard
                            ? "Управляйте вашей клубной картой, отслеживайте бонусы Voyage Balance и историю бронирований"
                            : "Отслеживайте ваш кешбэк Voyage Balance, приглашайте друзей и откройте все преимущества клуба"
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Левая колонка - Основная информация */}
                    <div className="xl:col-span-2 space-y-8">
                        {/* Карточка Voyage Balance */}
                        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                                        <WalletIcon />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                                        <p className="text-gray-600">{user.email}</p>
                                        {!hasCard && (
                                            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-1">
                                                Voyage Balance Guest
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center space-x-2 justify-end mb-2">
                                        <span className="text-sm font-semibold text-gray-500">Voyage Balance</span>
                                    </div>
                                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                        {user.voyageBalance.toLocaleString('ru-RU')} ₽
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {hasCard ? "Бонусный счет" : "Кешбэк на следующий тур"}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <InfoIcon />
                                    <div>
                                        <p className="font-semibold text-blue-800 mb-1">
                                            {hasCard ? "Как пополняется Voyage Balance?" : "Как работает кешбэк?"}
                                        </p>
                                        <p className="text-blue-700 text-sm">
                                            {hasCard
                                                ? `За каждого приглашенного друга, который приобретет турпакет, вам начисляется ${user.referrals.bonusRate}% от стоимости его заказа на ваш Voyage Balance.`
                                                : "За каждого приглашенного друга вы получаете 2% кешбэк от стоимости его тура. Кешбэк можно использовать только для оплаты вашего следующего путешествия."
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Реферальная программа */}
                        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                                    <ReferralIcon />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Реферальная программа</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-blue-600 font-semibold">Приглашено друзей</span>
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600 font-bold text-sm">{user.referrals.count}</span>
                                        </div>
                                    </div>
                                    <p className="text-3xl font-bold text-gray-800">{user.referrals.count}</p>
                                    <p className="text-sm text-gray-600 mt-1">активных рефералов</p>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-green-600 font-semibold">
                                            {hasCard ? "Заработано бонусов" : "Накоплено кешбэка"}
                                        </span>
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="text-green-600 font-bold text-sm">₽</span>
                                        </div>
                                    </div>
                                    <p className="text-3xl font-bold text-gray-800">
                                        {user.referrals.earned.toLocaleString('ru-RU')} ₽
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {hasCard ? "на Voyage Balance" : "на следующий тур"}
                                    </p>
                                </div>
                            </div>

                            {/* Реферальная ссылка */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Ваша реферальная ссылка
                                </label>
                                <div className="flex gap-3">
                                    <div className="flex-1 bg-gray-50 rounded-xl px-4 py-4 font-mono text-gray-800 border border-gray-200 text-lg">
                                        {user.referrals.link}
                                    </div>
                                    <button
                                        onClick={copyReferralLink}
                                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center space-x-2 shadow-lg"
                                    >
                                        <CopyIcon />
                                        <span>{copied ? 'Скопировано!' : 'Копировать'}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Как работает реферальная программа */}
                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                                <h4 className="font-bold text-orange-800 text-lg mb-3">Как работает реферальная программа?</h4>
                                <div className="space-y-3 text-orange-700">
                                    <div className="flex items-start space-x-2">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p>Дайте другу вашу реферальную ссылку <span className="font-mono font-bold">{user.referrals.link}</span></p>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p>Друг должен указать ваш код <span className="font-mono font-bold">{user.referrals.link}</span> в поле "Реферальный код" при регистрации</p>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p>После того как друг купит любой турпакет, вам начисляется <span className="font-bold">{user.referrals.bonusRate}%</span> от стоимости тура {hasCard ? "на Voyage Balance" : "в виде кешбэка"}</p>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p>
                                            {hasCard
                                                ? "Бонусы начисляются автоматически и могут быть использованы для оплаты ваших будущих путешествий"
                                                : "Кешбэк можно использовать только для оплаты следующего тура, не обменивается на деньги"
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* История бронирований */}
                        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                                    <HistoryIcon />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">История бронирований</h3>
                            </div>

                            <div className="space-y-4">
                                {bookingHistory.map((booking) => (
                                    <div key={booking.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h4 className="text-lg font-semibold text-gray-800">{booking.tourName}</h4>
                                                    {getBookingTypeBadge(booking.type)}
                                                </div>
                                                <p className="text-gray-600 text-sm">Дата: {booking.date}</p>
                                                {booking.friendName && (
                                                    <p className="text-blue-600 text-sm">Приглашенный друг: {booking.friendName}</p>
                                                )}
                                            </div>
                                            <div className="text-right">
                                                {getStatusBadge(booking.status)}
                                                <p className="text-xl font-bold text-gray-800 mt-2">
                                                    {booking.price.toLocaleString('ru-RU')} ₽
                                                </p>
                                            </div>
                                        </div>

                                        {(booking.referralBonus > 0 || booking.cashback > 0) && (
                                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-green-700 font-semibold">
                                                        {booking.type === 'referral' ? 'Бонус на Voyage Balance' : 'Кешбэк на следующий тур'}
                                                    </span>
                                                    <span className="text-lg font-bold text-green-600">
                                                        +{(booking.referralBonus || booking.cashback).toLocaleString('ru-RU')} ₽
                                                    </span>
                                                </div>
                                                <p className="text-sm text-green-600 mt-1">
                                                    Начислено {user.referrals.bonusRate}% от стоимости тура
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка */}
                    <div className="space-y-8">
                        {/* Блок клубной карты или гостевого статуса */}
                        {hasCard ? (
                            /* Моя клубная карта */
                            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                                        <CardIcon />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Моя клубная карта</h3>
                                </div>
                                
                                <div className={`bg-gradient-to-r ${user.membershipCard.color} rounded-2xl p-6 text-white mb-6 relative overflow-hidden`}>
                                    <div className="absolute top-4 right-4 opacity-20">
                                        <CardIcon />
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="text-2xl font-bold mb-2">{user.membershipCard.name}</h4>
                                        <p className="text-blue-50 opacity-90">Активна до {user.membershipCard.validUntil}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-lg font-semibold">{user.membershipCard.tours}</p>
                                            <p className="text-blue-50 text-sm">доступно туров</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xl font-bold">Бонус {user.membershipCard.bonusRate}%</p>
                                            <p className="text-blue-50 text-sm">с каждого заказа друга</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                        <span className="text-gray-600">Дата покупки:</span>
                                        <span className="font-semibold">{user.membershipCard.purchasedDate}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                        <span className="text-gray-600">Действует до:</span>
                                        <span className="font-semibold">{user.membershipCard.validUntil}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-gray-600">Бонусная ставка:</span>
                                        <span className="font-semibold text-green-600 text-lg">{user.membershipCard.bonusRate}%</span>
                                    </div>
                                </div>

                                <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
                                    <h5 className="font-semibold text-blue-800 mb-2">Привилегии вашей карты:</h5>
                                    <ul className="space-y-2">
                                        {user.membershipCard.features.slice(0, 3).map((feature, index) => (
                                            <li key={index} className="flex items-center space-x-2 text-sm text-blue-700">
                                                <CheckIcon />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            /* Компонент для пользователей без карты - Voyage Balance Guest */
                            <NoMembershipCard />
                        )}

                        {/* Доступные карты */}
                        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">
                                {hasCard ? 'Другие клубные карты' : 'Откройте все преимущества'}
                            </h3>

                            <div className="space-y-4">
                                {membershipCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`border-2 rounded-xl p-4 transition-all duration-200 ${user.membershipCard?.id === card.id
                                            ? 'border-blue-500 bg-blue-50 shadow-md'
                                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{card.name}</h4>
                                                <p className="text-sm text-gray-600">{card.duration} • {card.tours}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-bold text-gray-800">{card.price}</p>
                                                <p className="text-sm text-green-600">Бонус {card.bonusRate}%</p>
                                            </div>
                                        </div>
                                        <button
                                            className={`w-full py-2 rounded-lg font-semibold transition-colors ${user.membershipCard?.id === card.id
                                                ? 'bg-gray-500 text-white cursor-not-allowed'
                                                : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                                                }`}
                                            disabled={user.membershipCard?.id === card.id}
                                        >
                                            {user.membershipCard?.id === card.id ? 'Активна' : card.buttonText}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}