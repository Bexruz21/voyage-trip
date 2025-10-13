import { TeamMemberCard } from './TeamMemberCard';

const team = [
  {
    id: 1,
    name: "Замонгир Мирвохидов",
    position: "Директор",
    experience: "Основатель и руководитель Voyage Trip",
    bio: "Основатель и идейный вдохновитель Voyage Trip. Отвечает за развитие компании и качество сервиса. Верит, что каждое путешествие должно вдохновлять и открывать новые горизонты.",
    specialties: ["Руководство и стратегия", "Партнёрские отношения", "Маршруты и направления", "Контроль качества"],
    contact: "zamon880@gmail.com",
    quote: "Каждое путешествие — это история, которую мы создаём вместе"
  },
  {
    id: 2,
    name: "Акбарали Мамаданов",
    position: "Администратор",
    experience: "Ответственный за организацию и сопровождение туров",
    bio: "Занимается организацией поездок, координацией клиентов и партнёров. Гарантирует чёткую работу команды и индивидуальный подход к каждому путешественнику.",
    specialties: ["Организация туров", "Работа с клиентами", "Координация гидов", "Сервис и логистика"],
    contact: "akbaralimamadanov@gmail.com",
    quote: "Главная цель — сделать каждую поездку максимально комфортной и запоминающейся"
  }
];


export function TeamSection({ isClient, onMemberSelect }) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Наша <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">команда</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Профессионалы с огромным опытом, которые сделают ваше путешествие идеальным
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index}
              isClient={isClient}
              onMemberClick={onMemberSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}