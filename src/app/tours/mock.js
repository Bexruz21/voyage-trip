export const countriesData = [
    {
        id: 1,
        name: 'Турция',
        description: 'Мост между Европой и Азией с богатой историей и потрясающими пляжами',
        image: 'https://images.unsplash.com/photo-1614597396930-cd6760b99f7c?w=800',
        flag: '🇹🇷',
        bestTime: 'Апрель - Октябрь',
        currency: 'Турецкая лира (TRY)',
        visa: 'Виза на 60 дней',
        cities: [
            {
                id: 1,
                name: 'Стамбул',
                description: 'Город на двух континентах с уникальным blend культур',
                image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600',
                population: '15 млн',
                highlights: ['Айя-София', 'Голубая мечеть', 'Гранд Базар', 'Дворец Топкапы'],
                hotels: [
                    {
                        id: 1,
                        name: 'Four Seasons Istanbul',
                        price: 320,
                        rating: 4.9,
                        reviews: 2847,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Роскошный отель в историческом здании с видом на Босфор',
                        amenities: ['Бассейн', 'Спа', 'Ресторан', 'WiFi', 'Консьерж'],
                        location: 'Султанахмет',
                        distance: '200м до моря'
                    },
                    {
                        id: 2,
                        name: 'Ritz-Carlton Bosphorus',
                        price: 280,
                        rating: 4.8,
                        reviews: 1923,
                        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500',
                        description: 'Современная роскошь с панорамным видом на пролив',
                        amenities: ['Фитнес', 'Бар', 'Консьерж', 'Парковка', 'SPA'],
                        location: 'Бешикташ',
                        distance: '50м до моря'
                    },
                    {
                        id: 3,
                        name: 'Çırağan Palace Kempinski',
                        price: 450,
                        rating: 4.9,
                        reviews: 3156,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Бывший османский дворец на берегу Босфора',
                        amenities: ['Частный пляж', 'Бассейн', '4 ресторана', 'Спа-центр'],
                        location: 'Бешикташ',
                        distance: 'Прямо на берегу'
                    },
                    {
                        id: 4,
                        name: 'Swissotel The Bosphorus',
                        price: 220,
                        rating: 4.7,
                        reviews: 1876,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Высотный отель с панорамным видом на город',
                        amenities: ['Фитнес', 'Бассейн', 'Бизнес-центр', '3 ресторана'],
                        location: 'Мачка',
                        distance: '1.2км до моря'
                    },
                    {
                        id: 5,
                        name: 'Ajwa Hotel Sultanahmet',
                        price: 190,
                        rating: 4.6,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Бутик-отель в османском стиле в историческом центре',
                        amenities: ['Хаммам', 'Ресторан', 'Терраса', 'Бесплатный WiFi'],
                        location: 'Султанахмет',
                        distance: '800м до моря'
                    }
                ]
            },
            {
                id: 2,
                name: 'Анталия',
                description: 'Жемчужина Турецкой Ривьеры с лазурными водами',
                image: 'https://images.unsplash.com/photo-1593238739363-c8b2a2d61d71?w=600',
                population: '2.4 млн',
                highlights: ['Старый город Калеичи', 'Водопад Дюден', 'Пляж Лара', 'Аспендос'],
                hotels: [
                    {
                        id: 6,
                        name: 'Rixos Premium Belek',
                        price: 450,
                        rating: 4.9,
                        reviews: 3156,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Ultra all-inclusive курорт премиум-класса',
                        amenities: ['Все включено', 'Аквапарк', 'Гольф', 'Спа', 'Частный пляж'],
                        location: 'Белек',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 7,
                        name: 'Titanic Deluxe Golf Belek',
                        price: 380,
                        rating: 4.8,
                        reviews: 2289,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Роскошный курорт с полями для гольфа мирового класса',
                        amenities: ['Гольф', 'SPA', '7 бассейнов', '10 ресторанов'],
                        location: 'Белек',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 8,
                        name: 'Liberty Lara',
                        price: 290,
                        rating: 4.7,
                        reviews: 1923,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Семейный курорт с аквапарком и развлечениями',
                        amenities: ['Аквапарк', 'Детский клуб', 'SPA', 'Все включено'],
                        location: 'Лара',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 9,
                        name: 'Kempinski Hotel The Dome',
                        price: 520,
                        rating: 4.9,
                        reviews: 1567,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Элегантный пляжный курорт в османском стиле',
                        amenities: ['Гольф', 'Талассотерапия', '6 ресторанов', 'Бутики'],
                        location: 'Белек',
                        distance: 'Прямо на пляже'
                    },
                    {
                        id: 10,
                        name: 'Crystal Family Resort & Spa',
                        price: 320,
                        rating: 4.6,
                        reviews: 1876,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Идеальный выбор для семейного отдыха',
                        amenities: ['Аквапарк', 'Детский клуб', 'SPA', 'Анимация'],
                        location: 'Кунду',
                        distance: '150м до моря'
                    }
                ]
            },
            {
                id: 3,
                name: 'Измир',
                description: 'Жемчужина Эгейского моря с древней историей',
                image: 'https://images.unsplash.com/photo-1634039047224-9eab532b6a94?w=600',
                population: '4.3 млн',
                highlights: ['Агора', 'Крепость Кадифекале', 'Асансёр', 'Кордон'],
                hotels: [
                    {
                        id: 11,
                        name: 'Hilton Izmir',
                        price: 180,
                        rating: 4.5,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Современный отель в деловом центре города',
                        amenities: ['Бассейн', 'Фитнес', 'Бизнес-центр', '2 ресторана'],
                        location: 'Байраклы',
                        distance: '3км до моря'
                    },
                    {
                        id: 12,
                        name: 'Swissotel Grand Efes',
                        price: 210,
                        rating: 4.7,
                        reviews: 1876,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Легендарный отель с безупречным сервисом',
                        amenities: ['SPA', 'Бассейн', '6 ресторанов', 'Конгресс-центр'],
                        location: 'Асанатор',
                        distance: '2.5км до моря'
                    },
                    {
                        id: 13,
                        name: 'Mövenpick Hotel Izmir',
                        price: 160,
                        rating: 4.4,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Стильный отель с видом на залив',
                        amenities: ['Бассейн', 'Ресторан', 'Бар', 'Фитнес'],
                        location: 'Инджиралты',
                        distance: '500м до моря'
                    },
                    {
                        id: 14,
                        name: 'Key Hotel',
                        price: 140,
                        rating: 4.3,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Бутик-отель в историческом здании',
                        amenities: ['Терраса', 'Ресторан', 'Бесплатный WiFi', 'Консьерж'],
                        location: 'Асанатор',
                        distance: '2км до моря'
                    },
                    {
                        id: 15,
                        name: 'Radisson Blu Hotel',
                        price: 170,
                        rating: 4.5,
                        reviews: 1123,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Отель с панорамным видом на залив Измира',
                        amenities: ['Бассейн', 'SPA', 'Ресторан', 'Фитнес'],
                        location: 'Байраклы',
                        distance: '2.8км до моря'
                    }
                ]
            },
            {
                id: 4,
                name: 'Бодрум',
                description: 'Модный курорт с белыми домами и бирюзовым морем',
                image: 'https://images.unsplash.com/photo-1628745277897-d8e3f4a4c57a?w=600',
                population: '175,000',
                highlights: ['Замок Бодрум', 'Мавзолей', 'Гюмбет', 'Ялыкавак'],
                hotels: [
                    {
                        id: 16,
                        name: 'Marmara Bodrum',
                        price: 380,
                        rating: 4.8,
                        reviews: 1567,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Дизайнерский отель на склоне холма с видом на залив',
                        amenities: ['Инфинити-бассейн', 'SPA', '3 ресторана', 'Частный пляж'],
                        location: 'Тургутрейс',
                        distance: 'Прямо на берегу'
                    },
                    {
                        id: 17,
                        name: 'Caresse Resort & Spa',
                        price: 520,
                        rating: 4.9,
                        reviews: 1923,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Роскошный курорт с частным пляжем и яхт-клубом',
                        amenities: ['Частный пляж', 'Яхт-клуб', 'SPA', '4 ресторана'],
                        location: 'Гюмбет',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 18,
                        name: 'Hilton Bodrum Turkbuku',
                        price: 290,
                        rating: 4.7,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Современный курорт в живописной бухте',
                        amenities: ['Бассейн', 'SPA', 'Ресторан', 'Фитнес'],
                        location: 'Тюркбюкю',
                        distance: 'Прямо на пляже'
                    },
                    {
                        id: 19,
                        name: 'Lujo Hotel Bodrum',
                        price: 450,
                        rating: 4.8,
                        reviews: 1876,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Ultra all-inclusive концепция с премиум сервисом',
                        amenities: ['Все включено', 'Аквапарк', 'SPA', '6 ресторанов'],
                        location: 'Гюльлюк',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 20,
                        name: 'Macakizi Hotel',
                        price: 680,
                        rating: 4.9,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Культовый бутик-отель для знаменитостей',
                        amenities: ['Частный пляж', 'Ресторан', 'SPA', 'Трансфер'],
                        location: 'Тюркбюкю',
                        distance: 'Прямо на берегу'
                    }
                ]
            },
            {
                id: 5,
                name: 'Каппадокия',
                description: 'Сюрреалистический ландшафт с подземными городами',
                image: 'https://images.unsplash.com/photo-1641574596276-4e2e36a91c38?w=600',
                population: '90,000',
                highlights: ['Воздушные шары', 'Подземные города', 'Долина любви', 'Музей Гёреме'],
                hotels: [
                    {
                        id: 21,
                        name: 'Museum Hotel',
                        price: 350,
                        rating: 4.9,
                        reviews: 1567,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Роскошный пещерный отель с антикварной мебелью',
                        amenities: ['Винный погреб', 'Бассейн', 'Ресторан', 'Терраса'],
                        location: 'Учисар',
                        distance: 'В историческом центре'
                    },
                    {
                        id: 22,
                        name: 'Argos in Cappadocia',
                        price: 420,
                        rating: 4.8,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Комплекс пещерных домов с видом на долину',
                        amenities: ['Винный бар', 'SPA', '2 ресторана', 'Сады'],
                        location: 'Учисар',
                        distance: 'Панорамный вид на долину'
                    },
                    {
                        id: 23,
                        name: 'Sultan Cave Suites',
                        price: 190,
                        rating: 4.6,
                        reviews: 2289,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Популярный пещерный отель с террасой для фото',
                        amenities: ['Терраса', 'Ресторан', 'Бесплатный WiFi', 'Трансфер'],
                        location: 'Гёреме',
                        distance: 'Центр города'
                    },
                    {
                        id: 24,
                        name: 'Kayakapi Premium Caves',
                        price: 280,
                        rating: 4.7,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Премиальные пещерные номера с частными бассейнами',
                        amenities: ['Частные бассейны', 'SPA', 'Ресторан', 'Трансфер'],
                        location: 'Юргюп',
                        distance: 'Исторический район'
                    },
                    {
                        id: 25,
                        name: 'Hermes Cave Hotel',
                        price: 120,
                        rating: 4.4,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Уютный пещерный отель с домашней атмосферой',
                        amenities: ['Терраса', 'Ресторан', 'Бесплатный WiFi', 'Сад'],
                        location: 'Гёреме',
                        distance: '5 минут до центра'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Испания',
        description: 'Страна страсти, фламенко и архитектурных шедевров',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
        flag: '🇪🇸',
        bestTime: 'Май - Июнь, Сентябрь - Октябрь',
        currency: 'Евро (EUR)',
        visa: 'Шенгенская виза',
        cities: [
            {
                id: 6,
                name: 'Барселона',
                description: 'Столица Каталонии с архитектурой Гауди и средиземноморским шармом',
                image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600',
                population: '5.6 млн',
                highlights: ['Саграда Фамилия', 'Парк Гуэль', 'Готический квартал', 'Ла Рамбла'],
                hotels: [
                    {
                        id: 26,
                        name: 'W Barcelona',
                        price: 380,
                        rating: 4.8,
                        reviews: 2289,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Знаковый отель в форме паруса на берегу моря',
                        amenities: ['Инфинити-бассейн', 'Бич-клуб', '3 ресторана', 'Спа'],
                        location: 'Барселонета',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 27,
                        name: 'Hotel Arts Barcelona',
                        price: 520,
                        rating: 4.9,
                        reviews: 1876,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: '44-этажная башня с видом на море и город',
                        amenities: ['Спа', '2 бассейна', 'Фитнес', 'Ресторан'],
                        location: 'Олимпийская деревня',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 28,
                        name: 'Majestic Hotel & Spa',
                        price: 290,
                        rating: 4.7,
                        reviews: 1567,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Исторический отель на знаменитом пасео де Грасия',
                        amenities: ['Спа-центр', 'Крышный бассейн', 'Ресторан', 'Бар'],
                        location: 'Пасео де Грасия',
                        distance: '2км до моря'
                    },
                    {
                        id: 29,
                        name: 'Cotton House Hotel',
                        price: 320,
                        rating: 4.8,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Бутик-отель в здании бывшей хлопковой фабрики',
                        amenities: ['Бассейн', 'Библиотека', 'Ресторан', 'Терраса'],
                        location: 'Эшампле',
                        distance: '2.5км до моря'
                    },
                    {
                        id: 30,
                        name: 'Ohla Barcelona',
                        price: 250,
                        rating: 4.6,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Дизайнерский отель с мишленовским рестораном',
                        amenities: ['Крышный бассейн', 'Спа', '2 ресторана', 'Бар'],
                        location: 'Готический квартал',
                        distance: '1.8км до моря'
                    }
                ]
            },
            {
                id: 7,
                name: 'Мадрид',
                description: 'Столица Испании с богатым культурным наследием и ночной жизнью',
                image: 'https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=600',
                population: '6.6 млн',
                highlights: ['Прадо', 'Королевский дворец', 'Пласа Майор', 'Ретиро'],
                hotels: [
                    {
                        id: 31,
                        name: 'Ritz Madrid',
                        price: 650,
                        rating: 4.9,
                        reviews: 1923,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Легендарный отель в стиле белль эпок',
                        amenities: ['Послеобеденный чай', 'Спа', 'Ресторан', 'Консьерж'],
                        location: 'Пласа де ла Леальтад',
                        distance: 'Центр города'
                    },
                    {
                        id: 32,
                        name: 'Four Seasons Madrid',
                        price: 580,
                        rating: 4.9,
                        reviews: 1567,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Роскошный отель в комплексе исторических зданий',
                        amenities: ['Спа', 'Крышный бассейн', '4 ресторана', 'Бар'],
                        location: 'Саламанка',
                        distance: '1.5км до центра'
                    },
                    {
                        id: 33,
                        name: 'VP Plaza España Design',
                        price: 320,
                        rating: 4.7,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Современный дизайнерский отель с панорамным видом',
                        amenities: ['Крышный бассейн', 'Спа', 'Ресторан', 'Фитнес'],
                        location: 'Пласа Эспанья',
                        distance: 'Центр города'
                    },
                    {
                        id: 34,
                        name: 'Gran Meliá Palacio de los Duques',
                        price: 380,
                        rating: 4.8,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Дворец 19 века с современным дизайном',
                        amenities: ['Спа', 'Сады', 'Ресторан', 'Бар'],
                        location: 'Ориенте',
                        distance: 'У Королевского дворца'
                    },
                    {
                        id: 35,
                        name: 'Dear Hotel',
                        price: 180,
                        rating: 4.5,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Стильный отель с лучшей крышной террасой Мадрида',
                        amenities: ['Крышный бассейн', 'Бар', 'Ресторан', 'Терраса'],
                        location: 'Гран Виа',
                        distance: 'Центр города'
                    }
                ]
            },
            {
                id: 8,
                name: 'Севилья',
                description: 'Сердце Андалусии с мавританской архитектурой и фламенко',
                image: 'https://images.unsplash.com/photo-1558642084-5b59b63e7d7a?w=600',
                population: '1.5 млн',
                highlights: ['Алькасар', 'Кафедральный собор', 'Пласа де Эспанья', 'Триана'],
                hotels: [
                    {
                        id: 36,
                        name: 'Alfonso XIII',
                        price: 420,
                        rating: 4.8,
                        reviews: 1567,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Исторический отель в мавританском стиле',
                        amenities: ['Бассейн', 'Ресторан', 'Бар', 'Сады'],
                        location: 'Сан Фернандо',
                        distance: 'Исторический центр'
                    },
                    {
                        id: 37,
                        name: 'Hotel Palacio de Villapanes',
                        price: 280,
                        rating: 4.7,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Дворец 18 века с внутренним двором в стиле мудехар',
                        amenities: ['Бассейн', 'Спа', 'Ресторан', 'Патио'],
                        location: 'Санта Крус',
                        distance: 'Исторический центр'
                    },
                    {
                        id: 38,
                        name: 'EME Catedral Hotel',
                        price: 220,
                        rating: 4.6,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Современный отель с видом на собор и террасой на крыше',
                        amenities: ['Терраса', 'Спа', '3 ресторана', 'Бар'],
                        location: 'Санта Крус',
                        distance: 'У Кафедрального собора'
                    },
                    {
                        id: 39,
                        name: 'Hotel Mercer Sevilla',
                        price: 320,
                        rating: 4.8,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Бутик-отель в зданиях 12 и 19 веков',
                        amenities: ['Бассейн', 'Ресторан', 'Бар', 'Внутренний двор'],
                        location: 'Санта Крус',
                        distance: 'Исторический центр'
                    },
                    {
                        id: 40,
                        name: 'Gran Meliá Colón',
                        price: 190,
                        rating: 4.5,
                        reviews: 654,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Элегантный отель в здании 1920-х годов',
                        amenities: ['Бассейн', 'Спа', 'Ресторан', 'Фитнес'],
                        location: 'Эль-Ареналь',
                        distance: '1км до центра'
                    }
                ]
            },
            {
                id: 9,
                name: 'Валенсия',
                description: 'Город искусств и наук с футуристической архитектурой',
                image: 'https://images.unsplash.com/photo-1587334894133-b4bb07e6b2e1?w=600',
                population: '2.5 млн',
                highlights: ['Город искусств и наук', 'Океанографик', 'Центральный рынок', 'Пляж Малаварроса'],
                hotels: [
                    {
                        id: 41,
                        name: 'SH Valencia Palace',
                        price: 210,
                        rating: 4.6,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Современный отель рядом с Городом искусств и наук',
                        amenities: ['Бассейн', 'Фитнес', 'Ресторан', 'Бар'],
                        location: 'Кампанар',
                        distance: '2км до моря'
                    },
                    {
                        id: 42,
                        name: 'Las Arenas Balneario Resort',
                        price: 290,
                        rating: 4.7,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Курортный отель на пляже с спа-центром',
                        amenities: ['Спа', 'Бассейн', 'Ресторан', 'Пляж'],
                        location: 'Малаварроса',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 43,
                        name: 'Caro Hotel',
                        price: 180,
                        rating: 4.5,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Бутик-отель в историческом здании с археологическими находками',
                        amenities: ['Ресторан', 'Бар', 'Бесплатный WiFi', 'Терраса'],
                        location: 'Старый город',
                        distance: '2.5км до моря'
                    },
                    {
                        id: 44,
                        name: 'Meliá Valencia',
                        price: 160,
                        rating: 4.4,
                        reviews: 654,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Отель бизнес-класса с панорамным видом',
                        amenities: ['Бассейн', 'Фитнес', 'Ресторан', 'Бар'],
                        location: 'Кампанар',
                        distance: '3км до моря'
                    },
                    {
                        id: 45,
                        name: 'One Shot Palacio Reina Victoria 04',
                        price: 140,
                        rating: 4.3,
                        reviews: 543,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Дизайнерский отель в здании начала 20 века',
                        amenities: ['Ресторан', 'Бар', 'Терраса', 'Бесплатный WiFi'],
                        location: 'Пласа дель Аюнтамьенто',
                        distance: '2км до моря'
                    }
                ]
            },
            {
                id: 10,
                name: 'Майорка',
                description: 'Жемчужина Балеарских островов с кристально чистой водой',
                image: 'https://images.unsplash.com/photo-1597078899216-2aa2b0d97f33?w=600',
                population: '923,000',
                highlights: ['Кафедральный собор', 'Замок Бельвер', 'Пальма', 'Сьерра-де-Трамонтана'],
                hotels: [
                    {
                        id: 46,
                        name: 'St. Regis Mardavall Mallorca Resort',
                        price: 780,
                        rating: 4.9,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Эксклюзивный курорт с виллами и люксовыми номерами',
                        amenities: ['3 бассейна', 'Спа', '4 ресторана', 'Пляж'],
                        location: 'Костя-дЭс',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 47,
                        name: 'Cap Rocat',
                        price: 920,
                        rating: 4.9,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Бывшая военная крепость превращенная в роскошный отель',
                        amenities: ['Частный пляж', '2 бассейна', 'Спа', 'Ресторан'],
                        location: 'Кала-Бланка',
                        distance: 'Прямо на море'
                    },
                    {
                        id: 48,
                        name: 'Hotel Son Brull',
                        price: 380,
                        rating: 4.8,
                        reviews: 654,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Монастырь 18 века с современным дизайном и винодельней',
                        amenities: ['Бассейн', 'Спа', 'Ресторан', 'Винодельня'],
                        location: 'Польенса',
                        distance: '5км до моря'
                    },
                    {
                        id: 49,
                        name: 'Castell Son Claret',
                        price: 520,
                        rating: 4.8,
                        reviews: 543,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Замок 19 века в горах Трамонтана',
                        amenities: ['2 бассейна', 'Спа', '2 ресторана', 'Сады'],
                        location: 'Эс-Пла',
                        distance: '15км до моря'
                    },
                    {
                        id: 50,
                        name: 'Hotel Nixe Palace',
                        price: 220,
                        rating: 4.6,
                        reviews: 432,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Классический пляжный отель с видом на залив Пальмы',
                        amenities: ['Бассейн', 'Фитнес', 'Ресторан', 'Бар'],
                        location: 'Пальма-де-Майорка',
                        distance: 'Пляж первой линии'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Греция',
        description: 'Колыбель западной цивилизации с божественными пейзажами',
        image: 'https://images.unsplash.com/photo-1536152470836-b943b246224c?w=800',
        flag: '🇬🇷',
        bestTime: 'Апрель - Июнь, Сентябрь - Октябрь',
        currency: 'Евро (EUR)',
        visa: 'Шенгенская виза',
        cities: [
            {
                id: 11,
                name: 'Санторини',
                description: 'Волшебный остров с белоснежными домами и закатами мечты',
                image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600',
                population: '25,000',
                highlights: ['Ия', 'Красный пляж', 'Вулкан', 'Винодельни', 'Фира'],
                hotels: [
                    {
                        id: 51,
                        name: 'Katikies Hotel Oia',
                        price: 650,
                        rating: 4.9,
                        reviews: 1876,
                        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500',
                        description: 'Легендарный бутик-отель с видами на кальдеру',
                        amenities: ['Частные бассейны', 'Ресторан', 'Спа', 'Трансфер'],
                        location: 'Ия',
                        distance: 'На скале с видом на кальдеру'
                    },
                    {
                        id: 52,
                        name: 'Grace Hotel Santorini',
                        price: 720,
                        rating: 4.9,
                        reviews: 1567,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Роскошный отель с инфинити-бассейнами на краю кальдеры',
                        amenities: ['Инфинити-бассейн', 'Спа', 'Ресторан', 'Бар'],
                        location: 'Имеровигли',
                        distance: 'На краю кальдеры'
                    },
                    {
                        id: 53,
                        name: 'Mystique Hotel',
                        price: 580,
                        rating: 4.8,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Пещерный отель в традиционном кикладском стиле',
                        amenities: ['2 бассейна', 'Спа', '2 ресторана', 'Бар'],
                        location: 'Ия',
                        distance: 'Вид на кальдеру'
                    },
                    {
                        id: 54,
                        name: 'Canaves Oia Hotel',
                        price: 490,
                        rating: 4.8,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Комплекс пещерных домов 17 века с современным дизайном',
                        amenities: ['Бассейн', 'Ресторан', 'Спа', 'Терраса'],
                        location: 'Ия',
                        distance: 'На скале с панорамным видом'
                    },
                    {
                        id: 55,
                        name: 'Chromata Hotel',
                        price: 380,
                        rating: 4.7,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Бутик-отель с одним из лучших видов на закат',
                        amenities: ['Бассейн', 'Ресторан', 'Бар', 'Терраса'],
                        location: 'Имеровигли',
                        distance: 'На краю кальдеры'
                    }
                ]
            },
            {
                id: 12,
                name: 'Афины',
                description: 'Древняя столица с акрополем и богатой историей',
                image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600',
                population: '3.7 млн',
                highlights: ['Акрополь', 'Парфенон', 'Плака', 'Агора', 'Национальный музей'],
                hotels: [
                    {
                        id: 56,
                        name: 'Hotel Grande Bretagne',
                        price: 420,
                        rating: 4.8,
                        reviews: 2289,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Исторический отель с видом на Акрополь и парламент',
                        amenities: ['Крышный бассейн', 'Спа', 'Ресторан', 'Бар'],
                        location: 'Синтагма',
                        distance: 'Центр города'
                    },
                    {
                        id: 57,
                        name: 'King George',
                        price: 380,
                        rating: 4.8,
                        reviews: 1567,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Роскошный отель с мишленовским рестораном на крыше',
                        amenities: ['Ресторан', 'Спа', 'Бар', 'Терраса'],
                        location: 'Синтагма',
                        distance: 'Центр города'
                    },
                    {
                        id: 58,
                        name: 'Electra Metropolis',
                        price: 220,
                        rating: 4.6,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Современный отель с крышным бассейном и видом на Акрополь',
                        amenities: ['Крышный бассейн', 'Ресторан', 'Бар', 'Фитнес'],
                        location: 'Плака',
                        distance: '300м до Акрополя'
                    },
                    {
                        id: 59,
                        name: 'NEW Hotel',
                        price: 180,
                        rating: 4.5,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Дизайнерский отель с современным греческим искусством',
                        amenities: ['Ресторан', 'Бар', 'Фитнес', 'Бесплатный WiFi'],
                        location: 'Синтагма',
                        distance: 'Центр города'
                    },
                    {
                        id: 60,
                        name: 'Perianth Hotel',
                        price: 190,
                        rating: 4.5,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Бутик-отель в здании 1930-х годов в стиле баухаус',
                        amenities: ['Ресторан', 'Бар', 'Фитнес-центр', 'Терраса'],
                        location: 'Псирри',
                        distance: '1км до Акрополя'
                    }
                ]
            },
            {
                id: 13,
                name: 'Крит',
                description: 'Самый большой греческий остров с разнообразными пейзажами',
                image: 'https://images.unsplash.com/photo-1602216056096-3b2ccb2307b5?w=600',
                population: '630,000',
                highlights: ['Кносский дворец', 'Самарийское ущелье', 'Элафониси', 'Ханья'],
                hotels: [
                    {
                        id: 61,
                        name: 'Blue Palace Resort & Spa',
                        price: 320,
                        rating: 4.8,
                        reviews: 1567,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Роскошный курорт на склоне холма с видом на залив',
                        amenities: ['2 бассейна', 'Спа', '3 ресторана', 'Частный пляж'],
                        location: 'Элунда',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 62,
                        name: 'Domes of Elounda',
                        price: 450,
                        rating: 4.9,
                        reviews: 1245,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Дизайнерский курорт с виллами и частными бассейнами',
                        amenities: ['Частные бассейны', 'Спа', 'Ресторан', 'Пляж'],
                        location: 'Элунда',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 63,
                        name: 'Creta Maris Resort',
                        price: 280,
                        rating: 4.7,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Большой курортный комплекс в традиционном критском стиле',
                        amenities: ['7 бассейнов', 'Спа', '6 ресторанов', 'Анимация'],
                        location: 'Херсониссос',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 64,
                        name: 'Amirandes Grecotel',
                        price: 380,
                        rating: 4.8,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Курорт с олимпийским бассейном и средиземноморскими садами',
                        amenities: ['Олимпийский бассейн', 'Спа', '4 ресторана', 'Пляж'],
                        location: 'Гурнес',
                        distance: 'Прямо на пляже'
                    },
                    {
                        id: 65,
                        name: 'Santa Marina Beach Hotel',
                        price: 190,
                        rating: 4.5,
                        reviews: 654,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Семейный отель с зеленой территорией и аквапарком',
                        amenities: ['Аквапарк', 'Бассейн', 'Ресторан', 'Детский клуб'],
                        location: 'Агиос-Николаос',
                        distance: '500м до моря'
                    }
                ]
            },
            {
                id: 14,
                name: 'Миконос',
                description: 'Модный остров с бурной ночной жизнью и ветряными мельницами',
                image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600',
                population: '10,000',
                highlights: ['Маленькая Венеция', 'Ветряные мельницы', 'Парадайз Бич', 'Агиос-Стефанос'],
                hotels: [
                    {
                        id: 66,
                        name: 'Bill & Coo Suites and Lounge',
                        price: 780,
                        rating: 4.9,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Бутик-отель с панорамным видом на залив',
                        amenities: ['Бассейн', 'Ресторан', 'Бар', 'Терраса'],
                        location: 'Мегали-Амос',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 67,
                        name: 'Kivotos Hotel',
                        price: 650,
                        rating: 4.8,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Роскошный отель с частным пляжем и спа-центром',
                        amenities: ['Частный пляж', 'Спа', 'Бассейн', 'Ресторан'],
                        location: 'Орнос',
                        distance: 'Прямо на пляже'
                    },
                    {
                        id: 68,
                        name: 'Mykonos Blu',
                        price: 520,
                        rating: 4.8,
                        reviews: 654,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Курорт в традиционном кикладском стиле на пляже Псиару',
                        amenities: ['2 бассейна', 'Спа', '2 ресторана', 'Пляж'],
                        location: 'Псиару',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 69,
                        name: 'Semeli Hotel',
                        price: 320,
                        rating: 4.7,
                        reviews: 543,
                        image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=500',
                        description: 'Отель в центре города с большим бассейном и садами',
                        amenities: ['Бассейн', 'Ресторан', 'Бар', 'Спа'],
                        location: 'Миконос-таун',
                        distance: '1.5км до моря'
                    },
                    {
                        id: 70,
                        name: 'Andronikos Hotel',
                        price: 280,
                        rating: 4.6,
                        reviews: 432,
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
                        description: 'Современный отель на холме с видом на город и море',
                        amenities: ['Бассейн', 'Ресторан', 'Бар', 'Терраса'],
                        location: 'Миконос-таун',
                        distance: '2км до моря'
                    }
                ]
            },
            {
                id: 15,
                name: 'Родос',
                description: 'Остров рыцарей с средневековым старым городом',
                image: 'https://images.unsplash.com/photo-1597078881056-c31619ed72d8?w=600',
                population: '115,000',
                highlights: ['Старый город', 'Дворец Великих Магистров', 'Линдос', 'Долина бабочек'],
                hotels: [
                    {
                        id: 71,
                        name: 'Atrium Palace Thalasso Spa Resort',
                        price: 290,
                        rating: 4.7,
                        reviews: 987,
                        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
                        description: 'Курорт с талассотерапией на берегу моря',
                        amenities: ['Талассо-спа', '2 бассейна', '3 ресторана', 'Пляж'],
                        location: 'Калитея',
                        distance: 'Прямо на пляже'
                    },
                    {
                        id: 72,
                        name: 'Rodos Park Suites & Spa',
                        price: 220,
                        rating: 4.6,
                        reviews: 765,
                        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
                        description: 'Дизайнерский отель в центре города с крышным бассейном',
                        amenities: ['Крышный бассейн', 'Спа', 'Ресторан', 'Бар'],
                        location: 'Родос',
                        distance: '1.5км до моря'
                    },
                    {
                        id: 73,
                        name: 'Elysium Resort & Spa',
                        price: 380,
                        rating: 4.8,
                        reviews: 654,
                        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
                        description: 'Роскошный курорт с византийской тематикой',
                        amenities: ['3 бассейна', 'Спа', '4 ресторана', 'Аквапарк'],
                        location: 'Калитея',
                        distance: 'Пляж первой линии'
                    },
                    {
                        id: 74,
                        name: 'Lindian Village',
                        price: 320,
                        rating: 4.7,
                        reviews: 543,
                        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500',
                        description: 'Деревня-курорт в традиционном стиле с садами',
                        amenities: ['2 бассейна', 'Спа', '3 ресторана', 'Пляж'],
                        location: 'Линдос',
                        distance: 'Прямо на пляже'
                    },
                    {
                        id: 75,
                        name: 'Amathus Beach Hotel Rhodes',
                        price: 250,
                        rating: 4.6,
                        reviews: 432,
                        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
                        description: 'Пляжный отель с большой территорией и развлечениями',
                        amenities: ['Бассейн', 'Фитнес', 'Ресторан', 'Бар'],
                        location: 'Иксия',
                        distance: 'Пляж первой линии'
                    }
                ]
            }
        ]
    }]