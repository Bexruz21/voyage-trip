'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { API } from '@/api/api';
import { User, Mail, Wallet, Users, Copy, Gift, Check, Crown, Star, CreditCard, Zap, TrendingUp, Plane, Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [membershipCards, setMembershipCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const colorsMap = {
    silver: 'from-slate-400 to-gray-500',
    gold: 'from-amber-400 to-yellow-400',
    platinum: 'from-sky-400 to-cyan-400',
  };

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const [profileRes, cardsRes] = await Promise.all([
          axios.get(API.USERS.PROFILE, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(API.CARDS)
        ]);

        setData(profileRes.data);

        const cardsWithColors = cardsRes.data.map(card => ({
          ...card,
          color: colorsMap[card.code] || 'from-gray-300 to-gray-400'
        }));

        setMembershipCards(cardsWithColors);

      } catch (error) {
        localStorage.removeItem('access');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const copyReferralLink = () => {
    if (!data?.ref_id) return;
    navigator.clipboard.writeText(data.ref_id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCardColor = (name) => {
    return membershipCards.find(c => c.name === name)?.color || 'from-slate-400 to-gray-500';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-12 h-12 text-sky-500 animate-spin" />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">Профиль</h1>
              <p className="text-slate-500 text-sm sm:text-base mt-1">Отслеживайте ваш Voyage Balance, приглашайте друзей и откройте все преимущества клуба</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Voyage Balance Card - with user info */}
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-8">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{data.first_name} {data.last_name}</h2>
                  <div className="flex items-center gap-2 text-slate-600 text-sm mt-2">
                    <Mail className="w-4 h-4" />
                    {data.email}
                  </div>
                </div>
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold shrink-0 ${data.active_membership
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-sky-100 text-sky-700'
                  }`}>
                  {data.active_membership ? (
                    <>
                      <Crown className="w-4 h-4" />
                      {data.active_membership.card.name}
                    </>
                  ) : (
                    <>
                      <Star className="w-4 h-4" />
                      Guest
                    </>
                  )}
                </span>
              </div>

              <div className="py-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 text-sm mb-2 flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-sky-600" />
                      Voyage Balance
                    </p>
                    <p className="text-3xl sm:text-6xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                      {data.balance.toLocaleString('ru-RU')} $
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-600 text-sm mb-2">Статус баланса</p>
                    <p className="text-2xl font-bold text-emerald-600">Активен</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mt-6">
                Бонусы от приглашенных друзей автоматически поступают на ваш счет.
              </p>
            </div>

            {/* Referral Section */}
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-sky-600" />
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Реферальная программа</h2>
              </div>

              <div className="mb-6">
                <p className="text-slate-600 text-sm mb-3">Ваш реферальный код</p>
                <div className="flex gap-3">
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 font-mono text-slate-900 text-sm sm:text-base break-all">
                    {data.ref_id}
                  </div>
                  <button
                    onClick={copyReferralLink}
                    className="bg-sky-600 hover:bg-sky-700 text-white px-4 sm:px-6 py-3 rounded-xl font-medium transition-colors duration-200 flex items-center gap-2 shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm">{copied ? 'Скопировано!' : 'Копировать'}</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2 pt-6 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900 text-sm">Как это работает:</h3>
                {[
                  `Дайте код ${data.ref_id} своему другу`,
                  'Друг вводит ваш код при регистрации',
                  'После покупки карты и тура вашим другом вам начисляются бонусы',
                  'Бонусы начисляются только за активных рефералов (тех, кто совершил покупки)'
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-3 text-slate-600 text-sm">
                    <span className="font-semibold text-sky-600 shrink-0 w-6">{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bonus History Table */}
            <div className="bg-slate-50 border border-gray-200 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-5 h-5 text-sky-600" />
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">История бонусов</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">Описание</th>
                      <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">Дата</th>
                      <th className="text-left py-4 px-4 text-slate-700 font-semibold text-sm">Тип</th>
                      <th className="text-right py-4 px-4 text-slate-700 font-semibold text-sm">Сумма</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.bonus_history && data.bonus_history.length > 0 ? (
                      data.bonus_history.map((item, idx) => (
                        <tr
                          key={item.id}
                          className={`border-b border-slate-100 hover:bg-white transition-colors duration-200 ${idx === data.bonus_history.length - 1 ? 'border-b-0' : ''
                            }`}
                        >
                          <td className="py-4 px-4 text-slate-900 text-sm font-medium">
                            Бонус за приглашенного друга
                          </td>
                          <td className="py-4 px-4 text-slate-600 text-sm">
                            {new Date(item.created_at).toLocaleDateString('ru-RU')}
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-amber-100 text-amber-800">
                              Реферальный
                            </span>
                          </td>
                          <td className="py-4 px-4 text-emerald-600 text-sm font-bold text-right">
                            +{(+item.amount).toLocaleString('ru-RU')} $
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="py-6 text-center text-slate-500 text-sm italic"
                        >
                          История пуста
                        </td>
                      </tr>
                    )}
                  </tbody>

                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Stats, Cards & Features */}
          <div className="space-y-6">
            {/* Active Card */}
            {data.active_membership && (
              <div
                className={`bg-gradient-to-br ${getCardColor(
                  data.active_membership.card.name
                )} rounded-xl p-5 text-white relative overflow-hidden border border-white/30 shadow-lg shadow-sky-100`}
              >
                <div className="absolute top-3 right-3 opacity-10">
                  <CreditCard className="w-16 h-16" />
                </div>

                <div className="relative z-10">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-2">
                    Ваша активная карта
                  </p>
                  <h3 className="text-2xl font-bold mb-4">
                    {data.active_membership.card.name}
                  </h3>

                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center">
                    <div>
                      <p className="text-[11px] text-white/70 mb-1">Бонус</p>
                      <p className="text-lg font-semibold">
                        {data.active_membership.card.discount_percent}%
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-white/70 mb-1">Туры</p>
                      <p className="text-lg font-semibold">
                        {data.active_membership.card.discount_tours}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-white/70 mb-1">Исп.</p>
                      <p className="text-lg font-semibold">
                        {data.active_membership.used_tours}/
                        {data.active_membership.card.discount_tours}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-3 text-sm text-white/70">
                    <div>
                      <p className="mb-1">Активирована</p>
                      <p className="font-medium text-white">
                        {new Date(
                          data.active_membership.start_date
                        ).toLocaleDateString('ru-RU')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="mb-1">Действует до</p>
                      <p className="font-medium text-white">
                        {new Date(
                          data.active_membership.end_date
                        ).toLocaleDateString('ru-RU')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Card Features */}
            {data.active_membership && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-sky-600" />
                  Привилегии карты
                </h3>
                <div className="space-y-3">
                  {data.active_membership.card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Active Card - Guest Section */}
            {!data.active_membership && (
              <div className="space-y-6">
                {/* Guest Privileges */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500" />
                    Преимущества Guest
                  </h3>

                  <div className="space-y-3">
                    {[
                      { icon: <Gift className="w-4 h-4 text-sky-600" />, text: 'Получайте бонусы за приглашенных друзей' },
                      { icon: <Wallet className="w-4 h-4 text-emerald-600" />, text: 'Кешбэк за туры на счёт Voyage Balance' },
                      { icon: <Users className="w-4 h-4 text-violet-600" />, text: 'Следите за активностью друзей и их бонусами' },
                      { icon: <TrendingUp className="w-4 h-4 text-cyan-600" />, text: 'Доступ к базовой статистике' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <span className="text-slate-700 text-sm leading-relaxed">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Cards */}
                <div className=" rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-sky-600" />
                      Доступные карты
                    </h3>
                  </div>


                  <div className="space-y-4">
                    {membershipCards.map((card) => (
                      <div
                        key={card.id}
                        className="group border-2 border-slate-200 rounded-xl p-4 transition-all duration-200 cursor-pointer hover:border-sky-300 hover:shadow-md hover:bg-white"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center shadow-sm`}>
                            <Crown className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-slate-900 text-sm">{card.name}</h4>
                            <p className="text-slate-500 text-xs mt-0.5">
                              {card.discount_tours + card.extra_discount_tours} туров • {card.duration_months} мес
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-sky-600 group-hover:text-sky-700 transition-colors">Купить</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div>
                            <p className="text-slate-600 text-xs mb-0.5">Бонусы</p>
                            <p className="font-bold text-emerald-600">{card.discount_percent + card.extra_discount_percent}%</p>
                          </div>
                          <div className="text-right">
                            <p className="text-slate-600 text-xs mb-0.5">Цена</p>
                            <p className="font-bold text-slate-900">${card.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Statistics Card */}
            <div className="rounded-2xl p-6 border border-gray-200 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-sky-600" />
                Статистика
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg border-l-4 border-l-violet-500 bg-violet-50">
                  <div className="flex items-center gap-3">
                    <Plane className="w-4 h-4 text-violet-600" />
                    <span className="text-slate-700 text-sm font-medium">Путешествие</span>
                  </div>
                  <p className="text-lg font-bold text-slate-900">{data.tours_count}</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border-l-4 border-l-sky-500 bg-sky-50">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-sky-600" />
                    <span className="text-slate-700 text-sm font-medium">Приглашено</span>
                  </div>
                  <p className="text-lg font-bold text-slate-900">{data.referrals_count}</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border-l-4 border-l-emerald-500 bg-emerald-50">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-700 text-sm font-medium">Активные</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-slate-900">{data.active_referrals_count}</p>
                    <p className="text-xs text-slate-500">{Math.round((data.active_referrals_count / data.referrals_count) * 100)}% активности</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border-l-4 border-l-cyan-500 bg-cyan-50">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-4 h-4 text-cyan-600" />
                    <span className="text-slate-700 text-sm font-medium">Заработано</span>
                  </div>
                  <p className="text-lg font-bold text-slate-900">{data.balance}$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}