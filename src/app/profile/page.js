'use client';

import { useState, useEffect } from 'react';
import { 
  User, Mail, Wallet, Users, Copy, Info, CreditCard, Clock, 
  Gift, Check, Eye, EyeOff, Calendar, Crown, Star, Zap,
  Award, Ticket, MapPin, Plane, Shield, Heart
} from 'lucide-react';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'Имя Фамилия',
    email: 'alex.ivanov@gmail.com',
    membershipCard: {
      id: 'gold',
      name: "Gold Membership",
      duration: "12 месяцев",
      tours: "До 5 туров",
      price: "$1000",
      description: "Комфорт и статус для уверенных путешественников, где престиж становится стандартом.",
      features: [
        "Всё, что в Silver",
        "Один трансфер до аэропорта (для 2 человек)",
        "Ваучер $100 (на Fast Track, VIP-зал, апгрейд номера или экскурсию)",
        "Доступ в закрытую Telegram-группу Voyage Club",
        "Приоритетное обслуживание",
        "Участие в бонусных розыгрышах 2 раза в год"
      ],
      buttonText: "Выбрать Gold",
      popular: true,
      color: "from-amber-400 to-yellow-400",
      bonusRate: 5,
      purchasedDate: "15.12.2024",
      validUntil: "15.12.2025"
    },
    voyageBalance: 3200,
    referrals: {
      count: 3,
      earned: 3200,
      link: 'VT-7284916',
      bonusRate: 5
    }
  });

  const [hasMembershipCard, setHasMembershipCard] = useState(false);
  const [copied, setCopied] = useState(false);

  const membershipCards = [
    {
      id: 'silver',
      name: "Silver Membership",
      duration: "5 месяцев",
      tours: "До 3 туров",
      price: "$500",
      description: "Оптимальный старт для тех, кто хочет путешествовать честно и со статусом клуба.",
      features: [
        "Доступ к оригинальным ценам туроператоров",
        "Приоритет в обработке заявок",
        "Доступ в личный кабинет Voyage Trip (история, статусы, баланс)",
        "Возможность участия в сезонных акциях Voyage Trip",
        "Разовый бонус $25 Voyage Balance при активации карты"
      ],
      buttonText: "Выбрать Silver",
      popular: false,
      color: "from-slate-400 to-gray-500",
      icon: <Star className="w-5 h-5" />,
      bonusRate: 3
    },
    {
      id: 'gold',
      name: "Gold Membership",
      duration: "12 месяцев",
      tours: "До 5 туров",
      price: "$1000",
      description: "Комфорт и статус для уверенных путешественников, где престиж становится стандартом.",
      features: [
        "Всё, что в Silver",
        "Один трансфер до аэропорта (для 2 человек)",
        "Ваучер $100 (на Fast Track, VIP-зал, апгрейд номера или экскурсию)",
        "Доступ в закрытую Telegram-группу Voyage Club",
        "Приоритетное обслуживание",
        "Участие в бонусных розыгрышах 2 раза в год"
      ],
      buttonText: "Выбрать Gold",
      popular: true,
      color: "from-amber-400 to-yellow-400",
      icon: <Crown className="w-5 h-5" />,
      bonusRate: 5
    },
    {
      id: 'platinum',
      name: "Platinum Membership",
      duration: "12 месяцев",
      tours: "До 8 туров",
      price: "$2000",
      limit: "30 карт в год",
      description: "Уровень доверия и привилегий. Программа для тех, кто ценит личный сервис, комфорт и престиж.",
      features: [
        "Всё, что в Gold",
        "Личный консьерж Voyage Manager",
        "Ваучер $200 (Fast Track, Lounge, апгрейд отеля, частный трансфер и т.д.)",
        "Приоритетное бронирование и гарантированная поддержка 24/7",
        "Эксклюзивная Platinum-группа с персональным куратором",
        "Участие в ежегодных розыгрышах (часы, техника, путешествия)",
        "Приглашения на закрытые встречи Voyage Trip Club"
      ],
      buttonText: "Выбрать Platinum",
      popular: false,
      color: "from-sky-400 to-cyan-400",
      icon: <Award className="w-5 h-5" />,
      bonusRate: 8
    }
  ];

  const [bookingHistory, setBookingHistory] = useState([
    {
      id: 1,
      tourName: "Тур в Дубай, ОАЭ",
      date: "10.01.2025",
      price: 120000,
      status: "completed",
      referralBonus: 2400,
      friendName: "Мария Петрова",
      type: "referral",
      icon: <Plane className="w-5 h-5" />
    },
    {
      id: 2,
      tourName: "Отдых на Бали, Индонезия",
      date: "25.12.2024",
      price: 80000,
      status: "completed",
      referralBonus: 1600,
      friendName: "Иван Сидоров",
      type: "referral",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      id: 3,
      tourName: "Экскурсия по Европе",
      date: "15.02.2025",
      price: 150000,
      status: "upcoming",
      referralBonus: 0,
      type: "personal",
      icon: <Ticket className="w-5 h-5" />
    },
    {
      id: 4,
      tourName: "Горнолыжный курорт в Швейцарии",
      date: "05.01.2025",
      price: 90000,
      status: "completed",
      cashback: 1800,
      type: "personal",
      icon: <MapPin className="w-5 h-5" />
    }
  ]);

  const copyReferralLink = () => {
    navigator.clipboard.writeText(user.referrals.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusBadge = (status) => {
    const styles = {
      completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
      upcoming: "bg-sky-100 text-sky-800 border-sky-200",
      cancelled: "bg-rose-100 text-rose-800 border-rose-200"
    };
    const labels = {
      completed: "Завершен",
      upcoming: "Предстоящий",
      cancelled: "Отменен"
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const getBookingTypeBadge = (type) => {
    const styles = {
      personal: "bg-violet-100 text-violet-800 border-violet-200",
      referral: "bg-amber-100 text-amber-800 border-amber-200"
    };
    const labels = {
      personal: "Мой тур",
      referral: "Тур друга"
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[type]}`}>
        {labels[type]}
      </span>
    );
  };

  // Компонент для пользователей без клубной карты
  const NoMembershipCard = () => (
    <div className="space-y-6">
      {/* Основной баннер */}
      <div className="bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-cyan-500/20"></div>
        <div className="relative z-10">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Gift className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Voyage Balance Guest</h3>
          <p className="text-sky-100 mb-6 max-w-md mx-auto text-lg leading-relaxed">
            Даже если вы не член клуба, Voyage Trip благодарит вас за выбор — получайте 2% кешбэк на следующее путешествие!
          </p>
          <button className="bg-white text-sky-600 px-8 py-3 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Стать членом клуба
          </button>
        </div>
      </div>

      {/* Привилегии гостя */}
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-6">
        <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center mr-3 shadow-md">
            <Zap className="w-5 h-5 text-white" />
          </div>
          Привилегии Voyage Balance Guest
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl border border-sky-200">
            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
              <span className="text-white text-sm font-bold">2%</span>
            </div>
            <div>
              <p className="font-semibold text-sky-800">Кешбэк на следующую покупку</p>
              <p className="text-sky-700 text-sm">Используется только при следующем туре</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-emerald-800">Накопление до 12 месяцев</p>
              <p className="text-emerald-700 text-sm">Кешбэк действует целый год</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200">
            <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-violet-800">E-mail рассылка и предложения</p>
              <p className="text-violet-700 text-sm">Эксклюзивные предложения для подписчиков</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
              <span className="text-white text-sm font-bold">$10</span>
            </div>
            <div>
              <p className="font-semibold text-amber-800">Бонус за приглашение друга</p>
              <p className="text-amber-700 text-sm">За каждого приглашенного друга</p>
            </div>
          </div>
        </div>

        {/* Важное примечание */}
        <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div>
              <p className="font-semibold text-amber-800 mb-1">Важно</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Кешбэк используется только при следующем туре, не обменивается на деньги.
                Для получения повышенных бонусов и привилегий станьте членом клуба.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Сравнение с клубными картами */}
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-6">
        <h4 className="text-xl font-bold text-slate-800 mb-6">Что вы получите с клубной картой?</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-6 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl border border-sky-200 shadow-sm">
            <div className="text-3xl font-bold text-sky-600 mb-3">3-8%</div>
            <p className="text-slate-700 font-semibold mb-2">Бонусов с друзей</p>
            <p className="text-slate-600 text-sm">Вместо 2%</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 shadow-sm">
            <div className="text-3xl font-bold text-emerald-600 mb-3">5-12</div>
            <p className="text-slate-700 font-semibold mb-2">Месяцев действия</p>
            <p className="text-slate-600 text-sm">Карты</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-200 shadow-sm">
            <div className="text-3xl font-bold text-violet-600 mb-3">Эксклюзив</div>
            <p className="text-slate-700 font-semibold mb-2">Привилегии</p>
            <p className="text-slate-600 text-sm">И сервис</p>
          </div>
        </div>
      </div>
    </div>
  );

  const hasCard = !!user.membershipCard;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl mb-6 shadow-lg">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-3">Мой профиль</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {hasCard
              ? "Управляйте вашей клубной картой, отслеживайте бонусы Voyage Balance и историю бронирований"
              : "Отслеживайте ваш кешбэк Voyage Balance, приглашайте друзей и откройте все преимущества клуба"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Левая колонка - Основная информация */}
          <div className="xl:col-span-2 space-y-8">
            {/* Карточка Voyage Balance */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl shadow-md">
                    <Wallet className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">{user.name}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Mail className="w-4 h-4 text-slate-500" />
                      <p className="text-slate-600">{user.email}</p>
                    </div>
                    {!hasCard && (
                      <span className="inline-block bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-800 text-sm px-4 py-1.5 rounded-full mt-2 border border-sky-200">
                        Voyage Balance Guest
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 justify-end mb-3">
                    <span className="text-sm font-semibold text-slate-500">Voyage Balance</span>
                  </div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                    {user.voyageBalance.toLocaleString('ru-RU')} $
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    {hasCard ? "Бонусный счет" : "Кешбэк на следующий тур"}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-5 border border-sky-200">
                <div className="flex items-start space-x-4">
                  <Info className="w-6 h-6 text-sky-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sky-800 mb-2 text-lg">
                      {hasCard ? "Как пополняется Voyage Balance?" : "Как работает кешбэк?"}
                    </p>
                    <p className="text-sky-700 leading-relaxed">
                      {hasCard
                        ? `За каждого приглашенного друга, который приобретет турпакет, вам начисляется ${user.referrals.bonusRate}% от стоимости его заказа на ваш Voyage Balance.`
                        : "За каждого приглашенного друга вы получаете 2% кешбэк от стоимости его тура. Кешбэк можно использовать только для оплаты вашего следующего путешествия."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Реферальная программа */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl shadow-md">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Реферальная программа</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-6 border border-sky-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sky-700 font-semibold">Приглашено друзей</span>
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center shadow-sm">
                      <Users className="w-5 h-5 text-sky-600" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-slate-800">{user.referrals.count}</p>
                  <p className="text-sm text-slate-600 mt-2">активных рефералов</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-emerald-700 font-semibold">
                      {hasCard ? "Заработано бонусов" : "Накоплено кешбэка"}
                    </span>
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shadow-sm">
                      <Gift className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-slate-800">
                    {user.referrals.earned.toLocaleString('ru-RU')} $
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    {hasCard ? "на Voyage Balance" : "на следующий тур"}
                  </p>
                </div>
              </div>

              {/* Реферальная ссылка */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  Ваша реферальная ссылка
                </label>
                <div className="flex gap-4">
                  <div className="flex-1 bg-slate-50 rounded-2xl px-5 py-4 font-mono text-slate-800 border border-slate-200 text-lg shadow-sm">
                    {user.referrals.link}
                  </div>
                  <button
                    onClick={copyReferralLink}
                    className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-3 shadow-lg"
                  >
                    <Copy className="w-5 h-5" />
                    <span>{copied ? 'Скопировано!' : 'Копировать'}</span>
                  </button>
                </div>
              </div>

              {/* Как работает реферальная программа */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                <h4 className="font-bold text-amber-800 text-lg mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Как работает реферальная программа?
                </h4>
                <div className="space-y-3 text-amber-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Дайте другу вашу реферальную ссылку <span className="font-mono font-bold">{user.referrals.link}</span></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Друг должен указать ваш код <span className="font-mono font-bold">{user.referrals.link}</span> в поле &quot;Реферальный код&quot; при регистрации</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>После того как друг купит любой турпакет, вам начисляется <span className="font-bold">{user.referrals.bonusRate}%</span> от стоимости тура {hasCard ? "на Voyage Balance" : "в виде кешбэка"}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      {hasCard
                        ? "Бонусы начисляются автоматически и могут быть использованы для оплаты ваших будущих путешествий"
                        : "Кешбэк можно использовать только для оплаты следующего тура, не обменивается на деньги"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* История бронирований */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl shadow-md">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">История бронирований</h3>
              </div>

              <div className="space-y-6">
                {bookingHistory.map((booking) => (
                  <div key={booking.id} className="border border-slate-200 rounded-2xl p-6 hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-xl flex items-center justify-center">
                            {booking.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-slate-800">{booking.tourName}</h4>
                            <div className="flex items-center space-x-2 mt-1">
                              {getBookingTypeBadge(booking.type)}
                              <span className="text-slate-500 text-sm">• {booking.date}</span>
                            </div>
                          </div>
                        </div>
                        {booking.friendName && (
                          <p className="text-sky-600 text-sm flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            Приглашенный друг: {booking.friendName}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        {getStatusBadge(booking.status)}
                        <p className="text-xl font-bold text-slate-800 mt-3">
                          {booking.price.toLocaleString('ru-RU')} $
                        </p>
                      </div>
                    </div>

                    {(booking.referralBonus > 0 || booking.cashback > 0) && (
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200">
                        <div className="flex items-center justify-between">
                          <span className="text-emerald-700 font-semibold flex items-center">
                            <Gift className="w-4 h-4 mr-2" />
                            {booking.type === 'referral' ? 'Бонус на Voyage Balance' : 'Кешбэк на следующий тур'}
                          </span>
                          <span className="text-lg font-bold text-emerald-600">
                            +{(booking.referralBonus || booking.cashback).toLocaleString('ru-RU')} $
                          </span>
                        </div>
                        <p className="text-sm text-emerald-600 mt-1">
                          Начислено {user.referrals.bonusRate}% от стоимости тура
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="space-y-8">
            {/* Блок клубной карты или гостевого статуса */}
            {hasCard ? (
              /* Моя клубная карта */
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl shadow-md">
                    <CreditCard className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Моя клубная карта</h3>
                </div>

                <div className={`bg-gradient-to-r ${user.membershipCard.color} rounded-2xl p-6 text-white mb-6 relative overflow-hidden shadow-lg`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    <Crown className="w-12 h-12" />
                  </div>
                  <div className="relative z-10">
                    <div className="mb-4">
                      <h4 className="text-2xl font-bold mb-2">{user.membershipCard.name}</h4>
                      <p className="text-amber-50 opacity-90">Активна до {user.membershipCard.validUntil}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-semibold">{user.membershipCard.tours}</p>
                        <p className="text-amber-50 text-sm opacity-90">доступно туров</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">Бонус {user.membershipCard.bonusRate}%</p>
                        <p className="text-amber-50 text-sm opacity-90">с каждого заказа друга</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-600 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Дата покупки:
                    </span>
                    <span className="font-semibold">{user.membershipCard.purchasedDate}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Действует до:
                    </span>
                    <span className="font-semibold">{user.membershipCard.validUntil}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-600">Бонусная ставка:</span>
                    <span className="font-semibold text-emerald-600 text-lg">{user.membershipCard.bonusRate}%</span>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-5 border border-sky-200">
                  <h5 className="font-semibold text-sky-800 mb-3 text-lg">Привилегии вашей карты:</h5>
                  <ul className="space-y-3">
                    {user.membershipCard.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3 text-sky-700">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              /* Компонент для пользователей без карты - Voyage Balance Guest */
              <NoMembershipCard />
            )}

            {/* Доступные карты */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                {hasCard ? 'Другие клубные карты' : 'Откройте все преимущества'}
              </h3>

              <div className="space-y-4">
                {membershipCards.map((card) => (
                  <div
                    key={card.id}
                    className={`border-2 rounded-2xl p-5 transition-all duration-300 hover:shadow-md ${
                      user.membershipCard?.id === card.id
                        ? 'border-sky-500 bg-gradient-to-r from-sky-50 to-cyan-50 shadow-sm'
                        : 'border-slate-200 hover:border-sky-300 hover:bg-sky-50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-xl flex items-center justify-center">
                          {card.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{card.name}</h4>
                          <p className="text-sm text-slate-600">{card.duration} • {card.tours}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-slate-800">{card.price}</p>
                        <p className="text-sm text-emerald-600 font-semibold">Бонус {card.bonusRate}%</p>
                      </div>
                    </div>
                    <button
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                        user.membershipCard?.id === card.id
                          ? 'bg-slate-500 text-white cursor-not-allowed shadow-sm'
                          : 'bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                      }`}
                      disabled={user.membershipCard?.id === card.id}
                    >
                      {user.membershipCard?.id === card.id ? 'Активна' : card.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}