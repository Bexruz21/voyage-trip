"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Mail, Phone, User } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        ref_code: "", // Добавлено поле реферального кода
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Пароли не совпадают!");
            setIsLoading(false);
            return;
        }

          const payload = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
        };

        // Добавляем ref_code только если он не пустой
        if (formData.ref_code.trim() !== "") {
            payload.ref_code = formData.ref_code.trim();
        }

        try {
            const registerRes = await fetch("https://voyage-trip-api.onrender.com/api/user/register/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const registerData = await registerRes.json();
            console.log("Ответ от Django:", registerData);

            if (!registerRes.ok) {
                if (registerData.email) {
                    setError("Пользователь с таким email уже существует");
                } else if (registerData.phone) {
                    setError("Пользователь с таким телефоном уже существует");
                } else {
                    setError("Ошибка регистрации: " + JSON.stringify(registerData));
                }
                return;
            }

            const loginRes = await fetch("https://voyage-trip-api.onrender.com/api/user/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const tokenData = await loginRes.json();

            if (!loginRes.ok) {
                setError(
                    "Ошибка при автоматическом входе: " +
                    (tokenData.detail || "Неверные учетные данные")
                );
                return;
            }

            localStorage.setItem("access", tokenData.access);
            localStorage.setItem("refresh", tokenData.refresh);
            window.dispatchEvent(new Event('storage'));
            router.push("/");
        } catch (error) {
            console.error("Ошибка сети:", error);
            setError(
                "Не удалось подключиться к серверу. Проверьте подключение к интернету."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 px-3 sm:px-4 py-8 sm:py-16">
            <div className="w-full max-w-[95vw] sm:max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-4 sm:p-8 border border-sky-100 backdrop-blur-sm relative z-10 mx-auto">
                {/* Верхний заголовок - адаптирован для мобилок */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center shadow-md sm:shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 2a10 10 0 100 20 10 10 0 000-20zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-800">
                        Voyage Trip
                    </h2>
                    <p className="text-sky-500 mt-1 sm:mt-2 text-sm sm:text-base">
                        Создайте свой аккаунт путешественника
                    </p>
                </div>

                {/* Ошибка - адаптирована для мобилок */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm rounded-lg sm:rounded-xl">
                        {error}
                    </div>
                )}

                {/* Форма - адаптирована для мобилок */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Имя и Фамилия - в колонку на мобилке */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input
                            type="text"
                            name="first_name"
                            placeholder="Имя"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Фамилия"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <Mail size={20} className="text-sky-500 absolute right-4 top-1/2 -translate-y-1/2"/>
                    </div>

                    <div className="relative">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Телефон"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <Phone size={20} className="text-sky-500 absolute right-4 top-1/2 -translate-y-1/2"/>
                    </div>

                    {/* Реферальный код - добавлено новое поле */}
                    <div className="relative">
                        <input
                            type="text"
                            name="ref_code"
                            placeholder="Реферальный код (необязательно)"
                            value={formData.ref_code}
                            onChange={handleChange}
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <User size={20} className="text-sky-500 absolute right-4 top-1/2 -translate-y-1/2"/>
                    </div>

                    {/* Пароль */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Пароль"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600 p-0.5"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>

                    {/* Повтор пароля */}
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Повторите пароль"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full pr-9 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 focus:bg-white focus:border-sky-400 focus:ring-1 sm:focus:ring-2 focus:ring-sky-100 text-gray-700 text-sm shadow-sm outline-none"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600 p-0.5"
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>

                    {/* Удален чекбокс соглашения с условиями */}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Регистрация..." : "Создать аккаунт"}
                    </button>
                </form>

                <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-sky-600">
                    Уже есть аккаунт?{" "}
                    <Link href="/login" className="font-semibold text-sky-700 underline">
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
}