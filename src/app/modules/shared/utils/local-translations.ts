import { easySkills } from "src/assets/ENUMS/enums";

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

  {
    keyword: easySkills.ACCROSSPOOL,
    translations: {
      eng: "Swims across the pool",
      geo: "ცურავს ერთ აუზს შეუსვენებლად",
      rus: "плавает один бассейн без отдыха"
    }
  },

  {
    keyword: easySkills.DIVESBOTTOM,
    translations: {
      eng: "Swims to the bottom(1.5m)",
      geo: "ყვინთავს ფსკერამდე(1.5მ)",
      rus: "ныряет на дно (1,5м)"
    }
  },
  {
    keyword: easySkills.HOLDBREATH10,
    translations: {
      eng: "Holds breath more than 10 seconds",
      geo: "იკავებს სუნთქვას 10 წამით",
      rus: "Задерживает дыхание на 10 секунд"
    }
  },
  {
    keyword: easySkills.JUMP,
    translations: {
      eng: "Jumps in the water",
      geo: "ხტება აუზში",
      rus: "Прыгает в воду"
    }
  },
  {
    keyword: easySkills.PUTSHEAD,
    translations: {
      eng: "Puts head underwater",
      geo: "შეუძლია ყვინთვა",
      rus: "может нырять"
    }
  },
  {
    keyword: easySkills.FLOATS,
    translations: {
      eng: "Can float for 10 seconds",
      geo: "ტივტივებს 10 წამის განმავლობაში",
      rus: "Может плавать в течение 10 секунд."
    }
  },
  {
    keyword: easySkills.BACKFLOAT,
    translations: {
      eng: "Lies on back and floats",
      geo: "ზურგზე დაწოლა და ტივტივი",
      rus: "Лежит на спине и плавает"
    }
  },
  {
    keyword: easySkills.ALONE5,
    translations: {
      eng: "Swims 5-7 meters alone",
      geo: "ცურავს 5-7 მეტრს დამოუკიდებლად",
      rus: "Плавает 5-7 метров в одиночку."
    }
  },
  {
    keyword: easySkills.BACKSTROKE,
    translations: {
      eng: "Swims Backstroke",
      geo: "შეიძლია გულაღმა ცურვა",
      rus: "Плавает на спине"
    }
  },
  {
    keyword: easySkills.HEADDIVE,
    translations: {
      eng: "Dives in the pool",
      geo: "თავით ხტება წყალში",
      rus: "прыгает в воду с головой"
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
