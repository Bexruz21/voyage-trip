"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, X, AlertCircle, Loader, CheckCircle, Key, Lock } from "lucide-react";
import { API } from "@/config/api";

export default function ResetPassword() {
    const router = useRouter();
    const [form, setForm] = useState({ 
        code: "", 
        new_password: "", 
        confirm_password: "" 
    });
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem("reset_password_email");
        if (savedEmail) {
            setEmail(savedEmail);
        } else {
            router.push("/auth/forgot-password");
        }
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!form.code || !form.new_password || !form.confirm_password) {
            setError("Пожалуйста, заполните все поля.");
            return;
        }

        if (form.new_password !== form.confirm_password) {
            setError("Пароли не совпадают.");
            return;
        }

        if (form.new_password.length < 6) {
            setError("Пароль должен содержать минимум 6 символов.");
            return;
        }

        if (form.code.length !== 6) {
            setError("Код должен содержать 6 цифр.");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(API.AUTH.RESET_PASSWORD, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    code: form.code,
                    new_password: form.new_password
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Произошла ошибка при сбросе пароля");
                return;
            }

            localStorage.removeItem("reset_password_email");
            setSuccess(true);
            
            setTimeout(() => {
                router.push("/auth/login");
            }, 2000);
        } catch (err) {
            setError("Произошла ошибка при отправке запроса");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    if (!email) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 w-full max-w-md border border-sky-50">
                    <div className="text-center">
                        <Loader className="w-8 h-8 animate-spin text-sky-500 mx-auto mb-4" />
                        <p className="text-gray-600">Загрузка...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 px-3 sm:px-4 py-8 sm:py-16">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 py-8 sm:p-8 w-full max-w-[95vw] sm:max-w-md border border-sky-50 transition-all mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center shadow-md sm:shadow-lg">
                            <Lock className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-800 tracking-tight">Сброс пароля</h2>
                    <p className="text-sky-500 mt-1 sm:mt-2 text-xs sm:text-sm">
                        {success ? "Пароль успешно изменен!" : "Введите код и новый пароль"}
                    </p>
                    {!success && (
                        <p className="text-gray-600 mt-2 text-sm">
                            Код отправлен на: <strong>{email}</strong>
                        </p>
                    )}
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
                                Пароль успешно изменен! Перенаправляем на страницу входа...
                            </span>
                        </div>
                    </div>
                )}

                {!success ? (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                value={form.code}
                                onChange={(e) => handleChange("code", e.target.value.replace(/\D/g, '').slice(0, 6))}
                                placeholder="Код из письма"
                                className="w-full pl-3 sm:pl-4 pr-8 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-gray-700 bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-200 transition-all duration-300 outline-none shadow-sm text-sm sm:text-base text-center tracking-widest font-mono"
                                required
                                aria-label="Код подтверждения"
                                maxLength={6}
                                disabled={isLoading}
                            />
                            <Key className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 w-5 h-5" />
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={form.new_password}
                                onChange={(e) => handleChange("new_password", e.target.value)}
                                placeholder="Новый пароль"
                                className="w-full pl-3 sm:pl-4 pr-8 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-gray-700 bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-200 transition-all duration-300 outline-none shadow-sm text-sm sm:text-base"
                                required
                                aria-label="Новый пароль"
                                autoComplete="new-password"
                                disabled={isLoading}
                                minLength={6}
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

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={form.confirm_password}
                                onChange={(e) => handleChange("confirm_password", e.target.value)}
                                placeholder="Повторите пароль"
                                className="w-full pl-3 sm:pl-4 pr-8 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-gray-700 bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-200 transition-all duration-300 outline-none shadow-sm text-sm sm:text-base"
                                required
                                aria-label="Подтверждение пароля"
                                autoComplete="new-password"
                                disabled={isLoading}
                                minLength={6}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 hover:text-sky-600 transition p-0.5 sm:p-1"
                                aria-label={showConfirmPassword ? "Скрыть пароль" : "Показать пароль"}
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full relative py-2.5 sm:py-3 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <Loader className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                            )}
                            {isLoading ? "Сброс..." : "Сбросить пароль"}
                        </button>
                    </form>
                ) : null}

                <div className="mt-6 sm:mt-8 text-center space-y-2">
                    <p className="text-gray-500 text-xs sm:text-sm">
                        <Link href="/auth/login" className="font-semibold text-sky-600 underline">
                            Вернуться к входу
                        </Link>
                    </p>
                    <p className="text-gray-400 text-xs">
                        Не пришел код?{" "}
                        <button 
                            onClick={() => router.push("/auth/forgot-password")}
                            className="text-sky-500 underline hover:text-sky-600"
                        >
                            Отправить повторно
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}