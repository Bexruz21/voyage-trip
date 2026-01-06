'use client'

import { useEffect, useState } from 'react';
import { MembershipCard } from './MembershipCard';
import { motion } from 'framer-motion';
import axios from 'axios';
import { API } from '@/api/api';

export function MembershipCardsSection() {
    const [cards, setCards] = useState(null)

    useEffect(() => {
        axios.get(API.CARDS).then(res => {
            setCards(res.data)
        })
    }, [])

    return (
        <section className="py-16 bg-white/50" id='membership-cards-section'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                    Выберите свою <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">карту</span>
                </h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Подберите оптимальный уровень членства для вашего стиля путешествий
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {cards && cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <MembershipCard card={card} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}