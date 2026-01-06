import { useLang } from '@/context/LangContext';
import { Target, Heart, Globe, Award } from 'lucide-react';

export const values = [
  {
    icon: Target,
    color: 'from-blue-400 to-cyan-400',
    title: {
      ru: 'Качество',
      en: 'Quality',
      uz: 'Sifat'
    },
    description: {
      ru: 'Мы тщательно отбираем каждый отель и маршрут, чтобы обеспечить высочайший уровень сервиса',
      en: 'We carefully select every hotel and route to ensure the highest level of service',
      uz: 'Eng yuqori xizmat darajasini taʼminlash uchun har bir mehmonxona va yo‘nalishni sinchiklab tanlaymiz'
    }
  },
  {
    icon: Heart,
    color: 'from-pink-400 to-rose-400',
    title: {
      ru: 'Забота',
      en: 'Care',
      uz: 'G‘amxo‘rlik'
    },
    description: {
      ru: 'Ваш комфорт и безопасность — наш приоритет. Мы сопровождаем вас на всех этапах путешествия',
      en: 'Your comfort and safety are our priority. We support you at every stage of your journey',
      uz: 'Sizning qulayligingiz va xavfsizligingiz — bizning ustuvor vazifamiz. Sayohatning barcha bosqichlarida yoningizdamiz'
    }
  },
  {
    icon: Globe,
    color: 'from-green-400 to-emerald-400',
    title: {
      ru: 'Инновации',
      en: 'Innovation',
      uz: 'Innovatsiyalar'
    },
    description: {
      ru: 'Постоянно развиваемся и внедряем новые технологии для улучшения сервиса',
      en: 'We constantly evolve and introduce new technologies to improve our service',
      uz: 'Xizmatni yaxshilash uchun doimiy rivojlanamiz va yangi texnologiyalarni joriy qilamiz'
    }
  },
  {
    icon: Award,
    color: 'from-purple-400 to-indigo-400',
    title: {
      ru: 'Экспертиза',
      en: 'Expertise',
      uz: 'Mutaxassislik'
    },
    description: {
      ru: 'Профессиональная команда с глубокими знаниями каждого направления',
      en: 'A professional team with deep knowledge of every destination',
      uz: 'Har bir yo‘nalish bo‘yicha chuqur bilimga ega professional jamoa'
    }
  }
];

export function ValuesSection() {
  const { lang, t } = useLang();
  return (
    <section className="py-16 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          {t('about.values.title').split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">{t('about.values.title').split(" ")[1]}</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('about.values.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-4`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title[lang]}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}