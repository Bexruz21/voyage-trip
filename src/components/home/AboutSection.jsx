import { Phone, Mail, CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              О компании <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">VOYAGE TRIP</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Мы - молодая и амбициозная команда профессионалов, которая верит,
              что путешествия должны быть доступными, безопасными и незабываемыми.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Наша миссия - открывать для вас самые удивительные уголки планеты,
              создавая уникальные маршруты и обеспечивая высочайший уровень сервиса
              на каждом этапе вашего путешествия.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Телефон</div>
                  <div className="text-gray-600">+998 (77) 122 88 80</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">info@voyagetrip.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Наша команда"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 translate-x-12 sm:translate-x-0 sm:-left-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">100%</div>
                  <div className="text-gray-600 text-sm">Гарантия поддержки</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}