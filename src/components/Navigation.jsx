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

    // Базовые стили которые видны сразу (для SEO)
    const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled && isClient
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white/90 backdrop-blur-md"
        }`;

    return (
        <>
            {/* Static fallback for SEO - видно сразу */}
            <header className={headerClass}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo - всегда видно */}
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
                                    <h1 className="m-0 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                        VOYAGE TRIP
                                    </h1>
                                </Link>
                                <p className="text-sm text-gray-500">Премиум путешествия</p>
                            </div>
                        </div>

                        {/* Desktop Menu - всегда видно, анимации только на клиенте */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.path;
                                const linkClass = `relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${isActive
                                        ? "text-cyan-600 bg-cyan-50"
                                        : "text-gray-600 hover:text-cyan-600 hover:bg-gray-50"
                                    }`;

                                // На сервере - простой Link, на клиенте - с анимациями
                                if (!isClient) {
                                    return (
                                        <Link
                                            key={item.path}
                                            href={item.path}
                                            className={linkClass}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                }

                                return (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.path}
                                            className={linkClass}
                                        >
                                            <span className="relative z-10">{item.label}</span>

                                            {/* Active Indicator - только на клиенте */}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-200"
                                                    layoutId="activeIndicator"
                                                />
                                            )}

                                            {/* Hover Effect - только на клиенте */}
                                            {!isActive && (
                                                <motion.div
                                                    className="absolute inset-0 rounded-xl bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    whileHover={{ opacity: 1 }}
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                        </nav>

                        {/* Mobile Menu Button */}
                        {isClient ? (
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all duration-300"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                    <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                        }`} />
                                    <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                                        }`} />
                                    <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
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

                {/* Mobile Menu - только на клиенте */}
                {isClient && (
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl"
                            >
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                                    <div className="space-y-2">
                                        {navItems.map((item, index) => {
                                            const isActive = pathname === item.path;
                                            return (
                                                <motion.div
                                                    key={item.path}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <Link
                                                        href={item.path}
                                                        onClick={handleLinkClick}
                                                        className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${isActive
                                                                ? "bg-cyan-50 text-cyan-600"
                                                                : "text-gray-600 hover:bg-gray-50"
                                                            }`}
                                                    >
                                                        <span>{item.label}</span>
                                                        {isActive && (
                                                            <motion.div
                                                                className="w-2 h-2 bg-cyan-500 rounded-full"
                                                                layoutId="mobileActiveIndicator"
                                                            />
                                                        )}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}

                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}

            </header>
            <div className="h-20 lg:h-[95px]" />

        </>
    );
}

export default Navigation;