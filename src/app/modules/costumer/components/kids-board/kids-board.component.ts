import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TranslationService } from 'src/app/modules/shared/services/translation.service';
import { BaseComponent } from 'src/app/modules/shared/utils/base.component';

@Component({
  selector: 'app-kids-board',
  templateUrl: './kids-board.component.html',
  styleUrls: ['./kids-board.component.scss']
})

export class KidsBoardComponent extends BaseComponent implements OnInit{
  @Input() KidName!: string;
  @Input() age!: number;
  @Input() kidInfo!: string;
  @Input() girlOrBoy!: string;
  @Input() stars!: any;
  @Input() imgName!: string;
  @Input() levelImage!: any;
  @Input() skills!: any;

  backgroundColor:any = '';
  starsArray!:any;
  starsOffArray!:any;
  addHoverClassToLeft:boolean = false;
  constructor(_tr:TranslationService) {
    super(_tr)
   }

  ngOnInit(): void {
    console.log(this.stars)
    this.girlOrBoy == 'boy' ? this.backgroundColor = '#8AAAE5' : this.backgroundColor = '#F7C5CC';
    this.starsArray = Array(this.stars)
    this.starsOffArray = Array(10 - this.stars)
  }

  toggle() {
   this.addHoverClassToLeft = !this.addHoverClassToLeft
  }

  // mouseLeave(){
  //   if(this.addHoverClassToLeft) {
  //     this.addHoverClassToLeft = false
  //   }
  // }
}
