'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';

function Footer() {
    const currentYear = new Date().getFullYear();

    const contactInfo = [
        { icon: Phone, text: "Горячая линия", href: "tel:+998908810333", description: "+998 (90) 881-03-33" },
        { icon: Phone, text: "Визовая поддержка", href: "tel:+998909404333", description: "+998 (90) 940-43-33, +998 (95) 940-43-33" },
        { icon: Mail, text: "info@voyagetrip.uz", href: "mailto:info@voyagetrip.uz", description: "Электронная почта" },
        { icon: MapPin, text: "г. Ташкент, Seoul Plaza Business Centre", href: "#", description: "Мирабадский р-н, ул. Шазрисабз, 5А" }
    ];

    const socialLinks = [
        { icon: Send, href: "https://t.me/voyagetrip", color: "bg-[#07b9fa]" },
        { icon: MessageCircle, href: "https://wa.me/998908810333", color: "bg-[#25D366]" }
    ];

    const quickLinks = [
        { name: "Направления", href: "/" },
        { name: "Клуб", href: "/club" },
        { name: "О нас", href: "/about" },
        { name: "FAQ", href: "/faq" },
        { name: "Контакты", href: "/contacts" },
        { name: 'Лицензия', href: '/license' },
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Brand Section */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center space-x-3">
                        <img src="/logo.png" alt="VOYAGE TRIP" className="w-16 h-16 object-contain" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">VOYAGE TRIP</h2>
                            <p className="text-gray-600">Премиум путешествия</p>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                        Создаём современные путешествия по всему миру.<br />Доверьте свою мечту профессионалам.
                    </p>
                    <div className="flex space-x-3 mt-4">
                        {socialLinks.map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.href}
                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-sm ${s.color}`}
                                whileHover={{ scale: 1.1, y: -2 }}
                            >
                                <s.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <h3 className="font-semibold text-gray-900 mb-3">Быстрые ссылки</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {quickLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.href}
                                whileHover={{ x: 4 }}
                                className="text-gray-600 hover:text-cyan-600 text-sm transition-all"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Contacts */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <h3 className="font-semibold text-gray-900 mb-3">Контакты</h3>
                    <div className="space-y-3">
                        {contactInfo.map((c, i) => (
                            <motion.a
                                key={i}
                                href={c.href}
                                whileHover={{ x: 4 }}
                                className="flex items-start space-x-3 group"
                            >
                                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <c.icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900 group-hover:text-cyan-600">{c.text}</div>
                                    <div className="text-gray-500 text-sm">{c.description}</div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <span>© {currentYear} VOYAGE TRIP. Все права защищены.</span>
                    <span className="hidden sm:inline">•</span>
                    <Link
                        href="/license"
                        className="hover:text-cyan-600 transition-colors underline"
                    >
                        Лицензия на туристическую деятельность
                    </Link>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
