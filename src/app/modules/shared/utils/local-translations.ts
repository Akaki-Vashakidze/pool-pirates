const PageTranslations = [
  {
    keyword: "ADMIN.HEADER.TITLE",
    translations: {
      eng: "Admin Panel",
      geo: "ადმინისტრირება"
    }
  },
  {
    keyword: "CAN.STARS",
    translations: {
      eng: "Can collect Starfishes if he/she:",
      geo: "შეუძლიათ მოიპოვონ წყლის ვარსკვლავები თუ:",
      rus: "Может собирать морские звезды, если он/она:"
    }
  },
  {
    keyword: "CAN.SEASHELLS",
    translations: {
      eng: "Can collect Sea Shells if he/she:",
      geo: "შეუძლით მოიპოვონ ნიჟარები თუ:",
      rus: "Может собирать морские ракушки, если он/она:"
    }
  },
  {
    keyword: "CAN.SEAPEARLS",
    translations: {
      eng: "Can collect Sea Pearls if he/she:",
      geo: "შეუძლიათ მოიპოვონ მარგალიტები თუ:",
      rus: "Может собирать морской жемчуг, если он/она:"
    }
  },
  {
    keyword: "LAST.UPDATE",
    translations: {
      eng: "Last update",
      geo: "ბოლო განახლება",
      rus: "последнее обновление"
    }
  },
  {
    keyword: "Kids",
    translations: {
      eng: "Kids",
      geo: "ბავშვები",
      rus: "Дети"
    }
  },
  {
    keyword: "Schedule",
    translations: {
      eng: "Schedule",
      geo: "გრაფიკი",
      rus: "Расписание"
    }
  },
  {
    keyword: "About",
    translations: {
      eng: "About",
      geo: "ჩვენს შესახებ",
      rus: "Информация"
    }
  },
  {
    keyword: "YEARS.OLD",
    translations: {
      eng: "years old kids",
      geo: "წლის ასაკის ბავშვებს",
      rus: "лет дети"
    }
  },
  {
    keyword: "YEARS.OLDER",
    translations: {
      eng: "years and older kids",
      geo: "წლის ასაკის და უფროს ბავშვებს",
      rus: "лет дети и старше"
    }
  },
  {
    keyword: "CHANGE.LANG",
    translations: {
      eng: "change language",
      geo: "ენის შეცვლა",
      rus: "изменить язык"
    }
  },
  {
    keyword: "Search",
    translations: {
      eng: "Search",
      geo: "ძებნა",
      rus: "Поиск"
    }
  },
  {
    keyword: "YEARS",
    translations: {
      eng: "years",
      geo: "წლის",
      rus: "лет"
    }
  },
  {
    keyword: "MORE.INFO",
    translations: {
      eng: "Click to see more info...",
      geo: "დააკლიკეთ მეტი ინფორმაციისთვის..",
      rus: "Нажмите, чтобы увидеть больше информации..."
    }
  },
  {
    keyword: "SEASHELLS",
    translations: {
      eng: "Sea Shells",
      geo: "ნიჟარები",
      rus: "ракушки"
    }
  },
  {
    keyword: "PEARLS",
    translations: {
      eng: "Pearls",
      geo: "მარგალიტი",
      rus: "жемчуг"
    }
  },
  {
    keyword: "STARFISH",
    translations: {
      eng: "Starfish",
      geo: "ზღვის ვარსკვლავი",
      rus: "морская звезда"
    }
  },
];




const Errors = [
  {
    keyword: "TEAM_EXISTS",
    translations: {
      en: "This team name is already taken",
      ge: "გუნდის სახელი უკვე არსებობს. სცადეთ გუნდის შქემნა სხვა სახელით."
    }
  },

]


const LocalTranslations = [...PageTranslations, ...Errors];

export default LocalTranslations;
