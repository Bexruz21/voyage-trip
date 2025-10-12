export const regions = [
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
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
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
            image: 'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
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