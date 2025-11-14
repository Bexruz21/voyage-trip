"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, X, AlertCircle, Loader, CheckCircle, Lock } from "lucide-react";
import { API } from "@/config/api";

export default function ForgotPassword() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem("reset_password_email");
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!email.trim()) {
            setError("Пожалуйста, введите email.");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(API.AUTH.FORGOT_PASSWORD, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email.trim()
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Произошла ошибка при отправке кода");
                return;
            }

            localStorage.setItem("reset_password_email", email.trim());
            setSuccess(true);
        } catch (err) {
            setError("Произошла ошибка при отправке запроса");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoToReset = () => {
        router.push("/auth/reset-password");
    };

    const handleResendCode = () => {
        setSuccess(false);
        handleSubmit(new Event('submit'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 px-3 sm:px-4 py-8 sm:py-16">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 py-8 sm:p-8 w-full max-w-[95vw] sm:max-w-md border border-sky-50 transition-all mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center shadow-md sm:shadow-lg">
                            <Lock className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-800 tracking-tight">Восстановление пароля</h2>
                    <p className="text-sky-500 mt-1 sm:mt-2 text-xs sm:text-sm">
                        {success ? "Код отправлен на вашу почту" : "Введите email для получения кода"}
                    </p>
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

                {success && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg sm:rounded-md text-xs sm:text-sm text-green-700 flex items-center justify-between">
                        <div className="flex items-center space-x-2 flex-1">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                            <span className="leading-tight sm:leading-normal">
                                Код для сброса пароля отправлен на <strong>{email}</strong>
                            </span>
                        </div>
                        <button onClick={() => setSuccess(false)} className="text-green-500 hover:text-green-700 ml-2 flex-shrink-0">
                            <X className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                    </div>
                )}

                {!success ? (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="w-full pl-3 sm:pl-4 pr-8 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-gray-700 bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-200 transition-all duration-300 outline-none shadow-sm text-sm sm:text-base"
                                required
                                aria-label="Email"
                                autoComplete="email"
                                disabled={isLoading}
                            />
                            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 w-5 h-5" />
                        </div>

                        <button
                            type="submit"
                            className="w-full relative py-2.5 sm:py-3 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <Loader className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                            )}
                            {isLoading ? "Отправка..." : "Получить код"}
                        </button>
                    </form>
                ) : (
                    <div className="space-y-4">
                        <button
                            onClick={handleGoToReset}
                            className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                        >
                            Ввести код
                        </button>
                        
                        <button
                            onClick={handleResendCode}
                            className="w-full py-2.5 sm:py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base"
                            disabled={isLoading}
                        >
                            {isLoading ? "Отправка..." : "Отправить код повторно"}
                        </button>
                    </div>
                )}

                <p className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
                    Вспомнили пароль?{" "}
                    <Link href="/auth/login" className="font-semibold text-sky-600 underline">
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
}