'use client'

import { useState, useEffect, useMemo, use } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { API } from '@/api/api'
import { useLang } from '@/context/LangContext'
import { CityCard } from '@/components/destinations/CityCard'
import { CityDetail } from '@/components/destinations/CityDetail'
import { ArrowLeft, Building, Clock, Globe } from 'lucide-react'


export default function RegionDetail({ params }) {
    const { id } = use(params)
    const { t, lang } = useLang()

    const [region, setRegion] = useState(null)
    const [countries, setCountries] = useState([])
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('all')
    const [priceSort, setPriceSort] = useState('none')

    const [filtersOpen, setFiltersOpen] = useState(false)

    const filteredCities = useMemo(() => {
        let result = [...cities]

        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            result = result.filter(city =>
                city.name[lang].toLowerCase().includes(query) ||
                city.country.name[lang].toLowerCase().includes(query)
            )
        }

        if (selectedCountry !== 'all') {
            result = result.filter(
                city => String(city.country.id) === String(selectedCountry)
            )
        }
        if (priceSort === 'low') {
            result.sort((a, b) => a.price - b.price)
        }
        if (priceSort === 'high') {
            result.sort((a, b) => b.price - a.price)
        }
        if (priceSort === 'rating') {
            result.sort((a, b) => b.rating - a.rating)
        }

        return result
    }, [cities, searchQuery, selectedCountry, priceSort, lang])


    useEffect(() => {
        axios.get(API.REGIONS.DETAIL(id)).then(res => {
            setRegion(res.data)
            setCountries(res.data.countries)
        })
        axios.get(`${API.CITIES.LIST}?region=${id}`).then(res => {
            setCities(res.data)
        })
    }, [])

    if (!region) {
        return (
            <div className="flex items-center justify-center h-[90vh]">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black" />
            </div>
        )
    }

    if (selectedCity) {
        return (
            <CityDetail
                city={selectedCity}
                countries={countries}
                setSelectedCity={setSelectedCity}
            />
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="relative overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={region.images[0]}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                </div>

                <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 relative z-10">
                    <Link href={'/destinations'}>
                        <button
                            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all mb-6 md:mb-8 group text-white text-sm md:text-base"
                        >
                            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-x-1 transition-transform" />
                            <span className="font-semibold">{t("destinations.regionHero.back")}</span>
                        </button>
                    </Link>

                    <div className="max-w-5xl">
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                            <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg md:shadow-xl border border-white/30">
                                <Globe className="w-6 h-6 md:w-10 md:h-10 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 md:mb-2 leading-tight">
                                    {region.display_name[lang]}
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80">
                                    {t("destinations.regionHero.discover")}
                                </p>
                            </div>
                        </div>

                        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-10 leading-relaxed max-w-2xl">
                            {region.description[lang]}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-3 bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl border border-white/20 flex-1">
                                <Clock className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
                                <div className="min-w-0">
                                    <div className="text-xs text-white/60 font-medium truncate">{t("destinations.regionHero.bestTime")}</div>
                                    <div className="text-white font-semibold text-sm md:text-base truncate">{region.best_time[lang]}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-3 bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl border border-white/20 flex-1">
                                <Building className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
                                <div className="min-w-0">
                                    <div className="text-xs text-white/60 font-medium truncate">{t("destinations.regionHero.topCities")}</div>
                                    <div className="text-white font-semibold text-sm md:text-base truncate">
                                        {region.popular_cities.slice(0, 2).map(city => city.name[lang]).join(', ')}
                                        {region.popular_cities.length > 2 && ` +${region.popular_cities.length - 2}`}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-3 bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl border border-white/20 flex-1">
                                <Globe className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
                                <div className="min-w-0">
                                    <div className="text-xs text-white/60 font-medium truncate">{t("destinations.regionHero.countries")}</div>
                                    <div className="text-white font-semibold text-sm md:text-base">{region.countries.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="lg:hidden px-6 py-4 bg-white backdrop-blur-xl shadow-lg border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                    {region.name[lang]}
                </h2>

                <button
                    onClick={() => setFiltersOpen(true)}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold active:scale-95 transition"
                >
                    {t('destinations.regionFilters.filters')}
                </button>
            </div>
            <div className="hidden lg:block z-40 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100">
                <div className="container mx-auto px-8 py-5">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Title Section */}
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                {lang === "uz"
                                    ? `${region.name[lang]}${t('destinations.regionFilters.title')}`
                                    : `${t('destinations.regionFilters.title')} ${region.name[lang]}`
                                }
                            </h2>
                        </div>

                        {/* Filters Section */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            {/* Search */}
                            <div className="relative flex-1 sm:flex-none group">
                                <input
                                    type="text"
                                    placeholder={t('destinations.regionFilters.searchPlaceholder')}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full sm:w-64 pl-11 pr-4 py-3 border border-gray-200 rounded-2xl bg-gray-50/50 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 focus:bg-white transition-all duration-200 placeholder:text-gray-400"
                                />
                                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            {/* Country Filter */}
                            <select
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                className="w-full sm:w-52 px-4 py-3 border border-gray-200 rounded-2xl bg-gray-50/50 
                             hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                             focus:border-transparent transition-all duration-200 cursor-pointer
                             appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] 
                             bg-[length:12px] bg-[center_right_1rem] bg-no-repeat pr-10"
                            >
                                <option value="all">{t('destinations.regionFilters.allCountries')}</option>
                                {countries.map(country => (
                                    <option key={country.id} value={country.id}>
                                        {country.name[lang]}
                                    </option>
                                ))}
                            </select>

                            {/* Sort */}
                            <select
                                value={priceSort}
                                onChange={(e) => setPriceSort(e.target.value)}
                                className="w-full sm:w-52 px-4 py-3 border border-gray-200 rounded-2xl bg-gray-50/50 
                             hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                             focus:border-transparent transition-all duration-200 cursor-pointer
                             appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] 
                             bg-[length:12px] bg-[center_right_1rem] bg-no-repeat pr-10"
                            >
                                <option value="none">{t('destinations.regionFilters.sort.default')}</option>
                                <option value="low">{t('destinations.regionFilters.sort.low')}</option>
                                <option value="high">{t('destinations.regionFilters.sort.high')}</option>
                                <option value="rating">{t('destinations.regionFilters.sort.rating')}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {filtersOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <div
                        onClick={() => setFiltersOpen(false)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Sheet */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 animate-slideUp">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">
                                {t('destinations.regionFilters.title')}
                            </h3>
                            <button
                                onClick={() => setFiltersOpen(false)}
                                className="text-gray-500 text-2xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder={t('destinations.regionFilters.searchPlaceholder')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full mb-4 px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Country */}
                        <select
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="w-full mb-4 px-4 py-3 border rounded-xl bg-gray-50"
                        >
                            <option value="all">
                                {t('destinations.regionFilters.allCountries')}
                            </option>
                            {countries.map(country => (
                                <option key={country.id} value={country.id}>
                                    {country.name[lang]}
                                </option>
                            ))}
                        </select>

                        {/* Sort */}
                        <select
                            value={priceSort}
                            onChange={(e) => setPriceSort(e.target.value)}
                            className="w-full mb-6 px-4 py-3 border rounded-xl bg-gray-50"
                        >
                            <option value="none">{t('destinations.regionFilters.sort.default')}</option>
                            <option value="low">{t('destinations.regionFilters.sort.low')}</option>
                            <option value="high">{t('destinations.regionFilters.sort.high')}</option>
                            <option value="rating">{t('destinations.regionFilters.sort.rating')}</option>
                        </select>

                        {/* Apply */}
                        <button
                            onClick={() => setFiltersOpen(false)}
                            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold"
                        >
                            {t('destinations.regionFilters.apply')}
                        </button>
                    </div>
                </div>
            )}

            {/* Cities Grid */}
            <div className="container mx-auto px-4 py-3 sm:px-6 py-12">
                {filteredCities.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">{t('destinations.emptyState.title')}</h3>
                        <p className="text-gray-500">{t('destinations.emptyState.subtitle')}</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                            {/* Статистика городов */}
                            <div className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-4 md:p-6 hover:shadow-lg md:hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 md:hover:-translate-y-1">
                                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full blur-xl md:blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

                                <div className="relative z-10 flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md md:shadow-lg">
                                        <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                                            {filteredCities.length}
                                            <span className="text-xs md:text-sm lg:text-base text-gray-500 font-normal ml-1 md:ml-2">
                                                {t('destinations.cityStats.cities')}
                                            </span>
                                        </div>
                                        <div className="text-blue-600 font-semibold text-sm md:text-base flex items-center gap-1 md:gap-2">
                                            {t('destinations.cityStats.available')}
                                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Статистика цены */}
                            <div className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-4 md:p-6 hover:shadow-lg md:hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 md:hover:-translate-y-1">
                                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full blur-xl md:blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

                                <div className="relative z-10 flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md md:shadow-lg">
                                        <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                                            ${Math.min(...filteredCities.map(c => c.price)).toLocaleString()}
                                            <span className="text-xs md:text-sm lg:text-base text-gray-500 font-normal ml-1 md:ml-2">USD</span>
                                        </div>
                                        <div className="text-green-600 font-semibold text-sm md:text-base flex items-center gap-1 md:gap-2">
                                            {t('destinations.cityStats.startingPrice')}
                                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Статистика рейтинга */}
                            <div className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-4 md:p-6 hover:shadow-lg md:hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 md:hover:-translate-y-1">
                                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full blur-xl md:blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

                                <div className="relative z-10 flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-md md:shadow-lg">
                                        <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-baseline gap-1 md:gap-2 mb-1">
                                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                                                {Math.max(...filteredCities.map(c => c.rating)).toFixed(1)}
                                            </div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-purple-600 font-semibold text-sm md:text-base flex items-center gap-1 md:gap-2">
                                            {t('destinations.cityStats.highestRating')}
                                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCities.map(city => (
                                <CityCard
                                    key={city.id}
                                    city={city}
                                    setSelectedCity={setSelectedCity}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div >
    )
}