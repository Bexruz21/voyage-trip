'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        city: '',
        agreeTerms: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Регистрация:', formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 flex items-center justify-center py-4 px-4 sm:py-8 md:py-16">
            <div className="w-full max-w-[90vw] sm:max-w-lg bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-6 sm:p-8 border border-white/20 mx-auto">
                {/* Декоративные элементы для мобильных */}
                <div className="sm:hidden absolute top-4 left-4 w-12 h-12 bg-sky-200/30 rounded-full blur-lg"></div>
                <div className="sm:hidden absolute bottom-4 right-4 w-14 h-14 bg-blue-300/20 rounded-full blur-lg"></div>

                <div className="text-center mb-6 sm:mb-8 relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md sm:shadow-lg">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                        Voyage Trip
                    </h1>
                    <p className="text-sky-600/80 mt-1 sm:mt-2 text-sm sm:text-base">Создайте аккаунт для бронирования туров</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-sm font-semibold text-sky-700/90">
                                Имя *
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/60 border-2 border-sky-700/90 rounded-lg sm:rounded-xl focus:border-sky-400 transition-all duration-300 placeholder-sky-700 text-sm sm:text-base"
                                placeholder="Ваше имя"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-sm font-semibold text-sky-700/90">
                                Фамилия *
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/60 border-2 border-sky-700/90 rounded-lg sm:rounded-xl focus:border-sky-400 transition-all duration-300 placeholder-sky-700 text-sm sm:text-base"
                                placeholder="Ваша фамилия"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-sky-700/90">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/60 border-2 border-sky-700/90 rounded-lg sm:rounded-xl focus:border-sky-400 transition-all duration-300 placeholder-sky-700 text-sm sm:text-base"
                            placeholder="example@mail.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-sky-700/90">
                            Телефон *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/60 border-2 border-sky-700/90 rounded-lg sm:rounded-xl focus:border-sky-400 transition-all duration-300 placeholder-sky-700 text-sm sm:text-base"
                            placeholder="+7 (XXX) XXX-XX-XX"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-sky-700/90">
                            Пароль *
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/60 border-2 border-sky-700/90 rounded-lg sm:rounded-xl focus:border-sky-400 transition-all duration-300 placeholder-sky-700 text-sm sm:text-base pr-10 sm:pr-12"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-sky-700 hover:text-sky-600 transition-colors duration-200 p-1"
                            >
                                {showPassword ? (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-sky-700/90">
                            Подтверждение пароля *
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/60 border-2 border-sky-700/90 rounded-lg sm:rounded-xl focus:border-sky-400 transition-all duration-300 placeholder-sky-700 text-sm sm:text-base pr-10 sm:pr-12"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-sky-700 hover:text-sky-600 transition-colors duration-200 p-1"
                            >
                                {showConfirmPassword ? (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-sky-50/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-sky-200/50">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            required
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600 border-sky-300 rounded focus:ring-sky-400/50 focus:ring-offset-0 flex-shrink-0"
                        />
                        <label htmlFor="agreeTerms" className="text-sky-700/90 font-medium text-xs sm:text-sm">
                            Я согласен с условиями использования *
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-md sm:shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                        <span>Зарегистрироваться</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </form>

                <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-sky-200/50">
                    <p className="text-sky-600/80 text-sm sm:text-base">
                        Уже есть аккаунт?{' '}
                        <Link
                            href="/login"
                            className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-200 hover:underline underline-offset-2 text-sm sm:text-base"
                        >
                            Войти
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}