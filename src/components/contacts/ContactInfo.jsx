import { Building, MapPin, Phone, Mail, Clock } from 'lucide-react';


const office = {
  city: "Ташкент",
  address: "Ташкент, Мирабадский р‑н, ул. Шазрисабз, 5А",
  phone: "+998 77 122 88 80",
  email: "info@voyagetrip.com",
  hours: "Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-20:00",
  features: ["Бесплатная парковка", "Консьерж-сервис", "Зона ожидания", "Wi-Fi"]
};

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="sm:hidden">
              <h2 className="text-xl font-bold text-gray-900">Наш офис</h2>
              <p className="text-gray-600">Приходите в гости обсудить ваше путешествие</p>
            </div>
          </div>
          <div className="hidden sm:block">
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

      <MapSection />
    </div>
  );
}

function MapSection() {
  return (
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
  );
}