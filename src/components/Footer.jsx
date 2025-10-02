'use client';

import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Plane,
    MessageCircle,
    Instagram,
} from 'lucide-react';
import { useState, useEffect } from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    const [isClient, setIsClient] = useState(false);

    const contactInfo = [
        {
            icon: Phone,
            text: "+998 77 122 88 80",
            href: "tel:+998771228880",
            description: "Ежедневно с 9:00 до 21:00"
        },
        {
            icon: Mail,
            text: "info@voyagetrip.ru",
            href: "mailto:info@voyagetrip.ru",
            description: "Ответим в течение 2 часов"
        },
        {
            icon: MapPin,
            text: "г. Ташкент, Seoul Plaza Business Centre, Мирабадский р‑н",
            href: "#",
            description: "ул. Шазрисабз, 5А"
        }
    ];

    const socialLinks = [
        {
            icon: MessageCircle,
            href: "#",
            name: "Telegram",
            color: "hover:bg-blue-500 hover:text-white"
        },
        {
            icon: Instagram,
            href: "#",
            name: "Instagram",
            color: "hover:bg-pink-500 hover:text-white"
        }
    ];

    const quickLinks = [
        { name: "Направления", href: "/" },
        { name: "Клуб", href: "/club" },
        { name: "О нас", href: "/about" },
        { name: "FAQ", href: "/faq" },
        { name: "Контакты", href: "/contacts" }
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        {/* Brand Section */}
                        {isClient ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <Plane className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">VOYAGE TRIP</h2>
                                        <p className="text-gray-600">Премиум путешествия</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    15 лет создаем незабываемые путешествия по всему миру.
                                    Доверьте свою мечту профессионалам.
                                </p>

                                {/* Social Links */}
                                <div className="flex space-x-3 pt-2">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 border border-gray-200 shadow-sm transition-all duration-300 ${social.color}`}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            // Статическая версия для SEO
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <Plane className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">VOYAGE TRIP</h2>
                                        <p className="text-gray-600">Премиум путешествия</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    15 лет создаем незабываемые путешествия по всему миру.
                                    Доверьте свою мечту профессионалам.
                                </p>
                                <div className="flex space-x-3 pt-2">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 border border-gray-200 shadow-sm ${social.color}`}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quick Links */}
                        {isClient ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="space-y-4"
                            >
                                <h3 className="font-semibold text-gray-900">Быстрые ссылки</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {quickLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="text-gray-600 hover:text-cyan-600 transition-colors duration-300 text-sm py-1 flex items-center group"
                                        >
                                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            // Статическая версия для SEO
                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-900">Быстрые ссылки</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {quickLinks.map((link, index) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-gray-600 hover:text-cyan-600 transition-colors duration-300 text-sm py-1"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Contact Info */}
                        {isClient ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-4"
                            >
                                <h3 className="font-semibold text-gray-900">Контакты</h3>
                                <div className="space-y-3">
                                    {contactInfo.map((contact, index) => (
                                        <motion.a
                                            key={index}
                                            href={contact.href}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start space-x-3 group cursor-pointer"
                                        >
                                            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 mt-0.5">
                                                <contact.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                                                    {contact.text}
                                                </div>
                                                <div className="text-gray-500 text-sm">{contact.description}</div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            // Статическая версия для SEO
                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-900">Контакты</h3>
                                <div className="space-y-3">
                                    {contactInfo.map((contact, index) => (
                                        <a
                                            key={index}
                                            href={contact.href}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mt-0.5">
                                                <contact.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900">
                                                    {contact.text}
                                                </div>
                                                <div className="text-gray-500 text-sm">{contact.description}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        {isClient ? (
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-gray-600 text-sm"
                            >
                                © {currentYear} VOYAGE TRIP. Все права защищены.
                            </motion.p>
                        ) : (
                            <p className="text-gray-600 text-sm">
                                © {currentYear} VOYAGE TRIP. Все права защищены.
                            </p>
                        )}

                        {isClient ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center space-x-6 text-sm text-gray-600"
                            >
                                <a href="#" className="hover:text-cyan-600 transition-colors duration-300">
                                    Политика конфиденциальности
                                </a>
                                <a href="#" className="hover:text-cyan-600 transition-colors duration-300">
                                    Условия использования
                                </a>
                            </motion.div>
                        ) : (
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <a href="#">Политика конфиденциальности</a>
                                <a href="#">Условия использования</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;