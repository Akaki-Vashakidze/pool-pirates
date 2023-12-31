import { Component } from '@angular/core';
import { BaseComponent } from './modules/shared/utils/base.component';
import { TranslationService } from './modules/shared/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  constructor(_tr:TranslationService) {
    super(_tr)
  }
  changeLang(item:any){
    if(item == 'geo') {
      this.setLang('eng')
      return;
    }  
    if(item == 'eng') {
      this.setLang('rus')
      return;
    }  
    if(item = 'rus') {
      this.setLang('geo')
      return;
    } 
  }
  title = 'kidsSwim';
  headerIndex : number = 1;
  header = [
    {
      name:'Kids',
      id:1,
      link:'kids'
    },
    // {
    //   name:'Schedule',
    //   id:3
    // },
    {
      name:'Contact Info',
      id:2,
      link:'contact'
    }
  ]

  headerColor(number:number){
    this.headerIndex = number
  }
}
