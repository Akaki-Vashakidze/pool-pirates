import { Component, OnInit } from '@angular/core';
import { imageList, kidsSkills, skills } from 'src/assets/ENUMS/enums';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  kidsArray = [
    {
      name: 'Heizel',
      age: 9,
      about: "Likes doing bubbles underwater",
      gender: 'girl',
      img: imageList.SEAHORSE,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BUTTERFLY,skills.BUTTERFLYUNDERWATER,skills.FREETURN]
    },
    {
      name: 'Liam',
      age: 7,
      about: "Favorite style is Butterfly kicks",
      gender: 'boy',
      img: imageList.BLUEFISH,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.BUTTERFLY,skills.BUTTERFLYUNDERWATER,skills.FREESTYLE]
    },
    {
      name: 'Dylan',
      age: 7,
      about: "Likes diving",
      gender: 'boy',
      img: imageList.GREENFISH,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BUTTERFLY,skills.BREASTSTROKE]
    },
    {
      name: 'Emran',
      age: 7,
      about: "Likes swimming freestyle",
      gender: 'boy',
      img: imageList.GREENFISH,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BUTTERFLY,skills.BREASTSTROKE]
    },
    {
      name: 'Lucy',
      age: 9,
      about: "Likes doing Butterfly",
      gender: 'girl',
      img: imageList.SEAHORSE,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BUTTERFLY,skills.BUTTERFLYUNDERWATER,skills.FREETURN,skills.HOLD25,skills.LAPS8,skills.LAP30]
    },
    {
      name: 'Olivia',
      age: 10,
      about: "Swims 1 lap of freestyle in 26 seconds",
      gender: 'girl',
      img: imageList.SEAHORSE,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BUTTERFLY,skills.BUTTERFLYUNDERWATER,skills.LAP30,skills.HOLD25,skills.LAPS8]
    },
    {
      name: 'August',
      age: 7,
      about: "Likes swimming Breaststroke",
      gender: 'boy',
      img: imageList.GREENFISH,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BREASTSTROKE]
    },
    {
      name: 'Olivia',
      age: 9,
      about: "Likes freestyle. Does not like backstroke",
      gender: 'girl',
      img: imageList.SEAHORSE,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.BUTTERFLY,skills.HEADDIVE,skills.BUTTERFLYUNDERWATER,skills.HOLD25]
    },
    {
      name: 'Spenser',
      age: 9,
      about: "Likes swimming Breaststroke",
      gender: 'boy',
      img: imageList.GREENFISH,
      skills:[skills.BACKSTROKE,skills.BUTTERFLYUNDERWATER,skills.FREESTYLE,skills.BUTTERFLY,skills.BREASTSTROKE,skills.HOLD25,skills.BUTTERFLYUNDERWATER]
    },
    {
      name: 'Max',
      age: 7,
      about: "Likes doing races",
      gender: 'boy',
      img: imageList.GREENFISH,
      skills:[skills.BACKSTROKE,skills.BUTTERFLYUNDERWATER,skills.FREESTYLE,skills.BUTTERFLY,skills.BREASTSTROKE,skills.BUTTERFLYUNDERWATER,skills.HEADDIVE]
    },
    {
      name: 'Jude',
      age: 5,
      about: "Likes swim without goggles",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.DIVESBOTTOM,kidsSkills.BACKFLOAT,kidsSkills.BREASTSTROKE,kidsSkills.ALONE5,kidsSkills.ACCROSSPOOL,kidsSkills.HEADDIVE]
    },
    {
      name: 'Theo',
      age: 5,
      about: "Likes diving.",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.DIVESBOTTOM,kidsSkills.BACKFLOAT,kidsSkills.BREASTSTROKE,kidsSkills.ALONE5,kidsSkills.ACCROSSPOOL,kidsSkills.HEADDIVE]
    },
    {
      name: 'Dastan',
      age: 5,
      about: "Likes floating on his back",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.BACKFLOAT,kidsSkills.ALONE5,kidsSkills.ACCROSSPOOL]
    },
    {
      name: 'Alex',
      age: 10,
      about: "Likes breaststroke",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.BUTTERFLY,skills.BUTTERFLYUNDERWATER,skills.HOLD25,skills.LAPS8]
    },
    {
      name: 'Isaac',
      age: 6,
      about: "Likes swmming with fins",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.DIVESBOTTOM,kidsSkills.BACKFLOAT,kidsSkills.ALONE5,kidsSkills.ACCROSSPOOL]
    },
    {
      name: 'Elisa',
      age: 4,
      about: "Loves swimming",
      gender: 'girl',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.DIVESBOTTOM,kidsSkills.BACKFLOAT,kidsSkills.ALONE5]
    },
    {
      name: 'Heidi',
      age: 4,
      about: "Likes swimming backstroke",
      gender: 'girl',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.BACKFLOAT,kidsSkills.ALONE5]
    },
    {
      name: 'Emma',
      age: 5,
      about: "Likes jumpin in the pool",
      gender: 'girl',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.BACKFLOAT,kidsSkills.ALONE5,kidsSkills.BREASTSTROKE]
    },
    {
      name: 'Eleonora',
      age: 5,
      about: "Likes doing backstroke",
      gender: 'girl',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.DIVESBOTTOM,kidsSkills.BREASTSTROKE,kidsSkills.BACKFLOAT,kidsSkills.ALONE5,kidsSkills.BACKSTROKE,kidsSkills.ACCROSSPOOL]
    },
    {
      name: 'Leo',
      age: 4,
      about: "Likes floating with noodle",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.ALONE5]
    },
    {
      name: 'Warren',
      age: 5,
      about: "Likes taking toys from the bottom of the pool",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.DIVESBOTTOM,kidsSkills.BACKFLOAT,kidsSkills.BREASTSTROKE,]
    },
    {
      name: 'Jack',
      age: 9,
      about: "Very attentive",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.HEADDIVE,skills.FREESTYLE,skills.BUTTERFLYUNDERWATER,skills.HOLD25]
    },
    {
      name: 'Ernie',
      age: 5,
      about: "Swimming freestile few meters",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.HEADDIVE,kidsSkills.DIVESBOTTOM,kidsSkills.BACKFLOAT,kidsSkills.BREASTSTROKE,]
    },
    {
      name: 'Graham',
      age: 5,
      about: "likes swimming freestile",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.HEADDIVE,kidsSkills.DIVESBOTTOM,kidsSkills.BACKFLOAT,kidsSkills.BREASTSTROKE,]
    },
    {
      name: 'Everan',
      age: 5,
      about: "Swimming freestile few meters",
      gender: 'boy',
      img: imageList.LOBSTER,
      skills:[kidsSkills.JUMP,kidsSkills.ALONE5,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.HEADDIVE,kidsSkills.DIVESBOTTOM,kidsSkills.BACKFLOAT,kidsSkills.BREASTSTROKE,]
    },
    {
      name: 'Bianca',
      age: 7,
      about: "Likes floating on her back",
      gender: 'girl',
      img: imageList.REDFISH,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.BUTTERFLY,skills.BUTTERFLYUNDERWATER,skills.BUTTERFLY]
    },
    {
      name: 'Jud',
      age: 7,
      about: "Likes doing Breaststroke",
      gender: 'boy',
      img: imageList.REDFISH,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.BUTTERFLYUNDERWATER,skills.BUTTERFLY,skills.HEADDIVE,skills.HOLD25]
    },
    {
      name: 'Vihaan',
      age: 9,
      about: "Likes doing Breaststroke",
      gender: 'boy',
      img: imageList.REDFISH,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BUTTERFLYUNDERWATER]
    },
    {
      name: 'Ariella',
      age: 7,
      about: "Likes jumping in the pool",
      gender: 'girl',
      img: imageList.SEAHORSE,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BUTTERFLYUNDERWATER,skills.HOLD25]
    },
    {
      name: 'Evelyn',
      age: 9,
      about: "Can swim Butterfly without fins.",
      gender: 'girl',
      img: imageList.SEAHORSE,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BUTTERFLY,skills.BUTTERFLYUNDERWATER,skills.FREETURN,skills.HOLD25,skills.LAP30]
    },
    {
      name: 'Emran',
      age: 7,
      about: "Likes swimming freestyle",
      gender: 'boy',
      img: imageList.GREENFISH,
      skills:[skills.BACKSTROKE,skills.BREASTSTROKE,skills.FREESTYLE,skills.HEADDIVE,skills.BUTTERFLY,skills.BREASTSTROKE]
    },
    {
      name: 'Addy',
      age: 5,
      about: "Likes swimming breaststroke",
      gender: 'girl',
      img: imageList.SEAHORSE,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.BACKFLOAT,kidsSkills.BREASTSTROKE,kidsSkills.ACCROSSPOOL]
    },
    {
      name: 'Lexi',
      age: 5,
      about: "Likes diving",
      gender: 'girl',
      img: imageList.SEAHORSE,
      skills:[kidsSkills.JUMP,kidsSkills.PUTSHEAD,kidsSkills.HOLDBREATH10,kidsSkills.BACKSTROKE,kidsSkills.BACKFLOAT,kidsSkills.BREASTSTROKE,kidsSkills.ACCROSSPOOL]
    },
  ]
  
  filteredSwimmers!:any;
  placeholder: string = '';

  findSwimmer(event: any) {
    this.filteredSwimmers = this.kidsArray.filter(val => {
      return val.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
  }

  ngOnInit(): void {
    // this.kidsArray.sort((a,b) => b.skills.length - a.skills.length);
    this.filteredSwimmers = this.kidsArray;
    setTimeout(() => {
      this.placeholder = 'Search'
    }, 4000);
  }
}
