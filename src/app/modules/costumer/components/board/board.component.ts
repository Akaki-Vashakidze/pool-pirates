import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/modules/shared/services/translation.service';
import { BaseComponent } from 'src/app/modules/shared/utils/base.component';
import { imageList, easySkills, middleSkills,hardskills } from 'src/assets/ENUMS/enums';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent extends BaseComponent implements OnInit {
  constructor(_tr:TranslationService) {
    super(_tr)
  }

  kidsArray = [
    {
      name: 'გიო',
      age: 6,
      about: "უყვარს წყალში ხტომა",
      gender: 'boy',
      img: imageList.DOLPHIN2,
      skills:[easySkills.ACCROSSPOOL,easySkills.ALONE5,easySkills.BACKFLOAT,easySkills.FLOATS,easySkills.HOLDBREATH10,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.DIVESBOTTOM]
    },
    {
      name: 'გიორგი',
      age: 10,
      about: "საყვარელი სტილი - თავისუფალი სტილი",
      gender: 'boy',
      img: imageList.PLATE,
      skills:[hardskills.BACKSTROKE40,hardskills.BUTTERFLY,hardskills.BREASTSTROKE40,hardskills.FREESTYLE35,hardskills.HOLD40,hardskills.LAPS8]
    },
    {
      name: 'მაშო',
      age: 9,
      about: "ცურავს ბრასს ძალიან ლამაზად",
      gender: 'boy',
      img: imageList.PINKFISH,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HOLD25,middleSkills.HOLD25,middleSkills.KICKS,middleSkills.UNDERWATER7]
    },
    {
      name: 'ნიკოლოზი',
      age: 14,
      about: "ახლახანს ისწავლა ტივტივი",
      gender: 'boy',
      img: imageList.BLUEMED,
      skills:[]
    },
    {
      name: 'უტა',
      age: 7,
      about: "ცურავს კროლს გვერძე შესუნთქვით",
      gender: 'boy',
      img: imageList.CRABINSHELL,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.KICKS,middleSkills.HOLD25]
    },
    {
      name: 'თოკო',
      age: 6,
      about: "უყვარს წყალში ხტომა",
      gender: 'boy',
      img: imageList.BLUEFISH1,
      skills:[easySkills.ACCROSSPOOL,easySkills.ALONE5,easySkills.DIVESBOTTOM,easySkills.FLOATS,easySkills.HOLDBREATH10,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HEADDIVE]
    },
    {
      name: 'ანდრია',
      age: 7,
      about: "უყვარს სათამაშოების ამოყვანა აუზის ფსკერიდან",
      gender: 'boy',
      img: imageList.YELLOWCRAB,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HOLD25,middleSkills.KICKS,middleSkills.LAP40,middleSkills.UNDERWATER7]
    },
    {
      name: 'გეგა',
      age: 8,
      about: "ცურავს ბატერფლაის... 25 მეტრი კროლი - 40 წამში",
      gender: 'boy',
      img: imageList.WHALE2,
      skills:[middleSkills.BACKSTROKE,middleSkills.FREESTYLE,middleSkills.BREASTKICK,middleSkills.HOLD25,middleSkills.KICKS,middleSkills.HEADDIVE,middleSkills.LAP40]
    },
    {
      name: 'ლუკა',
      age: 12,
      about: "უყვარს წყალში ხტომა",
      gender: 'boy',
      img: imageList.SHARK,
      skills:[hardskills.BACKSTROKE40,hardskills.HEADDIVE,hardskills.HOLD40,hardskills.LAPS8,hardskills.UNDERWATER10,hardskills.BREASTSTROKE40,hardskills.FREESTYLE35]
    },
    {
      name: 'София',
      age: 9,
      about: "любит прыгать в воду",
      gender: 'girl',
      img: imageList.PINKFISH5,
      skills:[middleSkills.BACKSTROKE,middleSkills.FLIPTURN,middleSkills.FREESTYLE,middleSkills.KICKS,middleSkills.UNDERWATER7,middleSkills.HEADDIVE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE]
    },
    {
      name: 'Верия',
      age: 7,
      about: "любит брать игрушки из воды",
      gender: 'girl',
      img: imageList.PINKFISH5,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.KICKS]
    },
    {
      name: 'Hazel',
      age: 10,
      about: "Likes doing bubbles underwater",
      gender: 'girl',
      img: imageList.PIKCRAB,
      skills:[hardskills.BACKSTROKE40,hardskills.BREASTSTROKE40,hardskills.BUTTERFLY, hardskills.BUTTERFLYUNDERWATER, hardskills.FREESTYLE35, hardskills.HEADDIVE,hardskills.LAPS8,hardskills.UNDERWATER10]
    },
    {
      name: 'Liam',
      age: 8,
      about: "Likes doing underwater butterfly kicks",
      gender: 'boy',
      img: imageList.BLUEFISH,
      skills: [middleSkills.BACKSTROKE,middleSkills.BREASTKICK, middleSkills.FREESTYLE,middleSkills.KICKS,middleSkills.UNDERWATER7,middleSkills.HOLD25,middleSkills.BREASTSTROKE,]
    },
    {
      name: 'Dylan',
      age: 8,
      about: "Likes diving",
      gender: 'boy',
      img: imageList.GREENLIGHTFISH,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FLIPTURN,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.HOLD25,middleSkills.KICKS]
    },
    {
      name: 'Imran',
      age: 9,
      about: "Likes to swim freestyle",
      gender: 'boy',
      img: imageList.BLUEWHALE,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HOLD25,middleSkills.KICKS,middleSkills.UNDERWATER7]
    },
    {
      name: 'Lucy',
      age: 10,
      about: "Likes doing Butterfly",
      gender: 'girl',
      img: imageList.CRABINSHELL,  
      skills:[hardskills.BACKSTROKE40,hardskills.BREASTSTROKE40,hardskills.BUTTERFLY,hardskills.BUTTERFLYUNDERWATER,hardskills.FREESTYLE35,hardskills.FREETURN,hardskills.HEADDIVE,hardskills.HOLD40,hardskills.LAPS8,hardskills.UNDERWATER10]
    },
    {
      name: 'Olivia',
      age: 13,
      about: "One lap(25m) freestyle - 26.5 seconds",
      gender: 'girl',
      img: imageList.GRAY,
      skills:[hardskills.BREASTSTROKE40,hardskills.BUTTERFLY,hardskills.BUTTERFLYUNDERWATER,hardskills.FREESTYLE35,hardskills.FREETURN,hardskills.HEADDIVE,hardskills.HOLD40,hardskills.LAPS8,hardskills.UNDERWATER10]
    },
    {
      name: 'August',
      age: 8,
      about: "Likes Breaststroke",
      gender: 'boy',
      img: imageList.PLATE,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.KICKS,middleSkills.UNDERWATER7]
    },
    {
      name: 'Alexsandre',
      age: 11,
      about: "Can do 10 laps of freestyle kicks in a row",
      gender: 'boy',
      img: imageList.GREENFISH5,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.HOLD25,middleSkills.KICKS,middleSkills.UNDERWATER7]
    },   
     {
      name: 'Miriani',
      age: 8,
      about: "Favorite stroke -  breaststroke",
      gender: 'boy',
      img: imageList.BLUEWHALE3,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.KICKS,middleSkills.HOLD25]
    },
    {
      name: 'Olivia',
      age: 10,
      about: "One lap(25m) freestyle - 35.5 seconds",
      gender: 'girl',
      img: imageList.PINK3,
      skills:[hardskills.BACKSTROKE40,hardskills.BREASTSTROKE40,hardskills.BUTTERFLY,hardskills.HEADDIVE,hardskills.HOLD40,hardskills.LAPS8]
    },
    {
      name: 'Olivia',
      age: 9,
      about: "Favorite stroke - Backstroke.",
      gender: 'girl',
      img: imageList.BLUEMED,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.KICKS,middleSkills.UNDERWATER7]
    },
    {
      name: 'Spencer',
      age: 9,
      about: "Likes to swim Breaststroke",
      gender: 'boy',
      img: imageList.PLATE,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.HOLD25,middleSkills.KICKS]
    },
    {
      name: 'Max',
      age: 9,
      about: "Likes doing races",
      gender: 'boy',
      img: imageList.YELLOWCRAB,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.HOLD25,middleSkills.KICKS,middleSkills.UNDERWATER7]
    },
    {
      name: 'Jude',
      age: 6,
      about: "Likes to swim without goggles",
      gender: 'boy',
      img: imageList.YELLOWFISHBLUE,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.DIVESBOTTOM,easySkills.BACKFLOAT,easySkills.ALONE5,easySkills.ACCROSSPOOL,easySkills.HEADDIVE]
    },
    {
      name: 'Theo',
      age: 6,
      about: "Likes to dive",
      gender: 'boy',
      img: imageList.TURTLE,
      skills:[easySkills.FLOATS,easySkills.BACKSTROKE,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.DIVESBOTTOM,easySkills.BACKFLOAT,easySkills.ALONE5,easySkills.ACCROSSPOOL,easySkills.HEADDIVE]
    },
    {
      name: 'Dastan',
      age: 6,
      about: "Likes floating on his back",
      gender: 'boy',
      img: imageList.BLUEMED,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.BACKFLOAT,easySkills.ALONE5,easySkills.ACCROSSPOOL]
    },
    {
      name: 'Alex',
      age: 11,
      about: "Likes breaststroke",
      gender: 'boy',
      img: imageList.SHARK,
      skills:[hardskills.BACKSTROKE40,hardskills.BREASTSTROKE40,hardskills.FREESTYLE35,hardskills.BUTTERFLY,hardskills.BUTTERFLYUNDERWATER,hardskills.UNDERWATER10]
    },
    {
      name: 'Isaac',
      age: 7,
      about: "Likes swimming with fins",
      gender: 'boy',
      img: imageList.GREENFISH4,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.HOLD25,middleSkills.KICKS]
    },
    {
      name: 'Elisa',
      age: 5,
      about: "Loves swimming",
      gender: 'girl',
      img: imageList.YELLOWFISH5,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.DIVESBOTTOM,easySkills.BACKFLOAT,easySkills.ALONE5]
    },
    {
      name: 'Heidi',
      age: 5,
      about: "Likes to swim backstroke",
      gender: 'girl',
      img: imageList.STAFIL,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.BACKFLOAT,easySkills.ALONE5,easySkills.HOLDBREATH10,easySkills.ACCROSSPOOL]
    },
    {
      name: 'Emma',
      age: 6,
      about: "Likes jumping in the pool",
      gender: 'girl',
      img: imageList.PINKFISH,
      skills:[easySkills.FLOATS,easySkills.HEADDIVE,easySkills.BACKSTROKE,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.BACKFLOAT,easySkills.ALONE5,easySkills.DIVESBOTTOM]
    },
    {
      name: 'Eleonora',
      age: 6,
      about: "Likes doing backstroke",
      gender: 'girl',
      img: imageList.OCTOPUTS,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.DIVESBOTTOM,easySkills.BACKFLOAT,easySkills.ALONE5,easySkills.BACKSTROKE,easySkills.ACCROSSPOOL]
    },
    {
      name: 'Leo',
      age: 5,
      about: "Likes to float with swim noodle",
      gender: 'boy',
      img: imageList.YELLOWCRAB,
      skills:[easySkills.JUMP,easySkills.PUTSHEAD,easySkills.ALONE5]
    },
    {
      name: 'Jack',
      age: 6,
      about: "Very attentive.",
      gender: 'boy',
      img: imageList.YELLOWCRAB,
      skills:[easySkills.ACCROSSPOOL,easySkills.ALONE5,easySkills.BACKFLOAT,easySkills.BACKSTROKE,easySkills.DIVESBOTTOM,easySkills.FLOATS,easySkills.HOLDBREATH10,easySkills.JUMP,easySkills.PUTSHEAD]
    },
    {
      name: 'Warren',
      age: 6,
      about: "Likes to take toys from the bottom of the pool",
      gender: 'boy',
      img: imageList.BLUEFISH1,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.DIVESBOTTOM,easySkills.BACKFLOAT,]
    },
    {
      name: 'Quinn',
      age: 5,
      about: "Likes spending time in the pool.",
      gender: 'girl',
      img: imageList.PINKFISH2,
      skills:[easySkills.FLOATS,easySkills.ACCROSSPOOL,easySkills.BACKSTROKE,easySkills.DIVESBOTTOM,easySkills.PUTSHEAD,easySkills.ALONE5,easySkills.BACKFLOAT,easySkills.JUMP,easySkills.HOLDBREATH10,easySkills.HEADDIVE]
    },
    {
      name: 'Holden',
      age: 9,
      about: "Likes spreading on the water",
      gender: 'boy',
      img: imageList.GREENFISH,
      skills:[middleSkills.KICKS,middleSkills.HOLD25,middleSkills.BREASTKICK,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.BACKSTROKE,middleSkills.BREASTSTROKE]
    },
    {
      name: 'Jack',
      age: 10,
      about: "Very attentive",
      gender: 'boy',
      img: imageList.WHALE,
      skills:[hardskills.BACKSTROKE40,hardskills.BREASTSTROKE40,hardskills.FREESTYLE35,hardskills.LAPS8,hardskills.HEADDIVE,hardskills.UNDERWATER10,hardskills.BUTTERFLYUNDERWATER]
    },
    {
      name: 'Ernie',
      age: 6,
      about: "can swim freestyle few meters",
      gender: 'boy',
      img: imageList.WHALE2,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.HEADDIVE,easySkills.DIVESBOTTOM,easySkills.BACKFLOAT]
    },
    {
      name: 'Graham',
      age: 7,
      about: "likes to swim freestyle",
      gender: 'boy',
      img: imageList.SEASTARYELLOW,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.HOLD25,middleSkills.KICKS,middleSkills.UNDERWATER7]
    },
    {
      name: 'Evren',
      age: 6,
      about: "Swimming freestyle few meters",
      gender: 'boy',
      img: imageList.YELLOW,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.ALONE5,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.HEADDIVE,easySkills.DIVESBOTTOM,easySkills.BACKFLOAT]
    },
    {
      name: 'Bianca',
      age: 8,
      about: "Likes floating on her back",
      gender: 'girl',
      img: imageList.GREENLIGHTFISH,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.KICKS,middleSkills.UNDERWATER7,middleSkills.HOLD25]
    },
    {
      name: 'Jud',
      age: 8,
      about: "Likes doing Breaststroke",
      gender: 'boy',
      img: imageList.BLUEFISH6,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.HOLD25,middleSkills.KICKS,middleSkills.UNDERWATER7,middleSkills.LAP40]
    },
    {
      name: 'Julia',
      age: 5,
      about: "Just learned how to hold her breath underwater.",
      gender: 'girl',
      img: imageList.GREENFISH,
      skills:[easySkills.PUTSHEAD]
    },
    {
      name: 'Alex',
      age: 6,
      about: "likes to get toys out of the water",
      gender: 'boy',
      img: imageList.CRAB2,
      skills:[easySkills.FLOATS,easySkills.PUTSHEAD,easySkills.ALONE5,easySkills.HOLDBREATH10,easySkills.DIVESBOTTOM,easySkills.JUMP]
    },
    {
      name: 'Vihaan',
      age: 9,
      about: "Likes doing Breaststroke",
      gender: 'boy',
      img: imageList.REDFISH,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.KICKS,middleSkills.UNDERWATER7,middleSkills.HOLD25]
    },
    {
      name: 'Ben',
      age: 12,
      about: "25m freestyle - 0:26.27, 50m freestyle - 1:01.94",
      gender: 'boy',
      img: imageList.SHARK,
      skills:[hardskills.BACKSTROKE40,hardskills.BREASTSTROKE40,hardskills.FREESTYLE35,hardskills.HEADDIVE,hardskills.BUTTERFLYUNDERWATER,hardskills.UNDERWATER10,hardskills.LAPS8,hardskills.HOLD40]
    },
    {
      name: 'Oliver',
      age: 14,
      about: "25m freestyle - 0:30.64, 25m Breastroke - 0:29.59, 50m Breaststroke - 1:05.19",
      gender: 'boy',
      img: imageList.WHALE2,
      skills:[hardskills.BACKSTROKE40,hardskills.BREASTSTROKE40,hardskills.FREESTYLE35,hardskills.BUTTERFLYUNDERWATER,hardskills.UNDERWATER10,hardskills.LAPS8,hardskills.HOLD40]
    },
    {
      name: 'Ariella',
      age: 6,
      about: "Likes jumping in the pool",
      gender: 'girl',
      img: imageList.SEASTAR,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.KICKS,middleSkills.HOLD25,middleSkills.BREASTSTROKE,middleSkills.UNDERWATER7]
    },
    {
      name: 'Ariella',
      age: 4,
      about: "Likes doing airplane game.",
      gender: 'girl',
      img: imageList.SEASTAR,
      skills:[easySkills.ALONE5,easySkills.BACKFLOAT,easySkills.FLOATS,easySkills.HOLDBREATH10,easySkills.JUMP,easySkills.PUTSHEAD]
    },
    {
      name: 'Evelyn',
      age: 9,
      about: "Can swim Butterfly without fins.",
      gender: 'girl',
      img: imageList.GRAY,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.UNDERWATER7,middleSkills.KICKS,middleSkills.LAP40,middleSkills.HOLD25,middleSkills.FLIPTURN]
    },
    {
      name: 'Addy',
      age: 6,
      about: "Likes to swim breaststroke",
      gender: 'girl',
      img: imageList.GREENFISH,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.BACKFLOAT,easySkills.ACCROSSPOOL]
    },
    {
      name: 'Lexi',
      age: 6,
      about: "Likes diving",
      gender: 'girl',
      img: imageList.SEAHORSE,
      skills:[easySkills.FLOATS,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.HOLDBREATH10,easySkills.BACKSTROKE,easySkills.BACKFLOAT,easySkills.ACCROSSPOOL]
    },
    {
      name: 'Ayden',
      age: 9,
      about: "Likes diving",
      gender: 'boy',
      img: imageList.YELLOWCRAB,
      skills:[middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.KICKS,middleSkills.HOLD25,middleSkills.FREESTYLE,middleSkills.HOLD25,middleSkills.BACKSTROKE,middleSkills.UNDERWATER7]
    },
    {
      name: 'Jonah',
      age: 8,
      about: "Likes to swim backstroke",
      gender: 'boy',
      img: imageList.BLUEWHALE3,
      skills:[middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.KICKS,middleSkills.HOLD25,middleSkills.FREESTYLE,middleSkills.HEADDIVE,middleSkills.UNDERWATER7]
    },
    {
      name: 'Romy',
      age: 6,
      about: "",
      gender: 'girl',
      img: imageList.PINKSEAHORSE,
      skills:[easySkills.ALONE5,easySkills.BACKFLOAT,easySkills.HOLDBREATH10,easySkills.DIVESBOTTOM,easySkills.JUMP,easySkills.PUTSHEAD,easySkills.FLOATS]
    },
    {
      name: 'Emilia',
      age: 8,
      about: "Swims freestyle nice.",
      gender: 'girl',
      img: imageList.PINKSEAHORSE,
      skills:[middleSkills.BACKSTROKE,middleSkills.BREASTKICK,middleSkills.BREASTSTROKE,middleSkills.FREESTYLE,middleSkills.KICKS,middleSkills.HOLD25]
    },
  ]
  
  filteredSwimmers!:any;
  placeholder: string = '';

  findSwimmer(event: any) {
    this.filteredSwimmers = this.kidsArray.filter(val => {
      return val.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
  }

   shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  ngOnInit(): void {
    // this.kidsArray.sort((a,b) => b.skills.length - a.skills.length);
    this.filteredSwimmers = this.shuffle(this.kidsArray)
    setTimeout(() => {
      this.placeholder = 'Search'
    }, 4000);
  }
}
