import { easySkills, hardskills, middleSkills } from "src/assets/ENUMS/enums";

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
    keyword: "Contact Info",
    translations: {
      eng: "Contact Info",
      geo: "კონტაქტი",
      rus: "Контакт"
    }
  },
  {
    keyword: "NUMBER",
    translations: {
      eng: "Number:",
      geo: "ნომერი:",
      rus: "номер:"
    }
  },
  {
    keyword: "GMAIL",
    translations: {
      eng: "Gmail:",
      geo: "მეილი:",
      rus: "почта:"
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
      geo: "წვება ზურგზე",
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
      geo: "შეუძლია გულაღმა ცურვა",
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


  {
    keyword: middleSkills.KICKS,
    translations: {
      eng: "Can do Freestyle, Butterfly and Backstroke kicking with kickboard",
      geo: "აკეთებს თავისუფალი სტილის, ბატერფლაის და გულაღმა ცურვის ფეხებს",
      rus: "Умеет делать ноги вольным стилем, баттерфляем и на спине на доске."
    }
  },
  {
    keyword: middleSkills.HEADDIVE,
    translations: {
      eng: "Dives in the pool",
      geo: "თავით ხტება წყალში",
      rus: "прыгает в воду с головой"
    }
  },
  {
    keyword: middleSkills.HOLD25,
    translations: {
      eng: "Holds breath more than 20 seconds",
      geo: "შეუძლია სუნთქვის შეკავება 20 წამით",
      rus: "Задерживает дыхание более чем на 20 секунд."
    }
  },
  {
    keyword: middleSkills.FREESTYLE,
    translations: {
      eng: "Swims Freestyle",
      geo: "ცურავს თავისუფალ სტილს(კროლს)",
      rus: "Плавание вольным стилем"
    }
  },
  {
    keyword: middleSkills.FLIPTURN,
    translations: {
      eng: "Can do a flip turn underwater",
      geo: "აკეთებს ბრუნს(სალტოს) წყლის ქვეშ",
      rus: "Может сделать переворот под водой"
    }
  },
  {
    keyword: middleSkills.BREASTKICK,
    translations: {
      eng: "Can do breaststroke kicks",
      geo: "აკეთებს ბრასის ფეხებს",
      rus: "Умею делать ноги брассом"
    }
  },
  {
    keyword: middleSkills.BREASTSTROKE,
    translations: {
      eng: "Swims Breaststroke",
      geo: "ცურავს ბრასს",
      rus: "Плавает брассом"
    }
  },
  {
    keyword: middleSkills.LAP40,
    translations: {
      eng: "Swims one lap(25m) less than 40 seconds(any stroke)",
      geo: "ცურავს 25 მეტრს 40 წამში",
      rus: "Проплывает один бассейн(25 м) менее чем за 40 секунд (любой стиль)"
    }
  },
  {
    keyword: middleSkills.UNDERWATER7,
    translations: {
      eng: "Can swim underwater 7 meters(25 feet)",
      geo: "შეუძლია წყალქვეშ გაცუროს 7 მეტრი",
      rus: "Может плавать под водой 7 метров."
    }
  },


  {
    keyword: hardskills.BACKSTROKE40,
    translations: {
      eng: "Swims Backstroke(25m) less than 35 seconds",
      geo: "ცურავს 25 მეტრ გულაღმა ცურვას 35 წამზე ნაკლებში",
      rus: "Плавает на спине(25 м) менее 35 секунд."
    }
  },
  {
    keyword: hardskills.BREASTSTROKE40,
    translations: {
      eng: "Swims Breaststroke(25m) less than 35 seconds",
      geo: "ცურავს 25 მეტრ ბრასს 35 წამზე ნაკლებში",
      rus: "Плавает брассом(25 м) менее 35 секунд."
    }
  },
  {
    keyword: hardskills.BUTTERFLY,
    translations: {
      eng: "Swims Butterfly",
      geo: "ცურავს ბატერფლაის",
      rus: "Плавает дельфин"
    }
  },
  {
    keyword: hardskills.BUTTERFLYUNDERWATER,
    translations: {
      eng: "Can do underwater Butterfly kicks",
      geo: "შეუძლია გააკეთოს წყალქვეშა ბატერფლაის გასვლა",
      rus: "Умеет ноги баттерфляем под водой."
    }
  },
  {
    keyword: hardskills.FREESTYLE35,
    translations: {
      eng: "Swims Freestyle(25m) less than 32 seconds",
      geo: "ცურავს 25 მეტრ თავისუფალ სტილს 32 წამზე ნაკლებში",
      rus: "Плавает вольным стилем(25 м) менее 32 секунд."
    }
  },
  {
    keyword: hardskills.FREETURN,
    translations: {
      eng: "Can do freestyle flip turn",
      geo: "შეუძლია გააკეთოს თავისუფალი სტილის ბრუნი(სალტო)",
      rus: "Умею делать поворот вольным стилем."
    }
  },
  {
    keyword: hardskills.HEADDIVE,
    translations: {
      eng: "Dives in the pool",
      geo: "თავით ხტება წყალში",
      rus: "прыгает в воду с головой"
    }
  },
  {
    keyword: hardskills.HOLD40,
    translations: {
      eng: "Holds breath more than 30 seconds",
      geo: "შეუძლია სუნთქვის შეკავება 30 წამით",
      rus: "Задерживает дыхание более чем на 30 секунд."
    }
  },
  {
    keyword: hardskills.LAPS8,
    translations: {
      eng: "Can do 8 laps(200m) without brake",
      geo: "შეუძლია გაცუროს 200 მეტრი შეუსვენებლად",
      rus: "Плавает 8 кругов (200 м) без отдых"
    }
  },
  {
    keyword: hardskills.UNDERWATER10,
    translations: {
      eng: "Can swim underwater 10 meters(33 feet)",
      geo: "შეუძლია წყალქვეშ გაცუროს 10 მეტრი",
      rus: "Может плавать под водой 10 метров"
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
