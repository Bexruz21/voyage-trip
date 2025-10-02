// components/FaqContent.js
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    HelpCircle,
    Phone,
    Mail,
    MessageCircle,
    Shield,
    CheckCircle,
    Star,
    Zap,
    CreditCard,
    Plane
} from 'lucide-react';

function FaqContent() {
    const [openItems, setOpenItems] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [isClient, setIsClient] = useState(false);

    const categories = [
        { id: 'all', name: 'Все вопросы', count: 12, icon: HelpCircle },
        { id: 'booking', name: 'Бронирование', count: 4, icon: CreditCard },
        { id: 'documents', name: 'Документы', count: 3, icon: Shield },
        { id: 'travel', name: 'Путешествие', count: 3, icon: Plane },
        { id: 'payments', name: 'Оплата', count: 2, icon: CheckCircle }
    ];

    const faqItems = [
        {
            id: 1,
            question: "Как забронировать тур?",
            answer: "Вы можете забронировать тур несколькими способами:\n\n• Онлайн через наш сайт - выберите направление, даты и заполните форму\n• По телефону +7 (495) 123-45-67 - наши менеджеры помогут с выбором\n• В нашем офисе в Москве - приходите для персональной консультации\n\nДля бронирования потребуется предоплата 30% от стоимости тура. После бронирования вы получите подтверждение на email и все необходимые документы.",
            category: "booking",
            popular: true
        },
        {
            id: 2,
            question: "Какие документы нужны для путешествия?",
            answer: "Основные документы для путешествия:\n\n• Загранпаспорт, действующий не менее 6 месяцев после окончания поездки\n• Виза (для стран с визовым режимом)\n• Медицинская страховка\n• Авиабилеты\n• Ваучер на отель\n• Водительские права (при аренде авто)\n\nМы помогаем с оформлением виз и всех необходимых документов. За 30 дней до вылета наш менеджер напомнит о необходимости проверки документов.",
            category: "documents",
            popular: true
        },
        {
            id: 3,
            question: "Можно ли изменить даты тура после бронирования?",
            answer: "Да, изменение дат возможно при следующих условиях:\n\n• Изменения должны быть сделаны не менее чем за 30 дней до вылета\n• При наличии свободных мест в отеле и на рейсе\n• Взимается административный сбор в размере 2000 рублей\n• Разница в стоимости тура оплачивается дополнительно\n\nДля изменения дат свяжитесь с вашим менеджером. В высокий сезон изменения могут быть ограничены.",
            category: "booking"
        },
        {
            id: 4,
            question: "Что включено в стоимость тура?",
            answer: "Стандартный пакет услуг включает:\n\n✓ Авиаперелет (эконом класс)\n✓ Проживание в отеле выбранной категории\n✓ Трансферы аэропорт-отель-аэропорт\n✓ Питание по программе (обычно завтраки)\n✓ Медицинская страховка\n✓ Услуги гида/сопровождающего\n\nДополнительно оплачиваются:\n• Виза и визовые сборы\n• Дополнительные экскурсии\n• Личные расходы\n• Доплата за улучшение номера\n• Гарантийный депозит в отеле",
            category: "booking",
            popular: true
        },
        {
            id: 5,
            question: "Как происходит оплата тура?",
            answer: "Доступные способы оплаты:\n\n• Банковской картой (Visa, Mastercard, Мир)\n• Через интернет-банкинг\n• Наличными в нашем офисе\n• Безналичный расчет для юридических лиц\n• Рассрочка платежа на 3-6 месяцев\n\nГрафик оплаты:\n• 30% - при бронировании\n• 70% - за 21 день до вылета\n\nВсе платежи защищены SSL-шифрованием. Вы получаете полный пакет документов.",
            category: "payments"
        },
        {
            id: 6,
            question: "Какие гарантии вы предоставляете?",
            answer: "Наши гарантии:\n\n🔒 Финансовая безопасность - все средства застрахованы\n🏆 Лучшая цена гарантирована - если найдете дешевле, вернем разницу\n📞 Круглосуточная поддержка в путешествии\n🎯 Персональный менеджер на всех этапах\n✈️ Гарантия вылета - 99,8% выполненных рейсов\n\nМы работаем только с проверенными партнерами и имеем все необходимые лицензии туроператора.",
            category: "documents"
        },
        {
            id: 7,
            question: "Как происходит встреча в аэропорту?",
            answer: "Организация встречи:\n\n• После получения багажа вы выходите в зону прилета\n• Наш представитель встречает вас с табличкой VOYAGE TRIP\n• Трансфер до отеля на комфортабельном автомобиле\n• В дороге гид расскажет о стране и ответит на вопросы\n• При необходимости поможем с заселением в отель\n\nВажно: сохраните контакты менеджера для связи при задержках рейса.",
            category: "travel"
        },
        {
            id: 8,
            question: "Можно ли отменить тур?",
            answer: "Условия отмены тура:\n\n• За 45 дней до вылета - полный возврат средств\n• За 30-45 дней - удерживается 30% стоимости\n• За 15-29 дней - удерживается 50% стоимости\n• За 1-14 дней - удерживается 100% стоимости\n\nИсключения:\n• Болезнь (при наличии справки) - особые условия\n• Форс-мажорные обстоятельства\n\nРекомендуем оформлять страховку от невыезда.",
            category: "booking"
        },
        {
            id: 9,
            question: "Как выбрать страну для первого путешествия?",
            answer: "Рекомендации для новичков:\n\n🌴 Для пляжного отдыха: Таиланд, Вьетнам, Греция\n🏛️ Для экскурсий: Италия, Франция, Чехия\n🌏 Для экзотики: ОАЭ, Мальдивы, Доминикана\n⛰️ Для природы: Норвегия, Швейцария, Исландия\n\nНаши менеджеры помогут подобрать страну исходя из:\n• Вашего бюджета\n• Предпочтений в отдыхе\n• Сезона путешествия\n• Опыта предыдущих поездок",
            category: "travel",
            popular: true
        },
        {
            id: 10,
            question: "Что делать в случае проблем в путешествии?",
            answer: "Алгоритм действий при проблемах:\n\n1. Немедленно свяжитесь с вашим менеджером по телефону горячей линии\n2. Сообщите о ситуации и вашем местоположении\n3. Следуйте инструкциям менеджера\n4. Сохраняйте все чеки и документы\n5. При необходимости обращайтесь в страховую компанию\n\nНаша поддержка работает 24/7 и решает вопросы:\n• Задержки рейсов\n• Проблемы с отелем\n• Потерю документов\n• Медицинские ситуации",
            category: "travel"
        },
        {
            id: 11,
            question: "Как получить налоговый вычет за путешествие?",
            answer: "Условия налогового вычета:\n\n• Вычет составляет 13% от стоимости тура\n• Максимальная сумма вычета - 50,000 рублей\n• Доступен для граждан РФ с официальным доходом\n• Можно оформить на себя и близких родственников\n\nНеобходимые документы:\n• Договор на тур\n• Платежные документы\n• Загранпаспорт с отметками\n• Справка 2-НДФЛ\n\nМы предоставляем все документы для налоговой.",
            category: "payments"
        },
        {
            id: 12,
            question: "Есть ли скидки для постоянных клиентов?",
            answer: "Программа лояльности:\n\n🎁 После первого тура - скидка 5% на следующее путешествие\n👑 После 3 туров - скидка 10% и статус 'Постоянный клиент'\n💎 После 5 туров - скидка 15% и персональный менеджер\n🌟 После 10 туров - скидка 20% и VIP обслуживание\n\nДополнительные бонусы:\n• Улучшение номера в отеле\n• Приветственные подарки\n• Приоритетное бронирование\n• Участие в закрытых мероприятиях клуба",
            category: "booking"
        }
    ];

    const contactMethods = [
        {
            icon: Phone,
            title: "Телефон",
            details: "+7 (495) 123-45-67",
            description: "Ежедневно с 9:00 до 21:00",
            color: "from-green-400 to-cyan-400"
        },
        {
            icon: Mail,
            title: "Email",
            details: "info@voyagetrip.ru",
            description: "Ответим в течение 2 часов",
            color: "from-blue-400 to-purple-400"
        },
        {
            icon: MessageCircle,
            title: "Онлайн-чат",
            details: "На сайте и в мессенджерах",
            description: "Круглосуточно",
            color: "from-purple-400 to-pink-400"
        }
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const filteredItems = faqItems.filter(item => {
        const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const popularItems = faqItems.filter(item => item.popular);

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Декоративные элементы - только на клиенте */}
            {isClient && (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
                </div>
            )}

            <div className="relative z-10">
                {/* Hero Section */}
                {isClient ? (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pt-20 pb-16"
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6"
                            >
                                <HelpCircle className="w-10 h-10 text-white" />
                            </motion.div>
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Частые <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">вопросы</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Найдите ответы на самые популярные вопросы о наших турах и услугах
                            </motion.p>
                        </div>
                    </motion.div>
                ) : (
                    <div className="pt-20 pb-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                                <HelpCircle className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                                Частые <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">вопросы</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Найдите ответы на самые популярные вопросы о наших турах и услугах
                            </p>
                        </div>
                    </div>
                )}

                {/* Search Section */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-100">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Поиск по вопросам..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="flex overflow-x-auto pb-4 space-x-3 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center space-x-2 flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                <category.icon className="w-4 h-4" />
                                <span>{category.name}</span>
                                <span className={`px-2 py-1 rounded-full text-xs ${activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
                                    }`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Popular Questions */}
                {activeCategory === 'all' && (
                    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                            <div className="flex items-center mb-6">
                                <Zap className="w-6 h-6 mr-3" />
                                <h2 className="text-2xl font-bold">Популярные вопросы</h2>
                            </div>
                            <div className="space-y-4">
                                {popularItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleItem(item.id)}
                                        className="w-full text-left bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">{item.question}</span>
                                            <div className="flex items-center space-x-2">
                                                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                                                <span className={`transform transition-transform ${openItems[item.id] ? 'rotate-180' : ''}`}>
                                                    ▼
                                                </span>
                                            </div>
                                        </div>
                                        {isClient ? (
                                            <AnimatePresence>
                                                {openItems[item.id] && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="mt-3 text-purple-100 whitespace-pre-line"
                                                    >
                                                        {item.answer}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        ) : (
                                            openItems[item.id] && (
                                                <div className="mt-3 text-purple-100 whitespace-pre-line">
                                                    {item.answer}
                                                </div>
                                            )
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ Items */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="border-b border-gray-200 last:border-b-0"
                                >
                                    <button
                                        onClick={() => toggleItem(item.id)}
                                        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group"
                                    >
                                        <div className="flex items-start space-x-4">
                                            {item.popular && (
                                                <Star className="w-5 h-5 text-yellow-400 fill-current mt-1 flex-shrink-0" />
                                            )}
                                            <div className="text-left">
                                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                                    {item.question}
                                                </h3>
                                                <div className="flex items-center space-x-4 mt-2">
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                        {categories.find(cat => cat.id === item.category)?.name}
                                                    </span>
                                                    {item.popular && (
                                                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                                                            Популярный
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`transform transition-transform duration-300 ${openItems[item.id] ? 'rotate-180' : ''}`}>
                                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                                                ▼
                                            </div>
                                        </div>
                                    </button>
                                    {isClient ? (
                                        <AnimatePresence>
                                            {openItems[item.id] && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="px-8 pb-6"
                                                >
                                                    <div className="prose prose-lg max-w-none">
                                                        <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                                                            {item.answer}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    ) : (
                                        openItems[item.id] && (
                                            <div className="px-8 pb-6">
                                                <div className="prose prose-lg max-w-none">
                                                    <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Вопросы не найдены</h3>
                                <p className="text-gray-600">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Contact Methods */}
                {isClient ? (
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Не нашли ответ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Свяжитесь с нами!</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Наша команда экспертов готова помочь вам с любыми вопросами
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                                >
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl mb-4`}>
                                        <method.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                                    <div className="text-lg text-purple-600 font-semibold mb-2">{method.details}</div>
                                    <p className="text-gray-600">{method.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ) : (
                    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Не нашли ответ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Свяжитесь с нами!</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Наша команда экспертов готова помочь вам с любыми вопросами
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {contactMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                                >
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl mb-4`}>
                                        <method.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                                    <div className="text-lg text-purple-600 font-semibold mb-2">{method.details}</div>
                                    <p className="text-gray-600">{method.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

export default FaqContent;