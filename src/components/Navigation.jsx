'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Navigation() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const navItems = [
        { path: "/", label: "Направления" },
        { path: "/club", label: "Клуб" },
        { path: "/about", label: "О нас" },
        { path: "/faq", label: "FAQ" },
        { path: "/contacts", label: "Контакты" }
    ];

    useEffect(() => {
        setIsClient(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="relative bg-white shadow-lg sticky top-0 z-50 transition-all duration-500 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <Link href="/">
                                <img
                                    src="/logo.png"
                                    alt="VOYAGE TRIP"
                                    className="w-16 h-16 object-contain"
                                />
                            </Link>
                            <div>
                                <Link href="/">
                                    <h1 className="m-0 text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                        VOYAGE TRIP
                                    </h1>
                                </Link>
                                <p className="text-sm text-gray-500">Премиум путешествия</p>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                const linkClass = `relative px-6 py-3 rounded-xl font-semibold transition-colors duration-200 group ${isActive
                                    ? "text-cyan-600"
                                    : "text-gray-600 hover:text-cyan-600"
                                    }`;

                                return (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={linkClass}
                                    >
                                        <span className="relative z-10">{item.label}</span>

                                        {/* Active Indicator - без layoutId */}
                                        {isActive && isClient && (
                                            <motion.div
                                                className="absolute inset-0 bg-cyan-50 rounded-xl border border-cyan-200"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Mobile Menu Button */}
                        {isClient ? (
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all duration-200"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                    <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-200 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                        }`} />
                                    <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-200 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                                        }`} />
                                    <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-200 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                        }`} />
                                </div>
                            </motion.button>
                        ) : (
                            <button className="lg:hidden p-3 bg-gray-100 text-gray-600 rounded-xl">
                                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                    <span className="block w-6 h-0.5 bg-gray-600" />
                                    <span className="block w-6 h-0.5 bg-gray-600" />
                                    <span className="block w-6 h-0.5 bg-gray-600" />
                                </div>
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isClient && (
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.4 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="fixed"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />

                                {/* Само меню — внутри header, но под шапкой */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                    className="absolute inset-x-0 top-full z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200 overflow-y-auto shadow-xl"
                                >
                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                                        <div className="space-y-2">
                                            {navItems.map((item) => {
                                                const isActive = pathname === item.path;
                                                return (
                                                    <Link
                                                        key={item.path}
                                                        href={item.path}
                                                        onClick={handleLinkClick}
                                                        className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${isActive
                                                                ? "bg-cyan-50 text-cyan-600"
                                                                : "text-gray-600 hover:bg-gray-50"
                                                            }`}
                                                    >
                                                        <span>{item.label}</span>
                                                        {isActive && (
                                                            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                                                        )}
                                                    </Link>
                                                );
                                            })}
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