const PageTranslations = [
  {
    keyword: "ADMIN.HEADER.TITLE",
    translations: {
      en: "Admin Panel",
      ge: "ადმინისტრირება"
    }
  },
  {
    keyword: "CAN.STARS",
    translations: {
      en: "Can collect Starfishes if he/she:",
      ge: "შეუძლია მოიპოვოს წყლის ვარსკვლავები თუ:"
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
