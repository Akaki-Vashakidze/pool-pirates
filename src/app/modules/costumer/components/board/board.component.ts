import { Component, OnInit } from '@angular/core';
import { imageList } from 'src/assets/ENUMS/enums';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  kidsArray = [
    {
      name: 'Liam Larson',
      age: 6,
      about: "5 Years old. Started swimming at the age of 4.",
      gender: 'boy',
      stars: 5,
      img: imageList.BLUEFISH,
    },
    {
      name: 'Dylan Aruta',
      age: 6,
      about: "5 Years old. Started swimming at the age of 4.",
      gender: 'boy',
      stars: 5,
      img: imageList.GREENFISH,
    },
    {
      name: 'Jude Aruta',
      age: 6,
      about: "5 Years old. Started swimming at the age of 4.",
      gender: 'boy',
      stars: 5,
      img: imageList.LOBSTER,
    },
    {
      name: 'Bianca',
      age: 6,
      about: "5 Years old. Started swimming at the age of 4.",
      gender: 'girl',
      stars: 5,
      img: imageList.REDFISH,
    },
    {
      name: 'Heizel',
      age: 6,
      about: "5 Years old. Started swimming at the age of 4.",
      gender: 'girl',
      stars: 5,
      img: imageList.SEAHORSE,
    },
  ]
  filteredSwimmers = this.kidsArray;
  placeholder: string = '';
  findSwimmer(event: any) {
    this.filteredSwimmers = this.kidsArray.filter(val => {
      return val.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.placeholder = 'Search'
    }, 4000);
  }
}
