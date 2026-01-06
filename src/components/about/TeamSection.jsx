import { useLang } from '@/context/LangContext';
import { TeamMemberCard } from './TeamMemberCard';

const team = [
  {
    id: 1,
    name: {
      ru: "Замонгир Мирвохидов",
      en: "Zamongir Mirvokhidov",
      uz: "Zamongir Mirvohidov"
    },
    position: {
      ru: "Директор",
      en: "Director",
      uz: "Direktor"
    },
    experience: {
      ru: "Основатель и руководитель Voyage Trip",
      en: "Founder and Head of Voyage Trip",
      uz: "Voyage Trip asoschisi va rahbari"
    },
    bio: {
      ru: "Основатель и идейный вдохновитель Voyage Trip. Отвечает за развитие компании и качество сервиса. Верит, что каждое путешествие должно вдохновлять и открывать новые горизонты.",
      en: "Founder and visionary of Voyage Trip. Responsible for company development and service quality. Believes that every journey should inspire and open new horizons.",
      uz: "Voyage Trip asoschisi va g‘oya muallifi. Kompaniya rivoji va xizmat sifati uchun mas’ul. Har bir sayohat ilhomlantirishi va yangi ufqlarni ochishi kerak deb hisoblaydi."
    },
    specialties: {
      ru: ["Руководство и стратегия", "Партнёрские отношения", "Маршруты и направления", "Контроль качества"],
      en: ["Leadership & Strategy", "Partnership Relations", "Routes & Destinations", "Quality Control"],
      uz: ["Boshqaruv va strategiya", "Hamkorlik aloqalari", "Yo‘nalishlar va marshrutlar", "Sifat nazorati"]
    },
    contact: "zamon880@gmail.com",
    quote: {
      ru: "Каждое путешествие — это история, которую мы создаём вместе",
      en: "Every journey is a story we create together",
      uz: "Har bir sayohat — bu birgalikda yaratiladigan hikoya"
    }
  },
  {
    id: 2,
    name: {
      ru: "Акбарали Мамаданов",
      en: "Akbarali Mamadanov",
      uz: "Akbarali Mamadanov"
    },
    position: {
      ru: "Менеджер по туризму",
      en: "Tourism Manager",
      uz: "Turizm menejeri"
    },
    experience: {
      ru: "Ответственный за организацию и сопровождение туров",
      en: "Responsible for tour organization and support",
      uz: "Sayohatlarni tashkil etish va kuzatib borish uchun mas’ul"
    },
    bio: {
      ru: "Занимается организацией поездок, координацией клиентов и партнёров. Гарантирует чёткую работу команды и индивидуальный подход к каждому путешественнику.",
      en: "Handles trip organization, client and partner coordination. Ensures smooth teamwork and a personalized approach for every traveler.",
      uz: "Safarlarni tashkil etish, mijozlar va hamkorlar bilan ishlashni olib boradi. Har bir sayohatchiga individual yondashuvni ta’minlaydi."
    },
    specialties: {
      ru: ["Организация туров", "Работа с клиентами", "Координация гидов", "Сервис и логистика"],
      en: ["Tour Organization", "Client Relations", "Guide Coordination", "Service & Logistics"],
      uz: ["Sayohatlarni tashkil etish", "Mijozlar bilan ishlash", "Gidlarni muvofiqlashtirish", "Servis va logistika"]
    },
    contact: "akbaralimamadanov@gmail.com",
    quote: {
      ru: "Главная цель — сделать каждую поездку максимально комфортной и запоминающейся",
      en: "The main goal is to make every trip as comfortable and memorable as possible",
      uz: "Asosiy maqsad — har bir safarni qulay va unutilmas qilish"
    }
  }
];

export function TeamSection({ onMemberSelect }) {
  const { t } = useLang()
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            {t('about.team.title').split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">{t('about.team.title').split(" ")[1]}</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {t('about.team.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onMemberClick={onMemberSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}