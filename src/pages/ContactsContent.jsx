'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Shield,
    Star,
    Users,
    Globe,
    Building,
    CheckCircle
} from 'lucide-react';

function ContactsContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const formRef = useRef(null);

    const office = {
        city: "Москва",
        address: "ул. Тверская, д. 10, БЦ «Престиж», 5 этаж",
        phone: "+7 (495) 123-45-67",
        email: "info@voyagetrip.ru",
        hours: "Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-20:00",
        features: ["Бесплатная парковка", "Консьерж-сервис", "Зона ожидания", "Wi-Fi"]
    };

    const stats = [
        { icon: Users, value: "50,000+", label: "Довольных клиентов" },
        { icon: Globe, value: "150+", label: "Направлений" },
        { icon: Star, value: "4.9/5", label: "Рейтинг Trustpilot" },
        { icon: Shield, value: "15 лет", label: "На рынке" }
    ];

    const benefits = [
        { icon: CheckCircle, text: "Персональный менеджер" },
        { icon: CheckCircle, text: "Подбор тура за 15 минут" },
        { icon: CheckCircle, text: "Лучшие цены гарантированы" },
        { icon: CheckCircle, text: "Поддержка 24/7" }
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Имитация отправки
        await new Promise(resolve => setTimeout(resolve, 2000));

        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', phone: '', message: '' });

        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
            {/* Декоративные элементы - только на клиенте */}
            {isClient && (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-40"></div>
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
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Свяжитесь с <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">нами</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Мы создаем путешествия мечты. Давайте обсудим ваше идеальное приключение!
                            </motion.p>
                        </div>
                    </motion.div>
                ) : (
                    <div className="pt-20 pb-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                                Свяжитесь с <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">нами</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Мы создаем путешествия мечты. Давайте обсудим ваше идеальное приключение!
                            </p>
                        </div>
                    </div>
                )}

                {/* Stats Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
                            >
                                <stat.icon className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="relative">
                            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                                        <Send className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">Начните свое путешествие</h2>
                                        <p className="text-gray-600">Расскажите о ваших планах, и мы создадим идеальный тур</p>
                                    </div>
                                </div>

                                {/* Success Message - только на клиенте */}
                                {isClient && (
                                    <AnimatePresence>
                                        {submitStatus === 'success' && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center"
                                            >
                                                <CheckCircle className="w-5 h-5 mr-2" />
                                                Сообщение отправлено! Мы свяжемся с вами в течение 15 минут.
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Ваше имя *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Иван Иванов"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                                placeholder="ivan@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Телефон
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                                placeholder="+7 (999) 999-99-99"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Сообщение *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Опишите ваше идеальное путешествие..."
                                        ></textarea>
                                    </div>

                                    {isClient ? (
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    <span>Отправка...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Отправить заявку</span>
                                                </>
                                            )}
                                        </motion.button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
                                        >
                                            <Send className="w-5 h-5" />
                                            <span>Отправить заявку</span>
                                        </button>
                                    )}
                                </form>

                                {/* Benefits */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <div className="grid grid-cols-2 gap-4">
                                        {benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <benefit.icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span className="text-sm text-gray-600">{benefit.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                                        <Building className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">Наш офис</h2>
                                        <p className="text-gray-600">Приходите в гости обсудить ваше путешествие</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                        <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Адрес</div>
                                            <div className="text-gray-600">{office.address}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                        <Phone className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Телефон</div>
                                            <div className="text-gray-600">{office.phone}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                        <Mail className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Email</div>
                                            <div className="text-gray-600">{office.email}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                        <Clock className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Часы работы</div>
                                            <div className="text-gray-600">{office.hours}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Удобства в офисе:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {office.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm rounded-full border border-cyan-200"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Map Placeholder */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Мы на карте</h3>
                                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl h-48 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                                        <p className="text-cyan-700 font-semibold">Москва, ул. Тверская, д. 10</p>
                                        <p className="text-cyan-600 text-sm">БЦ «Престиж», 5 этаж</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-16">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Готовы к приключениям?
                        </h2>
                        <p className="text-xl text-cyan-100 mb-8">
                            Позвоните нам прямо сейчас и получите персональную консультацию
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+74951234567"
                                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 hover:shadow-2xl transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Позвонить сейчас</span>
                            </a>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300">
                                Заказать обратный звонок
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsContent;