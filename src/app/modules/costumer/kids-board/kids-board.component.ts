import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-kids-board',
  templateUrl: './kids-board.component.html',
  styleUrls: ['./kids-board.component.scss']
})

export class KidsBoardComponent {
  @Input() KidName!: string;
  @Input() HeaderBelow!: string;
  @Input() kideInfo!: string;
  @Input() girlOrBoy!: string;
  addHoverClassToLeft:boolean = false;
  constructor() { }

  toggle() {
   this.addHoverClassToLeft = !this.addHoverClassToLeft
  }

  mouseLeave(){
    if(this.addHoverClassToLeft) {
      this.addHoverClassToLeft = false
    }
  }
}
