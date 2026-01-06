'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '../HeroSection';
import { SearchSection } from './SearchSection';
import { CategoriesSection } from './CategoriesSection';
import { FaqItems } from './FaqItems';
import { ContactMethods } from './ContactMethods';
import { useLang } from '@/context/LangContext';
import { faqItems } from './data';

function FaqContent() {
    const { lang } = useLang();
    const [openItems, setOpenItems] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const filteredItems = faqItems.filter(item => {
        const q = item.question[lang].toLowerCase();
        const a = item.answer[lang].toLowerCase();

        const matchesSearch =
            q.includes(searchQuery.toLowerCase()) ||
            a.includes(searchQuery.toLowerCase());

        const matchesCategory =
            activeCategory === 'all' || item.category === activeCategory;

        return matchesSearch && matchesCategory;
    });


    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
            <div className="relative z-10">
                <HeroSection isClient={isClient} page="faq" />
                <SearchSection
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />
                <CategoriesSection
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />
                <FaqItems
                    isClient={isClient}
                    filteredItems={filteredItems.map(item => ({
                        ...item,
                        question: item.question[lang],
                        answer: item.answer[lang],
                    }))}
                    openItems={openItems}
                    onToggleItem={toggleItem}
                />

                <ContactMethods />
            </div>
        </div>
    );
}

export default FaqContent;