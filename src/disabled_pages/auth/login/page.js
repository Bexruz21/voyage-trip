"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, X, AlertCircle, Loader } from "lucide-react";
import { API } from "@/api/api";

export default function Login() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!form.email.trim() || !form.password) {
            setError("Пожалуйста, введите email и пароль.");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(API.AUTH.LOGIN, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: form.email.trim(),
                    password: form.password
                }),
                credentials: "include"
            });
            if (!res.ok) {
                setError('Неверный email или пароль.');
                return;
            }
            const data = await res.json();

            localStorage.setItem("access", data.tokens.access);
            localStorage.setItem("refresh", data.tokens.refresh);

            window.dispatchEvent(new Event('storage'));
            router.push("/");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 px-3 sm:px-4 py-8 sm:py-16">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 py-8 sm:p-8 w-full max-w-[95vw] sm:max-w-md border border-sky-50 transition-all mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center shadow-md sm:shadow-lg">
                            <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7.5 4v5c0 4.418-3.582 8-8 8s-8-3.582-8-8V7l7.5-4z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-800 tracking-tight">Voyage Trip</h2>
                    <p className="text-sky-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">Вход в личный кабинет</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg sm:rounded-md text-xs sm:text-sm text-red-700 flex items-center justify-between">
                        <div className="flex items-center space-x-2 flex-1">
                            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                            <span className="leading-tight sm:leading-normal">{error}</span>
                        </div>
                        <button onClick={() => setError("")} className="text-red-500 hover:text-red-700 ml-2 flex-shrink-0">
                            <X className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="relative">
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="Email"
                            className="w-full pl-3 sm:pl-4 pr-8 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-gray-700 bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-200 transition-all duration-300 outline-none shadow-sm text-sm sm:text-base"
                            required
                            aria-label="Email"
                            autoComplete="username"
                            disabled={isLoading}
                        />
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 w-5 h-5" />
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={form.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            placeholder="Пароль"
                            className="w-full pl-3 sm:pl-4 pr-8 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-gray-700 bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-200 transition-all duration-300 outline-none shadow-sm text-sm sm:text-base"
                            required
                            aria-label="Пароль"
                            autoComplete="current-password"
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 hover:text-sky-600 transition p-0.5 sm:p-1"
                            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>

                    <div className="text-right">
                        <Link href="/auth/forgot-password" className="text-sky-500 hover:text-sky-600 text-xs sm:text-sm transition-colors">
                            Забыли пароль?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full relative py-2.5 sm:py-3 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Loader className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        )}
                        {isLoading ? "Вход..." : "Войти"}
                    </button>
                </form>

                <p className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
                    Нет аккаунта?{" "}
                    <Link href="/auth/register" className="font-semibold text-sky-600 underline">
                        Зарегистрироваться
                    </Link>
                </p>
            </div>
        </div>
    );
}