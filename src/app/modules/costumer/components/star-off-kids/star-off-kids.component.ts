import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-off-kids',
  templateUrl: './star-off-kids.component.html',
  styleUrls: ['./star-off-kids.component.scss']
})
export class StarOffKidsComponent implements OnInit {
  @Input() size:any;
  
  ngOnInit(): void {
  }
}
