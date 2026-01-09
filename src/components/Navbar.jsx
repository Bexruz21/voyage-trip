'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLang } from '../context/LangContext';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, LogIn, UserPlus, ChevronDown } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'nav.home' },
    { href: '/destinations', label: 'nav.destinations' },
    { href: '/club', label: 'nav.club' },
    { href: '/about', label: 'nav.about' },
    { href: '/faq', label: 'nav.faq' },
    { href: '/contacts', label: 'nav.contacts' }
];

const LANGUAGES = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
    { code: 'uz', label: 'O‘zbekcha' }
];


export default function Navbar() {
    const pathname = usePathname();
    const { lang, changeLang, t } = useLang();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);


    const currentLang = LANGUAGES.find(l => l.code === lang);

    return (
        <header className="bg-white shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    <Link href="/" className="flex items-center gap-3">
                        <img src="/logo.png" className="w-14 h-14" />
                        <div>
                            <p className="font-bold text-lg">VOYAGE TRIP</p>
                            <p className="text-sm text-gray-500">
                                {t('nav.logo')}
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex gap-2 p-1 rounded-xl">
                        {navLinks.map(item => {
                            const active = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                                        ${active ? 'text-cyan-600 bg-cyan-50/80 border border-cyan-200/40' : 'text-gray-600 border border-gray-200/60 hover:bg-gray-100/50 hover:text-cyan-700'}`}>
                                    {t(item.label)}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden lg:flex items-center gap-3">
                        {/* LANGUAGE */}
                        <div ref={ref} className="relative">
                            <button
                                onClick={() => setIsLangOpen(v => !v)}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 text-sm font-medium hover:bg-gray-100"
                            >
                                {currentLang?.code.toUpperCase()}
                                <motion.span
                                    animate={{ rotate: isLangOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown size={16} />
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -6, scale: 0.96 }}
                                        transition={{ duration: 0.18, ease: 'easeOut' }}
                                        className="absolute right-0 mt-2 w-40 rounded-lg bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50"
                                    >
                                        {LANGUAGES.map(item => (
                                            <button
                                                key={item.code}
                                                onClick={() => {
                                                    changeLang(item.code);
                                                    setIsLangOpen(false);
                                                }}
                                                className={`flex items-center w-full text-left px-4 py-2 text-sm transition
                                                    ${lang === item.code
                                                        ? 'bg-cyan-50 text-cyan-600'
                                                        : 'hover:bg-gray-50'}
                                                     `}
                                            >
                                                {item.label}
                                                {lang === item.code && (
                                                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full ml-auto" />
                                                )}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* PROFILE */}
                        {/* <div className="relative hidden lg:flex">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100"
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                            >
                                <User size={18} />
                            </div>

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
                                            className="absolute min-w-64 right-0 top-full mt-2 w-auto bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                                        >
                                            {isLoggedIn && userData ? (
                                                <>
                                                    <div className="px-4 py-2 border-b border-gray-100">
                                                        <p className="text-sm font-medium text-gray-900">
                                                            {userData.first_name && userData.last_name
                                                                ? `${userData.first_name} ${userData.last_name}`
                                                                : userData.email
                                                            }
                                                        </p>
                                                        <p className="text-sm text-gray-500">ID: {userData.ref_id}</p>
                                                        <p className="text-sm text-green-600 font-medium">Баланс: {userData.balance} $</p>
                                                    </div>

                                                    <Link
                                                        href="/profile"
                                                        onClick={() => setIsProfileOpen(false)}
                                                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200"
                                                    >
                                                        <User className="w-4 h-4" />
                                                        <span>Профиль</span>
                                                    </Link>

                                                    <button
                                                        onClick={handleLogout}
                                                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-all duration-200"
                                                    >
                                                        <LogOut className="w-4 h-4" />
                                                        <span>Выйти</span>
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="px-4 py-2 border-b border-gray-100">
                                                        <p className="text-sm font-medium text-gray-900">Гость</p>
                                                        <p className="text-xs text-gray-500">Войдите в аккаунт</p>
                                                    </div>

                                                    <Link
                                                        href="/auth/login"
                                                        onClick={() => setIsProfileOpen(false)}
                                                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200"
                                                    >
                                                        <LogIn className="w-4 h-4" />
                                                        <span>Войти</span>
                                                    </Link>

                                                    <Link
                                                        href="/auth/register"
                                                        onClick={() => setIsProfileOpen(false)}
                                                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200"
                                                    >
                                                        <UserPlus className="w-4 h-4" />
                                                        <span>Регистрация</span>
                                                    </Link>
                                                </>
                                            )}
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div> */}
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={"lg:hidden p-3 rounded-lg bg-gray-100 transition-all duration-300"}
                    >
                        <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                            <motion.span
                                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                    }`}
                            />
                            <motion.span
                                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 -translate-x-2" : "opacity-100"
                                    }`}
                            />
                            <motion.span
                                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                    }`}
                            />
                        </div>
                    </motion.button>
                </div>
            </div>
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
                            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200 z-50 lg:hidden flex flex-col"
                        >
                            <div className="flex-1 overflow-y-auto">
                                <div className="p-5">
                                    {/* Menu Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src="/logo.png"
                                                alt="VOYAGE TRIP"
                                                className="w-14 h-14 object-contain"
                                            />
                                            <div>
                                                <h2 className="text-lg font-bold text-gray-900">VOYAGE TRIP</h2>
                                                <p className="text-xs text-gray-500">{t('nav.logo')}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Language Selector Mobile */}
                                    <div className="mb-6 pb-4 border-b border-gray-200/60">
                                        <div className="flex space-x-2">
                                            {LANGUAGES.map((language) => (
                                                <button
                                                    key={language.code}
                                                    onClick={() => changeLang(language.code)}
                                                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm border ${currentLang.code === language.code
                                                        ? "bg-cyan-50 text-cyan-600 border-cyan-200"
                                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100 border-transparent"
                                                        }`}
                                                >
                                                    <span className="uppercase">{language.code}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <nav className="space-y-1 mb-6">
                                        {navLinks.map((item, index) => {
                                            const isActive = pathname === item.href;
                                            return (
                                                <motion.div key={index}>
                                                    <Link
                                                        href={item.href}
                                                        className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold group ${isActive
                                                            ? "bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 border border-cyan-200"
                                                            : "bg-gray-100/20 text-gray-600 border border-cyan-200/0 hover:bg-gray-100 hover:text-gray-900"
                                                            }`}
                                                    >
                                                        <span className="flex items-center text-sm">
                                                            {t(item.label)}
                                                        </span>
                                                        {isActive && (
                                                            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                                        )}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
