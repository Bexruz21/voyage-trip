import {
  Building,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  HeadphonesIcon,
  Coffee,
} from "lucide-react";

const office = {
  city: "Ташкент",
  address:
    "г. Ташкент, Seoul Plaza Business Centre, Мирабадский р-н, ул. Шазрисабз, 5А",
  phones: [
    { type: "Горячая линия", numbers: ["+998 (90) 881-03-33"] },
    { type: "Визовая поддержка", numbers: ["+998 (90) 940-43-33", "+998 (95) 940-43-33"] },
  ],
  messengers: [
    {
      type: "WhatsApp",
      number: "+998 (90) 881-03-33",
      url: "https://wa.me/998908810333",
      icon: MessageCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      type: "Telegram",
      username: "@voyagetrip",
      url: "https://t.me/voyagetrip",
      icon: Send,
      color: "text-[#07b9fa]",
      bgColor: "bg-[#e0f7ff]",
    },

  ],
  email: "info@voyagetrip.uz",
  hours: "Пн–Пт: 9:00–21:00, Сб–Вс: 10:00–20:00",
  features: ["Бесплатная парковка", "Wi-Fi", "Кофе-бар"],
};

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* ===== Контактная информация ===== */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Наш офис</h2>
            <p className="text-gray-600 text-sm">Приходите обсудить ваше путешествие</p>
          </div>
        </div>

        {/* Info Blocks */}
        <div className="divide-y divide-gray-200">
          <InfoRow icon={MapPin} title="Адрес">
            {office.address}
          </InfoRow>

          {office.phones.map((group, i) => (
            <InfoRow key={i} icon={Phone} title={group.type}>
              {group.numbers.map((n, j) => (
                <p key={j}>{n}</p>
              ))}
            </InfoRow>
          ))}

          <InfoRow icon={Mail} title="Email">
            <a
              href={`mailto:${office.email}`}
              className="text-cyan-700 hover:text-cyan-800 font-medium"
            >
              {office.email}
            </a>
          </InfoRow>

          <InfoRow icon={Clock} title="Часы работы">
            {office.hours}
          </InfoRow>
        </div>

        {/* Messengers */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <HeadphonesIcon className="w-5 h-5 text-cyan-600 mr-2" />
            Мессенджеры
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            {office.messengers.map((m, i) => (
              <a
                key={i}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 hover:bg-white p-3 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 flex-1"
              >
                <div
                  className={`w-9 h-9 ${m.bgColor} rounded-lg flex items-center justify-center`}
                >
                  <m.icon className={`w-5 h-5 ${m.color}`} />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{m.type}</div>
                  <div className="text-gray-600">{m.number || m.username}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-8">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Coffee className="w-5 h-5 text-cyan-600 mr-2" />
            Удобства
          </h4>
          <div className="flex flex-wrap gap-2">
            {office.features.map((f, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-cyan-50 text-cyan-700 text-sm rounded-lg border border-cyan-100"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Карта (отдельный блок) ===== */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header (с отступами) */}
        <div className="py-4 px-6 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">Мы на карте</h3>
        </div>

        {/* Content (без паддингов) */}
        <div className="border-t border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.2919366029774!2d69.28302441245825!3d41.30521424995097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad5cad60c4f%3A0x2569478729648ff8!2z0YPQu9C40YbQsCDQqNCw0YXRgNC40YHQsNCx0LcgNdCQLCAxMDAwMDAsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1759674609171!5m2!1sru!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
}

function InfoRow({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start space-x-3 py-3">
      <div className="mt-1">
        <Icon className="w-5 h-5 text-cyan-600" />
      </div>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
