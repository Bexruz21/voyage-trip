import { Phone, Mail } from 'lucide-react';
import { useLang } from '@/context/LangContext';

export function AboutSection() {
  const { t } = useLang();

  const contactInfo = [
    {
      icon: Phone,
      title: 'home.about.contacts.hotline',
      value: '+998 (90) 881-03-33',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      title: 'home.about.contacts.visa',
      value: '+998 (90) 940-43-33, +998 (95) 940-43-33',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Mail,
      title: 'home.about.contacts.email',
      value: 'info@voyagetrip.uz',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t('home.about.title')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  VOYAGE TRIP
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-5 leading-relaxed">
              {t('home.about.text1')}
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t('home.about.text2')}
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-transparent transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-900 mb-1">{t(item.title)}</div>
                    <div className="text-gray-600 text-sm break-words">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[280px] h-[380px] sm:w-[340px] sm:h-[480px] lg:w-[420px] lg:h-[580px] overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  alt="Море"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 -right-4 sm:-right-8 lg:-right-12 w-[200px] h-[280px] sm:w-[240px] sm:h-[340px] lg:w-[320px] lg:h-[440px] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                  alt="Эйфелева башня"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}