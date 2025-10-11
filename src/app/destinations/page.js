'use client'

import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Иконки
const MapPin = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const Star = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
const Calendar = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const Users = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>;
const Building = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const Language = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>;
const Currency = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>;
const Globe = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Sparkles = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;

// Данные регионов
const regions = [
  {
    id: 1,
    region: "Европа",
    name: "Европейская классика",
    description: 'От романтических улочек Парижа до величественных альпийских пейзажей. Европа - это многовековая история, искусство и культура, воплощенные в самых красивых городах мира. Исследуйте старинные замки, наслаждайтесь изысканной кухней и погрузитесь в атмосферу настоящей европейской сказки.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['Франция', 'Италия', 'Испания', 'Германия', 'Австрия', 'Швейцария', 'Греция'],
    highlights: ['Париж - город любви и моды', 'Венеция - романтика на воде', 'Барселона - архитектура Гауди', 'Альпы - горнолыжные курорты'],
    stats: {
      tours: 156,
      hotels: 4500,
      rating: 4.9
    },
    price: 'от €550',
    bestTime: 'Апрель - Июнь, Сентябрь - Октябрь',
    duration: '7-14 дней',
    color: 'from-blue-500 to-cyan-500',
    countriesData: [
      {
        id: 1,
        name: 'Франция',
        description: 'Страна любви, моды и изысканной кухни. От сияющих огней Парижа до лавандовых полей Прованса.',
        image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
        capital: 'Париж',
        population: '67.4 млн',
        language: 'Французский',
        currency: 'Евро (€)',
        bestTime: 'Май - Июнь, Сентябрь',
        highlights: ['Эйфелева башня', 'Лувр', 'Лазурный берег', 'Замки Луары'],
        cities: [
          {
            name: 'Париж',
            description: 'Город любви и огней, столица моды и искусства. Романтическая атмосфера на каждом шагу.',
            image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
            highlights: ['Эйфелева башня', 'Лувр', 'Монмартр', 'Нотр-Дам'],
            bestTime: 'Апрель - Июнь',
            attractions: ['Собор Парижской Богоматери', 'Триумфальная арка', 'Елисейские поля'],
            hotels: 1250,
            rating: 4.8
          }
        ]
      },
      {
        id: 2,
        name: 'Италия',
        description: 'Колыбель Ренессанса с богатейшим культурным наследием и самой вкусной кухней в мире.',
        image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        capital: 'Рим',
        population: '59.1 млн',
        language: 'Итальянский',
        currency: 'Евро (€)',
        bestTime: 'Апрель - Июнь, Сентябрь - Октябрь',
        highlights: ['Колизей', 'Венецианские каналы', 'Флорентийское искусство', 'Сицилийская кухня'],
        cities: [
          {
            name: 'Рим',
            description: 'Вечный город с 3000-летней историей, где каждая улица дышит древностью.',
            image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            highlights: ['Колизей', 'Ватикан', 'Фонтан Треви', 'Пантеон'],
            bestTime: 'Апрель - Май, Октябрь',
            attractions: ['Римский форум', 'Испанская лестница', 'Площадь Навона'],
            hotels: 1560,
            rating: 4.8
          }
        ]
      }
    ]
  },
  {
    id: 2,
    region: "Азия",
    name: "Тайны Востока",
    description: 'Загадочные храмы, древние традиции и современные мегаполисы Азии. От сакур Японии до тропических пляжей Таиланда. Погрузитесь в мир контрастов, где ультрасовременные технологии соседствуют с тысячелетними традициями.',
    image: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
    countries: ['Япония', 'Таиланд', 'Вьетнам', 'Китай', 'Южная Корея', 'Сингапур', 'Малайзия'],
    highlights: ['Токио - город будущего', 'Бали - тропический рай', 'Великая Китайская стена', 'Храмы Ангкор-Ват'],
    stats: {
      tours: 128,
      hotels: 3200,
      rating: 4.8
    },
    price: 'от $780',
    bestTime: 'Октябрь - Апрель',
    duration: '10-18 дней',
    color: 'from-emerald-500 to-teal-500',
    countriesData: [
      {
        id: 3,
        name: 'Япония',
        description: 'Страна контрастов, где древние традиции гармонично соседствуют с ультрасовременными технологиями.',
        image: 'https://images.unsplash.com/photo-1540959733332-9abcb6c7c113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        capital: 'Токио',
        population: '125.7 млн',
        language: 'Японский',
        currency: 'Иена (¥)',
        bestTime: 'Март - Май, Сентябрь - Ноябрь',
        highlights: ['Цветение сакуры', 'Гора Фудзи', 'Токио - город будущего', 'Киото - древняя столица'],
        cities: [
          {
            name: 'Токио',
            description: 'Футуристический мегаполис, где небоскребы соседствуют с древними храмами.',
            image: 'https://images.unsplash.com/photo-1540959733332-9abcb6c7c113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            highlights: ['Сибуя', 'Императорский дворец', 'Токио Скай Три', 'Акихабара'],
            bestTime: 'Март - Май, Сентябрь - Ноябрь',
            attractions: ['Рынок Цукидзи', 'Храм Мэйдзи', 'Роппонги'],
            hotels: 2340,
            rating: 4.9
          }
        ]
      }
    ]
  },
  {
    id: 3,
    region: "Африка",
    name: "Дикая и роскошная Африка",
    description: 'Сафари по бескрайним саваннам, закаты над пустыней Сахара и роскошные лоджи с видом на дикую природу. Африка - это адреналин сафари, пляжи Занзибара и уникальная культура племен. Незабываемые приключения ждут вас!',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    countries: ['Кения', 'Танзания', 'ЮАР', 'Марокко', 'Египет', 'Намибия', 'Сейшелы'],
    highlights: ['Сафари в Серенгети', 'Пирамиды Гизы', 'Мыс Доброй Надежды', 'Роскошные лоджи'],
    stats: {
      tours: 89,
      hotels: 1800,
      rating: 4.7
    },
    price: 'от $1200',
    bestTime: 'Июнь - Октябрь',
    duration: '8-15 дней',
    color: 'from-amber-500 to-orange-500',
    countriesData: [
      {
        id: 4,
        name: 'Кения',
        description: 'Страна великих миграций и захватывающих сафари в сердце Восточной Африки.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        capital: 'Найроби',
        population: '53.8 млн',
        language: 'Суахили, Английский',
        currency: 'Кенийский шиллинг',
        bestTime: 'Июнь - Октябрь',
        highlights: ['Сафари в Масаи-Мара', 'Большая миграция', 'Пляжи Момбасы', 'Гора Кения'],
        cities: [
          {
            name: 'Найроби',
            description: 'Столица сафари и современный мегаполис с уникальной африканской атмосферой.',
            image: 'https://images.unsplash.com/photo-1589553416261-695503ca49b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            highlights: ['Национальный парк Найроби', 'Музей Карен Бликсен', 'Жирафовый центр'],
            bestTime: 'Июнь - Сентябрь',
            attractions: ['Национальный музей', 'Бомас оф Кения', 'Рынок Масаи'],
            hotels: 780,
            rating: 4.6
          }
        ]
      }
    ]
  },
  {
    id: 4,
    region: "Ближний Восток",
    name: "Современные чудеса Востока",
    description: 'Футуристические небоскребы, золотые пустыни и восточная роскошь. Ближний Восток - это уникальное сочетание древних традиций и ультрасовременных технологий. От роскошных моллов Дубая до исторических памятников Иордании.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['ОАЭ', 'Катар', 'Оман', 'Иордания', 'Саудовская Аравия', 'Бахрейн'],
    highlights: ['Бурдж-Халифа в Дубае', 'Петра - розовый город', 'Пустынные сафари', 'Роскошные спа-курорты'],
    stats: {
      tours: 67,
      hotels: 1500,
      rating: 4.8
    },
    price: 'от $950',
    bestTime: 'Октябрь - Апрель',
    duration: '5-10 дней',
    color: 'from-purple-500 to-pink-500',
    countriesData: [
      {
        id: 5,
        name: 'ОАЭ',
        description: 'Страна футуристических архитектурных чудес и восточной роскоши в сердце пустыни.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        capital: 'Абу-Даби',
        population: '9.9 млн',
        language: 'Арабский',
        currency: 'Дирхам ОАЭ',
        bestTime: 'Октябрь - Апрель',
        highlights: ['Бурдж-Халифа', 'Пальма Джумейра', 'Мечеть Шейха Зайда', 'Пустынное сафари'],
        cities: [
          {
            name: 'Дубай',
            description: 'Город будущего, где роскошь и инновации создают уникальную атмосферу восточной сказки.',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            highlights: ['Бурдж-Халифа', 'Дубай Молл', 'Фонтан Дубай', 'Пальма Джумейра'],
            bestTime: 'Ноябрь - Март',
            attractions: ['Бурдж-эль-Араб', 'Дубай Марина', 'Глобальная деревня'],
            hotels: 1890,
            rating: 4.8
          }
        ]
      }
    ]
  },
  {
    id: 5,
    region: "Океания",
    name: "Рай на земле",
    description: 'Кристально чистые лагуны, белоснежные пляжи и пышные тропические джунгли. Острова Океании - это воплощение мечты о рае на земле. Идеальные места для романтического отдыха, дайвинга и полного релакса.',
    image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['Мальдивы', 'Бора-Бора', 'Фиджи', 'Бали', 'Пхукет', 'Маврикий', 'Сейшелы'],
    highlights: ['Оверуатер виллы на Мальдивах', 'Лагуны Бора-Бора', 'Дайвинг с мантами', 'Романтические ужины на пляже'],
    stats: {
      tours: 94,
      hotels: 2200,
      rating: 4.9
    },
    price: 'от $1500',
    bestTime: 'Круглый год',
    duration: '7-12 дней',
    color: 'from-cyan-500 to-blue-500',
    countriesData: [
      {
        id: 6,
        name: 'Мальдивы',
        description: 'Райский архипелаг с кристально чистыми водами и роскошными оверуатер виллами.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        capital: 'Мале',
        population: '521 тыс',
        language: 'Мальдивский',
        currency: 'Мальдивская руфия',
        bestTime: 'Ноябрь - Апрель',
        highlights: ['Оверуатер виллы', 'Дайвинг с мантами', 'Лагуны с биолюминесценцией', 'Спа на воде'],
        cities: [
          {
            name: 'Мале',
            description: 'Самая маленькая столица в мире, окруженная бирюзовыми водами Индийского океана.',
            image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
            highlights: ['Исламский центр', 'Рыбный рынок', 'Султанский парк', 'Национальный музей'],
            bestTime: 'Декабрь - Март',
            attractions: ['Мечеть Великой Пятницы', 'Парк Джумури-Майду', 'Остров Виллингили'],
            hotels: 320,
            rating: 4.7
          }
        ]
      }
    ]
  },
  {
    id: 6,
    region: "Австралия и Океания",
    name: "Австралия и Новая Зеландия",
    description: 'От Большого Барьерного рифа до фьордов Южного острова. Уникальная природа, экзотические животные и приключения для настоящих искателей. Идеальное направление для любителей активного отдыха и природных чудес.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['Австралия', 'Новая Зеландия', 'Тасмания', 'Фиджи'],
    highlights: ['Сиднейский оперный театр', 'Большой Барьерный риф', 'Фьорды Милфорд-Саунд', 'Винодельни долины Баросса'],
    stats: {
      tours: 72,
      hotels: 1600,
      rating: 4.8
    },
    price: 'от $1800',
    bestTime: 'Сентябрь - Ноябрь, Март - Май',
    duration: '12-21 день',
    color: 'from-green-500 to-emerald-500',
    countriesData: [
      {
        id: 7,
        name: 'Австралия',
        description: 'Континент контрастов с уникальной природой, экзотическими животными и современными мегаполисами.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        capital: 'Канберра',
        population: '25.7 млн',
        language: 'Английский',
        currency: 'Австралийский доллар (A$)',
        bestTime: 'Сентябрь - Ноябрь, Март - Май',
        highlights: ['Сиднейская опера', 'Большой Барьерный риф', 'Улуру', 'Великая океанская дорога'],
        cities: [
          {
            name: 'Сидней',
            description: 'Современный мегаполис с знаменитой оперой и потрясающими пляжами на берегу Тасманова моря.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            highlights: ['Сиднейская опера', 'Харбор-Бридж', 'Бонди-Бич', 'Рокс'],
            bestTime: 'Сентябрь - Ноябрь, Март - Май',
            attractions: ['Королевский ботанический сад', 'Таронга Зоопарк', 'Мост Харбор-Бридж'],
            hotels: 1450,
            rating: 4.8
          }
        ]
      }
    ]
  },
  {
    id: 7,
    region: "Турция",
    name: "Турция",
    description: 'Уникальная страна на стыке Европы и Азии, где восточная экзотика встречается с европейским комфортом. От исторических памятников Стамбула до роскошных пляжей Анталии и волшебных пейзажей Каппадокии.',
    image: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    countries: ['Стамбул', 'Анталия', 'Бодрум', 'Каппадокия', 'Измир', 'Мармарис', 'Кемер'],
    highlights: ['Стамбул - город на двух континентах', 'Полеты на воздушных шарах в Каппадокии', 'Роскошные курорты Средиземноморья', 'Древний город Эфес'],
    stats: {
      tours: 203,
      hotels: 3800,
      rating: 4.7
    },
    price: 'от $450',
    bestTime: 'Апрель - Октябрь',
    duration: '7-14 дней',
    color: 'from-red-500 to-orange-500',
    countriesData: [
      {
        id: 8,
        name: 'Турция',
        description: 'Страна на стыке цивилизаций с богатым историческим наследием и прекрасными курортами.',
        image: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        capital: 'Анкара',
        population: '84.3 млн',
        language: 'Турецкий',
        currency: 'Турецкая лира (₺)',
        bestTime: 'Апрель - Июнь, Сентябрь - Октябрь',
        highlights: ['Стамбул', 'Каппадокия', 'Эфес', 'Памуккале'],
        cities: [
          {
            name: 'Стамбул',
            description: 'Величественный город на двух континентах, где Восток встречается с Западом.',
            image: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            highlights: ['Айя-София', 'Голубая мечеть', 'Гранд Базар', 'Босфор'],
            bestTime: 'Апрель - Май, Сентябрь - Октябрь',
            attractions: ['Дворец Топкапы', 'Цистерна Базилика', 'Галатская башня'],
            hotels: 2150,
            rating: 4.7
          }
        ]
      }
    ]
  }
];

const DirectionsPage = ({ searchParams }) => {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const unwrappedSearchParams = use(searchParams);

  useEffect(() => {
    const regionId = unwrappedSearchParams?.region;
    if (regionId) {
      const region = regions.find(r => r.id === parseInt(regionId));
      if (region) {
        setSelectedRegion(region);
      }
    }
  }, [unwrappedSearchParams]);

  useEffect(() => {
    if (selectedRegion || selectedCountry || selectedCity) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [selectedRegion, selectedCountry, selectedCity]);

  const resetSelection = () => {
    setSelectedRegion(null);
    setSelectedCountry(null);
    setSelectedCity(null);
    router.push('/destinations');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {!selectedRegion ? (
            // Красивый фон для главной страницы направлений
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-400/25 to-sky-300/30">
              <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-300/25 rounded-full blur-3xl"></div>
            </div>
          ) : selectedRegion && !selectedCountry ? (
            <img
              src={selectedRegion.image}
              alt={selectedRegion.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : selectedCountry && !selectedCity ? (
            <img
              src={selectedCountry.image}
              alt={selectedCountry.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : selectedCity && (
            <img
              src={selectedCity.image}
              alt={selectedCity.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            {!selectedRegion ? (
              <>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Все направления
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                  Откройте для себя уникальные уголки планеты. Каждое направление - это новая история,
                  наполненная культурой, природными красотами и незабываемыми впечатлениями.
                </p>
              </>
            ) : !selectedCountry ? (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{selectedRegion.name}</h1>
                <p className="text-lg md:text-xl mb-6 opacity-90">{selectedRegion.description}</p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {selectedRegion.highlights.slice(0, 3).map((highlight, idx) => (
                    <span key={idx} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">
                      {highlight}
                    </span>
                  ))}
                </div>
              </>
            ) : !selectedCity ? (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{selectedCountry.name}</h1>
                <p className="text-lg md:text-xl mb-6 opacity-90">{selectedCountry.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <Building />
                    Столица: {selectedCountry.capital}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <Users />
                    Население: {selectedCountry.population}
                  </span>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{selectedCity.name}</h1>
                <p className="text-lg md:text-xl mb-6 opacity-90">{selectedCity.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <Building />
                    {selectedCity.hotels} отелей
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <Star />
                    Рейтинг: {selectedCity.rating}
                  </span>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4 mt-8"
      >
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={resetSelection}
            className="hover:text-blue-600 transition-colors font-medium flex items-center gap-2"
          >
            <MapPin />
            Все направления
          </motion.button>
          {selectedRegion && (
            <>
              <span className="text-blue-400">›</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setSelectedCountry(null);
                  setSelectedCity(null);
                }}
                className="hover:text-blue-600 transition-colors font-medium"
              >
                {selectedRegion.name}
              </motion.button>
            </>
          )}
          {selectedCountry && (
            <>
              <span className="text-blue-400">›</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCity(null)}
                className="hover:text-blue-600 transition-colors font-medium"
              >
                {selectedCountry.name}
              </motion.button>
            </>
          )}
          {selectedCity && (
            <>
              <span className="text-blue-400">›</span>
              <span className="text-blue-600 font-semibold">{selectedCity.name}</span>
            </>
          )}
        </div>
      </motion.div>

      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium">Загружаем...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          {!selectedRegion ? (
            // Regions Grid - 7 категорий
            <motion.div
              key="regions"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {regions.map((region) => (
                <motion.div
                  key={region.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedRegion(region)}
                >
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-cyan-200">
                    <div className="relative overflow-hidden">
                      <img
                        src={region.image}
                        alt={region.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
                        <p className="opacity-90 text-sm mb-3 max-w-md leading-relaxed line-clamp-2">{region.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                            <Globe />
                            {region.countries.length} стран
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                            <Star />
                            {region.stats.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar />
                          <span>Лучшее время: {region.bestTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {region.highlights.slice(0, 2).map((highlight, idx) => (
                          <span key={idx} className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs border border-cyan-200">
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 cursor-pointer group"
                      >
                        <span className="text-cyan-700 font-semibold text-sm">Исследовать регион</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-cyan-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : !selectedCountry ? (
            // Countries Grid
            <motion.div
              key="countries"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Статистика региона */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              >
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{selectedRegion.countries.length}</div>
                  <div className="text-gray-600 text-sm flex items-center justify-center gap-2">
                    <Globe />
                    Стран в регионе
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">{selectedRegion.stats.tours}+</div>
                  <div className="text-gray-600 text-sm flex items-center justify-center gap-2">
                    <Sparkles />
                    Доступных туров
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-amber-500 mb-2 flex items-center justify-center gap-1">
                    {selectedRegion.stats.rating} <Star />
                  </div>
                  <div className="text-gray-600 text-sm">Рейтинг региона</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-cyan-600 mb-2 flex items-center justify-center">
                    <Calendar />
                  </div>
                  <div className="text-gray-600 text-sm">{selectedRegion.bestTime}</div>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {selectedRegion.countriesData.map((country) => (
                  <motion.div
                    key={country.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedCountry(country)}
                  >
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-cyan-100">
                      <div className="relative overflow-hidden">
                        <img
                          src={country.image}
                          alt={country.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                          <p className="opacity-90 mb-3 max-w-md leading-relaxed text-sm line-clamp-2">{country.description}</p>
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                              <Building />
                              {country.cities.length} городов
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Информация о стране */}
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Building />
                            <span className="text-xs">{country.capital}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users />
                            <span className="text-xs">{country.population}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Language />
                            <span className="text-xs">{country.language}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Currency />
                            <span className="text-xs">{country.currency}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {country.highlights.slice(0, 3).map((highlight, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs border border-blue-200 line-clamp-1">
                              {highlight}
                            </span>
                          ))}
                        </div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 cursor-pointer group"
                        >
                          <span className="text-blue-700 font-semibold text-sm">Смотреть города</span>
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : !selectedCity ? (
            // Cities Grid
            <motion.div
              key="cities"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Информация о стране */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedCountry.name}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{selectedCountry.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Building />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Столица</div>
                          <div className="text-blue-600">{selectedCountry.capital}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                          <Users />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Население</div>
                          <div className="text-green-600">{selectedCountry.population}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                          <Language />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Язык</div>
                          <div className="text-amber-600">{selectedCountry.language}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                          <Currency />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Валюта</div>
                          <div className="text-cyan-600">{selectedCountry.currency}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={selectedCountry.image}
                      alt={selectedCountry.name}
                      className="rounded-2xl shadow-lg max-w-md w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {selectedCountry.cities.map((city, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedCity(city)}
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold">{city.name}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{city.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <Building />
                            {city.hotels} отелей
                          </span>
                          <span className="flex items-center gap-1">
                            <Star />
                            {city.rating}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600 font-semibold text-sm">Подробнее</span>
                          <svg className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            // City Detail
            <motion.div
              key="city-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border border-gray-100">
                <div className="relative h-96">
                  <img
                    src={selectedCity.image}
                    alt={selectedCity.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h2 className="text-4xl font-bold mb-2">{selectedCity.name}</h2>
                    <p className="text-xl opacity-90 max-w-2xl">{selectedCity.description}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Основные достопримечательности</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedCity.attractions.map((attraction, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-sm">
                                  <Sparkles />
                                </span>
                              </div>
                              <span className="font-semibold text-gray-800">{attraction}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Информация</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 flex items-center gap-2">
                            <Building />
                            Количество отелей
                          </span>
                          <span className="font-semibold text-blue-600">{selectedCity.hotels}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 flex items-center gap-2">
                            <Star />
                            Рейтинг
                          </span>
                          <span className="font-semibold text-amber-500 flex items-center gap-1">
                            {selectedCity.rating}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 flex items-center gap-2">
                            <Calendar />
                            Лучшее время
                          </span>
                          <span className="font-semibold text-green-600">{selectedCity.bestTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DirectionsPage;