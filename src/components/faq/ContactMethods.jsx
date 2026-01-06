import { useLang } from '@/context/LangContext';
import { ContactMethodCard } from './ContactMethodCard';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const contactMethods = [
    {
        id: 'phone',
        icon: Phone,
        details: "+998 (90) 881-03-33",
        color: "from-indigo-400 to-blue-400"
    },
    {
        id: 'email',
        icon: Mail,
        details: "info@voyagetrip.uz",
        color: "from-pink-400 to-rose-400"
    },
    {
        id: 'telegram',
        icon: MessageCircle,
        details: "@voyagetrip",
        color: "from-sky-400 to-cyan-500"
    },
    {
        id: 'whatsapp',
        icon: MessageCircle,
        details: "+998 (90) 881-03-33",
        color: "from-green-400 to-teal-400"
    }
];

export function ContactMethods() {
    const { t } = useLang();

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('faq.contacts.title')}{' '} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">{t('faq.contacts.highlight')}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('faq.contacts.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {contactMethods.map((method, index) => (
                        <ContactMethodCard
                            key={index}
                            method={{
                                ...method,
                                title: t(`faq.contacts.methods.${method.id}.title`),
                                description: t(`faq.contacts.methods.${method.id}.description`)
                            }}
                        />

                    ))}
                </div>

                <div className="text-center mt-8 md:mt-10">
                    <p className="text-gray-500 text-xs md:text-sm">
                        {t('faq.contacts.footer.response')}: <span className="text-blue-600 font-semibold">15 {t('faq.contacts.footer.minute')}</span> •
                        {t('faq.contacts.footer.availability')}: <span className="text-green-600 font-semibold">24/7</span>
                    </p>
                </div>
            </div>
        </section>
    );
}