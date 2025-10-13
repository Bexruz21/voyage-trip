import { motion } from 'framer-motion';
import { Mail, Quote, Award, Users, Star, MapPin } from 'lucide-react';

export function TeamMemberCard({ member, index, isClient }) {
  const cardContent = (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden cursor-pointer group h-full flex flex-col transform transition-all duration-300 hover:shadow-2xl">
      {/* Верхняя градиентная полоса */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500"></div>

      <div className="p-8 flex-1 flex flex-col">
        {/* Заголовок с иконкой */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                {member.position === "Директор" ? (
                  <Users className="w-6 h-6 text-white" />
                ) : (
                  <Award className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-lg">{member.position}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Опыт с иконкой */}
        <div className="flex items-center gap-3 mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <Star className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <p className="text-gray-700 text-base font-medium leading-relaxed">{member.experience}</p>
        </div>

        {/* Биография */}
        <div className="mb-4">
          <p className="text-gray-600 leading-relaxed text-base line-clamp-4">{member.bio}</p>
        </div>

        {/* Специализация */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-blue-600" />
            <h4 className="font-semibold text-gray-900 text-base">Направления работы:</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {member.specialties.map((specialty, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-800 rounded-lg text-sm font-semibold border border-blue-200 shadow-sm transition-all duration-300 hover:shadow-md hover:from-blue-100 hover:to-cyan-100"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Цитата */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100 mb-6 transform transition-all duration-300 group-hover:scale-[1.02]">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
            <p className="text-gray-700 italic text-base leading-relaxed">"{member.quote}"</p>
          </div>
        </div>

        {/* Контакты */}
        <div className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200 transition-all duration-300 group-hover:from-blue-50 group-hover:to-cyan-50 group-hover:border-blue-200">
          <Mail className="w-5 h-5 text-blue-600 mr-3" />
          <a
            href={`mailto:${member.contact}`}
            className="text-blue-600 font-semibold text-base hover:text-blue-700 transition-colors"
          >
            {member.contact}
          </a>
        </div>
      </div>
    </div>
  );

  if (!isClient) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-full flex flex-col">
        {/* Верхняя градиентная полоса */}
        <div className="h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500"></div>

        <div className="p-8 flex-1 flex flex-col">
          {/* Заголовок с иконкой */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg">
                  {member.position === "Директор" ? (
                    <Users className="w-5 h-5 text-white" />
                  ) : (
                    <Award className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-base mt-1">{member.position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Опыт с иконкой */}
          <div className="flex items-center gap-3 mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <Star className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <p className="text-gray-700 text-base font-medium leading-relaxed">{member.experience}</p>
          </div>

          {/* Биография */}
          <div className="mb-6 flex-1">
            <p className="text-gray-600 leading-relaxed text-base">{member.bio}</p>
          </div>

          {/* Специализация */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-blue-600" />
              <h4 className="font-semibold text-gray-900 text-base">Направления работы:</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-800 rounded-lg text-sm font-semibold border border-blue-200 shadow-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Цитата */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100 mb-6">
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 italic text-base leading-relaxed">"{member.quote}"</p>
            </div>
          </div>

          {/* Контакты */}
          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
            <Mail className="w-5 h-5 text-blue-600 mr-3" />
            <a
              href={`mailto:${member.contact}`}
              className="text-blue-600 font-semibold text-base hover:text-blue-700 transition-colors"
            >
              {member.contact}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="flex-1 max mx-auto w-full"
    >
      {cardContent}
    </motion.div>
  );
}