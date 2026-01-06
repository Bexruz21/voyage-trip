"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Phone, User, Loader, AlertCircle, X } from "lucide-react";
import { API } from "@/api/api";

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        ref_code: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        if (form.password !== form.confirmPassword) {
            setError("Пароли не совпадают!");
            setIsLoading(false);
            return;
        }

        const payload = {
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            phone: form.phone,
            password: form.password,
        };

        if (form.ref_code.trim() !== "") {
            payload.referred_by = form.ref_code.trim();
        }

        try {
            const response = await fetch(API.AUTH.REGISTER, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                credentials: "include"
            });

            const responseData = await response.json();

            if (!response.ok) {
                if (responseData.email) {
                    setError("Пользователь с таким email уже существует");
                } else if (responseData.phone) {
                    setError("Пользователь с таким телефоном уже существует");
                } else {
                    setError("Ошибка регистрации");
                }
                return;
            }

            localStorage.setItem("access", responseData.tokens.access);
            localStorage.setItem("refresh", responseData.tokens.refresh);

            window.dispatchEvent(new Event('storage'));
            router.push("/");
        } catch (error) {
            setError("Не удалось подключиться к серверу. Проверьте подключение.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 px-3 sm:px-4 py-8 sm:py-16">
            <div className="w-full max-w-[95vw] sm:max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-4 sm:p-8 border border-sky-100 backdrop-blur-sm mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center shadow-md sm:shadow-lg">
                        <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-800">Voyage Trip</h2>
                    <p className="text-sky-500 mt-1 sm:mt-2 text-sm sm:text-base">Создайте свой аккаунт путешественника</p>
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

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input
                            type="text"
                            value={form.first_name}
                            onChange={(e) => handleChange("first_name", e.target.value)}
                            placeholder="Имя"
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <input
                            type="text"
                            value={form.last_name}
                            onChange={(e) => handleChange("last_name", e.target.value)}
                            placeholder="Фамилия"
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="Email"
                            required
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <Mail className="w-5 h-5 text-sky-500 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>

                    <div className="relative">
                        <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="Телефон"
                            required
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <Phone className="w-5 h-5 text-sky-500 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            value={form.ref_code}
                            onChange={(e) => handleChange("ref_code", e.target.value)}
                            placeholder="Реферальный код (необязательно)"
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <User className="w-5 h-5 text-sky-500 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={form.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            placeholder="Пароль"
                            required
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600 p-0.5"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={form.confirmPassword}
                            onChange={(e) => handleChange("confirmPassword", e.target.value)}
                            placeholder="Повторите пароль"
                            required
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600 p-0.5"
                        >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full relative py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading && (
                            <Loader className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        )}
                        {isLoading ? "Регистрация..." : "Создать аккаунт"}
                    </button>
                </form>

                <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-sky-600">
                    Уже есть аккаунт?{" "}
                    <Link href="/auth/login" className="font-semibold text-sky-700 underline">
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
}