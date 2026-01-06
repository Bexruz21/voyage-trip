import { useLang } from '@/context/LangContext';
import { Mail, Quote, Award, Users, Star, MapPin } from 'lucide-react';

export function TeamMemberCard({ member }) {
  const { t, lang } = useLang()
  return (
    <div className="flex-1 max mx-auto w-full">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden cursor-pointer group h-full flex flex-col transform hover:shadow-2xl">
        <div className="h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500"></div>
        <div className="p-8 flex-1 flex flex-col">
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
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">{member.name[lang]}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{member.position[lang]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <Star className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <p className="text-gray-700 text-base font-medium leading-relaxed">{member.experience[lang]}</p>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 leading-relaxed text-base line-clamp-4">{member.bio[lang]}</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-blue-600" />
              <h4 className="font-semibold text-gray-900 text-base">{t('about.team.expertise')}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {member.specialties[lang].map((specialty, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-800 rounded-lg text-sm font-semibold border border-blue-200 shadow-sm hover:shadow-md hover:from-blue-100 hover:to-cyan-100"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100 mb-6">
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 italic text-base leading-relaxed">"{member.quote[lang]}"</p>
            </div>
          </div>

          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:from-blue-50 hover:to-cyan-50 hover:border-blue-200">
            <Mail className="w-5 h-5 text-blue-600 mr-3" />
            <a
              href={`mailto:${member.contact}`}
              className="text-blue-600 font-semibold text-base hover:text-blue-700"
            >
              {member.contact}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}