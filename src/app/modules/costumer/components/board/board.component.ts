import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  kidsArray = [
    {
      name:'Liam Larson',
      age:6,
      about:"5 Years old. Started swimming at the age of 4.",
      gender:'boy',
      stars:5,
      img:'octopus',
    },
    {
      name:'Dylan Aruta',
      age:6,
      about:"5 Years old. Started swimming at the age of 4.",
      gender:'boy',
      stars:5,
      img:'octopus',
    },
    {
      name:'Jude Aruta',
      age:6,
      about:"5 Years old. Started swimming at the age of 4.",
      gender:'boy',
      stars:5,
      img:'octopus',
    },
    {
      name:'Bianca',
      age:6,
      about:"5 Years old. Started swimming at the age of 4.",
      gender:'girl',
      stars:5,
      img:'octopus',
    },
    {
      name:'Heizel',
      age:6,
      about:"5 Years old. Started swimming at the age of 4.",
      gender:'girl',
      stars:5,
      img:'octopus',
    },
  ]
}
