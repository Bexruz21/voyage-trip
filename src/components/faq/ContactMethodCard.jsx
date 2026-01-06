import { useLang } from "@/context/LangContext"

export function ContactMethodCard({ method }) {
  const { t } = useLang()
  return (
    <div>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />

        <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-white/20 overflow-hidden h-full">
          <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-cyan-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-700" />

          <div className="relative z-10">
            <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${method.color} rounded-xl md:rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
              <method.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 relative">
              {method.title}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500" />
            </h3>

            <div className="text-base md:text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-2">
              {method.details}
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10">
              {method.description}
            </p>

            <div className="hidden sm:block mt-3 md:mt-4 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
              <span>{t('faq.contacts.contact')}</span>
              <div className="ml-1 w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                →
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
            <div className="absolute inset-[1.5px] rounded-xl bg-white/90 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}