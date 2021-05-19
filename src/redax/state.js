let state = {
    contry: {
        A: {
            ITA: {
                value: 1,
                grName: "A",
                name_ru: "Италия",
                metr_ru: "Рим",
                name_en: "Italy ",
                metr: "Rome"
            },
            TRC: {
                value: 1,
                grName: "A",
                name_ru: "Турция",
                metr_ru: "Стамбул",
                name_en: "Turkey",
                metr: "Stambul"
            },
            GB3: {
                value: 150,
                grName: "A",
                name_ru: "Уэльс",
                metr_ru: "Лондон",
                name_en: "United Kingdom",
                metr: "London"
            },
            CHE: {
                value: 1,
                grName: "A",
                name_ru: "Швейцария",
                metr_ru: "Берн",
                name_en: "Switzerland",
                metr: "Bern"
            },
        },
        B: {
             DNK: {
                value: 1,
                grName: "B",
                name_ru: "Дания",
                metr_ru: "Копенгаген",
                name_en: "Denmark ",
                metr: " Copenhagen"
            },
            BEL: {
                value: 1,
                grName: "B",
                name_ru: "Бельгия",
                metr_ru: "Брюссель",
                name_en: "Belgium ",
                metr: "Brussels"
            },
            RUS: {
                value: 1,
                grName: "B",
                name_ru: "Россия",
                metr_ru: "Москва",
                name_en: "Russia ",
                metr: " Moscow"
            },
            FIN: {
                value: 1,
                grName: "B",
                name_ru: "Финляндия",
                metr_ru: "Хельсинки",
                name_en: "Finland ",
                metr: " Helsinki"
            }
        },
        C: {
            AUT: {
                value: 1,
                grName: "C",
                name_ru: "Австрия",
                metr_ru: "Вена",
                name_en: "Austria ",
                metr: "Vienna"
            },
            NLD: {
                value: 110,
                grName: "C",
                name_ru: "Нидерланды",
                metr_ru: "Амстердам",
                name_en: "Netherlands ",
                metr: "Amsterdam"
            },
            MKD: {
                value: 1,
                grName: "C",
                name_ru: "Македония",
                metr_ru: "Скопье",
                name_en: "Macedonia",
                metr: " Skopje"
            },
            UKR: {
                value: 1,
                grName: "C",
                name_ru: "Украина",
                metr_ru: "Киев",
                name_en: "Ukraine",
                metr: " Kiev"
            }
        },
        D: {
            GBR: {
                value: 50,
                grName: "D",
                name_ru: "Англия",
                metr_ru: "Лондон",
                name_en: "United Kingdom",
                metr: "London"
            },
            CZE: {
                value: 1,
                grName: "D",
                name_ru: "Чехия",
                metr_ru: "Прага",
                name_en: "Czech Republic",
                metr: "Prague"
            },
            SVN: {
                value: 1,
                grName: "D",
                name_ru: "Словения",
                metr_ru: "Загреб",
                name_en: "Slovenia",
                metr: "Zagreb"
            },
            GB2: {
                value: 50,
                grName: "D",
                name_ru: "Шотландия",
                metr_ru: "Лондон",
                name_en: "United Kingdom",
                metr: "London"
            }
        },
        E: {
            SWE: {
                value: 1,
                grName: "E",
                name_ru: "Швеция",
                metr_ru: "Стокгольм",
                name_en: "Sweden ",
                metr: "Stockholm"
            },
            POL: {
                value: 20,
                grName: "E",
                name_ru: "Польша",
                metr_ru: "Варшава",
                name_en: "Poland ",
                metr: "Warsaw"
            },
            SVK: {
                value: 1,
                grName: "E",
                name_ru: "Словакия",
                metr_ru: "Братислава",
                name_en: "Slovakia ",
                metr: " Bratislava"
            },
            ESP: {
                value: 1,
                grName: "E",
                name_ru: "Испания",
                metr_ru: "Мадрид",
                name_en: "Spain",
                metr: "Madrid"
            }
        },
        F: {
            DEU: {
                value: 70,
                grName: "F",
                name_ru: "Германия",
                metr_ru: "Берлин",
                name_en: "Germany",
                metr: "Berlin"
            },
            FRA: {
                value: 90,
                grName: "F",
                name_ru: "Франция",
                metr_ru: "Париж",
                name_en: "France ",
                metr: "Paris"
            },
            HUN: {
                value: 40,
                grName: "F",
                name_ru: "Венгрия",
                metr_ru: "Будапешт",
                name_en: "Hungary ",
                metr: "Budapest"
            },
            PRT: {
                value: 16,
                grName: "F",
                name_ru: "Португалия",
                metr_ru: "Лиссабон",
                name_en: "Portugal",
                metr: "Lisbon"
            }
        },
        notgr: {
            EST: {
                value: 0,
                name_ru: "Эстония ",
                metr_ru: "Таллин",
                name_en: "Estonia",
                metr: "Tallinn"
            },
            ALB: {
                value: 0,
                name_ru: "Албания",
                metr_ru: "Тирана",
                name_en: "Albania",
                metr: "Tirana"
            },
            AND: {
                value: 0,
                name_ru: "Андорра",
                metr_ru: "Андорра-ла-Велья",
                name_en: "Andorra ",
                metr: "Andorra la Vella"
            },
            BIH: {
                value: 0,
                name_ru: "Босния и Герцеговина",
                metr_ru: "Сараево",
                name_en: "Bosnia and Herzegovina",
                metr: " Sarajevo"
            },
            VAT: {
                value: 0,
                name_ru: "Ватикан",
                metr_ru: "Ватикан",
                name_en: "Vatican City ",
                metr: " Vatican City"
            },
            GRC: {
                value: 0,
                name_ru: "Греция",
                metr_ru: "Афины",
                name_en: "Greece",
                metr: "Athens"
            },
            ISL: {
                value: 0,
                name_ru: "Исландия",
                metr_ru: "Рейкьявик",
                name_en: "Iceland",
                metr: " Reykjavik"
            },
            NOR: {
                value: 0,
                name_ru: "Норвегия",
                metr_ru: "Осло",
                name_en: "Norway ",
                metr: "Oslo"
            },


            EST: {
                value: 0,
                name_ru: "Эстония ",
                metr_ru: "Таллин",
                name_en: "Estonia",
                metr: "Tallinn"
            },
            ALB: {
                value: 0,
                name_ru: "Албания",
                metr_ru: "Тирана",
                name_en: "Albania",
                metr: "Tirana"
            },
            AND: {
                value: 0,
                name_ru: "Андорра",
                metr_ru: "Андорра-ла-Велья",
                name_en: "Andorra ",
                metr: "Andorra la Vella"
            },
            BIH: {
                value: 0,
                name_ru: "Босния и Герцеговина",
                metr_ru: "Сараево",
                name_en: "Bosnia and Herzegovina",
                metr: " Sarajevo"
            },
            VAT: {
                value: 0,
                name_ru: "Ватикан",
                metr_ru: "Ватикан",
                name_en: "Vatican City ",
                metr: " Vatican City"
            },
            GRC: {
                value: 0,
                name_ru: "Греция",
                metr_ru: "Афины",
                name_en: "Greece",
                metr: "Athens"
            },
            LVA: {
                value: 0,
                name_ru: "Латвия",
                metr_ru: "Рига",
                name_en: "Latvia ",
                metr: "Riga"
            },
            LTU: {
                value: 0,
                name_ru: "Литва",
                metr_ru: "Вильнюс",
                name_en: "Lithuania ",
                metr: "Vilnius"
            },
            IRL: {
                value: 0,
                name_ru: "Ирландия",
                metr_ru: "Дублин",
                name_en: "Ireland",
                metr: " Dublin"
            },
            LIE:  {
                value: 0,
                name_ru: "Лихтенштейн",
                metr_ru: "Вадуц",
                name_en: "Liechtenstein",
                metr: "Vaduz"
            },
            LUX:   {
                value: 0,
                name_ru: "Люксембург",
                metr_ru: "Люксембург",
                name_en: "Luxembourg",
                metr: "Luxembourg"
            },
            MCO:  {
                value: 0,
                name_ru: "Монако",
                metr_ru: "Монако",
                name_en: "Monaco",
                metr: "Monaco"
            },
             BLR:  {
                value: 0,
                name_ru: "Белоруссия",
                metr_ru: "Минск",
                name_en: "Belarus",
                metr: "Minsk"
                },
            BGR: {
                    value: 0,
                    name_ru: "Болгария",
                    metr_ru: "София",
                    name_en: "Bulgaria ",
                    metr: "Sofia"
                },
            
            MDA: {
                    value: 0,
                    name_ru: "Молдавия",
                    metr_ru: "Кишинёв",
                    name_en: "Moldova",
                    metr: "Chisinau"
                },
            MLT: {
                value: 0,
                name_ru: "Мальта",
                metr_ru: "Валлетта",
                name_en: "Malta ",
                metr: " Valletta"
            },

            SMR: {
                value: 0,
                name_ru: "Сан-Марино",
                metr_ru: "Сан-Марино",
                name_en: "San Marino",
                metr: " San Marino"
            },
            SRB: {
                value: 10,
                name_ru: "Сербия",
                metr_ru: "Любляна",
                name_en: "Serbia ",
                metr: "Ljubljana"
            },
            HRV: {
                value: 0,
                name_ru: "Хорватия",
                metr_ru: "Подгорица",
                name_en: "Croatia",
                metr: "Podgorica"
            },
            IRL: {
                value: 0,
                name_ru: "Ирландия",
                metr_ru: "Дублин",
                name_en: "Ireland",
                metr: " Dublin"
            },
            LIE: {
                value: 0,
                name_ru: "Лихтенштейн",
                metr_ru: "Вадуц",
                name_en: "Liechtenstein",
                metr: "Vaduz"
            },
            LUX: {
                value: 0,
                name_ru: "Люксембург",
                metr_ru: "Люксембург",
                name_en: "Luxembourg",
                metr: "Luxembourg"
            },
            MDA: {
                value: 0,
                name_ru: "Молдавия",
                metr_ru: "Кишинёв",
                name_en: "Moldova",
                metr: "Chisinau"
            },
            MCO: {
                value: 0,
                name_ru: "Монако",
                metr_ru: "Монако",
                name_en: "Monaco",
                metr: "Monaco"
            },
            BLR: {
                value: 0,
                name_ru: "Белоруссия",
                metr_ru: "Минск",
                name_en: "Belarus",
                metr: "Minsk"
            },
            ISL: {
                value: 0,
                name_ru: "Исландия",
                metr_ru: "Рейкьявик",
                name_en: "Iceland",
                metr: " Reykjavik"
            },
            ROU: {
                value: 0,
                name_ru: "Румыния",
                metr_ru: "Бухарест",
                name_en: "Romania",
                metr: "Bucharest"
            },
            NOR: {
                value: 0,
                name_ru: "Норвегия",
                metr_ru: "Осло",
                name_en: "Norway ",
                metr: "Oslo"
            },
            LVA: {
                value: 0,
                name_ru: "Латвия",
                metr_ru: "Рига",
                name_en: "Latvia ",
                metr: "Riga"
            },
            LTU: {
                value: 0,
                name_ru: "Литва",
                metr_ru: "Вильнюс",
                name_en: "Lithuania ",
                metr: "Vilnius"
            },
            ROU: {
                value: 0,
                name_ru: "Румыния",
                metr_ru: "Бухарест",
                name_en: "Romania",
                metr: "Bucharest"
            },
            BGR: {
                value: 0,
                name_ru: "Болгария",
                metr_ru: "София",
                name_en: "Bulgaria ",
                metr: "Sofia"
            }
        
        },
         },
    textListCont: {
        footerText: "Поддержи свою команду по стоимости чашки кофе",
        bottomText1: "Как проголосовать",
        bottomText2: "Итоги голосования",
        howToUse: "Для голосования нажми кнопку выбрать  откроется окно для количества  голосов которыми ты поддержишь свою команду. Нажми >  Далее откроется окно для оплаты после оплаты пвои голоса отразятся в Итогах голосования и 40% из суммы перечислится на благотворительный фонд '___'"
    },
    cnt: '123456789'
}
export default state;