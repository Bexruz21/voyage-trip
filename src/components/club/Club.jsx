"use client"

import { useState } from 'react';
import { Home, Plane, Crown, Users, Star, Gift, Shield, Key, Zap, Car, Ticket, Award, Heart, DollarSign, Smartphone, CheckCircle, Calendar, ArrowRight, Sparkles, MapPin, Globe } from 'lucide-react';

const stats = [
    { icon: Users, value: "100+", label: "Участников клуба", color: "bg-blue-500" },
    { icon: Star, value: "98%", label: "Довольных клиентов", color: "bg-amber-500" },
    { icon: Gift, value: "50+", label: "Выданных бонусов", color: "bg-emerald-500" },
    { icon: Shield, value: "24/7", label: "Поддержка", color: "bg-purple-500" }
];

const targetAudience = [
    {
        icon: MapPin,
        title: "Для эпизодических путешественников",
        description: "Кто путешествует 1–2 раза в год и хочет получать туры без переплат",
        color: "bg-blue-50",
        iconColor: "text-blue-600",
        borderColor: "border-blue-200"
    },
    {
        icon: Home,
        title: "Для семей с детьми",
        description: "Которые ценят комфорт и дополнительные услуги",
        color: "bg-emerald-50",
        iconColor: "text-emerald-600",
        borderColor: "border-emerald-200"
    },
    {
        icon: Globe,
        title: "Для часто путешествующих",
        description: "Кому важны приоритет и эксклюзивные предложения",
        color: "bg-purple-50",
        iconColor: "text-purple-600",
        borderColor: "border-purple-200"
    },
    {
        icon: Crown,
        title: "Для первых в очереди",
        description: "Кто хочет быть первым, узнавать о горящих турах и участвовать в закрытых предложениях",
        color: "bg-amber-50",
        iconColor: "text-amber-600",
        borderColor: "border-amber-200"
    }
];

const cardFeatures = [
    {
        icon: Key,
        title: "Личный ключ к особым условиям",
        description: "Эксклюзивный формат участия в туристическом клубе",
        color: "bg-purple-500"
    },
    {
        icon: Zap,
        title: "Прозрачность и комфорт",
        description: "Доступ к оригинальным ценам туроператоров без наценок",
        color: "bg-blue-500"
    },
    {
        icon: Car,
        title: "Трансферные услуги",
        description: "Комфортные поездки из дома в аэропорт и обратно",
        color: "bg-emerald-500"
    },
    {
        icon: Ticket,
        title: "Закрытые предложения",
        description: "Ранний доступ к горящим турам и эксклюзивным предложениям",
        color: "bg-rose-500"
    },
    {
        icon: Award,
        title: "Личный кабинет",
        description: "Отслеживание оставшихся туров, срока действия и бонусов",
        color: "bg-indigo-500"
    },
    {
        icon: Heart,
        title: "Для семьи и друзей",
        description: "Возможность оформлять туры для близких людей",
        color: "bg-pink-500"
    }
];

const cards = [
    {
        id: 1,
        code: 'silver',
        name: 'Silver',
        description: 'Идеально для начала путешествий',
        price: 99,
        duration_months: 12,
        discount_tours: 3,
        extra_discount_tours: 2,
        features: [
            'Доступ к оригинальным ценам туроператоров',
            'Приоритетное бронирование туров',
            '5 туров со скидкой в год',
            'Личный кабинет с отслеживанием',
            'Поддержка 24/7'
        ]
    },
    {
        id: 2,
        code: 'gold',
        name: 'Gold',
        description: 'Для активных путешественников',
        price: 199,
        duration_months: 12,
        discount_tours: 6,
        extra_discount_tours: 4,
        popular: true,
        features: [
            'Все преимущества Silver',
            '10 туров со скидкой в год',
            'Бесплатный трансфер (1 раз)',
            'Ранний доступ к горящим турам',
            'Эксклюзивные предложения',
            'Бонусная программа для друзей'
        ]
    },
    {
        id: 3,
        code: 'platinum',
        name: 'Platinum',
        description: 'Максимум привилегий',
        price: 399,
        duration_months: 12,
        discount_tours: 12,
        extra_discount_tours: 8,
        features: [
            'Все преимущества Gold',
            'Неограниченные туры со скидкой',
            'Бесплатный трансфер (3 раза)',
            'VIP поддержка',
            'Индивидуальные предложения',
            'Максимальные бонусы',
            'Приоритет в любых ситуациях'
        ]
    }
];

const cardConfig = {
    silver: {
        color: '#64748b',
        bg: 'bg-slate-500',
        border: 'border-slate-500',
        text: 'text-slate-600',
        lightBg: 'bg-slate-50'
    },
    gold: {
        color: '#f59e0b',
        bg: 'bg-amber-500',
        border: 'border-amber-500',
        text: 'text-amber-600',
        lightBg: 'bg-amber-50'
    },
    platinum: {
        color: '#8b5cf6',
        bg: 'bg-purple-500',
        border: 'border-purple-500',
        text: 'text-purple-600',
        lightBg: 'bg-purple-50'
    }
};

export default function VoyageClubPage() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const scrollToMembership = () => {
        const element = document.getElementById('membership-cards-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openTelegram = (planName) => {
        const message = `Здравствуйте! Я хочу оформить карту: ${planName}`;
        const telegramUrl = `https://t.me/voyagetrip?text=${encodeURIComponent(message)}`;
        window.open(telegramUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 to-blue-50">
            {/* Hero Section */}
            <section className="pt-24 pb-20">
                <div className="inline-flex my-auto text-center items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
                    <Sparkles className="w-4 h-4 text-sky-500" />
                    <span className="text-sm font-medium text-gray-700">Элитный клуб путешественников</span>
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center">

                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-xs font-medium mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            VOYAGE TRIP
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
                            Клубная <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">карта</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-light">
                            Путешествуйте с привилегиями и доступом к оригинальным ценам
                        </p>

                        <button
                            onClick={scrollToMembership}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                        >
                            Выбрать карту
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                                <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} rounded-xl mb-3 group-hover:scale-110 transition-transform`}>
                                    <stat.icon className="w-6 h-6 text-white" strokeWidth={2} />
                                </div>
                                <div className="text-3xl font-light text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border border-blue-100">
                        <div className="space-y-6 text-center">
                            <p className="text-lg text-gray-700 leading-relaxed font-light">
                                Клубная карта Voyage Trip — это <span className="font-medium text-blue-600">эксклюзивный формат участия</span> в нашем туристическом клубе,
                                созданный для тех, кто ценит прозрачность, комфорт и особые привилегии при организации путешествий.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed font-light">
                                Став владельцем карты, вы получаете доступ к <span className="font-medium text-purple-600">оригинальным ценам туроператоров</span>, приоритетным предложениям,
                                бонусам и сервисам, недоступным обычным туристам.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-gray-900 mb-3">
                            Для кого подходит карта
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {targetAudience.map((audience, index) => (
                            <div key={index} className={`${audience.color} rounded-2xl p-8 border-2 ${audience.borderColor} group hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                                <div className={`inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl ${audience.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                                    <audience.icon className="w-6 h-6" strokeWidth={2} />
                                </div>
                                <h3 className={`text-xl font-medium ${audience.iconColor} mb-3`}>
                                    {audience.title}
                                </h3>
                                <p className="text-gray-700 font-light leading-relaxed">
                                    {audience.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Card Features */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-light text-center text-gray-900 mb-3">
                        Что даёт карта
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-16"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cardFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.color} rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                                    <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm font-light leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership Cards */}
            <section className="py-20" id="membership-cards-section">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-light text-center text-gray-900 mb-3">
                        Выберите свою карту
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-16"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                onMouseEnter={() => setHoveredCard(card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`relative bg-white rounded-2xl border-2 shadow-sm transition-all duration-300 flex flex-col ${hoveredCard === card.id ? `shadow-xl -translate-y-2 ${cardConfig[card.code].border}` : 'border-gray-200'
                                    } ${card.popular ? 'lg:scale-105' : ''}`}
                            >
                                {card.popular && (
                                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 ${cardConfig[card.code].bg} text-white text-xs font-medium rounded-full shadow-lg`}>
                                        ⭐ ПОПУЛЯРНО
                                    </div>
                                )}

                                <div className={`p-8 flex flex-col h-full ${hoveredCard === card.id ? cardConfig[card.code].lightBg : ''} transition-colors rounded-2xl`}>
                                    <div className="mb-8">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 ${cardConfig[card.code].bg} rounded-xl mb-4 ${hoveredCard === card.id ? 'scale-110 rotate-3' : ''} transition-all`}>
                                            <Plane className="w-7 h-7 text-white" strokeWidth={2} />
                                        </div>
                                        <h3 className={`text-2xl font-medium ${cardConfig[card.code].text} mb-2`}>
                                            {card.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm font-light">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="text-4xl font-light text-gray-900 mb-4">
                                            ${card.price}
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{card.duration_months} мес</span>
                                            </div>
                                            <div className="w-px h-4 bg-gray-300"></div>
                                            <div className="flex items-center gap-1">
                                                <Plane className="w-4 h-4" />
                                                <span>{card.discount_tours + card.extra_discount_tours} туров</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow mb-8">
                                        <div className="space-y-3">
                                            {card.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${cardConfig[card.code].text}`} strokeWidth={2} />
                                                    <span className="text-gray-700 text-sm font-light leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => openTelegram(card.name)}
                                        className={`w-full py-3.5 ${cardConfig[card.code].bg} text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105`}
                                    >
                                        <span>Выбрать</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why It's Beneficial */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-light text-center text-gray-900 mb-16">
                        Почему это выгодно
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-xl mb-6">
                                <DollarSign className="w-8 h-8 text-white" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-3">Без переплат</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                Вы не переплачиваете агентствам — покупаете туры по реальной цене
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-xl mb-6">
                                <Gift className="w-8 h-8 text-white" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-3">Дополнительные сервисы</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                Получаете сервисы, которые обычно оформляются отдельно
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-pink-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-xl mb-6">
                                <Smartphone className="w-8 h-8 text-white" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-3">Все под рукой</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                Личный кабинет, прозрачные условия и поддержка 24/7
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6">
                        <Key className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    <h2 className="text-4xl font-light text-gray-900 mb-6">
                        Готовы получить свою карту?
                    </h2>

                    <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
                        Клубная карта Voyage Trip — это ваш способ путешествовать умнее, комфортнее и с привилегиями.
                        Присоединяйтесь к сообществу путешественников нового поколения.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToMembership}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                        >
                            Получить карту
                        </button>

                        <button className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-lg text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                            Получить консультацию
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}