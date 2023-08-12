import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-kids-board',
  templateUrl: './kids-board.component.html',
  styleUrls: ['./kids-board.component.scss']
})

export class KidsBoardComponent implements OnInit{
  @Input() KidName!: string;
  @Input() age!: number;
  @Input() kidInfo!: string;
  @Input() girlOrBoy!: string;
  @Input() stars!: number;
  @Input() imgName!: string;

  backgroundColor:any = '';
  starsArray!:any;
  starsOffArray!:any;
  addHoverClassToLeft:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.girlOrBoy == 'boy' ? this.backgroundColor = '#8AAAE5' : this.backgroundColor = '#F7C5CC';
    this.starsArray = Array(this.stars)
    this.starsOffArray = Array(10 - this.stars)
  }

  toggle() {
   this.addHoverClassToLeft = !this.addHoverClassToLeft
  }

  mouseLeave(){
    if(this.addHoverClassToLeft) {
      this.addHoverClassToLeft = false
    }
  }
}
