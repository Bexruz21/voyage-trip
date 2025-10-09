'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Navigation() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("ru");

    const navItems = [
        { path: "/", label: "Главная" },
        { path: "/destinations", label: "Направления" },
        { path: "/club", label: "Клуб" },
        { path: "/about", label: "О нас" },
        { path: "/faq", label: "FAQ" },
        { path: "/contacts", label: "Контакты" }
    ];

    const languages = [
        { code: "ru", label: "Русский", flag: "🇷🇺" },
        { code: "en", label: "English", flag: "🇺🇸" },
        { code: "uz", label: "O'zbek", flag: "🇺🇿" }
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLanguageChange = (langCode) => {
        setCurrentLanguage(langCode);
        setIsLanguageOpen(false);
        // Здесь можно добавить логику смены языка
    };

    const currentLang = languages.find(lang => lang.code === currentLanguage);

    return (
        <>
            <header className="relative bg-white shadow-xl py-1 sticky top-0 z-50 transition-all duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo - Compact */}
                        <div className="flex items-center space-x-3">
                            <Link href="/" className="group">
                                <div className="relative">
                                    <img
                                        src="/logo.png"
                                        alt="VOYAGE TRIP"
                                        className="w-14 h-14 object-contain transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </Link>
                            <div className="flex flex-col">
                                <Link href="/">
                                    <h1 className="m-0 text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent tracking-tight">
                                        VOYAGE TRIP
                                    </h1>
                                </Link>
                                <p className="text-xs text-gray-500 tracking-wide">Премиум путешествия</p>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                const linkClass = `relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 group overflow-hidden ${
                                    isActive
                                        ? "text-cyan-600"
                                        : "text-gray-600 hover:text-cyan-700"
                                }`;

                                return (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={linkClass}
                                    >
                                        <span className="relative z-10 flex items-center text-sm">
                                            {item.label}
                                        </span>

                                        {isActive && isClient && (
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200/80 shadow-sm"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}

                                        {!isActive && (
                                            <motion.div
                                                className="absolute inset-0 bg-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                whileHover={{ opacity: 1 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Right Side - Language & Profile */}
                        <div className="flex items-center space-x-2">
                            {/* Language Selector */}
                            <div className="relative hidden lg:flex">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                                >
                                    <span className="text-sm">{currentLang?.flag}</span>
                                    <span className="text-xs font-medium text-gray-700 uppercase">
                                        {currentLang?.code}
                                    </span>
                                    <motion.svg
                                        animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-3 h-3 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </motion.button>

                                <AnimatePresence>
                                    {isLanguageOpen && (
                                        <>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="fixed inset-0 z-40"
                                                onClick={() => setIsLanguageOpen(false)}
                                            />
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                                            >
                                                {languages.map((language) => (
                                                    <button
                                                        key={language.code}
                                                        onClick={() => handleLanguageChange(language.code)}
                                                        className={`flex items-center space-x-3 w-full px-4 py-2 text-sm transition-all duration-200 ${
                                                            currentLanguage === language.code
                                                                ? "bg-cyan-50 text-cyan-600"
                                                                : "text-gray-700 hover:bg-gray-50"
                                                        }`}
                                                    >
                                                        <span className="text-base">{language.flag}</span>
                                                        <span>{language.label}</span>
                                                        {currentLanguage === language.code && (
                                                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full ml-auto" />
                                                        )}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Profile Menu */}
                            <div className="relative hidden lg:flex">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                                >
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </motion.button>

                                <AnimatePresence>
                                    {isProfileOpen && (
                                        <>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="fixed inset-0 z-40"
                                                onClick={() => setIsProfileOpen(false)}
                                            />
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                                            >
                                                <div className="px-4 py-2 border-b border-gray-100">
                                                    <p className="text-sm font-medium text-gray-900">Гость</p>
                                                    <p className="text-xs text-gray-500">Войдите в аккаунт</p>
                                                </div>
                                                
                                                <Link
                                                    href="/login"
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                    </svg>
                                                    <span>Войти</span>
                                                </Link>
                                                
                                                <Link
                                                    href="/register"
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                                    </svg>
                                                    <span>Регистрация</span>
                                                </Link>
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile Menu Button */}
                            {isClient ? (
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                                        isMobileMenuOpen 
                                            ? "bg-cyan-50 text-cyan-600" 
                                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                    }`}
                                >
                                    <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                                        <motion.span 
                                            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                            }`}
                                        />
                                        <motion.span 
                                            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                                isMobileMenuOpen ? "opacity-0 -translate-x-2" : "opacity-100"
                                            }`}
                                        />
                                        <motion.span 
                                            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                            }`}
                                        />
                                    </div>
                                </motion.button>
                            ) : (
                                <button className="lg:hidden p-2 bg-gray-100 text-gray-600 rounded-lg">
                                    <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                                        <span className="block w-5 h-0.5 bg-gray-600" />
                                        <span className="block w-5 h-0.5 bg-gray-600" />
                                        <span className="block w-5 h-0.5 bg-gray-600" />
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Enhanced Mobile Menu */}
                {isClient && (
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />

                                <motion.div
                                    initial={{ opacity: 0, x: "100%" }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: "100%" }}
                                    transition={{ 
                                        type: "spring",
                                        damping: 30,
                                        stiffness: 300
                                    }}
                                    className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200 z-50 lg:hidden overflow-y-auto"
                                >
                                    <div className="p-6">
                                        {/* Menu Header */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src="/logo.png"
                                                    alt="VOYAGE TRIP"
                                                    className="w-12 h-12 object-contain"
                                                />
                                                <div>
                                                    <h2 className="text-lg font-bold text-gray-900">VOYAGE TRIP</h2>
                                                    <p className="text-xs text-gray-500">Премиум путешествия</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Language Selector Mobile */}
                                        <div className="mb-3 pb-3 border-b border-gray-200/60">
                                            <div className="flex space-x-2">
                                                {languages.map((language) => (
                                                    <button
                                                        key={language.code}
                                                        onClick={() => handleLanguageChange(language.code)}
                                                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm border ${
                                                            currentLanguage === language.code
                                                                ? "bg-cyan-50 text-cyan-600 border-cyan-200"
                                                                : "bg-gray-50 text-gray-600 hover:bg-gray-100 border-transparent"
                                                        }`}
                                                    >
                                                        <span>{language.flag}</span>
                                                        <span className="uppercase">{language.code}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Navigation Items */}
                                        <nav className="space-y-1 mb-6">
                                            {navItems.map((item, index) => {
                                                const isActive = pathname === item.path;
                                                return (
                                                    <motion.div
                                                        key={item.path}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ 
                                                            opacity: 1, 
                                                            x: 0,
                                                            transition: { delay: index * 0.1 }
                                                        }}
                                                    >
                                                        <Link
                                                            href={item.path}
                                                            onClick={handleLinkClick}
                                                            className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                                                                isActive
                                                                    ? "bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 border border-cyan-200"
                                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                            }`}
                                                        >
                                                            <span className="flex items-center text-sm">
                                                                {item.label}
                                                            </span>
                                                            {isActive && (
                                                                <motion.div 
                                                                    className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    transition={{ delay: 0.2 }}
                                                                />
                                                            )}
                                                        </Link>
                                                    </motion.div>
                                                );
                                            })}
                                        </nav>

                                        {/* Auth Buttons Mobile */}
                                        <div className="space-y-2 mb-6">
                                            <Link
                                                href="/login"
                                                onClick={handleLinkClick}
                                                className="flex items-center justify-center space-x-2 w-full px-4 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                </svg>
                                                <span>Войти</span>
                                            </Link>
                                            <Link
                                                href="/register"
                                                onClick={handleLinkClick}
                                                className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                                </svg>
                                                <span>Регистрация</span>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                )}
            </header>
        </>
    );
}

export default Navigation;