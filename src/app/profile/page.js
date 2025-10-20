'use client';

import { useState, useEffect } from 'react';
import {
  User, Mail, Wallet, Users, Copy, Info, CreditCard, Clock,
  Gift, Check, Calendar, Crown, Star, Zap, Award
} from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [membershipCards, setMembershipCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('access');

      try {
        // Загружаем карты (без токена)
        const cardsResponse = await axios.get("http://127.0.0.1:8000/api/user/cards/");
        const cardsData = cardsResponse.data.map(card => ({
          ...card,
          buttonText: "Выбрать",
          color: getCardColor(card.code),
          icon: getCardIcon(card.code),
          bonusRate: getCardBonusRate(card.code)
        }));
        setMembershipCards(cardsData);

        // Загружаем профиль пользователя (с токеном)
        if (accessToken) {
          const profileResponse = await axios.get("http://127.0.0.1:8000/api/user/profile/", {
            headers: { Authorization: `Bearer ${accessToken}` }
          });
          setUser(profileResponse.data);
        } else {
          router.push('/login')
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Функции для определения стилей карт
  const getCardColor = (code) => {
    const colors = {
      silver: "from-slate-400 to-gray-500",
      gold: "from-amber-400 to-yellow-400",
      platinum: "from-sky-400 to-cyan-400"
    };
    return colors[code.toLowerCase()] || "from-slate-400 to-gray-500";
  };

  const getCardIcon = (code) => {
    const icons = {
      silver: <Star className="w-5 h-5" />,
      gold: <Crown className="w-5 h-5" />,
      platinum: <Award className="w-5 h-5" />
    };
    return icons[code.toLowerCase()] || <Star className="w-5 h-5" />;
  };

  const getCardBonusRate = (code) => {
    const rates = {
      silver: 3,
      gold: 5,
      platinum: 8
    };
    return rates[code.toLowerCase()] || 3;
  };

  const [bonusHistory, setBonusHistory] = useState([
    {
      id: 1,
      amount: 2400,
      date: "10.01.2025",
      description: "Бонус за приглашенного друга",
      type: "referral",
      status: "completed"
    },
    {
      id: 2,
      amount: 1600,
      date: "25.12.2024",
      description: "Бонус за приглашенного друга",
      type: "referral",
      status: "completed"
    }
  ]);

  const copyReferralLink = () => {
    if (user?.ref_id) {
      navigator.clipboard.writeText(user.ref_id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const getBonusTypeBadge = (type) => {
    const styles = {
      referral: "bg-amber-100 text-amber-800 border-amber-200",
      cashback: "bg-violet-100 text-violet-800 border-violet-200"
    };
    const labels = {
      referral: "Реферальный",
      cashback: "Кешбэк"
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[type]}`}>
        {labels[type]}
      </span>
    );
  };

  // Компонент для пользователей без клубной карты
  const NoMembershipCard = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* Основной баннер */}
      <div className="bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl p-6 sm:p-8 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-cyan-500/20"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm">
            <Gift className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Voyage Balance Guest</h3>
          <p className="text-sky-100 mb-4 sm:mb-6 text-sm sm:text-lg leading-relaxed max-w-md mx-auto">
            Даже если вы не член клуба, Voyage Trip благодарит вас за выбор — получайте 2% кешбэк на следующее путешествие!
          </p>
          <button className="bg-white text-sky-600 px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
            Стать членом клуба
          </button>
        </div>
      </div>

      {/* Привилегии гостя */}
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4 shadow-md">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-slate-800">
            Привилегии Voyage Balance Guest
          </h4>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {[
            { icon: "2%", title: "Кешбэк на следующую покупку", desc: "Используется только при следующем туре", color: "sky" },
            { icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />, title: "Накопление до 12 месяцев", desc: "Кешбэк действует целый год", color: "emerald" },
            { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />, title: "E-mail рассылка и предложения", desc: "Эксклюзивные предложения для подписчиков", color: "violet" },
            { icon: "$10", title: "Бонус за приглашение друга", desc: "За каждого приглашенного друга", color: "amber" }
          ].map((item, index) => (
            <div key={index} className={`flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 rounded-xl border border-${item.color}-200`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-${item.color}-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                {typeof item.icon === 'string' ? (
                  <span className="text-white text-sm font-bold">{item.icon}</span>
                ) : (
                  item.icon
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-${item.color}-800 text-sm sm:text-base mb-1`}>{item.title}</p>
                <p className={`text-${item.color}-700 text-xs sm:text-sm leading-relaxed`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Важное примечание */}
        <div className="mt-4 sm:mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200">
          <div className="flex items-start">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 shadow-sm">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-amber-800 mb-1 text-sm sm:text-base">Важно</p>
              <p className="text-amber-700 text-xs sm:text-sm leading-relaxed">
                Кешбэк используется только при следующем туре, не обменивается на деньги.
                Для получения повышенных бонусов и привилегий станьте членом клуба.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Загрузка профиля...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600">Ошибка загрузки профиля</p>
        </div>
      </div>
    );
  }

  const hasCard = !!user.active_membership;
  const userCard = user.active_membership;
  const userName = `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'Пользователь';

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl mb-4 sm:mb-6 shadow-lg">
            <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-800 mb-2 sm:mb-3">Мой профиль</h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            {hasCard
              ? "Управляйте вашей клубной картой, отслеживайте бонусы Voyage Balance и историю бронирований"
              : "Отслеживайте ваш кешбэк Voyage Balance, приглашайте друзей и откройте все преимущества клуба"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Левая колонка - Основная информация */}
          <div className="xl:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Карточка Voyage Balance */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl shadow-md">
                    <Wallet className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{userName}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Mail className="w-4 h-4 text-slate-500" />
                      <p className="text-slate-600 text-sm sm:text-base">{user.email}</p>
                    </div>
                    {!hasCard && (
                      <span className="inline-block bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-800 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mt-2 border border-sky-200">
                        Voyage Balance Guest
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="flex items-center space-x-2 sm:justify-end mb-2 sm:mb-3">
                    <span className="text-sm font-semibold text-slate-500">Voyage Balance</span>
                  </div>
                  <p className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                    {user.balance.toLocaleString('ru-RU')} $
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">
                    {hasCard ? "Бонусный счет" : "Кешбэк на следующий тур"}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-4 sm:p-5 border border-sky-200">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Info className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sky-800 mb-2 text-base sm:text-lg">
                      {hasCard ? "Как пополняется Voyage Balance?" : "Как работает кешбэк?"}
                    </p>
                    <p className="text-sky-700 leading-relaxed text-sm sm:text-base">
                      {hasCard
                        ? `За каждого приглашенного друга, который приобретет турпакет, вам начисляется бонусы на ваш Voyage Balance.`
                        : "За каждого приглашенного друга вы получаете 2% кешбэк от стоимости его тура. Кешбэк можно использовать только для оплаты вашего следующего путешествия."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Реферальная программа */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl shadow-md">
                  <Users className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Реферальная программа</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-4 sm:p-6 border border-sky-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-sky-700 font-semibold text-sm sm:text-base">Реферальный код</span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sky-100 rounded-full flex items-center justify-center shadow-sm">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
                    </div>
                  </div>
                  <p className="text-xl sm:text-3xl font-bold text-slate-800 font-mono break-all">{user.ref_id}</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">ваш уникальный код</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-4 sm:p-6 border border-emerald-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-emerald-700 font-semibold text-sm sm:text-base">
                      {hasCard ? "Заработано бонусов" : "Накоплено кешбэка"}
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-full flex items-center justify-center shadow-sm">
                      <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                    </div>
                  </div>
                  <p className="text-xl sm:text-3xl font-bold text-slate-800">
                    {user.balance.toLocaleString('ru-RU')} $
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    {hasCard ? "на Voyage Balance" : "на следующий тур"}
                  </p>
                </div>
              </div>

              {/* Реферальная ссылка */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3 sm:mb-4">
                  Ваш реферальный код
                </label>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 bg-slate-50 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 font-mono text-slate-800 border border-slate-200 text-base sm:text-lg shadow-sm break-all">
                    {user.ref_id}
                  </div>
                  <button
                    onClick={copyReferralLink}
                    className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg text-sm sm:text-base whitespace-nowrap"
                  >
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{copied ? 'Скопировано!' : 'Копировать'}</span>
                  </button>
                </div>
              </div>

              {/* Как работает реферальная программа */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-4 sm:p-6 border border-amber-200">
                <h4 className="font-bold text-amber-800 text-base sm:text-lg mb-3 sm:mb-4 flex items-center">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Как работает реферальная программа?
                </h4>
                <div className="space-y-2 sm:space-y-3 text-amber-700 text-sm sm:text-base">
                  {[
                    `Дайте другу ваш реферальный код ${user.ref_id}`,
                    "Друг должен указать ваш код при регистрации в поле \"Реферальный код\"",
                    "После того как друг купит любой турпакет, вам начисляется бонус на Voyage Balance",
                    hasCard
                      ? "Бонусы начисляются автоматически и могут быть использованы для оплаты ваших будущих путешествий"
                      : "Кешбэк можно использовать только для оплаты следующего тура, не обменивается на деньги"
                  ].map((text, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* История бонусов */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-4 sm:p-6 lg:p-8">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl shadow-md">
                  <Gift className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">История бонусов</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {bonusHistory.map((bonus) => (
                  <div key={bonus.id} className="border border-slate-200 rounded-2xl p-4 sm:p-6 hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
                      <div className="flex-1">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">{bonus.description}</h4>
                            <div className="flex flex-wrap items-center gap-2">
                              {getBonusTypeBadge(bonus.type)}
                              <span className="text-slate-500 text-xs sm:text-sm">• {bonus.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        {getStatusBadge(bonus.status)}
                        <p className="text-lg sm:text-xl font-bold text-emerald-600">
                          +{bonus.amount.toLocaleString('ru-RU')} $
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Блок клубной карты или гостевого статуса */}
            {hasCard ? (
              /* Моя клубная карта */
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl shadow-md">
                    <CreditCard className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Моя клубная карта</h3>
                </div>

                <div className="bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl p-4 sm:p-6 text-white mb-4 sm:mb-6 relative overflow-hidden shadow-lg">
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-20">
                    <Crown className="w-8 h-8 sm:w-12 sm:h-12" />
                  </div>
                  <div className="relative z-10">
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{userCard.card.name}</h4>
                      <p className="text-amber-50 opacity-90 text-sm sm:text-base">Активна до {new Date(userCard.end_date).toLocaleDateString('ru-RU')}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-base sm:text-lg font-semibold">До {userCard.card.max_tours} туров</p>
                        <p className="text-amber-50 text-xs sm:text-sm opacity-90">доступно туров</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg sm:text-xl font-bold">Бонусы</p>
                        <p className="text-amber-50 text-xs sm:text-sm opacity-90">за каждого друга</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-slate-200">
                    <span className="text-slate-600 flex items-center text-sm sm:text-base">
                      <Calendar className="w-4 h-4 mr-2" />
                      Дата активации:
                    </span>
                    <span className="font-semibold text-sm sm:text-base">{new Date(userCard.start_date).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-slate-200">
                    <span className="text-slate-600 flex items-center text-sm sm:text-base">
                      <Clock className="w-4 h-4 mr-2" />
                      Действует до:
                    </span>
                    <span className="font-semibold text-sm sm:text-base">{new Date(userCard.end_date).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3">
                    <span className="text-slate-600 text-sm sm:text-base">Использовано туров:</span>
                    <span className="font-semibold text-slate-800 text-sm sm:text-base">{userCard.used_tours} / {userCard.card.max_tours}</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-4 sm:p-5 border border-sky-200">
                  <h5 className="font-semibold text-sky-800 mb-3 text-base sm:text-lg">Привилегии вашей карты:</h5>
                  <ul className="space-y-2 sm:space-y-3">
                    {userCard.card.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-sky-700 text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
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

            {/* Доступные карты - показываем только если нет активной карты */}
            {!hasCard && membershipCards.length > 0 && (
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sky-100 p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6">Откройте все преимущества</h3>

                <div className="space-y-3 sm:space-y-4">
                  {membershipCards.map((card) => (
                    <div
                      key={card.id}
                      className="border-2 border-slate-200 rounded-2xl p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:shadow-md hover:border-sky-300 hover:bg-sky-50"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2 sm:gap-0">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            {card.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-slate-800 text-sm sm:text-base">{card.name}</h4>
                            <p className="text-slate-600 text-xs sm:text-sm">{card.duration_months} мес. • До {card.max_tours} туров</p>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-base sm:text-lg font-bold text-slate-800">{card.price} $</p>
                          <p className="text-emerald-600 font-semibold text-xs sm:text-sm">Бонус {card.bonusRate}%</p>
                        </div>
                      </div>
                      <button
                        className="w-full py-2 sm:py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                      >
                        {card.buttonText}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}