"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email.trim() || !password) {
            setError("Пожалуйста, введите email и пароль.");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch("http://127.0.0.1:8000/api/auth/token/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim(), password }),
            });

            const data = await res.json();

            if (!res.ok) {
                let errMsg = "Ошибка входа.";

                if (data.detail) {
                    if (data.detail === "No active account found with the given credentials") {
                        errMsg = "Неверный email или пароль.";
                    } else {
                        errMsg = data.detail;
                    }
                } else if (data.non_field_errors) {
                    errMsg = data.non_field_errors.join(" ");
                } else if (data.email) {
                    errMsg = Array.isArray(data.email) ? data.email.join(" ") : data.email;
                } else if (data.password) {
                    errMsg = Array.isArray(data.password) ? data.password.join(" ") : data.password;
                }

                setError(errMsg);
                return;
            }

            if (data.access && data.refresh) {
                localStorage.setItem("access", data.access);
                localStorage.setItem("refresh", data.refresh);
                router.push("/");
            } else {
                setError("Сервер вернул неожиданный ответ при входе.");
            }
        } catch (err) {
            console.error("Network/login error:", err);
            setError("Не удалось подключиться к серверу. Проверьте подключение.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 px-3 sm:px-4 py-8 sm:py-16">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 sm:p-8 md:p-10 w-full max-w-[95vw] sm:max-w-md border border-sky-50 transition-all mx-auto">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center shadow-md sm:shadow-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7.5 4v5c0 4.418-3.582 8-8 8s-8-3.582-8-8V7l7.5-4z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-800 tracking-tight">Voyage Trip</h2>
                    <p className="text-sky-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">Вход в личный кабинет</p>
                </div>

                {/* Ошибка */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg sm:rounded-md text-xs sm:text-sm text-red-700 flex items-start justify-between">
                        <div className="flex items-start space-x-2 flex-1">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
                            </svg>
                            <span className="leading-tight sm:leading-normal">{error}</span>
                        </div>
                        <button onClick={() => setError("")} className="text-red-500 hover:text-red-700 ml-2 flex-shrink-0">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-gray-700 bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-200 transition-all duration-300 outline-none shadow-sm text-sm sm:text-base"
                            required
                            aria-label="Email"
                            autoComplete="username"
                            disabled={isLoading}
                        />
                        <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-sky-400" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Пароль"
                            className="w-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-gray-700 bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-200 transition-all duration-300 outline-none shadow-sm text-sm sm:text-base"
                            required
                            aria-label="Пароль"
                            autoComplete="current-password"
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-sky-400 hover:text-sky-600 transition p-0.5 sm:p-1"
                            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                        > 
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>

                    {/* Forgot password */}
                    <div className="text-right">
                        <a href="#" className="text-sky-500 hover:text-sky-600 text-xs sm:text-sm transition-colors">
                            Забыли пароль?
                        </a>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full relative py-2.5 sm:py-3 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" strokeOpacity="0.25" />
                                    <path d="M22 12a10 10 0 00-10-10" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                        )}
                        {isLoading ? "Вход..." : "Войти"}
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
                    Нет аккаунта?{" "}
                    <Link href="/register" className="font-semibold text-sky-600 underline">
                        Зарегистрироваться
                    </Link>
                </p>
            </div>
        </div>
    );
}
