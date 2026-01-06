'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '@/api/api'
import { useLang } from '@/context/LangContext'
import { HeroSection } from './HeroSection'
import { RegionCard } from './RegionCard'

export default function HomePage() {
  const [regions, setRegions] = useState([])
  const { t } = useLang();

  useEffect(() => {
    axios.get(API.REGIONS.LIST).then(res => {
      setRegions(res.data)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      <section id="regions" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("destinations.regions.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("destinations.regions.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map(region => (
            <RegionCard
              key={region.id}
              region={region}
            />
          ))}
        </div>
      </section>
    </div>
  )
}