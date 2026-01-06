import { DollarSign, Gift, Smartphone, Zap, Shield, Clock } from 'lucide-react';

export function WhyProfitableSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 relative z-10">
            Почему это выгодно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <DollarSign className="w-10 h-10 text-amber-900" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Без переплат</h3>
              <p className="text-white/90 leading-relaxed">Вы не переплачиваете агентствам — покупаете туры по реальной цене</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Gift className="w-10 h-10 text-emerald-900" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Дополнительные сервисы</h3>
              <p className="text-white/90 leading-relaxed">Получаете сервисы, которые обычно оформляются отдельно</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Smartphone className="w-10 h-10 text-blue-900" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Все под рукой</h3>
              <p className="text-white/90 leading-relaxed">Личный кабинет, прозрачные условия и поддержка 24/7</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full mt-8"></div>
        </div>
      </div>
    </section>
  );
}