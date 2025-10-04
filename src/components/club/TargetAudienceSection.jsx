import { motion } from 'framer-motion';
import { Users, Home, Plane, Crown } from 'lucide-react';

const targetAudience = [
    {
        icon: Users,
        title: "Для эпизодических путешественников",
        description: "Кто путешествует 1–2 раза в год и хочет получать туры без переплат",
        gradient: "from-[#3B82F6] to-[#60A5FA]",
        bgGradient: "from-[#3B82F6]/10 to-[#60A5FA]/10",
        iconColor: "text-[#3B82F6]",
        iconBg: "bg-[#3B82F6]/10"
    },
    {
        icon: Home,
        title: "Для семей с детьми",
        description: "Которые ценят комфорт и дополнительные услуги",
        gradient: "from-[#10B981] to-[#34D399]",
        bgGradient: "from-[#10B981]/10 to-[#34D399]/10",
        iconColor: "text-[#10B981]",
        iconBg: "bg-[#10B981]/10"
    },
    {
        icon: Plane,
        title: "Для часто путешествующих",
        description: "Кому важны приоритет и эксклюзивные предложения",
        gradient: "from-[#8B5CF6] to-[#A78BFA]",
        bgGradient: "from-[#8B5CF6]/10 to-[#A78BFA]/10",
        iconColor: "text-[#8B5CF6]",
        iconBg: "bg-[#8B5CF6]/10"
    },
    {
        icon: Crown,
        title: "Для первых в очереди",
        description: "Кто хочет быть первым, узнавать о горящих турах и участвовать в закрытых предложениях",
        gradient: "from-[#F59E0B] to-[#FBBF24]",
        bgGradient: "from-[#F59E0B]/10 to-[#FBBF24]/10",
        iconColor: "text-[#F59E0B]",
        iconBg: "bg-[#F59E0B]/10"
    }
];

export function TargetAudienceSection({ isClient }) {
    const scrollToMembership = () => {
        const element = document.getElementById('membership-cards-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="py-16 bg-white/30 relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#e17100]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Для кого подходит{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e17100] to-[#ff8c00] relative">
                            карта
                            <motion.div
                                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#e17100] to-[#ff8c00] rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </span>
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Найдите свой идеальный вариант членства в премиум клубе путешественников
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {targetAudience.map((audience, index) => (
                        isClient ? (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                                className="group relative"
                            >

                                {/* Main Card */}
                                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 h-full">

                                    {/* Icon with Gradient */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${audience.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <audience.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                        {audience.title}
                                    </h3>

                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {audience.description}
                                    </p>

                                </div>
                            </motion.div>
                        ) : (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${audience.gradient} rounded-xl mb-6 shadow-lg`}>
                                    <audience.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                    {audience.title}
                                </h3>

                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {audience.description}
                                </p>

                                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r ${audience.gradient} rounded-full`} />
                            </div>
                        )
                    ))}
                </div>

                {/* CTA Section - без бокса */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Готовы стать частью клуба?
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Присоединяйтесь к сообществу путешественников и откройте мир новых возможностей
                    </p>
                    <button
                        onClick={scrollToMembership}
                        className="bg-gradient-to-r from-[#e17100] to-[#ff8c00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#e17100]/25 transition-all duration-300 hover:scale-105"
                    >
                        Получить карту
                    </button>
                </motion.div>
            </div>
        </section>
    );
}