import { Phone, Mail } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Текстовая часть */}
          <div className="order-2 lg:order-1">
            <h2 className="text-center text-3xl sm:text-4xl sm:text-left font-bold text-gray-900 mb-6">
              О компании <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">VOYAGE TRIP</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Мы - молодая и амбициозная команда профессионалов, которая верит,
              что путешествия должны быть доступными, безопасными и незабываемыми.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              Наша миссия - открывать для вас самые удивительные уголки планеты,
              создавая уникальные маршруты и обеспечивая высочайший уровень сервиса
              на каждом этапе вашего путешествия.
            </p>
            
            {/* Контакты */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Горячая линия</div>
                  <div className="text-gray-600 text-sm sm:text-base truncate">
                    +998 (90) 881-03-33
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Визовая поддержка</div>
                  <div className="text-gray-600 text-sm sm:text-base truncate">
                    +998 (90) 940-43-33, +998 (95) 940-43-33
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Email</div>
                  <div className="text-gray-600 text-sm sm:text-base truncate">info@voyagetrip.uz</div>
                </div>
              </div>
            </div>
          </div>

          {/* Изображения */}
          <div className="order-2 lg:order-2 relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Основное изображение */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[350px] sm:w-[300px] sm:h-[450px] lg:w-[400px] lg:h-[550px] overflow-hidden rounded-full shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  alt="Море"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Второе изображение */}
              <div className="absolute -bottom-10 -right-5 sm:-bottom-20 sm:-right-10 lg:-bottom-20 lg:-right-30 w-[180px] h-[250px] sm:w-[220px] sm:h-[300px] lg:w-[300px] lg:h-[400px] overflow-hidden rounded-full border-6 sm:border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                  alt="Эйфелева башня"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}