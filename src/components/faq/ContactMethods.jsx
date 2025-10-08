import { motion } from 'framer-motion';
import { ContactMethodCard } from './ContactMethodCard';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const contactMethods = [
    {
        icon: Phone,
        title: "Телефон",
        details: "+998 (77) 122 88 80",
        description: "Ежедневно с 9:00 до 21:00",
        color: "from-indigo-400 to-blue-400"
    },
    {
        icon: Mail,
        title: "Email",
        details: "info@voyagetrip.uz",
        description: "Ответим в течение 2 часов",
        color: "from-pink-400 to-rose-400"
    },
    {
        icon: MessageCircle,
        title: "Telegram",
        details: "@voyagetrip",
        description: "Быстрая связь",
        color: "from-sky-400 to-cyan-500"
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        details: "+998 (77) 122 88 80",
        description: "Круглосуточно",
        color: "from-green-400 to-teal-400"
    }
];

export function ContactMethods({ isClient }) {
    const content = (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Не нашли ответ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Свяжитесь с нами!</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Наша команда экспертов готова помочь вам с любыми вопросами
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {contactMethods.map((method, index) => (
                    <ContactMethodCard
                        key={index}
                        method={method}
                        index={index}
                        isClient={isClient}
                    />
                ))}
            </div>

            <div className="text-center mt-8 md:mt-10">
                <p className="text-gray-500 text-xs md:text-sm">
                    Среднее время ответа: <span className="text-blue-600 font-semibold">15 минут</span> •
                    Доступность: <span className="text-green-600 font-semibold">24/7</span>
                </p>
            </div>
        </section>
    );

    if (!isClient) return content;

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
            >
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Не нашли ответ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Свяжитесь с нами!</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Наша команда экспертов готова помочь вам с любыми вопросами
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {contactMethods.map((method, index) => (
                        <ContactMethodCard
                            key={index}
                            method={method}
                            index={index}
                            isClient={isClient}
                        />
                    ))}
                </div>

                <motion.div
                    className="text-center mt-8 md:mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-gray-500 text-xs md:text-sm">
                        Среднее время ответа: <span className="text-blue-600 font-semibold">15 минут</span> •
                        Доступность: <span className="text-green-600 font-semibold">24/7</span>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}