import { TeamMemberCard } from './TeamMemberCard';

const team = [
  {
    id: 1,
    name: "Максим Иванов",
    position: "Гид-эксперт",
    experience: "Профессиональный гид",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Создает незабываемые экскурсии с глубоким погружением в культуру и историю каждой страны.",
    specialties: ["Экскурсионные программы", "Культурология", "Языки: английский, испанский"],
    contact: "maxim@gmail.com"
  },
  {
    id: 2,
    name: "Максим Иванов",
    position: "Гид-эксперт",
    experience: "Профессиональный гид",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Создает незабываемые экскурсии с глубоким погружением в культуру и историю каждой страны.",
    specialties: ["Экскурсионные программы", "Культурология", "Языки: английский, испанский"],
    contact: "maxim@gmail.com"
  },
  {
    id: 3,
    name: "Максим Иванов",
    position: "Гид-эксперт",
    experience: "Профессиональный гид",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Создает незабываемые экскурсии с глубоким погружением в культуру и историю каждой страны.",
    specialties: ["Экскурсионные программы", "Культурология", "Языки: английский, испанский"],
    contact: "maxim@gmail.com"
  },
];

export function TeamSection({ isClient, onMemberSelect }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Наша <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">команда</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Профессионалы с огромным опытом, которые сделают ваше путешествие идеальным
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
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